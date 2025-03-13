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

        {/* Requirements and Strengths Row */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-[#F5F5F5] p-6 rounded-lg">
            <RequirementsList
              title="Compliance requirement met"
              items={dashboardData.complianceRequirements}
              type="compliance"
            />
          </div>
          <div className="bg-[#F5F5F5] p-6 rounded-lg">
            <RequirementsList
              title="Best-practices missed"
              items={dashboardData.bestPractices}
              type="practices"
            />
          </div>
          <div className="bg-[#F5F5F5] p-6 rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-architects-daughter text-lg">
                Identified strengths
              </h3>
              <button className="text-amber-600 text-sm font-architects-daughter hover:underline">
                view more
              </button>
            </div>
            <p className="font-architects-daughter text-gray-600 text-sm leading-relaxed">
              You demonstrate strong self-awareness and consistently show
              dedication to personal growth, you will be successful in your
              journey.
            </p>
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

        {/* Other Categories */}
        <div className="space-y-2">
          {dashboardData.performanceCategories
            .slice(1)
            .map((category, index) => (
              <div key={index} className="bg-[#F5F5F5] p-6 rounded-lg">
                <CategoryList categories={[category]} />
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
