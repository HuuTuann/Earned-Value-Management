"use client";

import { useState, useCallback } from "react";

import Table from "@/components/earned-value-management/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/state/store";
import { setPlanedValueSlice } from "@/state/cumulative/planedValueSlice";
import { setEarnedValueSlice } from "@/state/cumulative/earnedValueSlice";
import { setActualCostSlice } from "@/state/cumulative/actualCostSlice";

const HomeEVM = () => {
  const [rows, setRows] = useState(6);
  const [columns, setColumns] = useState(30);

  const planedValue = useSelector((state: RootState) => state.planedValue.data);
  const earnedValue = useSelector((state: RootState) => state.earnedValue.data);
  const actualCost = useSelector((state: RootState) => state.actualCost.data);

  const dispatch = useDispatch<AppDispatch>();

  const setPlanedValue = (value: React.SetStateAction<number[]>) => {
    dispatch(setPlanedValueSlice(value));
  };

  const setEarnedValue = (value: React.SetStateAction<number[]>) => {
    dispatch(setEarnedValueSlice(value));
  };

  const setActualCost = (value: React.SetStateAction<number[]>) => {
    dispatch(setActualCostSlice(value));
  };

  // const setPlanedValue = useCallback(
  //   (value: React.SetStateAction<number[]>) => {
  //     dispatch(setPlanedValueSlice(value));
  //   },
  //   [],
  // );

  // const setEarnedValue = useCallback(
  //   (value: React.SetStateAction<number[]>) => {
  //     dispatch(setEarnedValueSlice(value));
  //   },
  //   [],
  // );

  // const setActualCost = useCallback((value: React.SetStateAction<number[]>) => {
  //   dispatch(setActualCostSlice(value));
  // }, []);

  return (
    <div className="container">
      <Tabs defaultValue="planned-value">
        <TabsList>
          <TabsTrigger value="planned-value">Planned Value</TabsTrigger>
          <TabsTrigger value="earned-value">Earned Value</TabsTrigger>
          <TabsTrigger value="actual-costs">Actual Costs</TabsTrigger>
        </TabsList>
        <TabsContent value="planned-value">
          <Table
            rows={rows}
            columns={columns}
            label="Planned Value"
            cumulative={planedValue}
            setCumulative={setPlanedValue}
          />
        </TabsContent>
        <TabsContent value="earned-value">
          <Table
            rows={rows}
            columns={columns}
            label="Earned Value"
            cumulative={earnedValue}
            setCumulative={setEarnedValue}
          />
        </TabsContent>
        <TabsContent value="actual-costs">
          <Table
            rows={rows}
            columns={columns}
            label="Actual Costs"
            cumulative={actualCost}
            setCumulative={setActualCost}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HomeEVM;
