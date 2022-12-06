import React from 'react';
import Button from '../../common/Button';
import Form from '../../common/Form';
import Input from '../../common/Form/Input';
import Select from '../../common/Form/Input/Select';

const FormPage = () => {
  console.log('FormPage');

  return (
    <Form title="Форма заявки">
      <Select title="Выберите ФИО" resetSelection={false} changeReset={() => null} adValue={0} />
      <Input id="1" placeholder="Введите название" />
      <Button title="Отправить" handler={() => null} />
    </Form>
  );
};

export default FormPage;
