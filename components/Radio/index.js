import React, { useState } from 'react';
import styles from "./Radio.module.css";

const Radio = ({ options, onSelect, customRadioStyle }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <div className={`${styles.radioContainer}`} style={customRadioStyle}>
      {options && options.map((option) => (
        <div key={option.value} className={styles.rowContainer}>
          <input
            type="radio"
            id={option.value}
            name="dynamicRadio"
            value={option.value}
            checked={selectedOption === option.value}
            onChange={handleOptionChange}
            style={{ display: 'none'}}
          />
          <label htmlFor={option.value} className={styles.optionContainer}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" stroke="#F2F5EA"/>
              </g>
              {selectedOption === option.value && (
                <g>
                  <rect x="0.5" y="0.5" width="31" height="31" rx="15.5" fill="#F2F5EA" stroke="#F2F5EA"/>
                  <path fillRule="evenodd" clipRule="evenodd" d="M26.2678 9.23223C27.2441 10.2085 27.2441 11.7915 26.2678 12.7678L15.7678 23.2678C14.7915 24.2441 13.2085 24.2441 12.2322 23.2678L6.23223 17.2678C5.25592 16.2915 5.25592 14.7085 6.23223 13.7322C7.20854 12.7559 8.79146 12.7559 9.76777 13.7322L14 17.9645L22.7322 9.23223C23.7085 8.25592 25.2915 8.25592 26.2678 9.23223Z" fill="#0BAA81"/>
                </g>
              )}
            </svg>
            <span className={styles.optionText}>{option.label}</span>
          </label>
        </div>
      ))}
    </div>
  );
};

export default Radio;
