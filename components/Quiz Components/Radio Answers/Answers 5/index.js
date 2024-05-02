import React from 'react';
import Radio from '@/components/Radio';

const options = [
  { label: 'Yes', value: 'option1' },
  { label: 'Occasionally', value: 'option2' },
  { label: 'Rarely', value: 'option3' },
  { label: 'Not at all', value: 'option4' }
];

const Answers5 = ({ customRadioStyle, onOptionChange }) => {
  const handleOptionSelect = (value) => {
    onOptionChange(value); 
  };

  return (
    <div>
      <Radio options={options} onSelect={handleOptionSelect} customRadioStyle={customRadioStyle} />
    </div>
  );
};

export default Answers5;
