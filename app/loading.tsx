"use client";

import React from 'react';
import { RotatingLines } from "react-loader-spinner";

const Loading: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#121821]">
      <h1 className="text-slate-400 text-3xl">Loading...</h1>
      <RotatingLines
        visible={true}
        width="50"
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
      />
    </div>
  );
};

export default Loading;