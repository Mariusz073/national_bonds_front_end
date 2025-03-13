"use client";

import React from "react";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-8 fixed h-full">
        <div className="space-y-10">
          {/* Logo */}
          <div className="text-3xl font-architects-daughter text-gray-500">
            nada
          </div>

          {/* Navigation */}
          <nav className="space-y-6">
            <Link
              href="/"
              className="block font-architects-daughter text-lg text-gray-500 hover:text-gray-700"
            >
              home
            </Link>
            <Link
              href="/profile"
              className="block font-architects-daughter text-lg text-gray-500 hover:text-gray-700"
            >
              my profile
            </Link>
            <Link
              href="/history"
              className="block font-architects-daughter text-lg text-gray-500 hover:text-gray-700"
            >
              session history
            </Link>
            <Link
              href="/feedback"
              className="block font-architects-daughter text-lg text-amber-600 hover:text-amber-700"
            >
              feedback
            </Link>
            <Link
              href="/settings"
              className="block font-architects-daughter text-lg text-gray-500 hover:text-gray-700"
            >
              settings
            </Link>
          </nav>

          {/* Speak to nada button */}
          <button className="w-full bg-amber-600 text-white py-3 px-4 rounded-lg hover:bg-amber-700 transition-colors font-architects-daughter text-lg">
            Speak to nada
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64 p-8 bg-white">
        <div className="max-w-6xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
