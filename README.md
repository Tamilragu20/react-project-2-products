# React Project 2 — Product Management Website

A responsive product catalog and inventory management interface built with **React**, **Vite**, **JavaScript**, and modular **CSS**.

## Features

- Top navigation bar with live search and saved-items counter (`Navbar.jsx`)
- Interactive category filtering with live item counts (`CategoryFilter.jsx`)
- Reusable product cards driven by props (`ProductCard.jsx`) displaying image, name, category, price, rating, stock, and description
- Responsive CSS Grid layout rendered with `map()` (`ProductList.jsx`) including empty-state reset controls
- Catalog summary footer (`Footer.jsx`)

## Project Structure

```text
react-project-2-products/
├── src/
│   ├── assets/
│   │   ├── prod-backpack.svg
│   │   ├── prod-headphones.svg
│   │   ├── prod-keyboard.svg
│   │   ├── prod-lamp.svg
│   │   ├── prod-monitor.svg
│   │   └── prod-watch.svg
│   ├── components/
│   │   ├── CategoryFilter.css
│   │   ├── CategoryFilter.jsx
│   │   ├── Footer.css
│   │   ├── Footer.jsx
│   │   ├── Navbar.css
│   │   ├── Navbar.jsx
│   │   ├── ProductCard.css
│   │   ├── ProductCard.jsx
│   │   ├── ProductList.css
│   │   └── ProductList.jsx
│   ├── data/
│   │   └── productsData.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

## Getting Started

```bash
npm install
npm run dev
```

To build for production:

```bash
npm run build
```
