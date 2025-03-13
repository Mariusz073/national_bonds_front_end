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
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Key trigger moments</h3>
        <button className="text-amber-600 text-sm hover:underline">
          view more
        </button>
      </div>
      <div className="space-y-4">
        <div className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-sm">
          {category}
        </div>
        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-medium text-gray-600">
              Customer trigger:
            </h4>
            <p className="mt-1">{customerTrigger}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-gray-600">
              Actual response:
            </h4>
            <p className="mt-1 text-gray-700">{actualResponse}</p>
          </div>
          <div>
            <h4 className="text-sm font-medium text-amber-600">
              Optimal response:
            </h4>
            <p className="mt-1 text-amber-700">{optimalResponse}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriggerMoment;
