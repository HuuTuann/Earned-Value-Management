"use client";

import { useState, useCallback, useEffect, useMemo, useRef } from "react";
import { Dices } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import ActivityAndWeekInput from "@/components/earned-value-management/activity-and-week-input";
import Link from "next/link";

type DataGridProps = {
  rows: number;
  setRows: (value: number) => void;
  columns: number;
  setColumns: (value: number) => void;
  label: string;
  initialData: number[][];
  setInitialData: React.Dispatch<React.SetStateAction<number[][]>>;
  initialCumulative: number[];
  setInitialCumulative: React.Dispatch<React.SetStateAction<number[]>>;
};

const DataGrid = ({
  rows,
  setRows,
  columns,
  setColumns,
  label,
  initialData,
  setInitialData,
  initialCumulative,
  setInitialCumulative,
}: DataGridProps) => {
  const [data, setData] = useState<number[][]>(initialData);
  const [totals, setTotals] = useState<number[]>([]);
  const [cumulative, setCumulative] = useState<number[]>(initialCumulative);

  const dataRef = useRef(data);
  const cumulativeRef = useRef(cumulative);

  useEffect(() => {
    dataRef.current = data;
    cumulativeRef.current = cumulative;
  }, [data, cumulative]);

  useEffect(() => {
    if (data.length !== rows || data[0]?.length !== columns) {
      const newData = Array.from({ length: rows }).map((_, i) => {
        return Array.from({ length: columns }).map((_, j) => {
          return data[i] && data[i][j] ? data[i][j] : 0;
        });
      });
      setData(newData);
    }

    return () => {
      setInitialData(dataRef.current);
      setInitialCumulative(cumulativeRef.current);
    };
  }, []);

  useMemo(() => {
    const newTotals = Array.from({ length: columns }).map(
      (_, i) =>
        Array.from({ length: rows }).reduce(
          (acc: number, _, j) => acc + (data[j] && data[j][i] ? data[j][i] : 0),
          0,
        ) as number,
    );
    setTotals(newTotals);

    const newCumulative = Array.from({ length: columns }).map((_, i) =>
      newTotals.slice(0, i + 1).reduce((acc, cost) => acc + cost, 0),
    );
    setCumulative(newCumulative);
  }, [data, rows, columns]);

  const handleChange = (row: number, col: number, value: number) => {
    const newData = [...data];
    newData[row] = [...newData[row]];
    newData[row][col] = value;
    setData(newData);
  };

  const handleData = useCallback(
    (type: "random" | "reset") => {
      const newData = Array.from({ length: rows }).map(() => {
        const current = Math.floor(Math.random() * 10000);

        return Array.from({ length: columns }).map(() =>
          type === "random" ? Math.floor(Math.random() * current) : 0,
        );
      });
      setData(newData);
    },
    [rows, columns],
  );

  return (
    <Card className="mt-2 overflow-hidden">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1.5">
            <CardTitle>{label}</CardTitle>
            <CardDescription>
              Enter the budgeted cost for each activity per week.
            </CardDescription>
          </div>
          <div className="space-x-2">
            <Button
              variant={"outline"}
              size={"icon"}
              onClick={() => handleData("random")}
            >
              <Dices size={24} />
            </Button>
            <ActivityAndWeekInput
              rows={rows}
              setRows={setRows}
              columns={columns}
              setColumns={setColumns}
            />
          </div>
        </div>
      </CardHeader>
      <Separator className="mb-2" />
      <CardContent>
        <ScrollArea className="h-min w-full pb-2">
          <table>
            <thead>
              <tr>
                <th className="min-w-[232px]"></th>
                {Array.from({ length: columns }).map((_, i) => (
                  <th key={i} className="min-w-24 flex-grow p-2">
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
                        value={data[i] && data[i][j] ? data[i][j] : 0}
                        className="text-center"
                        onChange={(e) => handleChange(i, j, +e.target.value)}
                        onClick={(e) => (e.target as HTMLInputElement).select()}
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
      <CardFooter>
        <div className="flex w-full justify-end gap-4">
          <Button variant="ghost" onClick={() => handleData("reset")}>
            Reset
          </Button>
          <Button variant="default" asChild>
            <Link href="/earned-value-management/result">Calculate</Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default DataGrid;
