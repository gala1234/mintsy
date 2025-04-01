"use client";

import React, { useState } from "react";
import { Button } from "../elements/Button";
import { Input } from "../elements/Input";
import { AuthButton } from "../elements/AuthButton";
import ModalLayout from "./ModalLayout";
import Tabs from "../elements/Tabs";

export interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView?: "login" | "signup";
  className?: string;
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialView = "signup",
}) => {
  const [activeView, setActiveView] = useState<"login" | "signup">(initialView);
  const [isLoading, setIsLoading] = useState(false);

  // Form states
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const [signupForm, setSignupForm] = useState({
    name: "",
    email: "",
    password: "",
    agreeToTerms: false,
  });

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle successful login
      onClose();
    }, 1500);
  };

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle successful signup
      onClose();
    }, 1500);
  };

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSignupChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSignupForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <ModalLayout isOpen={isOpen} onClose={onClose} contentClassName="h-[90vh]">
      <div className="flex flex-col items-center">
        {/* Header with illustration */}
        <div className="text-center mb-6 relative">
          {/* Soft illustration with sparkle effect */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none"></div>
          <div className="flex justify-center mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#B7D7C2] to-[#9D7ECF]/30 flex items-center justify-center animate-pulse-custom relative overflow-hidden">
              <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-gradient-to-br from-[rgba(183,215,194,0)] via-[rgba(183,215,194,0.4)] to-[rgba(183,215,194,0)] transform rotate-45 animate-avatar-shimmer"></div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-text-secondary"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-medium text-text mb-2">
            {activeView === "login" ? "Log In to Mintsy" : "Join Mintsy"}
          </h2>
          <p className="text-text-secondary">
            Create, print, and save your art forever
          </p>
        </div>

        {/* Tabs */}
        <Tabs
          items={[
            { id: "signup", label: "Sign Up" },
            { id: "login", label: "Log In" },
          ]}
          value={activeView}
          onChange={(value) => setActiveView(value as "login" | "signup")}
          className="mb-6"
        />

        {/* Login Form */}
        {activeView === "login" && (
          <form onSubmit={handleLoginSubmit} className="w-full space-y-4">
            <Input
              id="login-email"
              name="email"
              type="email"
              required
              value={loginForm.email}
              onChange={handleLoginChange}
              placeholder="your@email.com"
              label="Email"
            />

            <Input
              id="login-password"
              name="password"
              type="password"
              required
              value={loginForm.password}
              onChange={handleLoginChange}
              placeholder="••••••••"
              label="Password"
            />

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={loginForm.rememberMe}
                  onChange={handleLoginChange}
                  className="h-4 w-4 text-primary border-mint rounded focus:text-primary"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-text"
                >
                  Remember me
                </label>
              </div>

              <a
                href="#"
                className="text-sm font-medium text-primary hover:text-primary-hover"
              >
                Forgot password?
              </a>
            </div>

            <Button
              type="submit"
              variant="primary"
              fullWidth={true}
              isLoading={isLoading}
            >
              Log In
            </Button>

            <div className="relative flex items-center justify-center mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative px-4 bg-white text-sm text-text-secondary">
                Or continue with
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <AuthButton
                provider="google"
                className="transition-all duration-300 relative overflow-hidden hover:bg-[rgba(183,215,194,0.15)] hover:border-[rgba(157,126,207,0.3)] social-button-hover"
              />
              <AuthButton
                provider="github"
                className="transition-all duration-300 relative overflow-hidden hover:bg-[rgba(183,215,194,0.15)] hover:border-[rgba(157,126,207,0.3)] social-button-hover"
              />
            </div>
          </form>
        )}

        {/* Sign Up Form */}
        {activeView === "signup" && (
          <form onSubmit={handleSignupSubmit} className="w-full space-y-4">
            <Input
              id="signup-name"
              name="name"
              type="text"
              required
              value={signupForm.name}
              onChange={handleSignupChange}
              placeholder="Your name"
              label="Full Name"
            />

            <Input
              id="signup-email"
              name="email"
              type="email"
              required
              value={signupForm.email}
              onChange={handleSignupChange}
              placeholder="your@email.com"
              label="Email"
            />

            <Input
              id="signup-password"
              name="password"
              type="password"
              required
              value={signupForm.password}
              onChange={handleSignupChange}
              placeholder="••••••••"
              label="Password"
            />

            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  name="agreeToTerms"
                  type="checkbox"
                  required
                  checked={signupForm.agreeToTerms}
                  onChange={handleSignupChange}
                  className="h-4 w-4 text-primary border-mint rounded focus:ring-primary"
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="text-text-secondary">
                  I agree to the{" "}
                  <a
                    href="/terms-of-service"
                    className="text-primary hover:text-primary-hover"
                  >
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a
                    href="/privacy-policy"
                    className="text-primary hover:text-primary-hover"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
            </div>

            <Button
              type="submit"
              variant="gradient"
              fullWidth={true}
              isLoading={isLoading}
              className="mt-6 bg-gradient-to-r from-[#B7D7C2] via-[#9D7ECF] to-[#F36F5A] text-white hover:brightness-105"
            >
              Create Account
            </Button>

            <div className="relative flex items-center justify-center mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative px-4 bg-white text-sm text-text-secondary">
                Or continue with
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <AuthButton provider="google" />
              <AuthButton provider="github" />
            </div>
          </form>
        )}
      </div>
    </ModalLayout>
  );
};

export default AuthModal;
