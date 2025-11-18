# 🐾 Pets Paradise - Pet Care & Gallery App

A full-stack React application for pet lovers featuring an AI-powered chat assistant, pet gallery, care tips with videos, and contact form with Firebase integration.

## 📌 Features

- 🏠 **Home Page** with dynamic quotes from API
- 🖼️ **Gallery** with 38+ pets across 6 categories (dogs, cats, rabbits, birds, fish, hamsters)
- 🎥 **Care Tips** with educational videos on feeding, grooming, exercise, and health
- 📩 **Contact Form** with Firebase Firestore storage
- 🤖 **AI Chat Assistant** powered by DeepSeek via OpenRouter
- 🌙 **Theme Toggle** (Light/Dark mode with localStorage persistence)
- 📍 **Last Visited Page** tracker using localStorage

---

## 🔗 APIs Used

### 1. **DummyJSON API**
- **Endpoint:** `https://dummyjson.com/quotes/random`
- **Purpose:** Display random inspirational quotes on home page
- **Documentation:** https://dummyjson.com/docs/quotes

### 2. **OpenRouter API (DeepSeek Model)**
- **Endpoint:** `https://openrouter.ai/api/v1/chat/completions`
- **Model:** `deepseek/deepseek-chat`
- **Purpose:** AI chat assistant for pet-related questions
- **Documentation:** https://openrouter.ai/docs

### 3. **Firebase Firestore**
- **Service:** Firestore Database
- **Purpose:** Store contact form submissions
- **Collection:** `messages`

---

## 🚀 Setup and Run Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Firebase account (for Firestore)
- OpenRouter API key (for AI chat)

### Installation

1. **Clone the repository:**
```bash
git clone <your-repo-url>
cd pets-app
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure Environment Variables:**

Create a `.env` file in the root directory:

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# OpenRouter API Key
OPENROUTER_API_KEY=sk-or-v1-your_openrouter_key_here
```

4. **Start the development servers:**

**Option 1: Run both servers separately**
```bash
# Terminal 1 - API Server
npm run api

# Terminal 2 - React Dev Server
npm start
```

**Option 2: Run both simultaneously (requires concurrently)**
```bash
npm run start:all
```

5. **Open your browser:**
```
http://localhost:5173
```

---

## 📁 Project Structure

```
pets-app/
├── assets/
│   ├── images/          # Pet images (48 total)
│   └── videos/          # Care tip videos (MP4 format)
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── navbar.jsx
│   │   ├── footer.jsx
│   │   ├── aichat.jsx
│   │   └── videocard.jsx
│   ├── data/
│   │   ├── pets.json    # Gallery data
│   │   └── care.json    # Care tips data
│   ├── pages/
│   │   ├── home.jsx
│   │   ├── gallery.jsx
│   │   ├── care.jsx
│   │   ├── contact.jsx
│   │   └── adminmessages.jsx
│   ├── services/
│   │   └── firebase.js  # Firebase configuration
│   ├── app.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── server.js            # Express API server
├── vite.config.js       # Vite configuration
├── package.json
└── .env                 # Environment variables (not in git)
```

---

## 👥 Team Contributions

### [Malaika]
- Implemented home page and navigation
- Integrated DummyJSON API for quotes
- Implemented localStorage features (theme, last visited page)
- Implemented theme toggle feature

### [Maryam]
- Integrated AI chat with DeepSeek via OpenRouter
- Created gallery page with dynamic pet data
- Designed and styled care tips section with videos
- Maintained project documentation and GitHub workflow


### [Haiqa]
- Set up Firebase Firestore for contact form
- Set up Express API server with proxy
- Created contact form with Firebase integration
- Built admin dashboard for viewing messages


---

## 🛠️ Technologies Used

- **Frontend:** React 18, React Router v6, Axios
- **Backend:** Express.js, Node.js
- **Database:** Firebase Firestore
- **Build Tool:** Vite
- **Styling:** Custom CSS (with Tailwind utilities)
- **APIs:** DummyJSON, OpenRouter (DeepSeek), Firebase
- **Version Control:** Git & GitHub

---

## 📝 Available Scripts

- `npm start` - Start Vite dev server (port 5173)
- `npm run api` - Start Express API server (port 3000)
- `npm run start:all` - Run both servers concurrently
- `npm run build` - Build for production
- `npm run preview` - Preview production build

---

## 🔐 Security Notes

- `.env` file is gitignored to protect API keys
- API keys are loaded server-side to keep them secure
- Firebase rules should be configured for production use

---

## 📄 License

This project is created for educational purposes as part of a web development course.

---

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request
4. Wait for review and approval

---

## 📞 Support

For questions or issues, please open an issue on GitHub or contact the team members.

---

**Made with ❤️ by [RuffNFuff]**
