import React from 'react';
import Radio from '@/components/Radio';

const options = [
  { label: 'Walking', value: 'option1' },
  { label: 'Biking', value: 'option2' },
  { label: 'Public Transit', value: 'option3' },
  { label: 'Car', value: 'option4' },
];

const Answers1 = ({ onOptionChange }) => {
  const handleOptionSelect = (value) => {
    console.log("Option selected: ", value);  
    onOptionChange(value);  
  };

  return (
    <div tabIndex="2">
      <Radio options={options} onSelect={handleOptionSelect} />
    </div>
  );
};

export default Answers1;
