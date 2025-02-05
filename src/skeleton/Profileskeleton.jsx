import React from 'react';

const ProfileSkeleton = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-4 mx-auto max-w-xs">
        {/* Image Skeleton */}
        <div className="w-24 h-24 rounded-full bg-gray-200 animate-pulse">
          <svg
            className="w-full h-full text-gray-200"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
          </svg>
        </div>

        {/* Name Skeleton */}
        <div className="h-6 bg-gray-200 rounded-md w-32 animate-pulse"></div>

        {/* Email Skeleton */}
        <div className="h-4 bg-gray-200 rounded-md w-48 animate-pulse"></div>

        {/* Buttons Skeleton */}
        <div className="flex flex-col space-y-2 w-full mt-4">
          <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>
          <div className="h-10 bg-gray-200 rounded-md animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSkeleton;