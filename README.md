
# Personal Portfolio

This is my **personal portfolio website** showcasing my skills, projects, and interests across **Data Analytics**, **Web Development**, and **IoT**.

Live Site: [My Portfolio](https://isamaj20.github.io/portfolio)
(Currently deployed from the `main` branch. Other branches may contain alternate portfolio versions.)

---

## Project Structure

```
portfolio/
│── index.html          # Homepage
│── data-analyst.html   # Data Analytics page
│── webdev.html         # Web Development page
│── iot.html            # IoT Projects page
│── style.css           # Global styles
│── script.js           # Navbar toggle script
│── assets/             # Images & screenshots
│── README.md           # This file
```

---

## Features

* Responsive design (works on desktop, tablet, and mobile)
* Clean navigation with hamburger menu on smaller screens
* Project cards with:

    * Title + description
    * Screenshot
    * Links to GitHub repo, live demo, or dashboard
* Organized into 3 main sections:

    * **Data Analytics** → Excel, Power BI, Looker Studio, SQL
    * **Web Development** → Laravel backend, APIs, full-stack apps
    * **IoT Projects** → Hardware + software + embedded systems

---

##  Local Setup

You can test this portfolio locally before deploying.

### Option 1: Open in Browser

1. Clone the repo:

   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```
2. Open `index.html` in your browser.

### Option 2: Run a Local Server

* Using **Python**:

  ```bash
  python -m http.server
  ```

  Visit [http://localhost:8000](http://localhost:8000).

* Using **Node.js live-server**:

  ```bash
  npm install -g live-server
  live-server
  ```

---

## Deployment (GitHub Pages)

This repo is configured to deploy via **GitHub Pages**.

1. Go to **Settings → Pages**.
2. Under **Branch**, select the branch you want to publish (`main`, `data-focused`, `iot-focused`, etc.).
3. Save → GitHub Pages will serve that branch at:

   ```
   https://yourusername.github.io
   ```

Tip: Keep multiple branches for different versions of your portfolio.

* `main` → general version
* `data-focused` → data analytics heavy
* `iot-focused` → IoT heavy
* `redesign-2025` → experimental design

You can switch which branch is live at any time without merging.

---

## Screenshots

*Add sample screenshots of your portfolio pages here for quick preview.*

---

## Contact

* Email: [isamaj20@email.com](mailto:isamaj20@email.com)
* LinkedIn: [linkedin.com/in/jsama-john-adeyi](https://linkedin.com/in/sama-john-adeyi)
* GitHub: [github.com/isamaj20](https://github.com/isamaj20)

---

**Author:** John Isama