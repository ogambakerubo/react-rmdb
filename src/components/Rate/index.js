import React, { useState } from 'react';

// Styles
import { Wrapper } from './Rate.styles';

const Rate = ({ callback }) => {
  const [value, setValue] = useState(5);

  const handlerRate = (e) => {
    setValue(e.currentTarget.value);
  };

  return (
    <Wrapper>
      <input
        type="range"
        step="0.5"
        min="1"
        max="10"
        value={value}
        onChange={handlerRate}
      />
      {value}
      <p>
        <button onClick={() => callback(value)}>Rate</button>
      </p>
    </Wrapper>
  );
};

export default Rate;
