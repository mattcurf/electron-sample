# Electron Cross-Platform App - Agent Instructions

## Project Structure

```
electron/
├── main.js                 # Main Electron process
├── preload.js             # Preload script for security
├── package.json           # Node.js project configuration
├── package-lock.json      # Lock file for dependencies
├── src/
│   ├── index.html         # Main renderer HTML
│   ├── renderer.js        # Renderer process JavaScript
│   └── styles.css         # Application styles
├── assets/
│   └── icons/             # App icons for different platforms
└── dist/                  # Built application files
```

## Frequently Used Commands

- **Install dependencies**: `npm install`
- **Start development**: `npm start`
- **Build for all platforms**: `npm run build`
- **Build for current platform**: `npm run build:current`
- **Test**: `npm test`
- **Lint**: `npm run lint`
- **Package for distribution**: `npm run dist`

## Build & Package Commands

- **Windows**: `npm run build:win`
- **macOS**: `npm run build:mac`
- **Linux**: `npm run build:linux`
- **All platforms**: `npm run build:all`

## Code Style & Conventions

- **JavaScript**: Use ES6+ syntax, 2-space indentation
- **HTML**: Semantic HTML5, proper accessibility attributes
- **CSS**: Use CSS Grid/Flexbox for layouts, consistent naming
- **File naming**: kebab-case for files, camelCase for variables
- **Security**: Always use preload scripts, never disable node integration in renderer

## Testing Guidelines

- Use Jest for unit testing
- Test both main and renderer processes
- Include security tests to prevent common Electron vulnerabilities
- Test on all target platforms before release

## Electron-Specific Best Practices

- **Security**: Enable context isolation, disable node integration in renderer
- **Performance**: Use efficient IPC communication between processes
- **Cross-platform**: Test UI scaling and behavior on Windows, macOS, and Linux
- **Memory**: Properly clean up resources and event listeners
- **Updates**: Implement auto-updater for production releases

## Dependencies

### Core Dependencies
- `electron` - Electron framework
- `electron-builder` - Build and package tool

### Development Dependencies
- `electron-reload` - Auto-reload during development
- `jest` - Testing framework
- `eslint` - Code linting

## Configuration

### package.json main scripts:
```json
{
  "main": "main.js",
  "scripts": {
    "start": "electron .",
    "build": "electron-builder",
    "test": "jest",
    "lint": "eslint ."
  }
}
```

## Security Configuration

- Enable context isolation in preload script
- Disable node integration in renderer process
- Validate all IPC messages
- Use Content Security Policy (CSP) headers
