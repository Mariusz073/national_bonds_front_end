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
        <div className="space-y-1">
          <h3 className="font-architects-daughter text-xl">
            Key trigger moments
          </h3>
          <p className="text-sm font-architects-daughter text-gray-500">
            The key compliance requirements and best-practices you fulfilled on
            the call
          </p>
        </div>
        <button className="text-amber-600 text-sm font-architects-daughter hover:underline">
          view more
        </button>
      </div>

      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="inline-block px-4 py-1.5 rounded-full bg-[#B8E1DD] text-[#2A9187] text-sm font-architects-daughter">
              {category}
            </div>
          </div>
          <div className="text-sm text-gray-500 font-architects-daughter">
            1/7 trigger opportunities
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h4 className="text-lg font-architects-daughter text-gray-700">
              Customer trigger:
            </h4>
            <p className="font-architects-daughter text-base text-gray-600 pl-4">
              {customerTrigger}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-architects-daughter text-gray-700">
              Actual response:
            </h4>
            <p className="font-architects-daughter text-base text-gray-600 pl-4">
              {actualResponse}
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="text-lg font-architects-daughter text-amber-600">
              Optimal response:
            </h4>
            <p className="font-architects-daughter text-base text-amber-600 pl-4">
              {optimalResponse}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TriggerMoment;
