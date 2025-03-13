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

  const getIcon = (name: string) => {
    switch (name) {
      case "identified strengths":
        return "💪";
      case "suggested focus":
        return "🎯";
      case "emotional trends":
        return "📈";
      case "communication style":
        return "💬";
      default:
        return "•";
    }
  };

  return (
    <>
      {categories.map((category, index) => (
        <div
          key={index}
          className="flex items-center justify-between cursor-pointer"
          onClick={() => toggleCategory(index)}
        >
          <div className="flex items-center gap-3">
            <span className="text-xl">{getIcon(category.name)}</span>
            <span className="font-architects-daughter text-gray-600">
              {category.name}
            </span>
          </div>
          <span
            className={`transform transition-transform text-gray-400 ${
              category.expanded ? "rotate-180" : ""
            }`}
          >
            ▼
          </span>
        </div>
      ))}
    </>
  );
};

export default CategoryList;
