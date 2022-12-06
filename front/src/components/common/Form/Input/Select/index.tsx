/* eslint-disable react/jsx-indent */
import React, { ChangeEvent, useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../../hooks/storeHooks';
import Button from '../../../Button';

import style from './Select.module.scss';

type SelectPropsType = {
  title: string;
  resetSelection: boolean;
  changeReset: () => void;
  adValue: number
}

const Select = (props: SelectPropsType) => {
  const { title, resetSelection, changeReset, adValue } = props;

  const [currentValue, setCurrentValue] = useState<number>(1);
  const [stringCurrentValue, setStringCurrentValue] = useState<string>('Автомобили');
  const [openSelect, setOpenSelect] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(addCategoryAd(currentValue));
  }, [currentValue]);

  const handlerCurrentValue = (value: number) => {
    changeReset();
    setCurrentValue(value);
    setOpenSelect(!openSelect);

    if (value === 1) {
      setStringCurrentValue('Автомобили');
    } else if (value === 2) {
      setStringCurrentValue('Аксессуары');
    } else if (value === 3) {
      setStringCurrentValue('Одежда');
    } else if (value === 4) {
      setStringCurrentValue('Мебель');
    } else if (value === 5) {
      setStringCurrentValue('Спорт');
    } else if (value === 6) {
      setStringCurrentValue('Техника');
    } else if (value === 7) {
      setStringCurrentValue('Товары для дома');
    }
  };

  useEffect(() => {
    if (adValue) {
      handlerCurrentValue(adValue);
      setOpenSelect(false);
    }
  }, [adValue]);

  const handlerOpenSelect = () => {
    setOpenSelect(!openSelect);
  };

  useEffect(() => {
    if (resetSelection) {
      setCurrentValue(1);
    }
  }, [resetSelection]);

  return (
    <div className={style.container}>
      <p>{title}</p>
      <Button
        title={stringCurrentValue}
        handler={handlerOpenSelect}
        width="100%"
        height="64px"
        background="rgba(42, 47, 55, 0.02)"
        textColor="#2A2F37"
        fontSize="16px"
        fontWeight="400"
        borderRadius="4px"
        icon={<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>} />
      {openSelect ? <ul className={style.select}>
        <li role="presentation" onClick={() => handlerCurrentValue(1)} aria-hidden="true">Автомобили</li>
        <li role="presentation" onClick={() => handlerCurrentValue(2)} aria-hidden="true">Аксессуары</li>
        <li role="presentation" onClick={() => handlerCurrentValue(3)} aria-hidden="true">Одежда</li>
        <li role="presentation" onClick={() => handlerCurrentValue(4)} aria-hidden="true">Мебель</li>
        <li role="presentation" onClick={() => handlerCurrentValue(5)} aria-hidden="true">Спорт</li>
        <li role="presentation" onClick={() => handlerCurrentValue(6)} aria-hidden="true">Техника</li>
        <li role="presentation" onClick={() => handlerCurrentValue(7)} aria-hidden="true">Товары для дома</li>
                    </ul> : ''}
    </div>
  );
};

export default Select;
