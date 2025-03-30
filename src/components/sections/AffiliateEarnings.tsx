import React from "react";
import Image from "next/image";

const AffiliateEarnings: React.FC = () => {
  return (
    <div className="py-16 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif-accent text-dark">
          What You&apos;ll Earn
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Generous commissions on every purchase made through your link
        </p>
      </div>

      {/* Earnings Card */}
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden border border-mint/20">
        <div className="md:flex">
          {/* Left Side - Commission Info */}
          <div className="md:w-2/3 p-8">
            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                <h3 className="text-xl font-bold font-serif-accent text-dark">
                  20% Commission
                </h3>
              </div>
              <p className="text-text-secondary pl-4">
                On every purchase made through your link
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                <h3 className="text-xl font-bold font-serif-accent text-dark">
                  €5–€20 Per Sale
                </h3>
              </div>
              <p className="text-text-secondary pl-4">
                Typical earnings range per customer purchase
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                <h3 className="text-xl font-bold font-serif-accent text-dark">
                  Monthly Payouts
                </h3>
              </div>
              <p className="text-text-secondary pl-4">
                Via PayPal or Stripe, with detailed reporting
              </p>
            </div>
          </div>

          {/* Right Side - Testimonial */}
          <div className="md:w-1/3 bg-mint-light/30 p-8 flex flex-col justify-center">
            <div className="mb-4">
              <Image
                src="/testimonials/avatar1.jpeg"
                alt="Affiliate"
                width={60}
                height={60}
                className="rounded-full border-2 border-white"
              />
            </div>
            <p className="text-dark italic mb-4">
              &quot;I made €137 in my first month — just from sharing what I
              love!&quot;
            </p>
            <p className="text-sm text-text-secondary">
              — Sarah K., Content Creator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateEarnings;
