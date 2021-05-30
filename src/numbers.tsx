import React, { useState } from "react";

interface INumberProps {
  initValue: number;
}

const Numbers = (props: INumberProps) => {
  const [value, setValue] = useState(props.initValue);

  return (
    <div>
      Number is {value}
      <div>
        <button
          onClick={() => {
            setValue(value + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setValue(value - 1);
          }}
        >
          -
        </button>
      </div>
    </div>
  );
};


export default Numbers;
