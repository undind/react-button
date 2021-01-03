import './_style.scss';
import * as React from 'react';

interface Props {
  text: string;
  onClick: () => void;
}

const ReactInput = ({ text, onClick }: Props) => {
  return (
    <button className='btn' onClick={onClick}>
      {text}
    </button>
  );
};

export default ReactInput;
