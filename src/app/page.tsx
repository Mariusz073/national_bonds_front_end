"use client";

import React from "react";
import Layout from "@/components/Layout";
import ScoreCard from "@/components/ScoreCard";
import RequirementsList from "@/components/RequirementsList";
import TriggerMoment from "@/components/TriggerMoment";
import CategoryList from "@/components/CategoryList";
import dashboardData from "@/data/dashboard-data.json";

export default function Home() {
  return (
    <Layout>
      <div className="space-y-6">
        {/* Score Card */}
        <div className="bg-[#F5F5F5] p-6 rounded-lg">
          <ScoreCard
            score={dashboardData.overallScore}
            subtitle="weighted scoring system across six performance categories"
          />
        </div>

        {/* Requirements and Categories Row */}
        <div className="grid grid-cols-3 gap-6">
          {/* Compliance Requirements */}
          <div className="bg-[#F5F5F5] p-6 rounded-lg">
            <RequirementsList
              title="Compliance requirement met"
              items={dashboardData.complianceRequirements}
              type="compliance"
            />
          </div>

          {/* Best Practices */}
          <div className="bg-[#F5F5F5] p-6 rounded-lg">
            <RequirementsList
              title="Best-practices missed"
              items={dashboardData.bestPractices}
              type="practices"
            />
          </div>

          {/* Performance Categories */}
          <div className="space-y-2">
            {dashboardData.performanceCategories.map((category, index) => (
              <div key={index} className="bg-[#F5F5F5] p-6 rounded-lg">
                <CategoryList categories={[category]} />
              </div>
            ))}
          </div>
        </div>

        {/* Key Trigger Moments */}
        <div className="bg-[#F5F5F5] p-6 rounded-lg">
          <TriggerMoment
            category={dashboardData.keyTriggerMoments[0].category}
            customerTrigger={dashboardData.keyTriggerMoments[0].customerTrigger}
            actualResponse={dashboardData.keyTriggerMoments[0].actualResponse}
            optimalResponse={dashboardData.keyTriggerMoments[0].optimalResponse}
          />
        </div>

        {/* Practice Session */}
        <div className="bg-[#F5F5F5] p-6 rounded-lg">
          <p className="font-architects-daughter text-lg mb-4">
            Start a focused practice session on:
          </p>
          <div className="flex gap-4">
            <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors font-architects-daughter">
              Retention strategies
            </button>
            <button className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors font-architects-daughter">
              General session
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
