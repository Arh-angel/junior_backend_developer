import React, { useState } from 'react';
import style from './TablePage.module.scss';

const TablePage = () => {
  const [data, setData] = useState();

  return (
    <div className={style.container}>
      <h1 className={style.title}>Список заявок</h1>
      <ul className={style.list}>
        {/* {data?.map((el) => <li className={style.item}>
          <p className={style.title}>{el.title}</p>
          <p className={style.number}>{el.count}</p>
        </li>)} */}
      </ul>
    </div>
  );
};

export default TablePage;
