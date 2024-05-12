import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import SelectWeek from "@/components/earned-value-management/select";

type LineChartProps = {
  week: number;
  maxWeek: number;
  setWeek: (value: number) => void;
  data: Array<{
    name: number;
    Planed: number;
    Earned: number;
    Actual: number;
  }>;
};

const MyLineChart = ({ data, week, maxWeek, setWeek }: LineChartProps) => {
  return (
    <Card>
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
      <CardContent className="flex justify-center">
        <LineChart width={800} height={400} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Planed" stroke="#8884d8" />
          <Line type="monotone" dataKey="Earned" stroke="#82ca9d" />
          <Line type="monotone" dataKey="Actual" stroke="#FF0000" />
        </LineChart>
      </CardContent>
    </Card>
  );
};

export default MyLineChart;
