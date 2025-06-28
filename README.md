# Roblox Mapper

A Roblox development project using VS Code, Rojo, and automated file watching for seamless development workflow.

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (v14.16.0 or higher)
- [Rojo](https://rojo.space/) installed via Homebrew: `brew install rojo`
- [Roblox Studio](https://www.roblox.com/create) with Rojo plugin installed
- [VS Code](https://code.visualstudio.com/) (recommended)

### Setup

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start Rojo server:**

   ```bash
   rojo serve
   ```

3. **Connect to Roblox Studio:**
   - Open your game in Studio
   - Click the Rojo plugin button
   - Connect to `localhost:34872`

## 📁 Project Structure

```
roblox-mapper/
├── src/
│   ├── server/          # Server scripts
│   ├── client/          # Client scripts
│   ├── shared/          # Shared modules (Constants, BlockManager, etc.)
│   ├── storage/         # ServerStorage content
│   └── workspace/       # Workspace content
├── assets/              # Reusable assets
│   └── baseplate/       # Baseplate definitions
├── scripts/             # Development scripts
│   ├── create3blocks.js # Block generation script
│   └── watch.js         # File watcher
└── default.project.json # Main Rojo project file
```

## 🔄 File Watcher Usage

### Starting the File Watcher

```bash
npm run watch
```

This starts an automated system that:

- 👀 **Watches** all `.js` files in the `scripts/` directory
- 🔄 **Auto-runs** `create3blocks.js` when any file changes
- ⚡ **Updates** `default.project.json` automatically
- 🎯 **Syncs** changes to Studio instantly via Rojo

### Development Workflow

1. **Start the file watcher:** `npm run watch`
2. **Edit** `scripts/create3blocks.js` to modify block generation
3. **Save** the file
4. **Watch** as blocks automatically appear in Studio!

### Example: Creating More Blocks

Edit `scripts/create3blocks.js`:

```javascript
const numberOfBlocks = 10; // Change from 5 to 10
const blockColor = [1, 0, 0]; // Change to red [R, G, B]
```

**Save the file** → **Blocks instantly update in Studio!**

## 🛠️ Available Scripts

| Command                          | Description                          |
| -------------------------------- | ------------------------------------ |
| `npm run watch`                  | Start file watcher for auto-updates  |
| `npm run create-blocks`          | Manually run block generation script |
| `rojo serve`                     | Start Rojo development server        |
| `rojo build --output game.rbxlx` | Build standalone game file           |

## 📝 Customizing Block Generation

### Basic Configuration

In `scripts/create3blocks.js`, modify these variables:

```javascript
const numberOfBlocks = 5; // How many blocks to create
const blockColor = [0.486275, 0.866667, 0.184314]; // RGB color values
```

### Advanced Customization

```javascript
// Position blocks in a grid
Position: [Math.floor(i / 5) * 4, 1, (i % 5) * 4];

// Random colors
Color: [Math.random(), Math.random(), Math.random()];

// Different materials
Material: i % 2 === 0 ? "Plastic" : "Wood";
```

## 🎯 Key Features

### ✅ **Live Sync Development**

- Edit code in VS Code
- See changes instantly in Studio
- No manual file importing needed

### ✅ **Automated Block Generation**

- Write JavaScript to generate blocks
- File watcher auto-updates JSON
- Rojo syncs to Studio immediately

### ✅ **Version Control Friendly**

- All game objects defined in code
- Easy collaboration via Git
- Reproducible builds

### ✅ **Professional Workflow**

- Industry-standard tools (Rojo)
- Proper project structure
- Automated development pipeline

## 🔧 Configuration Files

### `default.project.json`

Main Rojo project configuration defining game structure.

### `src/shared/Constants.lua`

Central configuration for game values:

```lua
Constants.BLOCK_SIZE = {2, 3, 1}
Constants.BLOCK_COLOR = {0.486275, 0.866667, 0.184314}
```

### `package.json`

Node.js configuration with development scripts.

## 🐛 Troubleshooting

### File Watcher Not Working

- Ensure you're in the project directory
- Check that `chokidar` is installed: `npm install`
- Restart the watcher: `Ctrl+C` then `npm run watch`

### Rojo Connection Issues

- Verify Rojo server is running: `rojo serve`
- Check Studio plugin is installed and connected to `localhost:34872`
- Restart Studio if connection fails

### Blocks Not Appearing

- Check terminal for error messages
- Verify JSON syntax in generated files
- Restart Rojo server if needed

## 📚 Learn More

- [Rojo Documentation](https://rojo.space/docs/)
- [Roblox Scripting Guide](https://developer.roblox.com/en-us/learn-roblox/all-tutorials)
- [VS Code Extensions for Roblox](https://marketplace.visualstudio.com/search?term=roblox&target=VSCode)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test with the file watcher
5. Submit a pull request

---

**Happy coding! 🎮✨**
