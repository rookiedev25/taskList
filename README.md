# 📝 TaskList: Minimal To-Do App in React

A simple yet functional task manager built using **React**, **Vite**, and **Tailwind CSS**. Easily add, mark, and delete your daily tasks. Lightweight, fast, and beginner-friendly.

---

## 🔗 Live Demo

[👉 View the App on GitHub Pages](https://rookiedev25.github.io/taskList)

---

## 🚀 Features

- ➕ Add new tasks with unique IDs
- ✅ Mark tasks as completed (with strikethrough)
- ❌ Delete individual tasks
- ⚙️ Built using modern React (with Hooks)
- 💅 Styled using Tailwind CSS
- 🌐 Deployed via GitHub Pages using `gh-pages`

---

## 🛠 Tech Stack

- **React 19**
- **Vite**
- **Tailwind CSS**
- **uuid**
- **gh-pages**

---

## 🧱 Folder Structure

```
taskList/
├── src/
│   ├── components/
│   │   └── NavBar.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── vite.config.js
├── package.json
└── README.md
```

---

## 🧪 Getting Started

```bash
# 1. Clone the repo
git clone https://github.com/rookiedev25/taskList.git
cd taskList

# 2. Install dependencies
npm install

# 3. Start local dev server
npm run dev
```

---

## 🚀 Deployment (GitHub Pages)

Ensure `package.json` has:

```json
"homepage": "https://rookiedev25.github.io/taskList",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

Then run:

```bash
npm run deploy
```

---

## 👨‍💻 Author

Built with ❤️ by [@rookiedev25](https://github.com/rookiedev25)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
