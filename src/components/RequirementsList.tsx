"use client";

import React from "react";

interface Requirement {
  name: string;
  status?: boolean;
  description?: string;
}

interface RequirementsListProps {
  title: string;
  items: Requirement[];
  type: "compliance" | "practices";
}

const RequirementsList: React.FC<RequirementsListProps> = ({
  title,
  items,
  type,
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <button className="text-amber-600 text-sm hover:underline">
          view more
        </button>
      </div>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-3 rounded-md ${
              type === "compliance" ? "bg-emerald-100" : "bg-red-100"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium">{item.name}</span>
              {type === "compliance" ? (
                <span className="text-emerald-600">✓</span>
              ) : (
                <span className="text-red-600">✕</span>
              )}
            </div>
            {item.description && (
              <p className="text-sm text-gray-600 mt-1">{item.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequirementsList;
