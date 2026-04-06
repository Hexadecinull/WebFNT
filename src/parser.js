export class FNTParser {
  static parse(data) {
    const lines = data.split(/\r?\n/);
    const result = { info: {}, common: {}, pages: [], chars: {}, kernings: [] };

    lines.forEach(line => {
      const parts = line.match(/\w+=(?:(?:"[^"]*")|[^\s]+)/g);
      if (!parts) return;

      const type = line.split(' ')[0];
      const attrs = {};

      parts.forEach(part => {
        let [key, val] = part.split('=');
        val = val.replace(/"/g, '');
        // Convert to number if applicable
        attrs[key] = isNaN(val) ? val : parseInt(val, 10);
      });

      if (type === 'info') result.info = attrs;
      if (type === 'common') result.common = attrs;
      if (type === 'page') result.pages[attrs.id] = attrs.file;
      if (type === 'char') result.chars[attrs.id] = attrs;
      if (type === 'kerning') result.kernings.push(attrs);
    });

    return result;
  }
}