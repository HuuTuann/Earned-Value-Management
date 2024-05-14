import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

type WeeklyPerformanceChartProp = {
  week: number;
  initialData: {
    Planed: number[];
    Earned: number[];
    Actual: number[];
  };
};

const WeeklyPerformanceChart = ({
  week,
  initialData,
}: WeeklyPerformanceChartProp) => {
  const { Planed, Earned, Actual } = initialData;

  const data = Array.from({ length: week }, (_, index) => ({
    name: index + 1,
    Planed: Planed[index] === undefined ? 0 : Planed[index],
    Earned: Earned[index] === undefined ? 0 : Earned[index],
    Actual: Actual[index] === undefined ? 0 : Actual[index],
  }));

  return (
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
  );
};

export default WeeklyPerformanceChart;
