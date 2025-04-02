import { Metadata } from "next";
import ExamplesPage from "@/components/pages/ExamplesPage";
import GA4Example from "@/components/examples/GA4Example";

export const metadata: Metadata = {
  title: "UI Examples | Mintsy.ai",
  description: "Examples of UI components used in Mintsy.ai",
};

export default function Examples() {
  return;
  <>
    <ExamplesPage />
    <GA4Example />
  </>;
}
