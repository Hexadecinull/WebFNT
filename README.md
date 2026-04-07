# WebFNT

**WebFNT** is a zero-dependency, lightweight JavaScript library that acts as a translation layer for rendering AngelCode `.fnt` (bitmap) fonts on the web using standard CSS and HTML5.

[](https://www.gnu.org/licenses/lgpl-3.0)

## Features

  * **Extremely Lightweight:** No external dependencies.
  * **CSS-Based:** Renders characters using CSS sprite techniques (background-position).
  * **Automatic Parsing:** Supports the standard AngelCode text-based `.fnt` format.
  * **Layout Aware:** Respects offsets, advances, and line heights defined in the font file.

## Installation

Simply clone the repository or copy the `src/` folder into your project.

```bash
git clone https://github.com/Hexadecinull/WebFNT.git
```

## Usage

### 1\. Prepare your assets

Ensure your `.fnt` file and its corresponding `.png` texture atlas are in the same directory (e.g., `/assets/`).

### 2\. Implement in your code

```javascript
import { createWebFNT } from './src/index.js';

async function setupFont() {
    // 1. Initialize the library and load the font file
    const font = await createWebFNT('./assets/retro_font.fnt');
    
    // 2. Select your container
    const display = document.getElementById('game-ui');
    
    // 3. Render your text
    font.render("PLAYER 1: 5000", display);
}

setupFont();
```

## Project Structure

  * `/src`: The core library (Parser, Renderer).
  * `/examples`: A working demo and asset structure.
  * `/index.html`: Project landing page.

## Contributing

Contributions are welcome\! Please ensure that:

1.  You run `npm run lint` to check code style.
2.  You run `npm run test` to ensure the parser logic remains intact.

## License

This project is licensed under the **GNU Lesser General Public License v3.0 (LGPL-3.0)**. This allows you to use the library in both open and closed-source projects, provided that any modifications to the library itself are shared back under the same license.
