"use client";

import { memo } from "react";
import React, { useState, useEffect } from "react";

import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type TableProps = {
  rows: number;
  columns: number;
  label: string;
  cumulative: number[];
  setCumulative: React.Dispatch<React.SetStateAction<number[]>>;
};

const Table = ({
  rows,
  columns,
  label,
  cumulative,
  setCumulative,
}: TableProps) => {
  const [data, setData] = useState(
    Array(rows)
      .fill(0)
      .map(() => Array(columns).fill(0)),
  );
  const [totals, setTotals] = useState<number[]>([]);

  useEffect(() => {
    const newTotals = Array.from({ length: columns }).map(
      (_, i) =>
        Array.from({ length: rows }).reduce(
          (acc, _, j) => acc + data[j][i],
          0,
        ) as number,
    );
    setTotals(newTotals);

    const newCumulativeActualCosts = Array.from({ length: columns }).map(
      (_, i) => newTotals.slice(0, i + 1).reduce((acc, cost) => acc + cost, 0),
    );
    setCumulative(newCumulativeActualCosts);
  }, [data, rows, columns]);

  const handleChange = (row: number, col: number, value: number) => {
    const newData = [...data];
    newData[row][col] = value;
    setData(newData);
  };

  return (
    <Card className="mt-2 overflow-hidden">
      <CardHeader>
        <CardTitle>{label}</CardTitle>
        <CardDescription>
          Enter the budgeted cost for each activity per week.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-min w-full pb-2">
          <table>
            <thead>
              <tr>
                <th className="min-w-[232px]"></th>
                {Array.from({ length: columns }).map((_, i) => (
                  <th key={i} className="min-w-24 p-2">
                    Week {i + 1}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: rows }).map((_, i) => (
                <tr key={i}>
                  <td className="p-2 text-right font-bold">Activity {i + 1}</td>
                  {Array.from({ length: columns }).map((_, j) => (
                    <td key={j} className="p-2">
                      <Input
                        value={data[i][j]}
                        className="text-center"
                        onChange={(e) => handleChange(i, j, +e.target.value)}
                      />
                    </td>
                  ))}
                </tr>
              ))}
              <tr>
                <td className="text-nowrap p-2 text-right font-bold">
                  Total Budgeted Cost
                </td>
                {totals.map((total, i) => (
                  <td key={i} className="text-center">
                    {total}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="text-nowrap p-2 text-right font-bold">
                  Cumulative {label}
                </td>
                {cumulative.map((cumulativeItem, i) => (
                  <td key={i} className="text-center">
                    {cumulativeItem}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <ScrollBar orientation="horizontal" className="cursor-pointer" />
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default memo(Table);
