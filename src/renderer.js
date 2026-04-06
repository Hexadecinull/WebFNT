export class FNTRenderer {
  constructor(fontData, basePath = '') {
    this.fontData = fontData;
    this.basePath = basePath;
  }

  render(text, container) {
    container.style.lineHeight = `${this.fontData.common.lineHeight}px`;
    container.style.position = 'relative';
    container.innerHTML = ''; // Clear previous

    const chars = text.split('');
    chars.forEach((char) => {
      const charCode = char.charCodeAt(0);
      const data = this.fontData.chars[charCode];

      if (data) {
        const glyph = document.createElement('span');
        const pageImg = this.fontData.pages[data.page];
        
        Object.assign(glyph.style, {
          display: 'inline-block',
          width: `${data.width}px`,
          height: `${data.height}px`,
          backgroundImage: `url('${this.basePath}${pageImg}')`,
          backgroundPosition: `-${data.x}px -${data.y}px`,
          marginLeft: `${data.xoffset}px`,
          marginTop: `${data.yoffset}px`,
          marginRight: `${data.xadvance - data.width - data.xoffset}px`,
          verticalAlign: 'top'
        });

        container.appendChild(glyph);
      } else if (char === ' ') {
          // Handle space width via common data or a default
          const space = document.createElement('span');
          space.style.display = 'inline-block';
          space.style.width = `${this.fontData.common.base / 2}px`;
          container.appendChild(space);
      }
    });
  }
}