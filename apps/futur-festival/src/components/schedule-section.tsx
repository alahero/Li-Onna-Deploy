'use client';

import React, { useState } from 'react';
import { cn } from '@mg/shared-utils';

interface ScheduleSet {
  artistName: string;
  startTime: string;
  endTime: string;
  headliner?: boolean;
}

interface Stage {
  stageName: string;
  sets: ScheduleSet[];
}

interface ScheduleDay {
  day: string;
  stages: Stage[];
}

interface ScheduleSectionProps {
  schedule: ScheduleDay[];
}

function SetRow({ set }: { set: ScheduleSet }) {
  return (
    <div
      className={cn(
        'flex items-center gap-4 rounded-xl border px-4 py-3 transition-all duration-200',
        set.headliner
          ? 'border-brand-purple/30 bg-brand-purple/8 hover:border-brand-purple/50 hover:bg-brand-purple/12'
          : 'border-white/5 bg-white/2 hover:border-white/15 hover:bg-white/5'
      )}
    >
      {/* Time */}
      <div className="w-24 flex-shrink-0">
        <span className={cn(
          'font-display text-sm font-bold tabular-nums',
          set.headliner ? 'text-brand-purple' : 'text-brand-cyan'
        )}>
          {set.startTime}
        </span>
        {set.endTime && (
          <span className="text-white/30 font-display text-xs ml-1">→ {set.endTime}</span>
        )}
      </div>

      {/* Artist */}
      <div className="flex-1">
        <span className={cn(
          'font-display font-black leading-tight',
          set.headliner ? 'text-white text-base' : 'text-white/80 text-sm'
        )}>
          {set.artistName}
        </span>
      </div>

      {/* Headliner badge */}
      {set.headliner && (
        <span className="flex-shrink-0 rounded-full bg-brand-purple/20 border border-brand-purple/30 px-2.5 py-0.5 font-display text-[10px] font-bold uppercase tracking-widest text-brand-purple">
          HL
        </span>
      )}
    </div>
  );
}

export function ScheduleSection({ schedule }: ScheduleSectionProps) {
  const [activeDay, setActiveDay] = useState(0);
  const [activeStage, setActiveStage] = useState(0);

  const currentDay = schedule[activeDay];
  const stages = currentDay?.stages ?? [];
  const currentStage = stages[activeStage] ?? stages[0];

  if (!schedule || schedule.length === 0) {
    return (
      <section id="schedule" className="py-24 bg-brand-black relative">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-black text-white">
            HORARIOS
          </h2>
          <div className="mx-auto mt-4 divider-neon w-24" />
          <p className="mt-8 text-white/30 font-body">Horarios próximamente.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="schedule" className="py-24 bg-brand-black relative overflow-hidden">
      <div className="absolute inset-0 grid-overlay opacity-20" />
      <div className="pointer-events-none absolute top-0 left-0 h-96 w-96 rounded-full bg-brand-cyan/6 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-[clamp(2.5rem,8vw,6rem)] font-black leading-none tracking-[-0.02em] text-white">
            HORARIOS
          </h2>
          <div className="mx-auto mt-4 divider-neon w-24" />
        </div>

        {/* Day tabs */}
        {schedule.length > 1 && (
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {schedule.map((s, i) => (
              <button
                key={i}
                onClick={() => { setActiveDay(i); setActiveStage(0); }}
                className={cn(
                  'rounded-full px-6 py-2.5 font-display text-xs font-bold uppercase tracking-[0.15em] transition-all duration-300',
                  activeDay === i
                    ? 'bg-brand-cyan text-brand-black shadow-neon-cyan'
                    : 'border border-white/15 text-white/50 hover:border-brand-cyan/40 hover:text-white'
                )}
              >
                {s.day}
              </button>
            ))}
          </div>
        )}

        {/* Stage tabs */}
        {stages.length > 1 && (
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {stages.map((stage, i) => (
              <button
                key={i}
                onClick={() => setActiveStage(i)}
                className={cn(
                  'rounded-lg px-4 py-2 font-display text-xs font-semibold uppercase tracking-wider transition-all duration-200',
                  activeStage === i
                    ? 'bg-brand-purple/20 border border-brand-purple/40 text-brand-purple'
                    : 'border border-white/10 text-white/40 hover:border-white/25 hover:text-white/70'
                )}
              >
                {stage.stageName}
              </button>
            ))}
          </div>
        )}

        {/* Sets */}
        {currentStage && (
          <div className="space-y-2">
            {currentStage.sets.length === 0 ? (
              <p className="text-center py-8 text-white/30 font-body text-sm">
                Horario de este escenario próximamente.
              </p>
            ) : (
              currentStage.sets.map((set, i) => (
                <SetRow key={i} set={set} />
              ))
            )}
          </div>
        )}

        {/* Stage label */}
        {currentStage && stages.length === 1 && (
          <div className="mt-6 text-center">
            <span className="font-display text-xs uppercase tracking-[0.25em] text-white/30">
              {currentStage.stageName}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}
