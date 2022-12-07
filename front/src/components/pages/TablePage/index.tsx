/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useState } from 'react';
import style from './TablePage.module.scss';

type TablePagePropsTypes = {
  data?: any[]
}

const TablePage = (props: TablePagePropsTypes) => {
  const { data } = props;
  const [currentData, setCurrentData] = useState<any[]>();

  useEffect(() => {
    if (data) {
      setCurrentData(data);
    }
  }, [data]);

  return (
    <div className={style.container}>
      <h1 className={style.title}>Сводная таблица</h1>
      <div className={style.tableHeader}>
        <p className={style.nameColumn}>Наименование документа</p>
        <p className={style.nameColumn}>Количество заявок</p>
      </div>
      <ul className={style.list}>
        {currentData?.map((el, item) => <li key={item} className={style.item}>
          <p className={style.text}>{el.title}</p>
          <p className={style.text}>{el.count}</p>
        </li>)}
      </ul>
    </div>
  );
};

export default TablePage;
