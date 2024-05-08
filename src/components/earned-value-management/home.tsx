"use client";

import { useState, useCallback } from "react";

import Table from "@/components/earned-value-management/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const HomeEVM = () => {
  const [rows, setRows] = useState(6);
  const [columns, setColumns] = useState(30);
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
      <Tabs defaultValue="planned-value">
        <TabsList>
          <TabsTrigger value="planned-value">Planned Value</TabsTrigger>
          <TabsTrigger value="earned-value">Earned Value</TabsTrigger>
          <TabsTrigger value="actual-costs">Actual Costs</TabsTrigger>
        </TabsList>
        <TabsContent value="planned-value" asChild>
          <Table
            rows={rows}
            columns={columns}
            label="Planned Value"
            cumulative={cumulativePlanedValue}
            setCumulative={setCumulativePlanedValueCallback}
          />
        </TabsContent>
        <TabsContent value="earned-value" asChild>
          <Table
            rows={rows}
            columns={columns}
            label="Earned Value"
            cumulative={cumulativeEarnedValue}
            setCumulative={setCumulativeEarnedValueCallback}
          />
        </TabsContent>
        <TabsContent value="actual-costs" asChild>
          <Table
            rows={rows}
            columns={columns}
            label="Actual Costs"
            cumulative={cumulativeActualCosts}
            setCumulative={setCumulativeActualCostsCallback}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default HomeEVM;
