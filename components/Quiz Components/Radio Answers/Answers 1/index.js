import React from 'react';
import Radio from '@/components/Radio';

const options = [
  { label: 'Car', value: 'option1' },
  { label: 'Public Transit', value: 'option2' },
  { label: 'Walking', value: 'option3' },
  { label: 'Biking', value: 'option4' }, // Added fourth option
];

const Answers1 = () => {
  const handleOptionSelect = (value) => {
    // Handle selected option logic if needed
  };

  return (
    <div tabIndex="2">
      <Radio options={options} onSelect={handleOptionSelect} />
    </div>
  );
};

export default Answers1;
