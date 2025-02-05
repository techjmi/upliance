import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  
  // Calculate background opacity (capped at 90% opacity)
  const bgOpacity = Math.min(0.9, count * 0.01);
  
  return (
    <div 
      className="min-h-screen w-full flex flex-col justify-center items-center transition-all duration-300"
      style={{
        // Linear color intensity with bezier curve transition
        backgroundColor: `rgba(99, 102, 241, ${bgOpacity})`,
        transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg space-y-6">
        <h1 className="text-4xl font-bold text-center text-gray-800">{count}</h1>
        
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setCount(c => c + 1)}
            className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
          >
            Increment
          </button>
          
          <button
            onClick={() => setCount(c => c - 1)}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
          >
            Decrement
          </button>
          
          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}