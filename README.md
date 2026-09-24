# 🥗 Healthify — Fresh & Nutritious Meal Delivery Web App

**Transform Your Health, One Meal At A Time**

Healthify is a modern, high-performance web application built with **React Native for Web**, **Expo**, and **TailwindCSS (NativeWind)**. It delivers a seamless, chef-prepared healthy meal subscription experience designed for maximum visual appeal, speed, and cross-device responsiveness.

---

## 🌟 Key Features

- **📱 Fully Responsive Design System**: Optimized for mobile, tablet, laptop, and ultra-wide desktop viewports with zero horizontal scrolling.
- **⚡ Interactive Navigation & Smooth Scroll**: Header & footer navigation links dynamically scroll to sections with active state tracking.
- **🥗 Chef-Prepared Hero & Visuals**: Vibrant foliage banners and high-resolution food assets customized for health & wellness branding.
- **📊 Interactive Metrics & Toggle Controls**: Real-time stats bar, Weekly/Monthly meal plan pricing toggle, and interactive FAQ accordion.
- **💬 Floating WhatsApp Quick Chat**: Always-accessible floating customer support button (`z-[9999]`).
- **🌙 Clean Dark & Light Contrast Sections**: Premium curated color palette (`#14291B`, `#5B7337`, `#F7F8F4`, `#0A1A10`).

---

## 🛠️ Technology Stack

- **Core Framework**: React Native (Web) / Expo SDK
- **Styling**: TailwindCSS / NativeWind v4
- **Icons**: Lucide Icons (`lucide-react-native`)
- **Language**: JavaScript (ES6+)
- **Bundler / Build Tool**: Metro & Expo Web Compiler

---

## 🚀 Getting Started

Follow these steps to clone, install, and run the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) or `yarn`

### 1. Clone the Repository

```bash
git clone https://github.com/Anas277-dev/Healthy-Meals.git
cd Healthy-Meals
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Locally in Development Mode

```bash
npm run dev
# or
npx expo start --web
```

Open your browser and navigate to `http://localhost:8081` (or the URL provided in terminal).

---

## 📦 Production Build

To build the static production export bundle for deployment:

```bash
npx cross-env NODE_OPTIONS="--max-old-space-size=4096" npx expo export --platform web
```

The static web build output will be generated inside the `dist/` directory.

---

## 🌐 Live Deployment & Vercel Setup

This application is optimized for zero-config deployment on Vercel:

1. Push code to GitHub.
2. Import repository in [Vercel Dashboard](https://vercel.com).
3. Set Build Command: `npx cross-env NODE_OPTIONS="--max-old-space-size=4096" npx expo export --platform web`
4. Set Output Directory: `dist`
5. Deploy!

### Live Demo URL
🔗 **Vercel Deployment**: [https://healthy-meals.vercel.app](https://healthy-meals.vercel.app) *(Update with your live Vercel URL after deploying)*

---

## 🔒 Security & Environment Variables

No secret API keys or database credentials are required for running this frontend assessment.
For reference, safe public environment variable samples are provided in [.env.example](.env.example). Local `.env` files are ignored via [.gitignore](.gitignore).

---

## 📄 License

This project is licensed under the MIT License - feel free to use and customize!
