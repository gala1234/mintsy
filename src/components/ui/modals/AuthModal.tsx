"use client";

import React, { useState } from "react";
import { Button } from "../elements/Button";
import Backdrop from "../loading/Backdrop";
import { cn } from "@/lib/utils";
import styles from "./auth-modal.module.css";
import SparkleEffect from "../SparkleEffect";

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
  className = "",
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
    <>
      <Backdrop
        isOpen={isOpen}
        onClick={onClose}
        className={styles.modalBackdrop}
      />
      <div
        className={cn(
          "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl shadow-lg p-6 md:p-8 w-[95%] max-w-md z-50 transition-all duration-300 ease-in-out max-h-[90vh] overflow-y-auto",
          styles.modalContainer,
          className
        )}
        style={{ backgroundColor: "#FDFBF7" }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Header with illustration */}
        <div className="text-center mb-6 relative">
          {/* Soft illustration with sparkle effect */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
            <SparkleEffect />
          </div>
          <div className="flex justify-center mb-4">
            <div
              className={`w-20 h-20 rounded-full bg-gradient-to-br from-[#B7D7C2] to-[#9D7ECF]/30 flex items-center justify-center ${styles.avatarContainer}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#43405D]"
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
          <h2 className="text-2xl font-medium text-[#43405D] mb-2">
            {activeView === "login" ? "Log In to Mintsy" : "Join Mintsy"}
          </h2>
          <p className="text-gray-500">
            Create, print, and save your art forever
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-6">
          <button
            className={`flex-1 py-3 font-medium text-center transition-all duration-300 ${
              activeView === "signup"
                ? "text-[#F36F5A] border-b-2 border-[#F36F5A]"
                : "text-gray-500 hover:text-[#43405D]"
            }`}
            onClick={() => setActiveView("signup")}
          >
            Sign Up
          </button>
          <button
            className={`flex-1 py-3 font-medium text-center transition-all duration-300 ${
              activeView === "login"
                ? "text-[#F36F5A] border-b-2 border-[#F36F5A]"
                : "text-gray-500 hover:text-[#43405D]"
            }`}
            onClick={() => setActiveView("login")}
          >
            Log In
          </button>
        </div>

        {/* Login Form */}
        {activeView === "login" && (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="login-email"
                className="block text-sm font-medium text-[#43405D] mb-1"
              >
                Email
              </label>
              <input
                id="login-email"
                name="email"
                type="email"
                required
                value={loginForm.email}
                onChange={handleLoginChange}
                className={`w-full py-3 px-4 rounded-lg border-2 border-[#B7D7C2] text-[#43405D] focus:outline-none focus:border-[#F36F5A] transition-colors ${styles.inputField}`}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="login-password"
                className="block text-sm font-medium text-[#43405D] mb-1"
              >
                Password
              </label>
              <input
                id="login-password"
                name="password"
                type="password"
                required
                value={loginForm.password}
                onChange={handleLoginChange}
                className={`w-full py-3 px-4 rounded-lg border-2 border-[#B7D7C2] text-[#43405D] focus:outline-none focus:border-[#F36F5A] transition-colors ${styles.inputField}`}
                placeholder="••••••••"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="rememberMe"
                  type="checkbox"
                  checked={loginForm.rememberMe}
                  onChange={handleLoginChange}
                  className="h-4 w-4 text-primary border-mint rounded focus:ring-primary"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-500"
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
              className="mt-6 bg-[#F36F5A] hover:bg-[#F36F5A]/90 text-white"
            >
              Log In
            </Button>

            <div className="relative flex items-center justify-center mt-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative px-4 bg-white text-sm text-gray-500">
                Or continue with
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <button
                type="button"
                className={`flex justify-center items-center py-2 px-4 border-2 border-[#B7D7C2]/50 rounded-lg hover:bg-[#B7D7C2]/10 transition-colors ${styles.socialButton}`}
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>
              <button
                type="button"
                className={`flex justify-center items-center py-2 px-4 border-2 border-[#B7D7C2]/50 rounded-lg hover:bg-[#B7D7C2]/10 transition-colors ${styles.socialButton}`}
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </button>
            </div>
          </form>
        )}

        {/* Sign Up Form */}
        {activeView === "signup" && (
          <form onSubmit={handleSignupSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="signup-name"
                className="block text-sm font-medium text-[#43405D] mb-1"
              >
                Full Name
              </label>
              <input
                id="signup-name"
                name="name"
                type="text"
                required
                value={signupForm.name}
                onChange={handleSignupChange}
                className={`w-full py-3 px-4 rounded-lg border-2 border-[#B7D7C2] text-[#43405D] focus:outline-none focus:border-[#F36F5A] transition-colors ${styles.inputField}`}
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="signup-email"
                className="block text-sm font-medium text-[#43405D] mb-1"
              >
                Email
              </label>
              <input
                id="signup-email"
                name="email"
                type="email"
                required
                value={signupForm.email}
                onChange={handleSignupChange}
                className={`w-full py-3 px-4 rounded-lg border-2 border-[#B7D7C2] text-[#43405D] focus:outline-none focus:border-[#F36F5A] transition-colors ${styles.inputField}`}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="signup-password"
                className="block text-sm font-medium text-[#43405D] mb-1"
              >
                Password
              </label>
              <input
                id="signup-password"
                name="password"
                type="password"
                required
                value={signupForm.password}
                onChange={handleSignupChange}
                className={`w-full py-3 px-4 rounded-lg border-2 border-[#B7D7C2] text-[#43405D] focus:outline-none focus:border-[#F36F5A] transition-colors ${styles.inputField}`}
                placeholder="••••••••"
              />
            </div>

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
                <label htmlFor="terms" className="text-gray-500">
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
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative px-4 bg-white text-sm text-gray-500">
                Or continue with
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-6">
              <button
                type="button"
                className={`flex justify-center items-center py-2 px-4 border-2 border-[#B7D7C2]/50 rounded-lg hover:bg-[#B7D7C2]/10 transition-colors ${styles.socialButton}`}
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Google
              </button>
              <button
                type="button"
                className={`flex justify-center items-center py-2 px-4 border-2 border-[#B7D7C2]/50 rounded-lg hover:bg-[#B7D7C2]/10 transition-colors ${styles.socialButton}`}
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.203 2.397.1 2.65.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.14 18.163 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                    clipRule="evenodd"
                  />
                </svg>
                GitHub
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
};

export default AuthModal;
