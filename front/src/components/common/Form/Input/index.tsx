import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../hooks/storeHooks';

import style from './Input.module.scss';

type InputPropsType = {
  id: string;
  placeholder: string | null;
  handlerNameStandart: (value: string) => void
};

const Input = ({
  id, placeholder, handlerNameStandart
}: InputPropsType) => {
  // eslint-disable-next-line no-useless-escape
  const [currentValue, setCurrentValue] = useState('');
  const [valid, setValid] = useState(true);
  const [erMessage, setErMessage] = useState('');

  const dispatch = useAppDispatch();

  const handler = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentValue(event.target.value);
  };

  useEffect(() => {
    if (currentValue) {
      handlerNameStandart(currentValue);
    }
  }, [currentValue]);

  return (
    <label className={style.wrapper} htmlFor={id}>
      <input id={id} onChange={handler} type="text" className={!valid ? style.notValid : ''} />
      <span>{placeholder}</span>
    </label>
  );
};

export default Input;
