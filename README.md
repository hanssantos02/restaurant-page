# La Petite Fourchette — Restaurant Page

A small restaurant homepage with tabbed browsing (Home / Menu / Contact), built with vanilla JS and bundled with webpack. A project from [The Odin Project](https://www.theodinproject.com/lessons/javascript-restaurant-page).

## Run it

```bash
npm install
npx webpack serve
```

Then open `http://localhost:8080`.

To build once into `dist/`:

```bash
npx webpack
```

## How it works

- `src/template.html` holds only the shell: header, nav buttons, and an empty `div#content`.
- Each tab is its own module (`src/home.js`, `src/menu.js`, `src/contact.js`) exporting a function that builds its section with `document.createElement` and appends it to `#content`.
- `src/index.js` is a tiny router: every tab click wipes `#content` with `replaceChildren()` and runs the chosen module. The active tab is marked with `aria-current="page"`.
- `src/style.css` is the bistro theme, bundled via `import "./style.css"`.

## Tech

Vanilla JavaScript (ES modules), CSS, webpack 5.
