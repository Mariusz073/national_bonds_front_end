"use client";

import React from "react";

interface TriggerMomentProps {
  category: string;
  customerTrigger: string;
  actualResponse: string;
  optimalResponse: string;
}

const TriggerMoment: React.FC<TriggerMomentProps> = ({
  category,
  customerTrigger,
  actualResponse,
  optimalResponse,
}) => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-architects-daughter text-lg">
          Key trigger moments
        </h3>
        <button className="text-amber-600 text-sm font-architects-daughter hover:underline">
          view more
        </button>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <div className="inline-block px-4 py-1.5 rounded-full bg-[#B8E1DD] text-[#2A9187] text-sm font-architects-daughter">
            {category}
          </div>
          <div className="text-sm text-gray-500 font-architects-daughter">
            1/7 trigger opportunities
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="text-sm font-architects-daughter text-gray-500 mb-2">
              Customer trigger:
            </h4>
            <p className="font-architects-daughter text-gray-700">
              {customerTrigger}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-architects-daughter text-gray-500 mb-2">
              Actual response:
            </h4>
            <p className="font-architects-daughter text-gray-700">
              {actualResponse}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-architects-daughter text-amber-600 mb-2">
              Optimal response:
            </h4>
            <p className="font-architects-daughter text-amber-600">
              {optimalResponse}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TriggerMoment;
