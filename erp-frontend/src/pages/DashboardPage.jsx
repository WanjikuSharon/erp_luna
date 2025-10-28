import React from 'react';
import { useSelector } from 'react-redux';
import { FaBoxes, FaCubes, FaTruck, FaChartLine } from 'react-icons/fa';

function DashboardPage() {
  const { user } = useSelector((state) => state.auth);
  const { products } = useSelector((state) => state.products);

  const stats = [
    {
      icon: FaBoxes,
      label: 'Total Products',
      value: products.length,
      color: 'bg-blue-500',
    },
    {
      icon: FaCubes,
      label: 'Raw Materials',
      value: 0,
      color: 'bg-green-500',
    },
    {
      icon: FaTruck,
      label: 'Vendors',
      value: 0,
      color: 'bg-yellow-500',
    },
    {
      icon: FaChartLine,
      label: 'Active Orders',
      value: 0,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome back, {user?.name}!
        </h1>
        <p className="text-gray-600">Here's what's happening with your business today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4"
          >
            <div className={`${stat.color} text-white p-4 rounded-lg`}>
              <stat.icon className="text-3xl" />
            </div>
            <div>
              <p className="text-gray-500 text-sm">{stat.label}</p>
              <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
          <p className="text-gray-500">No recent activity to display.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h2>
          <div className="space-y-3">
            <a
              href="/products"
              className="block px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Manage Products
            </a>
            <a
              href="/raw-materials"
              className="block px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Manage Raw Materials
            </a>
            <a
              href="/vendors"
              className="block px-4 py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Manage Vendors
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
