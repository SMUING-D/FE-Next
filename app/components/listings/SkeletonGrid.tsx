'use client';

import React from 'react';

const SkeletonGrid = () => {
  return (
    <div onClick={() => {}} className="col-span-1">
      <div
        className="
            aspect-square
            w-full
            overflow-hidden
            rounded-xl
            mb-2
          "
      >
        <div
          className="
              object-cover
              h-full
              w-full
              bg-gray-300
              animate-pulse"
        />
      </div>
      <div className="h-4 bg-gray-300 rounded-full mb-2 animate-pulse" />
      <div className="h-4 bg-gray-300 rounded-full mb-2 animate-pulse" />
      <div className="h-4 bg-gray-300 rounded-full animate-pulse" />
    </div>
  );
};

export default SkeletonGrid;
