import React, { ChangeEvent, useEffect, useState } from 'react';

import style from './Input.module.scss';

type InputPropsType = {
  id: string;
  placeholder: string | null;
  handlerNameStandart: (value: string) => void;
  send: boolean
};

const Input = ({
  id, placeholder, handlerNameStandart, send
}: InputPropsType) => {
  // eslint-disable-next-line no-useless-escape
  const [currentValue, setCurrentValue] = useState('');

  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  useEffect(() => {
    if (currentValue) {
      handlerNameStandart(currentValue.toLocaleLowerCase().split(' ').join(''));
    }
  }, [currentValue]);

  useEffect(() => {
    if (send) {
      setCurrentValue('');
    }
  }, [send]);

  return (
    <label className={style.wrapper} htmlFor={id}>
      <input value={currentValue} id={id} onChange={handler} type="text" />
      <span>{placeholder}</span>
    </label>
  );
};

export default Input;
