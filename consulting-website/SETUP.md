# Quick Setup Guide - SkillCert Pro Website

## Step 1: Fix PowerShell Execution Policy

### Method A: Using PowerShell (Recommended)

1. **Open PowerShell as Administrator**:
   - Press `Win + X` on your keyboard
   - Click "Windows PowerShell (Admin)" or "Terminal (Admin)"
   - Click "Yes" when asked for permission

2. **Run this command**:
   ```powershell
   Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
   - Type `Y` and press Enter to confirm

3. **Close and reopen your terminal**

### Method B: Using Command Prompt (Alternative)

If you prefer not to change PowerShell settings:
- Press `Win + R`
- Type `cmd` and press Enter
- Use Command Prompt for all npm commands

---

## Step 2: Install Dependencies

Open your terminal (PowerShell or Command Prompt) and run:

```bash
cd c:\AGA2Z\consulting-website
npm install
```

**What to expect**:
- Download time: 1-2 minutes
- Size: ~200MB
- You'll see progress bars and package names

---

## Step 3: Start the Development Server

```bash
npm run dev
```

**What happens**:
- Vite server starts
- Browser opens automatically to `http://localhost:3000`
- You'll see your website! 🎉

---

## Step 4: Explore Your Website

### Pages to Visit:
- **Home** (`/`) - Hero section, services, testimonials
- **About** (`/about`) - Mission, team, values
- **Mock Exams** (`/mock-exams`) - Exam catalog with filtering
- **Services** (`/services`) - Detailed service offerings
- **Blog** (`/blog`) - Article listings
- **Contact** (`/contact`) - Contact form

### Things to Test:
- ✅ Click through all navigation links
- ✅ Try the mobile menu (resize browser or use DevTools)
- ✅ Filter exams by category on Mock Exams page
- ✅ Fill out and submit the contact form
- ✅ Hover over buttons and cards to see animations
- ✅ Resize browser to test responsive design

---

## Troubleshooting

### If npm install fails:
```bash
# Clear npm cache
npm cache clean --force

# Try again
npm install
```

### If port 3000 is busy:
The server will automatically use port 3001, 3002, etc.

### To stop the server:
Press `Ctrl + C` in the terminal

---

## Next Steps After Testing

### Build for Production:
```bash
npm run build
```
Output will be in the `dist` folder

### Preview Production Build:
```bash
npm run preview
```

---

## Project Structure Reference

```
consulting-website/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/          # All 6 pages
│   ├── styles/         # Global styles
│   ├── App.jsx         # Main app
│   └── main.jsx        # Entry point
├── package.json        # Dependencies
└── vite.config.js      # Vite config
```

---

## Need Help?

- Check the [README.md](file:///c:/AGA2Z/consulting-website/README.md) for detailed documentation
- Review the [walkthrough.md](file:///C:/Users/Bala%20Srinivas%20Tubati/.gemini/antigravity/brain/1815ed2a-4de1-4ce5-b9f7-5853333e7b40/walkthrough.md) for complete project details

---

**Ready to start? Open your terminal and begin with Step 1!** 🚀
