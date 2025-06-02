# React + Vite

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# 🧑🏽‍🍳 AI Recipe Generator – Chef Claude

A frontend React app that generates delicious recipes using **AI** based on ingredients you have on hand.

This project was built to showcase my frontend development skills using modern tools and AI APIs. It demonstrates user interaction, API integration, error handling, and clean UI practices.

---

## 🌟 Why This Project?

I created this app to solve a common problem: “What can I cook with what I already have?”  
With just a few ingredients, the app fetches a recipe recommendation from **Anthropic’s Claude** AI — and automatically falls back to **Mistral** AI if needed.

It’s designed to demonstrate:

- Real-world use of AI in web apps
- React state management with Hooks
- Clear UX and graceful error handling
- API key management and environment setup
- Clean, accessible markup and styling

---

## 🔧 Tech Stack

| Tool / Library | Purpose |
|----------------|---------|
| React + Vite   | UI & Dev Environment |
| Anthropic Claude | Primary AI for recipe generation |
| Mistral         | Fallback AI in case of API failure |
| React Markdown | Displays AI responses in readable format |
| dotenv (Vite)  | API key management |

---

## 🚀 Demo

![Demo Screenshot](screenshot.png) <!-- Add a real screenshot if possible -->

Try it live: [your-live-demo-link.com](https://scintillating-lebkuchen-824685.netlify.app/) <!-- Add your actual deployment URL -->

---

## ✍️ How It Works

1. Add ingredients like `chicken`, `corn`, or `oregano`.
2. Once you’ve added 4 or more, click **“Get a recipe.”**
3. The app sends the list to Claude via API.
4. If Claude is unavailable, Mistral is used as a fallback.
5. The AI’s recipe is rendered with clear instructions.

After generating a recipe, the ingredients list resets so users can start fresh.

---

## 📁 File Overview

```plaintext
/src
  ├── Main.jsx              # Main UI component with form + state
  ├── ai.js                 # Handles AI API calls (Claude + Mistral)
  └── components/
       ├── IngredientsList.jsx
       └── ClaudeRecipe.jsx

👨🏽‍💻 Author
Sango Mabhuti Yapi
Frontend Developer | Chemistry + Computer Science Grad
LinkedIn • Portfolio

📝 License
MIT