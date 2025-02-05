import React from 'react';

const ProfileTrendsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 animate-pulse">
      {/* Bar Chart Skeleton */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="h-[300px] bg-gray-200 rounded-lg"></div>
      </div>

      {/* Line Chart Skeleton */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="h-[300px] bg-gray-200 rounded-lg"></div>
      </div>

      {/* Pie Chart Skeleton */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
        <div className="flex items-center justify-center h-[300px]">
          <div className="h-48 w-48 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileTrendsSkeleton;