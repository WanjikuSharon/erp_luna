import React, { useState } from 'react';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaMoon, FaBoxes, FaCubes, FaTruck, FaTachometerAlt, FaBars, FaTimes, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { logout } from '../features/auth/authSlice';

function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const navItems = [
    { path: '/dashboard', icon: FaTachometerAlt, label: 'Dashboard' },
    { path: '/products', icon: FaBoxes, label: 'Products' },
    { path: '/raw-materials', icon: FaCubes, label: 'Raw Materials' },
    { path: '/vendors', icon: FaTruck, label: 'Vendors' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex h-screen bg-gray-100">
      <aside
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 fixed md:static inset-y-0 left-0 z-30 w-64 bg-indigo-900 text-white transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-indigo-800">
            <div className="flex items-center space-x-3">
              <div className="bg-white rounded-full p-2">
                <FaMoon className="text-2xl text-indigo-900" />
              </div>
              <div>
                <h1 className="text-xl font-bold">Luna ERP</h1>
                <p className="text-xs text-indigo-200">Industries</p>
              </div>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden text-white hover:text-indigo-200"
            >
              <FaTimes className="text-xl" />
            </button>
          </div>

          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-yellow-500 text-black font-semibold'
                    : 'text-indigo-100 hover:bg-indigo-800'
                }`}
              >
                <item.icon className="text-xl" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="p-4 border-t border-indigo-800">
            <div className="flex items-center space-x-3 px-4 py-3 mb-2">
              <FaUser className="text-xl" />
              <div>
                <p className="font-semibold">{user?.name || 'User'}</p>
                <p className="text-xs text-indigo-200">{user?.role || 'STAFF'}</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-indigo-100 hover:bg-indigo-800 transition-colors w-full"
            >
              <FaSignOutAlt className="text-xl" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-md">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="md:hidden text-gray-700 hover:text-indigo-900"
            >
              <FaBars className="text-2xl" />
            </button>
            <h2 className="text-2xl font-bold text-gray-800">
              {navItems.find((item) => item.path === location.pathname)?.label || 'Luna ERP'}
            </h2>
            <div className="w-10 md:hidden"></div>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Layout;
