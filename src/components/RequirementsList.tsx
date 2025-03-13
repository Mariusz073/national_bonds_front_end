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
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-architects-daughter text-lg">{title}</h3>
        <button className="text-amber-600 text-sm font-architects-daughter hover:underline">
          view more
        </button>
      </div>
      <div className="space-y-2">
        {items.map((item, index) => (
          <div
            key={index}
            className={`p-3 rounded ${
              type === "compliance" ? "bg-[#B8E1DD]" : "bg-[#FFB6B6]"
            }`}
          >
            <div className="flex justify-between items-center">
              <span className="font-architects-daughter text-gray-700">
                {item.name}
              </span>
              {type === "compliance" ? (
                <span className="text-[#2A9187] text-xl">✓</span>
              ) : (
                <span className="text-[#FF5757] text-xl">✕</span>
              )}
            </div>
            {item.description && (
              <p className="text-sm font-architects-daughter text-gray-600 mt-2 leading-relaxed">
                {item.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default RequirementsList;
