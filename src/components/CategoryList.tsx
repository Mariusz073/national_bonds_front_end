"use client";

import React, { useState } from "react";

interface Category {
  name: string;
  expanded: boolean;
}

interface CategoryListProps {
  categories: Category[];
}

const CategoryList: React.FC<CategoryListProps> = ({
  categories: initialCategories,
}) => {
  const [categories, setCategories] = useState(initialCategories);

  const toggleCategory = (index: number) => {
    setCategories((prev) =>
      prev.map((cat, i) =>
        i === index ? { ...cat, expanded: !cat.expanded } : cat
      )
    );
  };

  return (
    <div className="space-y-2">
      {categories.map((category, index) => (
        <div
          key={index}
          className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
          onClick={() => toggleCategory(index)}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {category.name === "identified strengths" && (
                <span className="text-lg">💪</span>
              )}
              {category.name === "suggested focus" && (
                <span className="text-lg">🎯</span>
              )}
              {category.name === "emotional trends" && (
                <span className="text-lg">📈</span>
              )}
              {category.name === "communication style" && (
                <span className="text-lg">💬</span>
              )}
              <span className="capitalize font-medium">{category.name}</span>
            </div>
            <span
              className={`transform transition-transform ${
                category.expanded ? "rotate-180" : ""
              }`}
            >
              ▼
            </span>
          </div>
          {category.expanded && (
            <div className="mt-4 pl-8">
              <p className="text-gray-600">
                Content for {category.name} (expandable section)
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
