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
        <ScoreCard
          score={dashboardData.overallScore}
          subtitle="weighted scoring system across six performance categories"
        />

        {/* Requirements and Best Practices */}
        <div className="grid grid-cols-2 gap-6">
          <RequirementsList
            title="Compliance requirement met"
            items={dashboardData.complianceRequirements}
            type="compliance"
          />
          <RequirementsList
            title="Best-practices missed"
            items={dashboardData.bestPractices}
            type="practices"
          />
        </div>

        {/* Key Trigger Moments */}
        {dashboardData.keyTriggerMoments.map((moment, index) => (
          <TriggerMoment
            key={index}
            category={moment.category}
            customerTrigger={moment.customerTrigger}
            actualResponse={moment.actualResponse}
            optimalResponse={moment.optimalResponse}
          />
        ))}

        {/* Practice Session Buttons */}
        <div className="flex gap-4">
          <button className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition-colors">
            Retention strategies
          </button>
          <button className="bg-gray-500 text-white px-6 py-3 rounded-lg hover:bg-gray-600 transition-colors">
            General session
          </button>
        </div>

        {/* Performance Categories */}
        <div className="mt-8">
          <CategoryList categories={dashboardData.performanceCategories} />
        </div>
      </div>
    </Layout>
  );
}
