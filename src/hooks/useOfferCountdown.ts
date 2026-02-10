import { useEffect, useState } from "react";

const STORAGE_KEY = "offer_end_at_ms";
// Keep this aligned with the primary offer timer across the page.
const DEFAULT_DURATION_SEC = 30 * 60; // 00:30:00

type Countdown = { 
  hours: number; 
  minutes: number; 
  seconds: number;
  isExpired: boolean;
  totalSecondsLeft: number;
};

function clampNonNegative(n: number) {
  return Number.isFinite(n) && n > 0 ? n : 0;
}

function getOrInitEndAtMs(durationSec: number): number {
  const now = Date.now();
  if (typeof window === "undefined") return now + durationSec * 1000;

  const raw = window.localStorage.getItem(STORAGE_KEY);
  const parsed = raw ? Number(raw) : NaN;

  // If missing or invalid, initialize a fresh end time.
  // CHANGED: We no longer reset if expired — we keep the expired timestamp.
  if (!Number.isFinite(parsed)) {
    const next = now + durationSec * 1000;
    window.localStorage.setItem(STORAGE_KEY, String(next));
    return next;
  }

  return parsed;
}

function msToCountdown(ms: number): Countdown {
  const clampedMs = clampNonNegative(ms);
  const totalSecondsLeft = Math.floor(clampedMs / 1000);
  const hours = Math.floor(totalSecondsLeft / 3600);
  const minutes = Math.floor((totalSecondsLeft % 3600) / 60);
  const seconds = totalSecondsLeft % 60;
  const isExpired = ms <= 0;

  return { hours, minutes, seconds, isExpired, totalSecondsLeft };
}

export function useOfferCountdown(durationSec = DEFAULT_DURATION_SEC): Countdown {
  const [endAtMs, setEndAtMs] = useState<number>(() => getOrInitEndAtMs(durationSec));
  const [countdown, setCountdown] = useState<Countdown>(() => 
    msToCountdown(endAtMs - Date.now())
  );

  useEffect(() => {
    const nextEndAt = getOrInitEndAtMs(durationSec);
    setEndAtMs(nextEndAt);

    const tick = () => {
      const remaining = nextEndAt - Date.now();
      
      // CHANGED: When expired, we do NOT reset the timer.
      // We just show 0:00:00 and isExpired: true
      if (remaining <= 0) {
        setCountdown({
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
          totalSecondsLeft: 0,
        });
        return;
      }

      setCountdown(msToCountdown(remaining));
    };

    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [durationSec]);

  // If endAt changes, recompute immediately.
  useEffect(() => {
    setCountdown(msToCountdown(endAtMs - Date.now()));
  }, [endAtMs]);

  return countdown;
}

/**
 * Utility to reset the offer timer (for testing or admin use).
 * Call from browser console: window.resetOfferTimer()
 */
export function resetOfferTimer(): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  } catch {
    console.error("Could not reset offer timer");
  }
}

// Expose reset function globally for testing
if (typeof window !== "undefined") {
  (window as any).resetOfferTimer = resetOfferTimer;
}
