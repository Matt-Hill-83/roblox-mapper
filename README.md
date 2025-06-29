# Roblox Mapper

A Roblox development project using VS Code, Rojo, and automated asset generation.

## 🚀 Quick Start

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start Rojo server:**

   ```bash
   rojo serve
   ```

3. **Connect Roblox Studio:**
   - Open Studio → Click Rojo plugin → Connect to `localhost:34872`

## � Development Workflow

**Option 1: Auto-watch mode (Recommended)**

```bash
npm run watch
```

- Watches all asset files for changes
- Auto-generates blocks when you save
- Instantly syncs to Studio

**Option 2: Manual generation**

```bash
npm run create-blocks
```

## 📁 Project Structure

```
scripts/
├── makeBlocks.js           # Main asset generator
├── watch.js               # File watcher
└── baseAssets/
    ├── makeRectangle.js   # Rectangle generator
    ├── makeSquare.js      # Square generator
    └── makeCylinder.js    # Cylinder generator

src/
├── server/                # Server scripts
├── client/                # Client scripts
└── shared/                # Shared modules
```

## ✏️ Creating Assets

Edit any file in `scripts/baseAssets/` to modify block generation:

```javascript
// In makeRectangle.js
Size: [4, 2, 8],          // Width, Height, Depth
Color: [0.2, 0.4, 0.8],   // RGB values
Position: position,        // Coordinates
```

Save the file → Blocks update in Studio instantly!

## 🎯 Key Features

- **Live Sync**: Edit code → See changes instantly in Studio
- **Modular**: Separate generators for different shapes
- **Automated**: File watcher handles regeneration
- **Professional**: Industry-standard Rojo workflow

---

**Happy coding! 🎮✨**
