# 🚀 Quick Start Guide - Animated Portfolio

## Option 1: Manual Setup (Recommended)

### Step 1: Create Project Folder
```bash
mkdir my-animated-portfolio
cd my-animated-portfolio
```

### Step 2: Run Setup Script
```bash
node setup-portfolio.js
```

### Step 3: Install Dependencies
```bash
npm install
```

### Step 4: Add Component Files
Copy all the component files from the original project to `src/components/`

### Step 5: Start Development Server
```bash
npm run dev
```

## Option 2: One-Command Setup

```bash
# Create and setup everything
npx create-vite@latest my-portfolio --template react-ts
cd my-portfolio
npm install
npm install lucide-react
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## File Structure
```
my-animated-portfolio/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── LoadingScreen.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── index.html
```

## Important Commands

- **Development:** `npm run dev`
- **Build:** `npm run build`
- **Preview:** `npm run preview`

## Customization Tips

1. **Colors:** Edit gradients in `src/index.css`
2. **Content:** Update text in component files
3. **Images:** Replace image URLs in Projects.tsx
4. **Contact Info:** Update contact details in Contact.tsx

## Troubleshooting

If you get errors:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Check Node version (should be 16+)
node --version
```

Happy coding! 🎨✨