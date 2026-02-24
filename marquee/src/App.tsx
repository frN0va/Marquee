import { useState, useEffect, useRef } from "react";
import { PUZZLES } from "./puzzles";

interface Guess {
  text: string;
  correct: boolean;
  skipped: boolean;
}

type GameState = "playing" | "won" | "lost";

const MAX_GUESSES = 5;

function getDailyIndex(): number {
  const start = new Date("2024-01-01").getTime();
  const today = new Date().setHours(0, 0, 0, 0);
  const diff = Math.floor((today - start) / (1000 * 60 * 60 * 24));
  return diff % PUZZLES.length;
}

function normalize(str: string): string {
  return str.toLowerCase().replace(/[^a-z0-9]/g, "");
}

export default function App() {
  const puzzleIndex = getDailyIndex();
  const puzzle = PUZZLES[puzzleIndex];

  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [input, setInput] = useState("");
  const [gameState, setGameState] = useState<GameState>("playing");
  const [shakeRow, setShakeRow] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);
  const [mounted, setMounted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { setTimeout(() => setMounted(true), 60); }, []);

  const hintsUnlocked = puzzle.hints.slice(0, Math.max(0, guesses.length - 1));

  function submitGuess() {
    if (!input.trim() || gameState !== "playing") return;
    const correct = normalize(input) === normalize(puzzle.answer);
    const newGuesses: Guess[] = [...guesses, { text: input, correct, skipped: false }];
    setGuesses(newGuesses);
    setInput("");
    if (correct) setGameState("won");
    else if (newGuesses.length >= MAX_GUESSES) setGameState("lost");
    else {
      setShakeRow(newGuesses.length - 1);
      setTimeout(() => setShakeRow(null), 600);
    }
    inputRef.current?.focus();
  }

  function skip() {
    if (gameState !== "playing") return;
    const newGuesses: Guess[] = [...guesses, { text: "Skipped", correct: false, skipped: true }];
    setGuesses(newGuesses);
    if (newGuesses.length >= MAX_GUESSES) setGameState("lost");
  }

  function copyResult() {
    const attempts = gameState === "won" ? guesses.length : "X";
    const squares = guesses.map(g => g.correct ? "🟩" : g.skipped ? "⬜" : "🟥").join("");
    navigator.clipboard.writeText(`🎬 Marquee #${puzzleIndex + 1}\n${puzzle.emojis}\n${attempts}/${MAX_GUESSES} ${squares}\nhttps://marquee.n0va.tech`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  }

  const today = new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" });

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

        .logo {
          font-family: 'Playfair Display', serif;
          font-weight: 900;
          font-size: 36px;
          letter-spacing: -0.5px;
          color: var(--text);
          line-height: 1;
          margin-bottom: 6px;
        }
        .logo span {
          color: var(--gold);
          font-style: italic;
        }

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
      `}</style>

      <div className="app">

        {/* Header */}
        <div className={`header ${mounted ? "show" : ""}`}>
          <div className="logo">Marq<span>uee</span></div>
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

        {/* Input */}
        {gameState === "playing" && (
          <>
            <div className={`input-wrap ${mounted ? "show" : ""}`}>
              <div className="input-row">
                <input
                  ref={inputRef}
                  className="main-input"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && submitGuess()}
                  placeholder="Type your movie guess…"
                  autoFocus
                />
                <button className="btn-guess" onClick={submitGuess}>Guess</button>
              </div>
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

                <button className={`btn-share ${copied ? "copied" : ""}`} onClick={copyResult}>
                  {copied ? "✓ Copied to clipboard" : "↑ Share your result"}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}
