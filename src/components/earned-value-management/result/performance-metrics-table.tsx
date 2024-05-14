import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

type PerformanceMetricsTableProps = {
  week: number;
  initialData: {
    Planed: number[];
    Earned: number[];
    Actual: number[];
  };
};

type DataType = {
  [key: string]: (number | string)[];
};

const PerformanceMetricsTable = ({
  week,
  initialData,
}: PerformanceMetricsTableProps) => {
  const { Planed, Earned, Actual } = initialData;
  const BCWS = Planed.reduce((acc, cur) => acc + cur, 0);

  const data: DataType = {
    "Cost Variance": Array.from(
      { length: week },
      (_, i) => Planed[i] - Actual[i] || 0,
    ),
    "Schedule Variance": Array.from(
      { length: week },
      (_, i) => Planed[i] - Earned[i] || 0,
    ),
    "Cost Performance Index": Array.from({ length: week }, (_, i) =>
      Number(Earned[i] / Actual[i] || 0).toFixed(2),
    ),
    "Schedule Performance Index": Array.from({ length: week }, (_, i) =>
      Number(Earned[i] / Planed[i] || 0).toFixed(2),
    ),
    "Estimated Cost at Completion": Array.from({ length: week }, (_, i) =>
      Number(
        Actual[i] +
          (BCWS - Earned[i]) /
            ((Earned[i] / Actual[i]) * (Earned[i] / Planed[i])) || 0,
      ).toFixed(2),
    ),
  };

  return (
    <div className="w-full">
      <CardHeader>
        <CardTitle>Earned Value Management Analysis</CardTitle>
        <CardDescription>
          {`This table shows the Earned Value Management (EVM) analysis for the
            ${week} week.`}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-min w-full">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead />
                {Array.from({ length: week }, (_, index) => (
                  <TableHead key={index} className="text-nowrap text-center">
                    Week {index + 1}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.keys(data).map((key, index) => (
                <TableRow key={index}>
                  <TableHead className="w-min text-nowrap">{key}</TableHead>
                  {data[key].map((cell, index) => (
                    <TableCell key={index} className="text-center">
                      {cell}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </CardContent>
    </div>
  );
};

export default PerformanceMetricsTable;
