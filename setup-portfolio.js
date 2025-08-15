#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up your animated portfolio...\n');

// Create directory structure
const dirs = [
  'src',
  'src/components',
  'public'
];

dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`✅ Created directory: ${dir}`);
  }
});

// Package.json content
const packageJson = {
  "name": "animated-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
};

// Write package.json
fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
console.log('✅ Created package.json');

// Vite config
const viteConfig = `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});`;

fs.writeFileSync('vite.config.ts', viteConfig);
console.log('✅ Created vite.config.ts');

// Tailwind config
const tailwindConfig = `/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};`;

fs.writeFileSync('tailwind.config.js', tailwindConfig);
console.log('✅ Created tailwind.config.js');

// PostCSS config
const postcssConfig = `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};`;

fs.writeFileSync('postcss.config.js', postcssConfig);
console.log('✅ Created postcss.config.js');

// TypeScript config
const tsConfig = {
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
};

fs.writeFileSync('tsconfig.json', JSON.stringify(tsConfig, null, 2));
console.log('✅ Created tsconfig.json');

// HTML file
const htmlContent = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Animated Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;

fs.writeFileSync('index.html', htmlContent);
console.log('✅ Created index.html');

console.log('\n🎉 Setup complete! Now run:');
console.log('1. npm install');
console.log('2. npm run dev');
console.log('\n📝 Don\'t forget to add your component files in src/components/');