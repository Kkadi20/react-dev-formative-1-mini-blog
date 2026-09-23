## Formative Assessment: React "Mini Blog" Project

### Scenario

Create a React Mini Blog using Vite and TypeScript, demonstrating components, styling, optimization, and HOCs.

---

## Installation & Running the App

This project was built with **Vite** + React + TypeScript.

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open the printed local URL (usually `http://localhost:5173/`) in your browser

---

## Component Type Choice

All components in this project (`Header`, `Post`, `PostList`, `App`) are **functional components**. This follows React's own recommendation function components are less verbose than class components, and newer React features (like hooks such as `useEffect`, used in the `withLogger` HOC) are only available in function components.

---

## Styling

Two styling methods were used:
1. **External CSS files**  `App.css` for overall layout, `Post.css` for individual post card styling.
2. **Inline styles** —used for conditional styling, to highlight posts by a specific author with a different background color, since inline styles work well for dynamic, data-driven styling decisions.

---

## Optimization

- React.memo is used for Post to avoid unnecessary re-renders when its props do not change.
- A unique key is used for each post in the list so React can track them properly.
- A withLogger HOC is used with Header to log when it mounts and unmounts.

---

## Challenges Faced

I didn't run into any major technical bugs or blockers while building this project. The main challenge was more about practice than problem-solving moving from learning concepts (like typed props, styling methods, or optimization with `React.memo`) to actually applying them correctly in a real, working project. It took a bit of trial and error to translate what I understood in theory into code that worked as expected, but each piece became clearer once I built it myself.

---

## Libraries Used

- React
- TypeScript
- Vite (build tool)

No additional external libraries were used.