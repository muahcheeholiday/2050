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
          <span className="font-headline font-bold tracking-widest text-lg sm:text-xl uppercase">
            2050
          </span>
        </div>

        <div className="mb-3">
          <span className="inline-block bg-yellow-400 text-black font-headline font-semibold text-xs sm:text-sm tracking-wider uppercase px-3 py-1">
            {scene.year}
          </span>
          {isEnding && (
            <span
              className={`inline-block ml-2 text-white font-headline font-semibold text-xs sm:text-sm tracking-wider uppercase px-3 py-1 ${
                endingStyles[scene.ending!].badge
              }`}
            >
              Ending
            </span>
          )}
        </div>

        <h1 className="font-headline font-bold uppercase text-3xl sm:text-5xl leading-tight mb-4 sm:mb-6">
          {scene.title}
        </h1>

        <p className="text-base sm:text-lg leading-relaxed text-neutral-200 mb-8 sm:mb-10 mx-auto max-w-xl">
          {scene.narrative}
        </p>

        {scene.stat && (
          <div className="border-l-4 border-yellow-400 bg-black/50 backdrop-blur-sm px-5 py-4 mb-8 sm:mb-10 mx-auto max-w-xl text-left">
            <p className="font-headline font-bold text-3xl sm:text-4xl text-yellow-400 mb-1">
              {scene.stat.value}
            </p>
            <p className="text-sm sm:text-base text-neutral-300 leading-snug mb-2">
              {scene.stat.label}
            </p>
            <p className="text-xs text-neutral-500 uppercase tracking-wide">
              Source: {scene.stat.source}
            </p>
          </div>
        )}

        {scene.newsFlash && (
          <div className="bg-neutral-900/90 backdrop-blur-sm border border-neutral-700 mx-auto max-w-xl mb-8 sm:mb-10 text-left">
            <div className="flex items-center gap-2 bg-red-700 px-4 py-1.5">
              <span className="font-headline font-bold text-xs tracking-widest uppercase text-white">
                Breaking Projection
              </span>
            </div>
            <div className="px-5 py-4">
              <p className="text-xs text-neutral-500 uppercase tracking-wide mb-1">
                {scene.newsFlash.dateline}
              </p>
              <h3 className="font-headline font-bold text-xl sm:text-2xl mb-3 leading-snug">
                {scene.newsFlash.headline}
              </h3>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {scene.newsFlash.stats.map((s, i) => (
                  <div key={i} className="border-t-2 border-yellow-400 pt-2">
                    <p className="font-headline font-bold text-lg sm:text-xl text-yellow-400">
                      {s.value}
                    </p>
                    <p className="text-[11px] sm:text-xs text-neutral-400 leading-tight">
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-neutral-300 leading-relaxed mb-3">
                {scene.newsFlash.body}
              </p>
              <p className="text-[11px] text-neutral-500 italic">
                {scene.newsFlash.source}
              </p>
            </div>
          </div>
        )}

        <div className="space-y-3 mx-auto max-w-xl w-full">
          {!isEnding &&
            scene.choices.map((choice, i) => (
              <button
                key={i}
                onClick={() => setSceneId(choice.nextId)}
                className="w-full text-left px-5 py-4 bg-black/40 border-l-4 border-yellow-400 hover:bg-black/60 hover:border-yellow-300 transition-colors backdrop-blur-sm"
              >
                <span className="font-headline text-sm sm:text-base tracking-wide uppercase text-neutral-100">
                  {choice.text}
                </span>
              </button>
            ))}

          {isEnding && (
            <button
              onClick={handleRestart}
              className={`px-6 py-3 font-headline font-semibold uppercase tracking-wide text-black bg-yellow-400 hover:bg-yellow-300 transition-colors border-2 ${
                endingStyles[scene.ending!].accent
              }`}
            >
              Begin Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
