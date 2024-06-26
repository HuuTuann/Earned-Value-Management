"use client";

import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DataGrid from "@/components/earned-value-management/data-grid";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppDispatch, RootState } from "@/state/store";
import {
  setCumulativePlanedSlice,
  setCumulativeEarnedSlice,
  setCumulativeActualSlice,
} from "@/state/cumulative";
import {
  setDataPlanedSlice,
  setDataEarnedSlice,
  setDataActualSlice,
} from "@/state/data";
import { createSelector } from "@reduxjs/toolkit";

const ValueInput = () => {
  const dispatch = useDispatch<AppDispatch>();

  const selectDataPlaned = (state: RootState) => state.dataPlaned.data;
  const selectDataEarned = (state: RootState) => state.dataEarned.data;
  const selectDataActual = (state: RootState) => state.dataActual.data;

  const selectData = createSelector(
    [selectDataPlaned, selectDataEarned, selectDataActual],
    (dataPlaned, dataEarned, dataActual) => ({
      dataPlaned,
      dataEarned,
      dataActual,
    }),
  );

  const { dataPlaned, dataEarned, dataActual } = useSelector(selectData);

  const setDataPlaned = useCallback(
    (value: React.SetStateAction<number[][]>) => {
      dispatch(setDataPlanedSlice(value));
    },
    [dispatch],
  );

  const setDataEarned = useCallback(
    (value: React.SetStateAction<number[][]>) => {
      dispatch(setDataEarnedSlice(value));
    },
    [dispatch],
  );

  const setDataActual = useCallback(
    (value: React.SetStateAction<number[][]>) => {
      dispatch(setDataActualSlice(value));
    },
    [dispatch],
  );

  const selectCumulativePlaned = (state: RootState) =>
    state.cumulativePlaned.data;
  const selectCumulativeEarned = (state: RootState) =>
    state.cumulativeEarned.data;
  const selectCumulativeActual = (state: RootState) =>
    state.cumulativeActual.data;

  const selectCumulative = createSelector(
    [selectCumulativePlaned, selectCumulativeEarned, selectCumulativeActual],
    (cumulativePlaned, cumulativeEarned, cumulativeActual) => ({
      cumulativePlaned,
      cumulativeEarned,
      cumulativeActual,
    }),
  );

  const { cumulativePlaned, cumulativeEarned, cumulativeActual } =
    useSelector(selectCumulative);

  const setCumulativePlaned = useCallback(
    (value: React.SetStateAction<number[]>) => {
      dispatch(setCumulativePlanedSlice(value));
    },
    [dispatch],
  );

  const setCumulativeEarned = useCallback(
    (value: React.SetStateAction<number[]>) => {
      dispatch(setCumulativeEarnedSlice(value));
    },
    [dispatch],
  );

  const setCumulativeActual = useCallback(
    (value: React.SetStateAction<number[]>) => {
      dispatch(setCumulativeActualSlice(value));
    },
    [dispatch],
  );

  const [rows, setRows] = useState(dataPlaned.length);
  const [columns, setColumns] = useState(dataPlaned[0].length);

  return (
    <Tabs defaultValue="planned-value" className="overflow-hidden">
      <div className="flex w-full justify-end">
        <TabsList>
          <TabsTrigger value="planned-value">Planned Value</TabsTrigger>
          <TabsTrigger value="earned-value">Earned Value</TabsTrigger>
          <TabsTrigger value="actual-costs">Actual Costs</TabsTrigger>
        </TabsList>
      </div>
      <TabsContent value="planned-value">
        <DataGrid
          rows={rows}
          setRows={setRows}
          columns={columns}
          setColumns={setColumns}
          label="Planned Value"
          initialData={dataPlaned}
          setInitialData={setDataPlaned}
          initialCumulative={cumulativePlaned}
          setInitialCumulative={setCumulativePlaned}
        />
      </TabsContent>
      <TabsContent value="earned-value">
        <DataGrid
          rows={rows}
          setRows={setRows}
          columns={columns}
          setColumns={setColumns}
          label="Earned Value"
          initialData={dataEarned}
          setInitialData={setDataEarned}
          initialCumulative={cumulativeEarned}
          setInitialCumulative={setCumulativeEarned}
        />
      </TabsContent>
      <TabsContent value="actual-costs">
        <DataGrid
          rows={rows}
          setRows={setRows}
          columns={columns}
          setColumns={setColumns}
          label="Actual Costs"
          initialData={dataActual}
          setInitialData={setDataActual}
          initialCumulative={cumulativeActual}
          setInitialCumulative={setCumulativeActual}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ValueInput;
