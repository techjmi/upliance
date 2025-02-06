import { useEffect, useState } from 'react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import ProfileTrendsSkeleton from '../skeleton/ProfileTrendsSkeleton';

const ProfileTrends = () => {
  const chartData = [
    { month: 'Jan', users: 4000, active: 2400 },
    { month: 'Feb', users: 4500, active: 3200 },
    { month: 'Mar', users: 5200, active: 4100 },
    { month: 'Apr', users: 4800, active: 3800 },
    { month: 'May', users: 6100, active: 4500 }
  ];
  
  const ageData = [
    { name: '18-25', value: 400, fill: '#3b82f6' },  
    { name: '26-35', value: 1200, fill: '#10b981' },
    { name: '36-45', value: 800, fill: '#f59e0b' },  
    { name: '46+', value: 600, fill: '#8b5cf6' }     
  ];

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <>
      {isLoading ? (
        <ProfileTrendsSkeleton />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2 py-0 md:p-6">
          {/* User Growth Bar Charts */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">User Growth</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="users" fill="#3b82f6" name="Total Users" />
                <Bar dataKey="active" fill="#10b981" name="Active Users" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Activity Trend */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Activity Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="active" stroke="#f59e0b" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart - Age Distribution */}
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Age Distribution</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={ageData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {ageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileTrends;
