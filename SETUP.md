# Quick Setup Guide

## Installation Steps

Due to PowerShell execution policy restrictions on your system, please follow these steps:

### Option 1: Use Command Prompt (Recommended)

1. Open **Command Prompt** (not PowerShell)
2. Navigate to the project:
   ```
   cd c:\AGA2Z
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm run dev
   ```

### Option 2: Use the Batch File

1. Navigate to `c:\AGA2Z` in File Explorer
2. Double-click `start.bat`
3. The script will install dependencies and start the server

### Option 3: Enable PowerShell Scripts (Admin Required)

1. Open PowerShell as Administrator
2. Run:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Then you can use npm commands normally

## After Installation

Once the server starts, you'll see:
```
  VITE v5.x.x  ready in xxx ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

Open your browser to `http://localhost:3000` to view the website!

## Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Troubleshooting

**If you see "command not found" errors:**
- Make sure Node.js is installed: https://nodejs.org/
- Restart your terminal after installing Node.js

**If port 3000 is already in use:**
- The server will automatically use port 3001 or the next available port

**If you see dependency errors:**
- Delete `node_modules` folder
- Delete `package-lock.json`
- Run `npm install` again

## Next Steps

1. ✅ Install dependencies
2. ✅ Start development server
3. 🌐 Open http://localhost:3000 in your browser
4. 🎨 Explore all 8 pages
5. 📱 Test responsive design (resize browser)
6. 🚀 Build for production when ready

Enjoy your new website! 🎉
