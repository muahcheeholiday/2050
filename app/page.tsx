"use client";

import { useState } from "react";
import { scenes, START_SCENE_ID, Gender } from "@/lib/storyData";

const endingStyles: Record<string, { badge: string; accent: string }> = {
  positive: { badge: "bg-emerald-600", accent: "border-emerald-500" },
  neutral: { badge: "bg-amber-500", accent: "border-amber-400" },
  negative: { badge: "bg-red-600", accent: "border-red-500" },
};

export default function Home() {
  const [gender, setGender] = useState<Gender | null>(null);
  const [sceneId, setSceneId] = useState(START_SCENE_ID);
  const scene = scenes[sceneId];
  const isEnding = !!scene.ending;

  function handleRestart() {
    setSceneId(START_SCENE_ID);
    setGender(null);
  }

  // Character select screen
  if (!gender) {
    return (
      <div className="relative min-h-dvh w-full overflow-hidden bg-black">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url('/images/scene-summit-hall.jpg')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40" />

        <div className="relative z-10 min-h-dvh flex flex-col items-center justify-center px-6 text-center">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-8 bg-yellow-400" />
            <span className="font-headline font-bold tracking-widest text-xl uppercase">
              2050
            </span>
          </div>

          <h1 className="font-headline font-bold uppercase text-3xl sm:text-4xl mb-4 max-w-lg">
            Who will you be?
          </h1>
          <p className="text-neutral-300 max-w-md mb-10 leading-relaxed">
            A young activist has earned a seat at the table. The decisions ahead are yours to make.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <button
              onClick={() => setGender("female")}
              className="flex-1 px-6 py-4 bg-black/40 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors backdrop-blur-sm"
            >
              <span className="font-headline font-semibold uppercase tracking-wide">
                Play as Her
              </span>
            </button>
            <button
              onClick={() => setGender("male")}
              className="flex-1 px-6 py-4 bg-black/40 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors backdrop-blur-sm"
            >
              <span className="font-headline font-semibold uppercase tracking-wide">
                Play as Him
              </span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Main story screen
  return (
    <div className="relative min-h-dvh w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url('${scene.imageUrl}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/20" />

      <div className="relative z-10 min-h-dvh flex flex-col items-center justify-end px-6 pb-10 pt-24 sm:px-12 sm:pb-16 max-w-3xl mx-auto text-center">
        <div className="absolute top-6 left-1/2 -translate-x-1/2 sm:top-10 flex items-center gap-3">
          <div className="w-2 h-8 bg-yellow-400" />
          <span className="font-headline font-bold tracking-widest text-lg
