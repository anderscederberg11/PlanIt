import React from 'react';
import Radio from '@/components/Radio';

const options = [
  { label: 'Yes', value: 'option1' },
  { label: 'Occasionally', value: 'option2' },
  { label: 'Rarely', value: 'option3' },
  { label: 'Not at all', value: 'option4' }, // Added fourth option
];

const Answers5 = ({ customRadioStyle }) => {
  const handleOptionSelect = (value) => {
    // Handle selected option logic if needed
  };

  return (
    <div>
      <Radio options={options} onSelect={handleOptionSelect} customRadioStyle={customRadioStyle} />
    </div>
  );
};

export default Answers5;
