import './_style.scss';
import * as React from 'react';

interface Props {
  text: string;
  onClick: (e: any) => void;
  
}

const ReactInput = ({ text, onClick }: Props) => {
  return (
    <button className='btn' onClick={(e: any) => onClick(e)}>
      {text}
    </button>
  );
};

export default ReactInput;
