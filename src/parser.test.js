import { expect, test } from 'vitest';
import { FNTParser } from './parser.js';

test('FNTParser correctly parses a basic info line', () => {
  const mockFnt = 'info face="Arial" size=32 bold=0 italic=0';
  const result = FNTParser.parse(mockFnt);
  
  expect(result.info.face).toBe('Arial');
  expect(result.info.size).toBe(32);
});

test('FNTParser identifies char data', () => {
  const mockFnt = 'char id=65 x=2 y=2 width=10 height=20 xoffset=0 yoffset=0 xadvance=12 page=0';
  const result = FNTParser.parse(mockFnt);
  
  expect(result.chars[65]).toBeDefined();
  expect(result.chars[65].width).toBe(10);
});