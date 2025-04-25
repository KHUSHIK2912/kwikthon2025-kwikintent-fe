import { Card } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function ConversionRateChart() {
  const data = [
    {
      name: "Week 1",
      "High Intent": 24,
      "Price Sensitive": 13,
      "Just Browsing": 5,
    },
    {
      name: "Week 2",
      "High Intent": 26,
      "Price Sensitive": 15,
      "Just Browsing": 6,
    },
    {
      name: "Week 3",
      "High Intent": 28,
      "Price Sensitive": 17,
      "Just Browsing": 6,
    },
    {
      name: "Week 4",
      "High Intent": 30,
      "Price Sensitive": 18,
      "Just Browsing": 7,
    },
  ];

  return (
    <Card>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="High Intent" stroke="#10b981" strokeWidth={2} />
          <Line type="monotone" dataKey="Price Sensitive" stroke="#f97316" strokeWidth={2} />
          <Line type="monotone" dataKey="Just Browsing" stroke="#6366f1" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
