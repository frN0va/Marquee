import { useState, useEffect, useRef } from "react";
import { PUZZLES } from "./puzzles";

interface Guess {
  text: string;
  correct: boolean;
  skipped: boolean;
}

type GameState = "playing" | "won" | "lost";

interface DayStats {
  puzzleIndex: number;
  gameState: GameState;
  guesses: Guess[];
  date: string;
}

interface AllStats {
  streak: number;
  maxStreak: number;
  played: number;
  won: number;
  guessDistribution: Record<number, number>;
  lastPlayed: string;
}

const MAX_GUESSES = 5;
const STORAGE_KEY = "marquee_stats";
const TODAY_KEY = "marquee_today";

function getDailyIndex(): number {
  const urlIndex = new URLSearchParams(window.location.search).get("puzzle");
  if (urlIndex !== null) return parseInt(urlIndex) % PUZZLES.length;
  const start = new Date("2024-01-01").getTime();
  const today = new Date().setHours(0, 0, 0, 0);
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  return diff % PUZZLES.length;
}

function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

function normalize(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function loadStats(): AllStats {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch {}
  return {
    streak: 0, maxStreak: 0, played: 0, won: 0,
    guessDistribution: { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    lastPlayed: "",
  };
}

function loadToday(): DayStats | null {
  try {
    const raw = localStorage.getItem(TODAY_KEY);
    if (raw) {
      const saved: DayStats = JSON.parse(raw);
      if (saved.date === todayStr() && saved.puzzleIndex === getDailyIndex()) return saved;
    }
  } catch {}
  return null;
}

function saveToday(day: DayStats) {
  localStorage.setItem(TODAY_KEY, JSON.stringify(day));
}

function saveStats(stats: AllStats) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

const ALL_MOVIES = PUZZLES.map(p => p.answer);

export default function App() {
  const puzzleIndex = getDailyIndex();
  const puzzle = PUZZLES[puzzleIndex];

  const savedToday = loadToday();

  const [guesses, setGuesses] = useState<Guess[]>(savedToday?.guesses ?? []);
  const [input, setInput] = useState("");
  const [gameState, setGameState] = useState<GameState>(savedToday?.gameState ?? "playing");
  const [shakeRow, setShakeRow] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [stats, setStats] = useState<AllStats>(loadStats());
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setTimeout(() => setMounted(true), 60); }, []);

  useEffect(() => {
    if (gameState !== "playing") {
      setTimeout(() => setShowStats(true), 1800);
    }
  }, [gameState]);

  useEffect(() => {
    if (!input.trim() || gameState !== "playing") {
      setSuggestions([]);
      setSelectedSuggestion(-1);
      return;
    }
    const q = normalize(input);
    const matches = ALL_MOVIES.filter(m => normalize(m).includes(q)).slice(0, 6);
    setSuggestions(matches);
    setSelectedSuggestion(-1);
  }, [input, gameState]);

  const hintsUnlocked = puzzle.hints.slice(0, Math.max(0, guesses.length - 1));

  function commitGuess(text: string) {
    if (!text.trim() || gameState !== "playing") return;
    setSuggestions([]);
    setSelectedSuggestion(-1);
    setInput("");

    const correct = normalize(text) === normalize(puzzle.answer);
    const newGuesses: Guess[] = [...guesses, { text, correct, skipped: false }];
    setGuesses(newGuesses);

    let newGameState: GameState = "playing";
    if (correct) newGameState = "won";
    else if (newGuesses.length >= MAX_GUESSES) newGameState = "lost";
    else {
      setShakeRow(newGuesses.length - 1);
      setTimeout(() => setShakeRow(null), 600);
    }

    if (newGameState !== "playing") {
      setGameState(newGameState);
      saveToday({ puzzleIndex, gameState: newGameState, guesses: newGuesses, date: todayStr() });
      updateStats(newGameState, newGuesses.length);
    } else {
      saveToday({ puzzleIndex, gameState: "playing", guesses: newGuesses, date: todayStr() });
    }

    inputRef.current?.focus();
  }

  function submitGuess() { commitGuess(input); }

  function skip() {
    if (gameState !== "playing") return;
    setSuggestions([]);
    const newGuesses: Guess[] = [...guesses, { text: "Skipped", correct: false, skipped: true }];
    setGuesses(newGuesses);

    let newGameState: GameState = "playing";
    if (newGuesses.length >= MAX_GUESSES) newGameState = "lost";

    if (newGameState !== "playing") {
      setGameState(newGameState);
      saveToday({ puzzleIndex, gameState: newGameState, guesses: newGuesses, date: todayStr() });
      updateStats(newGameState, newGuesses.length);
    } else {
      saveToday({ puzzleIndex, gameState: "playing", guesses: newGuesses, date: todayStr() });
    }
  }

  function updateStats(result: GameState, guessCount: number) {
    const prev = loadStats();
    const today = todayStr();
    const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
    const won = result === "won";
    const newStreak = won
      ? (prev.lastPlayed === yesterday || prev.lastPlayed === today ? prev.streak + 1 : 1)
      : 0;
    const dist = { ...prev.guessDistribution };
    if (won) dist[guessCount] = (dist[guessCount] ?? 0) + 1;
    else dist[0] = (dist[0] ?? 0) + 1;
    const updated: AllStats = {
      streak: newStreak,
      maxStreak: Math.max(prev.maxStreak, newStreak),
      played: prev.played + 1,
      won: prev.won + (won ? 1 : 0),
      guessDistribution: dist,
      lastPlayed: today,
    };
    setStats(updated);
    saveStats(updated);
  }

  function copyResult() {
    const attempts = gameState === "won" ? guesses.length : "X";
    const squares = guesses.map(g => g.correct ? "🟩" : g.skipped ? "⬜" : "🟥").join("");
    navigator.clipboard.writeText(`🎬 Marquee #${puzzleIndex + 1}\n${puzzle.emojis}\n${attempts}/${MAX_GUESSES} ${squares}\nhttps://marquee.n0va.tech`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  function handleInputKeyDown(e: React.KeyboardEvent) {
    if (suggestions.length > 0) {
      if (e.key === "ArrowDown") { e.preventDefault(); setSelectedSuggestion(s => Math.min(s + 1, suggestions.length - 1)); return; }
      if (e.key === "ArrowUp") { e.preventDefault(); setSelectedSuggestion(s => Math.max(s - 1, -1)); return; }
      if (e.key === "Enter" && selectedSuggestion >= 0) { e.preventDefault(); commitGuess(suggestions[selectedSuggestion]); return; }
      if (e.key === "Escape") { setSuggestions([]); setSelectedSuggestion(-1); return; }
    }
    if (e.key === "Enter") submitGuess();
  }

  const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });
  const winPct = stats.played > 0 ? Math.round((stats.won / stats.played) * 100) : 0;
  const maxDist = Math.max(...Object.values(stats.guessDistribution), 1);

  // Film strip hole SVG repeated
  const FilmStrip = () => (
    <div style={{ display: "flex", gap: 6, padding: "0 4px" }}>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i} style={{
          width: 14, height: 10,
          borderRadius: 2,
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.12)",
          flexShrink: 0,
        }} />
      ))}
    </div>
  );

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0f0e0d;
          --bg2: #181614;
          --surface: #1e1b18;
          --surface2: #252119;
          --border: rgba(255,255,255,0.08);
          --border2: rgba(255,255,255,0.14);
          --text: #f5f0e8;
          --text2: #a89f94;
          --text3: #5c5650;
          --gold: #c9a84c;
          --gold2: #e8c96a;
          --gold-dim: rgba(201,168,76,0.15);
          --green: #4caf7d;
          --green-dim: rgba(76,175,125,0.12);
          --red: #c0392b;
          --red-dim: rgba(192,57,43,0.1);
        }

        html, body { background: var(--bg); min-height: 100vh; }

        /* Subtle grain overlay */
        body::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 9999;
          opacity: 0.4;
        }

        .app {
          min-height: 100vh;
          font-family: 'DM Sans', sans-serif;
          color: var(--text);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-bottom: 80px;
        }

        /* ── HEADER ── */
        .header {
          width: 100%;
          max-width: 580px;
          padding: 32px 24px 24px;
          text-align: center;
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.6s ease, transform 0.6s ease;
          position: relative;
        }
        .header.show { opacity: 1; transform: translateY(0); }

        .header-top {
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          margin-bottom: 6px;
        }

        .logo {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 36px;
          letter-spacing: -0.5px;
          color: var(--text);
          line-height: 1;
        }
        .logo span {
          color: var(--gold);
          font-style: italic;
        }

        .btn-stats {
          position: absolute;
          right: 0;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: var(--surface);
          border: 1px solid var(--border2);
          color: var(--text3);
          font-size: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }
        .btn-stats:hover { color: var(--gold); border-color: rgba(201,168,76,0.3); background: var(--gold-dim); }

        .header-rule {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 14px 0 10px;
        }
        .header-rule-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border2), transparent);
        }
        .header-rule-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: var(--gold);
          opacity: 0.6;
        }

        .date-label {
          font-size: 10px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--text3);
          font-weight: 500;
        }

        /* ── FILM STRIP CARD ── */
        .film-card-wrap {
          width: 100%;
          max-width: 520px;
          padding: 0 20px;
          margin-bottom: 28px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.6s 0.15s ease, transform 0.6s 0.15s ease;
        }
        .film-card-wrap.show { opacity: 1; transform: translateY(0); }

        .film-card {
          background: var(--surface);
          border-radius: 16px;
          overflow: hidden;
          border: 1px solid var(--border2);
          box-shadow: 0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03);
        }

        .film-strip-bar {
          background: var(--bg);
          padding: 8px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-bottom: 1px solid var(--border);
        }

        .film-body {
          padding: 28px 24px 32px;
          text-align: center;
          position: relative;
        }

        .puzzle-eyebrow {
          font-size: 9px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--gold);
          font-weight: 500;
          margin-bottom: 20px;
          opacity: 0.8;
        }

        .emoji-display {
          font-size: 48px;
          line-height: 1;
          letter-spacing: 8px;
          display: block;
          margin-bottom: 0;
          filter: drop-shadow(0 2px 12px rgba(0,0,0,0.4));
        }

        .film-strip-bar-bottom {
          border-top: 1px solid var(--border);
          border-bottom: none;
        }

        .puzzle-badge {
          position: absolute;
          top: 12px;
          right: 16px;
          font-size: 10px;
          letter-spacing: 0.1em;
          color: var(--text3);
          font-weight: 500;
        }

        /* ── GUESS TRACKER PILL ── */
        .tracker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 6px 14px;
          background: var(--surface);
          border: 1px solid var(--border2);
          border-radius: 99px;
          margin-bottom: 24px;
          font-size: 11px;
          color: var(--text3);
          font-weight: 400;
          letter-spacing: 0.03em;
        }
        .tracker-pips { display: flex; gap: 4px; }
        .tracker-pip {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: var(--surface2);
          border: 1px solid var(--border2);
          transition: background 0.3s, border-color 0.3s;
        }
        .tracker-pip.used {
          background: var(--gold);
          border-color: var(--gold);
        }

        /* ── GUESS ROWS ── */
        .guesses-wrap {
          width: 100%;
          max-width: 520px;
          padding: 0 20px;
          margin-bottom: 16px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.6s 0.25s ease, transform 0.6s 0.25s ease;
        }
        .guesses-wrap.show { opacity: 1; transform: translateY(0); }

        .section-eyebrow {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text3);
          font-weight: 500;
          margin-bottom: 10px;
        }

        .guess-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 8px;
        }

        .guess-index {
          width: 26px; height: 26px;
          border-radius: 7px;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px;
          font-weight: 500;
          flex-shrink: 0;
          transition: all 0.25s;
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0;
        }
        .gi-empty  { background: var(--surface2); color: var(--text3); border: 1px solid var(--border); }
        .gi-active { background: var(--gold-dim); color: var(--gold); border: 1px solid rgba(201,168,76,0.3); }
        .gi-correct { background: var(--green-dim); color: var(--green); border: 1px solid rgba(76,175,125,0.3); }
        .gi-wrong  { background: var(--surface2); color: var(--text3); border: 1px solid var(--border); }
        .gi-skipped { background: var(--surface2); color: var(--text3); border: 1px solid var(--border); }

        .guess-bubble {
          flex: 1;
          height: 48px;
          border-radius: 10px;
          display: flex; align-items: center;
          padding: 0 16px;
          font-size: 14px;
          border: 1px solid transparent;
          transition: all 0.25s;
          font-family: 'DM Sans', sans-serif;
        }
        .gb-empty   { background: var(--surface2); }
        .gb-active  { background: var(--surface); border-color: var(--border2); box-shadow: 0 0 0 3px rgba(201,168,76,0.08); }
        .gb-correct { background: var(--green-dim); border-color: rgba(76,175,125,0.25); color: var(--green); font-weight: 500; }
        .gb-wrong   { background: var(--red-dim); border-color: rgba(192,57,43,0.2); color: var(--text2); font-style: italic; }
        .gb-skipped { background: var(--surface2); color: var(--text3); }
        .gb-placeholder { color: var(--text3); font-size: 13px; }

        @keyframes shake {
          0%,100% { transform: translateX(0); }
          18% { transform: translateX(-7px); }
          36% { transform: translateX(7px); }
          54% { transform: translateX(-4px); }
          72% { transform: translateX(4px); }
          88% { transform: translateX(-2px); }
        }
        .shake { animation: shake 0.55s ease; }

        /* ── HINTS ── */
        .hints-wrap {
          width: 100%;
          max-width: 520px;
          padding: 0 20px;
          margin-bottom: 16px;
        }
        .hints-card {
          background: var(--surface);
          border: 1px solid var(--border2);
          border-radius: 12px;
          overflow: hidden;
        }
        .hint-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          font-size: 13px;
          color: var(--text2);
          border-bottom: 1px solid var(--border);
        }
        .hint-row:last-child { border-bottom: none; }
        .hint-pip {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--gold);
          opacity: 0.7;
          flex-shrink: 0;
        }

        /* ── INPUT ── */
        .input-wrap {
          width: 100%;
          max-width: 520px;
          padding: 0 20px;
          margin-bottom: 10px;
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.6s 0.35s ease, transform 0.6s 0.35s ease;
          position: relative;
        }
        .input-wrap.show { opacity: 1; transform: translateY(0); }

        .input-row {
          display: flex;
          gap: 8px;
        }

        .main-input {
          flex: 1;
          height: 52px;
          background: var(--surface);
          border: 1px solid var(--border2);
          border-radius: 12px;
          padding: 0 18px;
          font-size: 15px;
          font-family: 'DM Sans', sans-serif;
          color: var(--text);
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .main-input::placeholder { color: var(--text3); }
        .main-input:focus {
          border-color: rgba(201,168,76,0.5);
          box-shadow: 0 0 0 3px rgba(201,168,76,0.08);
        }

        .btn-guess {
          height: 52px;
          padding: 0 24px;
          background: var(--gold);
          border: none;
          border-radius: 12px;
          color: #0f0e0d;
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 14px;
          letter-spacing: 0.04em;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          white-space: nowrap;
        }
        .btn-guess:hover { background: var(--gold2); transform: translateY(-1px); }
        .btn-guess:active { transform: translateY(0); }

        /* ── AUTOCOMPLETE ── */
        .suggestions {
          position: absolute;
          top: 60px;
          left: 20px;
          right: 76px;
          background: var(--surface);
          border: 1px solid var(--border2);
          border-radius: 12px;
          overflow: hidden;
          z-index: 100;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
        }
        .suggestion-item {
          padding: 11px 16px;
          font-size: 14px;
          color: var(--text2);
          cursor: pointer;
          transition: background 0.15s, color 0.15s;
          font-family: 'DM Sans', sans-serif;
          border-bottom: 1px solid var(--border);
        }
        .suggestion-item:last-child { border-bottom: none; }
        .suggestion-item:hover, .suggestion-item.active { background: var(--gold-dim); color: var(--text); }
        .suggestion-highlight { color: var(--gold); font-weight: 500; }

        .skip-row {
          width: 100%;
          max-width: 520px;
          padding: 0 20px;
          display: flex;
          justify-content: center;
          margin-bottom: 4px;
        }
        .btn-skip {
          background: none;
          border: none;
          color: var(--text3);
          font-size: 12px;
          font-family: 'DM Sans', sans-serif;
          font-weight: 400;
          letter-spacing: 0.06em;
          cursor: pointer;
          padding: 8px 14px;
          border-radius: 8px;
          transition: color 0.2s, background 0.2s;
        }
        .btn-skip:hover { color: var(--text2); background: var(--surface2); }

        /* ── RESULT ── */
        .result-wrap {
          width: 100%;
          max-width: 520px;
          padding: 0 20px;
          margin-top: 8px;
        }
        .result-card {
          background: var(--surface);
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid var(--border2);
          box-shadow: 0 8px 40px rgba(0,0,0,0.4);
        }
        .result-film-bar {
          background: var(--bg);
          padding: 7px 0;
          border-bottom: 1px solid var(--border);
          display: flex; align-items: center; justify-content: center;
          overflow: hidden;
        }
        .result-body {
          padding: 32px 28px;
          text-align: center;
        }
        .result-icon { font-size: 48px; margin-bottom: 16px; }
        .result-title {
          font-family: 'Playfair Display', serif;
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 6px;
          letter-spacing: -0.3px;
        }
        .result-title.won { color: var(--green); }
        .result-title.lost { color: var(--text); }
        .result-answer {
          font-size: 15px;
          color: var(--text2);
          margin-bottom: 24px;
          font-style: italic;
        }
        .result-answer strong { color: var(--text); font-style: normal; font-weight: 500; }

        .score-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-bottom: 28px;
        }
        .score-dot {
          width: 32px; height: 32px;
          border-radius: 8px;
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
        }
        .score-dot.correct { background: var(--green-dim); border: 1px solid rgba(76,175,125,0.25); }
        .score-dot.wrong   { background: var(--red-dim);   border: 1px solid rgba(192,57,43,0.2); }
        .score-dot.skipped { background: var(--surface2);  border: 1px solid var(--border); }

        .divider {
          height: 1px;
          background: var(--border);
          margin-bottom: 24px;
        }

        .result-actions { display: flex; gap: 10px; justify-content: center; }

        .btn-share {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          height: 48px;
          padding: 0 28px;
          border-radius: 12px;
          border: 1px solid rgba(201,168,76,0.35);
          background: var(--gold-dim);
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: var(--gold2);
          cursor: pointer;
          letter-spacing: 0.06em;
          transition: all 0.2s;
        }
        .btn-share:hover { background: rgba(201,168,76,0.25); border-color: var(--gold); }
        .btn-share.copied { background: var(--green-dim); border-color: rgba(76,175,125,0.4); color: var(--green); }

        .btn-view-stats {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          height: 48px;
          padding: 0 24px;
          border-radius: 12px;
          border: 1px solid var(--border2);
          background: var(--surface2);
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 500;
          color: var(--text2);
          cursor: pointer;
          letter-spacing: 0.06em;
          transition: all 0.2s;
        }
        .btn-view-stats:hover { color: var(--text); }

        /* ── STATS MODAL ── */
        .modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.75);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          backdrop-filter: blur(4px);
        }
        .modal {
          background: var(--surface);
          border: 1px solid var(--border2);
          border-radius: 24px;
          width: 100%;
          max-width: 440px;
          overflow: hidden;
          box-shadow: 0 24px 80px rgba(0,0,0,0.6);
        }
        .modal-header {
          padding: 24px 24px 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .modal-title {
          font-family: 'DM Sans', sans-serif;
          font-size: 16px;
          font-weight: 500;
          color: var(--text);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .modal-close {
          width: 32px; height: 32px;
          border-radius: 8px;
          background: var(--surface2);
          border: 1px solid var(--border);
          color: var(--text3);
          font-size: 14px;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .modal-close:hover { color: var(--text); border-color: var(--border2); }
        .modal-body { padding: 24px; }

        .stat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 10px;
          margin-bottom: 24px;
        }
        .stat-cell {
          background: var(--surface2);
          border: 1px solid var(--border);
          border-radius: 12px;
          padding: 14px 8px;
          text-align: center;
        }
        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 900;
          color: var(--text);
          line-height: 1;
          margin-bottom: 4px;
        }
        .stat-number.gold { color: var(--gold); }
        .stat-label {
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text3);
          font-weight: 500;
          line-height: 1.3;
        }

        .dist-section { margin-bottom: 8px; }
        .dist-title {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: var(--text3);
          font-weight: 500;
          margin-bottom: 12px;
        }
        .dist-row { display: flex; align-items: center; gap: 10px; margin-bottom: 7px; }
        .dist-label { font-size: 12px; color: var(--text3); width: 14px; text-align: right; flex-shrink: 0; font-weight: 500; }
        .dist-bar-wrap { flex: 1; height: 28px; background: var(--surface2); border-radius: 6px; overflow: hidden; border: 1px solid var(--border); }
        .dist-bar { height: 100%; background: var(--surface2); border-radius: 6px; display: flex; align-items: center; justify-content: flex-end; padding-right: 10px; transition: width 0.6s ease; min-width: 28px; }
        .dist-bar.active { background: var(--gold-dim); border: 1px solid rgba(201,168,76,0.3); }
        .dist-bar.highlight { background: linear-gradient(90deg, rgba(201,168,76,0.2), rgba(201,168,76,0.35)); }
        .dist-count { font-size: 11px; font-weight: 500; color: var(--text2); }
        .dist-bar.active .dist-count { color: var(--gold); }

        .streak-banner {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 12px;
          background: var(--gold-dim);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 12px;
          margin-bottom: 20px;
        }
        .streak-fire { font-size: 20px; }
        .streak-text { font-size: 13px; color: var(--gold2); font-weight: 500; }

        /* ── SHORT SCREEN SCALING ── */
        @media (max-height: 780px) {
          .header { padding: 16px 24px 12px; }
          .logo { font-size: 28px; }
          .header-rule { margin: 8px 0 6px; }
          .tracker { margin-bottom: 14px; padding: 4px 12px; }
          .film-card-wrap { margin-bottom: 16px; }
          .film-strip-bar { padding: 5px 0; }
          .film-body { padding: 16px 24px 20px; }
          .puzzle-eyebrow { margin-bottom: 12px; }
          .emoji-display { font-size: 38px; letter-spacing: 6px; }
          .guesses-wrap { margin-bottom: 10px; }
          .guess-bubble { height: 40px; }
          .guess-index { width: 22px; height: 22px; }
          .guess-row { margin-bottom: 5px; }
          .hints-wrap { margin-bottom: 10px; }
          .hint-row { padding: 9px 14px; font-size: 12px; }
          .input-wrap { margin-bottom: 6px; }
          .main-input { height: 44px; font-size: 14px; }
          .btn-guess { height: 44px; font-size: 13px; }
          .btn-skip { padding: 5px 12px; font-size: 11px; }
          .app { padding-bottom: 20px; }
        }
        @media (max-height: 660px) {
          .header { padding: 10px 24px 8px; }
          .logo { font-size: 24px; }
          .header-rule { margin: 6px 0 4px; }
          .date-label { display: none; }
          .tracker { margin-bottom: 10px; }
          .film-card-wrap { margin-bottom: 12px; }
          .film-body { padding: 12px 24px 14px; }
          .emoji-display { font-size: 32px; letter-spacing: 4px; }
          .puzzle-eyebrow { margin-bottom: 8px; }
          .guesses-wrap { margin-bottom: 8px; }
          .guess-bubble { height: 36px; font-size: 13px; }
          .guess-index { width: 20px; height: 20px; font-size: 10px; }
          .guess-row { margin-bottom: 4px; }
          .hint-row { padding: 7px 12px; }
          .input-wrap { margin-bottom: 4px; }
          .main-input { height: 40px; }
          .btn-guess { height: 40px; }
        }
      `}</style>

      <div className="app">

        {/* Header */}
        <div className={`header ${mounted ? "show" : ""}`}>
          <div className="header-top">
            <div className="logo">Marq<span>uee</span></div>
            <button className="btn-stats" onClick={() => setShowStats(true)} title="Stats">📊</button>
          </div>
          <div className="header-rule">
            <div className="header-rule-line" />
            <div className="header-rule-dot" />
            <div className="header-rule-line" />
          </div>
          <div className="date-label">{today}</div>
        </div>

        {/* Tracker pill */}
        <div className="tracker">
          <div className="tracker-pips">
            {Array.from({ length: MAX_GUESSES }).map((_, i) => (
              <div key={i} className={`tracker-pip ${i < guesses.length ? "used" : ""}`} />
            ))}
          </div>
          <span>{guesses.length} of {MAX_GUESSES} guesses used</span>
        </div>

        {/* Film strip puzzle card */}
        <div className={`film-card-wrap ${mounted ? "show" : ""}`}>
          <div className="film-card">
            <div className="film-strip-bar">
              <FilmStrip />
            </div>
            <div className="film-body">
              <div className="puzzle-badge">#{puzzleIndex + 1}</div>
              <div className="puzzle-eyebrow">Guess the Movie</div>
              <span className="emoji-display">{puzzle.emojis}</span>
            </div>
            <div className="film-strip-bar film-strip-bar-bottom">
              <FilmStrip />
            </div>
          </div>
        </div>

        {/* Guess rows */}
        <div className={`guesses-wrap ${mounted ? "show" : ""}`}>
          <div className="section-eyebrow">Your Guesses</div>
          {Array.from({ length: MAX_GUESSES }).map((_, i) => {
            const guess = guesses[i];
            const isActive = i === guesses.length && gameState === "playing";
            const giClass = !guess && !isActive ? "gi-empty" : isActive ? "gi-active" : guess.correct ? "gi-correct" : guess.skipped ? "gi-skipped" : "gi-wrong";
            const gbClass = !guess && !isActive ? "gb-empty" : isActive ? "gb-active" : guess.correct ? "gb-correct" : guess.skipped ? "gb-skipped" : "gb-wrong";
            return (
              <div key={i} className={`guess-row ${shakeRow === i ? "shake" : ""}`}>
                <div className={`guess-index ${giClass}`}>
                  {guess?.correct ? "✓" : guess?.skipped ? "—" : guess ? "✕" : i + 1}
                </div>
                <div className={`guess-bubble ${gbClass}`}>
                  {guess
                    ? <span>{guess.skipped ? "Skipped" : guess.text}</span>
                    : isActive
                      ? <span className="gb-placeholder">Your answer…</span>
                      : null}
                </div>
              </div>
            );
          })}
        </div>

        {/* Hints */}
        {hintsUnlocked.length > 0 && gameState === "playing" && (
          <div className="hints-wrap">
            <div className="section-eyebrow">Hints</div>
            <div className="hints-card">
              {hintsUnlocked.map((hint, i) => (
                <div key={i} className="hint-row">
                  <div className="hint-pip" />
                  {hint}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Input + Autocomplete */}
        {gameState === "playing" && (
          <>
            <div className={`input-wrap ${mounted ? "show" : ""}`}>
              <div className="input-row">
                <input
                  ref={inputRef}
                  className="main-input"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                  placeholder="Type your movie guess…"
                  autoFocus
                  autoComplete="off"
                />
                <button className="btn-guess" onClick={submitGuess}>Guess</button>
              </div>
              {suggestions.length > 0 && (
                <div className="suggestions">
                  {suggestions.map((s, i) => {
                    const q = normalize(input);
                    const norm = normalize(s);
                    const idx = norm.indexOf(q);
                    const display = idx >= 0
                      ? <>{s.slice(0, idx)}<span className="suggestion-highlight">{s.slice(idx, idx + input.length)}</span>{s.slice(idx + input.length)}</>
                      : <>{s}</>;
                    return (
                      <div
                        key={s}
                        className={`suggestion-item ${i === selectedSuggestion ? "active" : ""}`}
                        onMouseDown={e => { e.preventDefault(); setInput(s); setSuggestions([]); inputRef.current?.focus(); }}
                      >
                        {display}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            <div className="skip-row">
              <button className="btn-skip" onClick={skip}>Skip this guess →</button>
            </div>
          </>
        )}

        {/* Result */}
        {gameState !== "playing" && (
          <div className="result-wrap">
            <div className="result-card">
              <div className="result-film-bar"><FilmStrip /></div>
              <div className="result-body">
                <div className="result-icon">{gameState === "won" ? "🎬" : "🎞️"}</div>
                <div className={`result-title ${gameState}`}>
                  {gameState === "won" ? `Lights, camera, action!` : "Cut! Try again tomorrow"}
                </div>
                <div className="result-answer">
                  {gameState === "lost" && "The film was "}
                  <strong>{puzzle.answer}</strong>
                  {gameState === "won" && ` — in ${guesses.length} ${guesses.length === 1 ? "guess" : "guesses"}`}
                </div>

                <div className="score-row">
                  {guesses.map((g, i) => (
                    <div key={i} className={`score-dot ${g.correct ? "correct" : g.skipped ? "skipped" : "wrong"}`}>
                      {g.correct ? "🟩" : g.skipped ? "⬜" : "🟥"}
                    </div>
                  ))}
                </div>

                <div className="divider" />

                <div className="result-actions">
                  <button className={`btn-share ${copied ? "copied" : ""}`} onClick={copyResult}>
                    {copied ? "✓ Copied to clipboard" : "↑ Share your result"}
                  </button>
                  <button className="btn-view-stats" onClick={() => setShowStats(true)}>
                    📊 Stats
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Stats Modal */}
        {showStats && (
          <div className="modal-overlay" onClick={e => { if (e.target === e.currentTarget) setShowStats(false); }}>
            <div className="modal">
              <div className="modal-header">
                <div className="modal-title">Your Stats</div>
                <button className="modal-close" onClick={() => setShowStats(false)}>✕</button>
              </div>
              <div className="modal-body">
                {stats.streak >= 2 && (
                  <div className="streak-banner">
                    <span className="streak-fire">🔥</span>
                    <span className="streak-text">{stats.streak} day streak — keep it up!</span>
                  </div>
                )}
                <div className="stat-grid">
                  <div className="stat-cell">
                    <div className="stat-number">{stats.played}</div>
                    <div className="stat-label">Played</div>
                  </div>
                  <div className="stat-cell">
                    <div className="stat-number">{winPct}%</div>
                    <div className="stat-label">Win Rate</div>
                  </div>
                  <div className="stat-cell">
                    <div className={`stat-number ${stats.streak > 0 ? "gold" : ""}`}>{stats.streak}</div>
                    <div className="stat-label">Current Streak</div>
                  </div>
                  <div className="stat-cell">
                    <div className="stat-number">{stats.maxStreak}</div>
                    <div className="stat-label">Best Streak</div>
                  </div>
                </div>
                <div className="dist-section">
                  <div className="dist-title">Guess Distribution</div>
                  {[1, 2, 3, 4, 5].map(n => {
                    const count = stats.guessDistribution[n] ?? 0;
                    const pct = Math.max((count / maxDist) * 100, 8);
                    const isToday = gameState === "won" && guesses.length === n;
                    return (
                      <div key={n} className="dist-row">
                        <div className="dist-label">{n}</div>
                        <div className="dist-bar-wrap">
                          <div className={`dist-bar ${isToday ? "highlight" : count > 0 ? "active" : ""}`} style={{ width: `${pct}%` }}>
                            <span className="dist-count">{count}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="dist-row">
                    <div className="dist-label" style={{ color: "var(--red)", opacity: 0.7 }}>✕</div>
                    <div className="dist-bar-wrap">
                      <div className="dist-bar" style={{ width: `${Math.max(((stats.guessDistribution[0] ?? 0) / maxDist) * 100, 8)}%`, background: "rgba(192,57,43,0.12)", border: "1px solid rgba(192,57,43,0.2)" }}>
                        <span className="dist-count" style={{ color: "var(--red)", opacity: 0.7 }}>{stats.guessDistribution[0] ?? 0}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
