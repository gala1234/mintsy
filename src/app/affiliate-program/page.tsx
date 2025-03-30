import { Metadata } from "next";
import { LinkButton } from "@/components/ui/LinkButton";

export const metadata: Metadata = {
  title: "Affiliate Program for AI Art Creation | Mintsy.ai",
  description: "Join the Mintsy.ai Affiliate Program and earn commissions by promoting our AI art generation, NFT minting, and canvas printing services.",
  keywords: "AI art affiliate, NFT minting referrals, canvas print commission, AI artwork partnership, digital art affiliate program",
};

export default function AffiliateProgramPage() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8">Affiliate Program</h1>
      
      <div className="max-w-3xl mx-auto mb-12">
        <p className="text-xl mb-6">
          Share the magic of AI art creation and earn rewards. Join the Mintsy.ai Affiliate Program 
          and earn commissions for every new user who signs up through your referral.
        </p>
        
        <div className="bg-mint-light/30 p-8 rounded-xl shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-4">How It Works</h2>
          <ol className="list-decimal pl-5 space-y-3">
            <li>Sign up for our Affiliate Program</li>
            <li>Receive your unique referral link</li>
            <li>Share your link with your audience</li>
            <li>Earn 15% commission on all purchases made by users you refer</li>
            <li>Get paid monthly via PayPal or crypto</li>
          </ol>
        </div>
        
        <div className="bg-lavander-light/30 p-8 rounded-xl shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-4">Why Promote Mintsy.ai?</h2>
          <ul className="list-disc pl-5 space-y-3">
            <li>High-quality AI art generation that impresses users</li>
            <li>Unique offering: AI art + NFT minting + canvas printing</li>
            <li>Competitive commission rate (15%)</li>
            <li>30-day cookie window</li>
            <li>Regular product updates and new features</li>
            <li>Promotional materials and support provided</li>
          </ul>
        </div>
        
        <div className="text-center">
          <LinkButton href="/register?affiliate=true">Join Affiliate Program</LinkButton>
        </div>
      </div>
    </div>
  );
} 