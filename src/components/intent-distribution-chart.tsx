import { Card } from "antd";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export function IntentDistributionChart() {
  const data = [
    {
      name: "Week 1",
      "High Intent": 32,
      "Price Sensitive": 45,
      "Just Browsing": 23,
    },
    {
      name: "Week 2",
      "High Intent": 38,
      "Price Sensitive": 42,
      "Just Browsing": 20,
    },
    {
      name: "Week 3",
      "High Intent": 42,
      "Price Sensitive": 38,
      "Just Browsing": 20,
    },
    {
      name: "Week 4",
      "High Intent": 45,
      "Price Sensitive": 35,
      "Just Browsing": 20,
    },
  ];

  return (
    <Card>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="High Intent" fill="#10b981" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Price Sensitive" fill="#f97316" radius={[4, 4, 0, 0]} />
          <Bar dataKey="Just Browsing" fill="#6366f1" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}