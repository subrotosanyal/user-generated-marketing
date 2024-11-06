import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Brush, ResponsiveContainer } from 'recharts';
import { useState } from 'react';

interface DataPoint {
  DateTime: string;
  als_en: number;
  als_de: number;
  als_fr: number;
  icebucket: number;
}

interface MetricsChartProps {
  data: DataPoint[];
}

export const MetricsChart = ({ data }: MetricsChartProps) => {
  const [dateRange, setDateRange] = useState({ start: '2014-06-01', end: '2014-09-30' });

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString();
  };

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat().format(num);
  };

  return (
    <div className="w-full h-[600px] p-4">
      <h2 className="text-2xl font-bold mb-4">Wikipedia Page Views During Ice Bucket Challenge</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
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
          <Legend />
          <Brush 
            dataKey="DateTime"
            height={30}
            stroke="#8884d8"
            startIndex={data.findIndex(d => d.DateTime === dateRange.start)}
            endIndex={data.findIndex(d => d.DateTime === dateRange.end)}
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