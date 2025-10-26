# Runner Game

A tiny, single-file JavaScript runner game — jump over the enemy and try not to get caught. It's a simple demo built with plain HTML, CSS, and JavaScript (no frameworks).

## Demo
Open `index.html` in your browser to play. The project includes small GIF sprites and a short fail sound.

## Controls
- Press the spacebar to start the game and to jump.

## How it works (short)
- `main.js` listens for the spacebar and adds a CSS class to animate the hero jump.
- The villain (enemy) moves using a CSS animation. A collision check runs in a short interval and triggers a fail sound and an alert when the hero is hit.

## Files
- `index.html` — main HTML page and game markup.
- `main.css` — styling and animations for the hero and villain.
- `main.js` — game logic (jump, collision detection, fail handling).
- `images/` — contains `hero.gif`, `wolf.gif`, and an icon used by the page.
- `4QUETDA-soft-fail.mp3` — fail sound played on collision.

## Run locally (quick)
You can usually just double-click `index.html` to open it in your browser. If the game uses any features that require a server (or your browser blocks local media), run a simple HTTP server.

Using Python 3 (PowerShell):

```powershell
# from the project root
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Or use VS Code's Live Server extension for a quick preview.

## Known behavior / Notes
- On collision the game plays the fail sound, stops the villain's animation and shows an alert. Press the spacebar afterwards to restart (the villain animation restarts when the hero jumps).
- The implementation is intentionally compact and suitable as a learning example.

## Contributions
Small fixes or improvements welcome. This is a tiny demo; open a PR or file an issue if you want to add features like scoring, mobile touch controls, or improved restart flow.

## License
MIT — feel free to reuse and remix.

---

If you want, I can: add a screenshot to the README, wire up a simple score counter, add mobile touch controls, or improve the restart flow. Tell me which you'd prefer next.