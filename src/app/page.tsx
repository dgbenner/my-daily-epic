"use client";

import { useState } from "react";
import {
  HeroHeader,
  ChapterBanner,
  CreateTab,
  MyStoriesTab,
  MyEpicTab,
  HeroDashboardTab,
  EchoesTab,
} from "@/components/hero";
import {
  AdminHeader,
  GlobalSettingsTab,
  CollectiveNarrativesTab,
  PsychologyTab,
  MythologyTab,
  AnalyticsTab,
  EchoesAdminTab,
} from "@/components/admin";

type ViewType = "hero" | "admin";
type HeroTabType = "Create" | "My Stories" | "My Epic" | "Hero" | "Echoes";
type AdminTabType =
  | "Global Settings"
  | "Collective Narratives"
  | "Psychology Framework"
  | "Mythology Engine"
  | "Hero Analytics"
  | "Echoes Admin";

export default function MyDailyEpic() {
  const [view, setView] = useState<ViewType>("hero");
  const [heroTab, setHeroTab] = useState<HeroTabType>("Create");
  const [adminTab, setAdminTab] = useState<AdminTabType>("Global Settings");

  const heroTabs: HeroTabType[] = ["Create", "My Stories", "My Epic", "Hero", "Echoes"];
  const adminTabs: AdminTabType[] = [
    "Global Settings",
    "Collective Narratives",
    "Psychology Framework",
    "Mythology Engine",
    "Hero Analytics",
    "Echoes Admin",
  ];

  const renderHeroContent = () => {
    switch (heroTab) {
      case "Create":
        return <CreateTab />;
      case "My Stories":
        return <MyStoriesTab />;
      case "My Epic":
        return <MyEpicTab />;
      case "Hero":
        return <HeroDashboardTab />;
      case "Echoes":
        return <EchoesTab />;
      default:
        return null;
    }
  };

  const renderAdminContent = () => {
    switch (adminTab) {
      case "Global Settings":
        return <GlobalSettingsTab />;
      case "Collective Narratives":
        return <CollectiveNarrativesTab />;
      case "Psychology Framework":
        return <PsychologyTab />;
      case "Mythology Engine":
        return <MythologyTab />;
      case "Hero Analytics":
        return <AnalyticsTab />;
      case "Echoes Admin":
        return <EchoesAdminTab />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* View Switcher */}
      <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-center gap-2">
        <span className="text-xs text-gray-400 mr-2">View:</span>
        <button
          onClick={() => setView("hero")}
          className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
            view === "hero" ? "bg-gray-800 text-white" : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          ★ Hero (Mobile)
        </button>
        <button
          onClick={() => setView("admin")}
          className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
            view === "admin" ? "bg-gray-800 text-white" : "text-gray-500 hover:bg-gray-100"
          }`}
        >
          🎲 Dungeon Master (Desktop)
        </button>
      </div>

      {view === "hero" ? (
        /* HERO VIEW */
        <div className="max-w-md mx-auto bg-white min-h-screen shadow-lg">
          <HeroHeader />
          <ChapterBanner />
          {/* Hero Tabs */}
          <div className="flex border-b border-gray-200 mt-4 px-4 overflow-x-auto">
            {heroTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setHeroTab(tab)}
                className={`px-4 py-3 text-sm font-medium transition-colors relative whitespace-nowrap ${
                  heroTab === tab ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
                {heroTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800 rounded-full" />
                )}
              </button>
            ))}
          </div>
          <div className="py-4 pb-8">{renderHeroContent()}</div>
        </div>
      ) : (
        /* ADMIN / DUNGEON MASTER VIEW */
        <div className="max-w-6xl mx-auto pb-12">
          <AdminHeader />
          {/* Admin Tabs */}
          <div className="flex border-b border-gray-200 mt-4 mx-4 overflow-x-auto">
            {adminTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setAdminTab(tab)}
                className={`px-5 py-3 text-sm font-medium transition-colors relative whitespace-nowrap ${
                  adminTab === tab ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab}
                {adminTab === tab && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gray-800 rounded-full" />
                )}
              </button>
            ))}
          </div>
          <div className="p-4 mt-2">{renderAdminContent()}</div>
        </div>
      )}
    </div>
  );
}
