# 🎬 Marquee

**A daily emoji movie guessing game.** Every day, a new film is encoded in a set of emojis — no titles, no names, just symbols. Figure it out in five guesses or fewer.

---

## How It Works

Each puzzle presents 4–6 emojis that hint at a movie through mood, plot, theme, or a specific scene — deliberately not spelling out the poster. Players get five guesses. Wrong guesses unlock hints: first the genre, then the setting or era, then one cryptic plot detail. A shareable score is generated at the end.

The daily puzzle is seeded from the current date, so everyone who plays on the same day gets the same film.

---

## Tech Stack

- **React** + **TypeScript** with Vite (SWC)
- No backend, no database, no auth
- All puzzle data lives in `src/puzzles.ts`
- Daily puzzle selection is purely date-based — no server needed

---

## Project Structure

```
src/
  App.tsx        # Game logic, UI, and all styles
  puzzles.ts     # Puzzle data (emojis, answers, hints)
  main.tsx       # React entry point
public/
  marquee.svg    # Favicon
```

---

## Design

Marquee uses a dark cinema aesthetic: deep charcoal background, warm gold accents, film-strip sprocket holes on the puzzle card, and a grain overlay for texture. Typography is Playfair Display (headings) paired with DM Sans (body).

All styles are written as a CSS-in-JS string inside `App.tsx` for portability — no separate stylesheet or CSS framework required.

---

## License

GNU General Public License v3.0
