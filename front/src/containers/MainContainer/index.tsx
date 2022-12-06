import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/storeHooks';
import { getDesigners, selectDesigner } from '../../store/slice/designerSlice/designerSlice';
import { getStandart, selectStandarts } from '../../store/slice/standartSlice/standartSlice';
import FormContainer from '../FormContainer';
import TableContainer from '../TableContainer';

const MainContainer = () => {
  const [currentData, setCurrentData] = useState<any[]>();
  const [currentDesigners, setCurrentDesigners] = useState<any[]>();
  const standarts = useAppSelector(selectStandarts);
  const designers = useAppSelector(selectDesigner);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getStandart(''));
    dispatch(getDesigners(''));
  }, []);

  useEffect(() => {
    if (standarts) {
      setCurrentData(standarts);
    }
  }, [standarts]);

  useEffect(() => {
    if (designers) {
      setCurrentDesigners(designers);
    }
  }, [designers]);

  return (
    <>
      <FormContainer designers={currentDesigners} />
      <TableContainer data={currentData} />
    </>
  );
};

export default MainContainer;
