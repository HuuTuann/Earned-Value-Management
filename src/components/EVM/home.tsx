"use client";

import { useState, useCallback } from "react";

import Table from "@/components/EVM/table";

const HomeEVM = () => {
  const [rows, setRows] = useState(6);
  const [columns, setColumns] = useState(12);
  const [cumulativePlanedValue, setCumulativePlanedValue] = useState<number[]>(
    [],
  );
  const [cumulativeEarnedValue, setCumulativeEarnedValue] = useState<number[]>(
    [],
  );
  const [cumulativeActualCosts, setCumulativeActualCosts] = useState<number[]>(
    [],
  );

  const setCumulativePlanedValueCallback = useCallback(
    (value: React.SetStateAction<number[]>) => {
      setCumulativePlanedValue(value);
    },
    [],
  );

  const setCumulativeEarnedValueCallback = useCallback(
    (value: React.SetStateAction<number[]>) => {
      setCumulativeEarnedValue(value);
    },
    [],
  );

  const setCumulativeActualCostsCallback = useCallback(
    (value: React.SetStateAction<number[]>) => {
      setCumulativeActualCosts(value);
    },
    [],
  );

  return (
    <div className="container">
      <Table
        rows={rows}
        columns={columns}
        label="Planned Value"
        cumulative={cumulativePlanedValue}
        setCumulative={setCumulativePlanedValueCallback}
      />
      <Table
        rows={rows}
        columns={columns}
        label="Earned Value"
        cumulative={cumulativeEarnedValue}
        setCumulative={setCumulativeEarnedValueCallback}
      />
      <Table
        rows={rows}
        columns={columns}
        label="Actual Costs"
        cumulative={cumulativeActualCosts}
        setCumulative={setCumulativeActualCostsCallback}
      />
    </div>
  );
};

export default HomeEVM;
