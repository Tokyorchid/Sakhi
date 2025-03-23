
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { day: '1', value: 2 },
  { day: '2', value: 3 },
  { day: '3', value: 5 },
  { day: '4', value: 4 },
  { day: '5', value: 2 },
  { day: '6', value: 1 },
  { day: '7', value: 0 },
  { day: '8', value: 0 },
  { day: '9', value: 1 },
  { day: '10', value: 2 },
  { day: '11', value: 3 },
  { day: '12', value: 4 },
  { day: '13', value: 3 },
  { day: '14', value: 2 },
];

const DashboardChart = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={data}
        margin={{
          top: 10,
          right: 10,
          left: 0,
          bottom: 10,
        }}
      >
        <defs>
          <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#9b87f5" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#9b87f5" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke="#2b3546" vertical={false} />
        <XAxis 
          dataKey="day" 
          tick={{ fill: '#abb3c4' }} 
          axisLine={{ stroke: '#2b3546' }}
          tickLine={false}
          style={{ fontWeight: 'bold' }}
        />
        <YAxis 
          tick={{ fill: '#abb3c4' }} 
          axisLine={{ stroke: '#2b3546' }}
          tickLine={false}
          style={{ fontWeight: 'bold' }}
        />
        <Tooltip 
          contentStyle={{ 
            backgroundColor: '#1e2433', 
            border: 'none', 
            borderRadius: '8px', 
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)', 
            padding: '12px',
            fontWeight: 'bold'
          }}
          itemStyle={{ color: '#abb3c4', fontWeight: 'bold' }}
          labelStyle={{ 
            color: '#abb3c4', 
            fontWeight: 'bold', 
            marginBottom: '4px' 
          }}
          formatter={(value) => [`${value} symptoms`, null]}
          labelFormatter={(label) => `Day ${label}`}
        />
        <Area 
          type="monotone" 
          dataKey="value" 
          stroke="#9b87f5" 
          strokeWidth={3}
          fillOpacity={1} 
          fill="url(#colorGradient)" 
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default DashboardChart;
