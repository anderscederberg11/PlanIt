import React from 'react';
import Radio from '@/components/Radio';

const options = [
  { label: 'Never', value: 'option1' },
  { label: 'Rarely', value: 'option2' },
  { label: 'Occasionally', value: 'option3' },
  { label: 'Often', value: 'option4' }
];

const Answers4 = ({ onOptionChange }) => {  
  const handleOptionSelect = (value) => {
    onOptionChange(value);  
  };

  return (
    <div>
      <Radio options={options} onSelect={handleOptionSelect} />
    </div>
  );
};

export default Answers4;
