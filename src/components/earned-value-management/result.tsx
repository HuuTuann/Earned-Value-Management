"use client";

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/state/store";
import { useState, useMemo } from "react";
import { useSelector } from "react-redux";

import MyLineChart from "@/components/earned-value-management/line-chart";

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

  const [data, setData] = useState<
    Array<{
      name: number;
      Planed: number;
      Earned: number;
      Actual: number;
    }>
  >(
    Array.from({ length: maxWeek }, (_, index) => ({
      name: index + 1,
      Planed:
        cumulativePlaned[index] === undefined ? 0 : cumulativePlaned[index],
      Earned:
        cumulativeEarned[index] === undefined ? 0 : cumulativeEarned[index],
      Actual:
        cumulativeActual[index] === undefined ? 0 : cumulativeActual[index],
    })),
  );

  useMemo(() => {
    setData(
      Array.from({ length: week }, (_, index) => ({
        name: index + 1,
        Planed:
          cumulativePlaned[index] === undefined ? 0 : cumulativePlaned[index],
        Earned:
          cumulativeEarned[index] === undefined ? 0 : cumulativeEarned[index],
        Actual:
          cumulativeActual[index] === undefined ? 0 : cumulativeActual[index],
      })),
    );
  }, [week]);

  return (
    <div className="mt-4">
      <MyLineChart
        data={data}
        maxWeek={maxWeek}
        week={week}
        setWeek={setWeek}
      />
    </div>
  );
};

export default Result;
