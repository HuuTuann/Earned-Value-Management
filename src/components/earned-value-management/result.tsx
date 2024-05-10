"use client";

import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@/state/store";
import { useState, useEffect } from "react";
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

  const [data, setData] = useState<
    Array<{
      name: number;
      Planed: number;
      Earned: number;
      Actual: number;
    }>
  >(
    cumulativePlaned.map((value, index) => ({
      name: index + 1,
      Planed: value === undefined ? 0 : value,
      Earned:
        cumulativeEarned[index] === undefined ? 0 : cumulativeEarned[index],
      Actual:
        cumulativeActual[index] === undefined ? 0 : cumulativeActual[index],
    })),
  );

  return (
    <div className="mt-4">
      <MyLineChart data={data} />
    </div>
  );
};

export default Result;
