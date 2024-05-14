"use client";

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/state/store";
import { useState } from "react";
import { useSelector } from "react-redux";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import WeeklyPerformanceChart from "@/components/earned-value-management/result/weekly-performance-chart";
import SelectWeek from "@/components/earned-value-management/select";
import PerformanceMetricsTable from "@/components/earned-value-management/result/performance-metrics-table";

const Result = () => {
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

  const maxWeek = Math.max(
    cumulativePlaned.length,
    cumulativeEarned.length,
    cumulativeActual.length,
  );

  const [week, setWeek] = useState<number>(maxWeek);

  return (
    <Card className="mt-4">
      <CardHeader>
        <div className="flex w-full items-center justify-between">
          <div className="space-y-2">
            <CardTitle>Earned Value Line Chart</CardTitle>
            <CardDescription>
              This chart shows the cumulative planed, earned, and actual values.
            </CardDescription>
          </div>
          <SelectWeek week={week} maxWeek={maxWeek} setWeek={setWeek} />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <WeeklyPerformanceChart
          week={week}
          initialData={{
            Planed: cumulativePlaned,
            Earned: cumulativeEarned,
            Actual: cumulativeActual,
          }}
        />
        <PerformanceMetricsTable
          week={week}
          initialData={{
            Planed: cumulativePlaned,
            Earned: cumulativeEarned,
            Actual: cumulativeActual,
          }}
        />
      </CardContent>
    </Card>
  );
};

export default Result;
