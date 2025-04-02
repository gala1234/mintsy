import React from "react";
import Link from "next/link";
import PageContainer from "@/components/layout/PageContainer";
import SuccessModalsExample from "../examples/SuccessModalsExample";
import GA4Example from "../examples/GA4Example";

const ExamplesPage = () => {
  return (
    <PageContainer>
      <h1 className="text-3xl font-bold mb-8 font-serif-accent">UI Examples</h1>

      <div className="space-y-12">
        {/* Modal Examples Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 font-serif-accent">
            Modal Examples
          </h2>
          <p className="text-text-muted mb-6">
            Various modal components used throughout the application.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <Link
                href="/examples/limit-modal"
                className="text-blue-600 hover:underline font-medium"
              >
                Limit Reached Modal Example
              </Link>
              <p className="text-gray-600 mt-1">
                Example of the limit reached modal component for various
                scenarios.
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <Link
                href="/examples/paywall-modal"
                className="text-blue-600 hover:underline font-medium"
              >
                Paywall Modal Example
              </Link>
              <p className="text-gray-600 mt-1">
                Example of the paywall modal offering subscription and
                microtransaction options.
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <Link
                href="/examples/modals-showcase"
                className="text-blue-600 hover:underline font-medium"
              >
                Modals Showcase
              </Link>
              <p className="text-gray-600 mt-1">
                Interactive showcase of both Paywall and Limit Reached modals
                together.
              </p>
            </div>
          </div>
        </section>

        {/* Success Modals Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 font-serif-accent">
            Success Modals
          </h2>
          <p className="text-text-muted mb-6">
            Different types of success modals used throughout the application.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <SuccessModalsExample />
          </div>
        </section>

        {/* Checkout & Order Examples Section */}
        <section>
          <h2 className="text-2xl font-bold mb-4 font-serif-accent">
            Checkout & Order Examples
          </h2>
          <p className="text-text-muted mb-6">
            Examples of checkout flows and ordering experiences.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-white rounded-lg shadow-sm">
              <Link
                href="/examples/checkout"
                className="text-blue-600 hover:underline font-medium"
              >
                Checkout Experience
              </Link>
              <p className="text-gray-600 mt-1">
                Interactive checkout flow for purchasing NFTs, HD downloads, and
                canvas prints.
              </p>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <Link
                href="/examples/order-print"
                className="text-blue-600 hover:underline font-medium"
              >
                Order a Print
              </Link>
              <p className="text-gray-600 mt-1">
                Example of the print ordering experience with options for
                canvas, poster, and framed prints.
              </p>
            </div>
            <GA4Example />
          </div>
        </section>
      </div>
    </PageContainer>
  );
};

export default ExamplesPage;
