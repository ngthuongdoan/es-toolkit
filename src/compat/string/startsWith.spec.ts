import { describe, it, expect } from 'vitest';
import { startsWith } from './startsWith';

describe('startsWith', () => {
  it('should return true if the string starts with the target string', async () => {
    expect(startsWith('fooBar', 'foo')).toEqual(true);
  });

  it('should return false if the string does not start with the target string', async () => {
    expect(startsWith('fooBar', 'abc')).toEqual(false);
  });

  it('should return false if the string does not start with the target string, but does contain it', async () => {
    expect(startsWith('fooBar', 'Bar')).toEqual(false);
  });

  it('should return true if the target string is an empty string', async () => {
    expect(startsWith('fooBar', '')).toEqual(true);
  });

  it('should return true if the string and target string are empty strings', async () => {
    expect(startsWith('', '')).toEqual(true);
  });

  it('should return false if the string past the provided position does not start with the target string', async () => {
    expect(startsWith('fooBar', 'Bar', 5)).toEqual(false);
  });

  it('should return true if the string past the provided position does start with the target string', async () => {
    expect(startsWith('fooBar', 'Bar', 3)).toEqual(true);
  });

  const string = 'abc';

  it('should return `true` if a string starts with `target`', () => {
    expect(startsWith(string, 'a')).toBe(true);
  });

  it('should return `false` if a string does not start with `target`', () => {
    expect(startsWith(string, 'b')).toBe(false);
  });

  it('should work with a `position`', () => {
    expect(startsWith(string, 'b', 1)).toBe(true);
  });

  it('should work with `position` >= `length`', () => {
    expect(startsWith(string, 'a', 3)).toBe(false);
    expect(startsWith(string, 'a', 5)).toBe(false);
    expect(startsWith(string, 'a', Number.MAX_SAFE_INTEGER)).toBe(false);
    expect(startsWith(string, 'a', Infinity)).toBe(false);
  });

  it('should treat a negative `position` as `0`', () => {
    expect(startsWith(string, 'a', -1)).toBe(true);
    expect(startsWith(string, 'b', -1)).toBe(false);

    expect(startsWith(string, 'a', -3)).toBe(true);
    expect(startsWith(string, 'b', -3)).toBe(false);

    expect(startsWith(string, 'a', -Infinity)).toBe(true);
    expect(startsWith(string, 'b', -Infinity)).toBe(false);
  });

  it('should coerce `position` to an integer', () => {
    expect(startsWith(string, 'bc', 1.2)).toBe(true);
  });
});
