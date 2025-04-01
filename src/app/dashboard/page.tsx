import React from "react";
import DashboardPage from "@/components/pages/DashboardPage";
import SchemaMarkup from "@/components/ui/SchemaMarkup";

export default function Dashboard() {
  return (
    <>
      <SchemaMarkup pageName="dashboard" />
      <DashboardPage />
    </>
  );
}
