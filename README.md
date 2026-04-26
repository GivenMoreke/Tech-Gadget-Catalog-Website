# BeyondGadget — Interactive Tech Gadget Catalog

A fully interactive, multi-page tech gadget catalog website built with **HTML, CSS, and JavaScript**.

The site allows users to browse, search, compare, and bookmark tech gadgets across multiple categories, with a persistent shopping cart and mobile-responsive design.

---

## Live Demo

> Clone the repo and open `index.html` in your browser — no server required.

---

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Home page with search, gadget details, favourites, and comparison |
| `products.html` | Full product catalog with category filtering |
| `about.html` | About page |
| `contact.html` | Contact page |

---

## Features

### Search & Discovery
- Search gadgets by name, category, or specs in real time
- Search triggered by button click or Enter key
- Clear search resets results instantly

### Gadget Details
- Click any gadget to view full specs — RAM, storage, battery, display, processor, OS
- Detailed spec card with product image and price

### Favourites / Bookmarks
- Bookmark gadgets to save them to a favourites panel
- Remove favourites directly from the panel
- Bookmark button updates dynamically per gadget

### Side-by-Side Comparison
- Select 2 gadgets (Ctrl+click or double-click) to compare
- Dynamic comparison table generated from gadget data
- Limited to 2 gadgets with user notification if exceeded

### Shopping Cart
- Add gadgets to cart from the detail view
- Cart persists across page refreshes using **localStorage**
- Cart count badge updates in real time on the navbar

### Print Specifications
- Print any gadget's full spec sheet with a single click
- Opens a clean print-formatted popup window

### Mobile Responsive
- Hamburger menu for mobile navigation
- Mobile menu slides in and closes on link click

### Notifications
- Animated toast notifications for all user actions (add to cart, bookmark, warnings)
- Slides in from right, auto-dismisses after 3 seconds

---

## Gadget Categories

The catalog includes **24 gadgets** across 6 categories:

-  **Smartphones** — iPhone 15 Pro, Samsung Galaxy S24, Google Pixel 8 Pro, OnePlus 12, Xiaomi 14 Ultra, Nothing Phone 2
- **Laptops** — MacBook Pro M3, Dell XPS 13, HP Spectre x360, ASUS ROG Zephyrus G14, Lenovo ThinkPad X1 Carbon, Surface Laptop 5
- **Tablets** — iPad Pro 12.9, Samsung Galaxy Tab S9, Microsoft Surface Pro 9, iPad Air 5, Lenovo Tab P12 Pro
- **Audio** — AirPods Pro, Sony WH-1000XM5, Bose QuietComfort 45, Sennheiser Momentum 4, JBL Live 660NC
- **Wearables** — Apple Watch Series 9
- **Desktop** — Gaming Desktop PC

---

## Tech Stack

| Category | Technology |
|----------|-----------|
| Markup | HTML5 |
| Styling | CSS3 |
| Logic | Vanilla JavaScript (ES6+) |
| Storage | localStorage (cart persistence) |
| IDE | VS Code |

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/GivenMoreke/Tech-Gadget-Catalog-Website.git

# Open in browser
open gadget-catalog/index.html
```

No dependencies or build tools required.

---

## Key Concepts Demonstrated

- DOM manipulation and dynamic HTML generation
- Event listeners (click, dblclick, keypress, Ctrl+click)
- Array methods — filter, find, map, reduce, findIndex, splice
- localStorage for persistent cart state
- CSS animations (slide-in/slide-out notifications)
- Multi-page navigation with consistent layout
- Responsive design with mobile hamburger menu
- Print API for spec sheet generation
- Data-driven UI — all 24 gadgets rendered from a JavaScript data array

---

## Project Structure

```
gadget-catalog/
├── index.html           # Home page — search, details, favourites, comparison
├── products.html        # Full product catalog
├── about.html           # About page
├── contact.html         # Contact page
├── styles.css           # Global styles
├── script.js            # Main page logic
├── products-script.js   # Products page logic
└── images/              # Product images (24 gadgets)
```

---

## Authors

**Reitumetse Given Moreke** — 
