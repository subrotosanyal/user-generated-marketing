import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush, ResponsiveContainer } from 'recharts';

interface DataPoint {
  DateTime: string;
  als_en: number;
  als_de: number;
  als_fr: number;
  icebucket: number;
}

interface MetricsChartProps {
  data: DataPoint[];
  initialDateRange: { start: string; end: string };
}

export const MetricsChart = ({ data, initialDateRange }: MetricsChartProps) => {
  const dateRange = initialDateRange;

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString();
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
      <div className="w-full h-[500px] p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 80 }} // Increased bottom margin for space
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
                dataKey="DateTime"
                tickFormatter={formatDate}
                angle={-45}
                textAnchor="end"
            />
            <YAxis tickFormatter={formatNumber} />
            <Tooltip
                formatter={(value: number) => formatNumber(value)}
                labelFormatter={formatDate}
            />
            <Legend verticalAlign="top" />
            <Brush
                dataKey="DateTime"
                height={30}
                stroke="#8884d8"
                startIndex={data.findIndex(d => d.DateTime === dateRange.start)}
                endIndex={data.findIndex(d => d.DateTime === dateRange.end)}
                y={420} // Move the brush further down
            />
            <Line
                type="monotone"
                dataKey="als_en"
                name="ALS (English)"
                stroke="#8884d8"
                dot={false}
            />
            <Line
                type="monotone"
                dataKey="als_de"
                name="ALS (German)"
                stroke="#82ca9d"
                dot={false}
            />
            <Line
                type="monotone"
                dataKey="als_fr"
                name="ALS (French)"
                stroke="#ffc658"
                dot={false}
            />
            <Line
                type="monotone"
                dataKey="icebucket"
                name="Ice Bucket Challenge"
                stroke="#ff7300"
                dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
  );
};
