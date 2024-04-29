import { useState } from 'react';
import styles from "./Slider.module.css"

const SliderComponent = ({ onChange }) => {
  const [value, setValue] = useState(0); // State to hold the value of the slider

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value);
    setValue(newValue); // Update the value as the slider moves
    onChange(newValue); // Call the passed onChange function with the new value
  };

  const kilometers = Math.round((value / 100) * 800);

  const gradientBackground = `linear-gradient(to right, #0BAA81 0%, #0BAA81 ${value}%, var(--french-gray, #c9cad9) ${value}%, var(--french-gray, #c9cad9) 100%)`;

  return (
    <div className={styles.outerSliderContainer} tabIndex={0}>
      <div className={styles.sliderContainer} style={{ background: gradientBackground }}>
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={handleChange}
          className={styles.slider}
        />
      </div>
      <div className={styles.sliderValue}>{kilometers}km</div>
    </div>
  );
};

export default SliderComponent;
