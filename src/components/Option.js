import React from 'react';
import ReactDOM from 'react-dom';

const Option = (props) => {
  return (
    <div>
      <p>{props.optionText}</p>
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText)
        }}
      >
        remove
      </button>
    </div>
  );
}

export default Option;
