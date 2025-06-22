"use client";

import AnalyticsTable from "./analytics-table";
import DateIntervalSelection from "./date-interval-selection";
import MainDataDivs from "./main-data";

export default function DashboardPage() {
  
  return (
    <div>
      <div className="w-full flex flex-row justify-between gap-4 p-4">
        <h1 className="font-bold text-3xl">Dashboard</h1>
        <DateIntervalSelection />
      </div>
      <div className="w-full flex flex-row justify-between gap-4 p-4">
        <MainDataDivs />
      </div>
      <div className="w-full flex flex-row justify-between gap-4 p-4">
        <AnalyticsTable />
      </div>
    </div>
  );
}
