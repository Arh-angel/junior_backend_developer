import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import Select from '../../common/Form/Input/Select';
import style from './FormPage.module.scss';

type FormPagePropsTypes = {
  designers?: any[],
  handlerNameStandart: (value: string) => void;
  designerName: (num: number) => void;
  handlerButton: () => void;
  textError: string;
  send: boolean
}

const FormPage = (props: FormPagePropsTypes) => {
  const { designers, handlerNameStandart, designerName, handlerButton, textError, send } = props;
  const [currentDesigners, setCurrentDesigners] = useState<any[]>();

  useEffect(() => {
    if (designers) {
      setCurrentDesigners(designers);
    }
  }, [designers]);

  return (
    <Form title="Форма для заявки">
      <Select send={send} title="Выберите ФИО" designers={currentDesigners} handlerFullName={designerName} changeReset={() => null} />
      <Input send={send} handlerNameStandart={handlerNameStandart} id="1" placeholder="Наименование документа" />
      <Button title="Отправить" handler={handlerButton} />
      <p className={style.errorText}>{textError}</p>
    </Form>
  );
};

export default FormPage;
