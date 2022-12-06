/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import FormPage from '../../components/pages/FormPage';
import { useAppDispatch } from '../../hooks/storeHooks';
import { createStandart } from '../../store/slice/standartSlice/standartSlice';

type FormContainerPropsTypes = {
  designers?: any[]
}

const FormContainer = (props: FormContainerPropsTypes) => {
  const { designers } = props;
  const [currentDesigners, setCurrentDesigners] = useState<any[]>();
  const [designer, setDesigner] = useState<number>();
  const [title, setTitle] = useState<string>('');

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (designers) {
      setCurrentDesigners(designers);
    }
  }, [designers]);

  const handlerFullName = (num: number) => {
    setDesigner(num);
  };

  const handlerNameStandart = (value: string) => {
    setTitle(value);
  };

  const handlerButton = () => {
    console.log(designer);
    console.log(title);

    if (designer) {
      dispatch(createStandart({ designer, title }));
    }
  };

  return (
    <FormPage designers={currentDesigners} designerName={handlerFullName} handlerNameStandart={handlerNameStandart} handlerButton={handlerButton} />
  );
};

export default FormContainer;
