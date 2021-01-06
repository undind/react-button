import './_style.scss';
import * as React from 'react';
import classNames from 'classnames';

export interface Props {
  text: string;
  classString?: string;
  onClick: (e: any) => void;
}

const Button = ({ text, classString, onClick }: Props) => {
  return (
    <button
      className={classNames('btn', `${classString}`)}
      onClick={(e: any) => onClick(e)}
    >
      {text}
    </button>
  );
};

export default Button;
