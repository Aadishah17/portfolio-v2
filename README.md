# Aadi Shah Portfolio

A portfolio of Aadi Shah’s software projects, experience, and contact details.

---

## Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Contact Me](#-contact-me)

---

## Features

- Project descriptions with links to source code and live demos
- Resume download and contact form
- Responsive layout built with **Tailwind CSS**
- Built with **React** and **Vite**

---

## Tech stack

| Tech              | Description                           |
|-------------------|---------------------------------------|
| React             | Front-end JavaScript library          |
| Vite              | Fast bundler and dev environment      |
| TailwindCSS       | Utility-first CSS framework           |
| Motion            | Navigation transitions                |
| EmailJS           | Form handling and email integration   |

---

## Project structure

```bash
├── public/
│   ├── assets/             # Static assets and resume
│   └── vite.svg
├── src/
│   ├── components/         # Reusable components
│   ├── constants/          # Profile constants and project list
│   ├── sections/           # Portfolio sections (Hero, About, Achievements, Contact, Projects)
│   ├── App.jsx             # Main app file
│   ├── index.css           # Tailwind CSS styles
│   └── main.jsx            # Entry point
├── tailwind.config.js
└── vite.config.js
```

---

## Run locally

1. Clone the Repository
```bash
git clone https://github.com/Aadishah17/portfolio-v2.git
cd portfolio-v2
```

2. Install Dependencies
```bash
npm install
```

3. Configure Environment Variables
Create a `.env` file in the root folder with your EmailJS credentials (see `.env.example`):
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Run the Development Server
```bash
npm run dev
```
The app will be available at http://localhost:5173.

---

## Contact

* **Email:** [shahaadi285@gmail.com](mailto:shahaadi285@gmail.com)
* **LinkedIn:** [Aadi Shah](https://www.linkedin.com/in/aadi-shah-6535672a6/)
* **GitHub:** [Aadishah17](https://github.com/Aadishah17)
