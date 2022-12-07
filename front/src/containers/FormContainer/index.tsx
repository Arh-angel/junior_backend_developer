/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import FormPage from '../../components/pages/FormPage';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { clearError, createStandart, selectError } from '../../store/slice/standartSlice/standartSlice';

type FormContainerPropsTypes = {
  designers?: any[]
}

const FormContainer = (props: FormContainerPropsTypes) => {
  const { designers } = props;
  const [currentDesigners, setCurrentDesigners] = useState<any[]>();
  const [designer, setDesigner] = useState<number>();
  const [title, setTitle] = useState<string>('');
  const [send, setSend] = useState<boolean>(false);

  const currentError = useAppSelector(selectError);

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
    dispatch(clearError());

    if (designer) {
      dispatch(createStandart({ designer, title }));
      setSend(true);
    }

    setTimeout(() => setSend(false), 1000);
  };

  return (
    <FormPage send={send} designers={currentDesigners} designerName={handlerFullName} handlerNameStandart={handlerNameStandart} handlerButton={handlerButton} textError={currentError} />
  );
};

export default FormContainer;
