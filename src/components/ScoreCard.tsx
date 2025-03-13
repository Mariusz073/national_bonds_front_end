"use client";

import React from "react";

interface ScoreCardProps {
  score: number;
  subtitle: string;
}

const ScoreCard: React.FC<ScoreCardProps> = ({ score, subtitle }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-amber-600">
            Your overall conversation score:
          </h2>
          <p className="text-gray-600 text-sm mt-1">{subtitle}</p>
        </div>
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-amber-500 flex items-center justify-center">
            <span className="text-xl font-bold text-amber-600">{score}%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScoreCard;
