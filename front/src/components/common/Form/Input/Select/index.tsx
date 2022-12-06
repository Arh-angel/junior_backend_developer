/* eslint-disable react/jsx-indent */
import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../../../../hooks/storeHooks';
import Button from '../../../Button';

import style from './Select.module.scss';

type SelectPropsType = {
  title: string;
  designers?: any[];
  handlerFullName: (num: number) => void;
  resetSelection: boolean;
  changeReset: () => void;
}

const Select = (props: SelectPropsType) => {
  const { title, designers, handlerFullName, resetSelection, changeReset } = props;

  const [stringCurrentValue, setStringCurrentValue] = useState<string>('ФИО');
  const [openSelect, setOpenSelect] = useState(false);
  const [currentDesigners, setCurrentDesigners] = useState<any[]>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (designers) {
      setCurrentDesigners(designers);
    }
  }, [designers]);

  const handlerCurrentValue = (value: string, num: number) => {
    changeReset();
    setOpenSelect(!openSelect);
    setStringCurrentValue(value);
    handlerFullName(num);
  };

  const handlerOpenSelect = () => {
    setOpenSelect(!openSelect);
  };

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
        icon={<svg style={openSelect ? { transform: 'rotate(180deg)' } : {}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="#2A2F37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>} />
      {openSelect ? <ul className={style.select}>
{currentDesigners?.map((el) => <li key={el.designer_id} role="presentation" onClick={() => (handlerCurrentValue(el.designer_name, el.designer_id))} aria-hidden="true">{el.designer_name}</li>)}
                    </ul> : ''}
    </div>
  );
};

export default Select;
