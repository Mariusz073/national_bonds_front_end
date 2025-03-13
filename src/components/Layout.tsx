"use client";

import React from "react";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6">
        <div className="space-y-8">
          {/* Logo */}
          <div className="text-2xl font-semibold text-gray-600">nada</div>

          {/* Navigation */}
          <nav className="space-y-6">
            <Link
              href="/"
              className="block text-gray-500 hover:text-gray-900 transition-colors"
            >
              home
            </Link>
            <Link
              href="/profile"
              className="block text-gray-500 hover:text-gray-900 transition-colors"
            >
              my profile
            </Link>
            <Link
              href="/history"
              className="block text-gray-500 hover:text-gray-900 transition-colors"
            >
              session history
            </Link>
            <Link
              href="/feedback"
              className="block text-amber-600 hover:text-amber-700 transition-colors"
            >
              feedback
            </Link>
            <Link
              href="/settings"
              className="block text-gray-500 hover:text-gray-900 transition-colors"
            >
              settings
            </Link>
          </nav>

          {/* Speak to nada button */}
          <button className="w-full bg-amber-600 text-white py-3 px-4 rounded-lg hover:bg-amber-700 transition-colors">
            Speak to nada
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 bg-white p-8">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
