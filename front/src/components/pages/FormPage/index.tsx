import React, { useEffect, useState } from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import Select from '../../common/Form/Input/Select';

type FormPagePropsTypes = {
  designers?: any[],
  handlerNameStandart: (value: string) => void;
  designerName: (num: number) => void;
  handlerButton: () => void;
}

const FormPage = (props: FormPagePropsTypes) => {
  const { designers, handlerNameStandart, designerName, handlerButton } = props;
  const [currentDesigners, setCurrentDesigners] = useState<any[]>();

  useEffect(() => {
    if (designers) {
      setCurrentDesigners(designers);
    }
  }, [designers]);

  return (
    <Form title="Форма заявки">
      <Select title="Выберите ФИО" designers={currentDesigners} handlerFullName={designerName} resetSelection={false} changeReset={() => null} />
      <Input handlerNameStandart={handlerNameStandart} id="1" placeholder="Введите название" />
      <Button title="Отправить" handler={handlerButton} />
    </Form>
  );
};

export default FormPage;
