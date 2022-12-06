import { type } from 'os';
import React, { useEffect, useState } from 'react';
import TablePage from '../../components/pages/TablePage';

type TableContainerPropsTypes = {
  data?: any[]
}

const TableContainer = (props: TableContainerPropsTypes) => {
  const { data } = props;
  const [currentData, setCurrentData] = useState<any[]>();

  useEffect(() => {
    if (data) {
      setCurrentData(data);
    }
  }, [data]);

  return (
    <TablePage data={currentData} />
  );
};

export default TableContainer;
