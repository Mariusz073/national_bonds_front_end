"use client";

import React from "react";

interface ScoreCardProps {
  score: number;
  subtitle: string;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ score, subtitle }) => {
  return (
    <div className="flex justify-between items-start">
      <div className="flex-1">
        <h2 className="text-2xl font-architects-daughter text-amber-600">
          Your overall conversation score:
        </h2>
        <p className="text-sm font-architects-daughter text-gray-500 mt-1">
          {subtitle}
        </p>
      </div>
      <div className="relative">
        <div className="w-14 h-14 rounded-full border-2 border-amber-600 flex items-center justify-center">
          <span className="text-lg font-architects-daughter text-amber-600">
            {score}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
