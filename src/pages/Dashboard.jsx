import { useState } from 'react';
import Counter from '../component/Counter';
import Profile from '../component/Profile';
import ProfileTrends from '../component/ProfileTrends';

const DashSidebar = ({ activeItem, onSelectItem }) => {
  return (
    <div className=" p-4 text-black  md:min-h-screen">
      <h2 className="text-xl font-bold mb-6">Dashboard Menu</h2>
      <nav className="space-y-2">
        {['Profile', 'Analytics', 'Reports', 'Settings'].map((item) => (
          <button
            key={item}
            onClick={() => onSelectItem(item)}
            className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
              activeItem === item 
                ? 'bg-indigo-600 text-white' 
                : 'hover:bg-gray-700 hover:text-white'
            }`}
          >
            {item}
          </button>
        ))}
      </nav>
    </div>
  );
};

const Dashboard = () => {
  const [activeItem, setActiveItem] = useState('Profile');

  const renderContent = () => {
    switch(activeItem) {
    //   case 'profile': return <div><Counter /></div>;
      case 'Analytics': return <div><ProfileTrends /></div>;
      case 'Reports': return <div>Report Generation</div>;
      case 'Settings': return <div>System Settings</div>;
    //   case 'Profile': return <div>User Profile</div>;
      default: return <div><Profile /></div>;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar Container (20% width on desktop) */}
      <div className="w-full md:w-[20%] transition-all duration-300">
        <DashSidebar 
          activeItem={activeItem} 
          onSelectItem={setActiveItem} 
        />
      </div>

      {/* Content Container (80% width on desktop) */}
      <div className="flex-1 bg-gray-100 md:p-8 p-2 overflow-y-auto">
        {/* <div className="max-w-4xl mx-auto"> */}
          {/* <h1 className="text-3xl font-bold mb-6 text-gray-800">{activeItem}</h1> */}
          <div className="">
            {renderContent()}
          </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Dashboard;