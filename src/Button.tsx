import './_style.scss';
import React, { useState } from 'react';
import classNames from 'classnames';

export interface Props {
  text: string;
  classString?: string;
  onClick: (e: any) => void;
}

const Button = ({ text, classString, onClick }: Props) => {
  const [state, setState] = useState(text);
  return (
    <button
      className={classNames('btn', `${classString}`)}
      onClick={(e: any) => {
        setState('test');
        onClick(e);
      }}
    >
      {state}
    </button>
  );
};

export default Button;
