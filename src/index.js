import { FNTParser } from './parser.js';
import { FNTRenderer } from './renderer.js';

export async function createWebFNT(fntUrl) {
  const response = await fetch(fntUrl);
  const text = await response.text();
  const data = FNTParser.parse(text);
  
  // Extract base path for images
  const basePath = fntUrl.substring(0, fntUrl.lastIndexOf('/') + 1);
  
  return new FNTRenderer(data, basePath);
}