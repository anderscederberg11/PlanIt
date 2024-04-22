import React from 'react';
import Radio from '@/components/Radio';

const options = [
  { label: 'Never', value: 'option1' },
  { label: 'Rarely', value: 'option2' },
  { label: 'Occasionally', value: 'option3' },
  { label: 'Often', value: 'option4' }, // Added fourth option
];

const Answers4 = () => {
  const handleOptionSelect = (value) => {
    // Handle selected option logic if needed
  };

  return (
    <div>
      <Radio options={options} onSelect={handleOptionSelect} />
    </div>
  );
};

export default Answers4;
