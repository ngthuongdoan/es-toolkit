import { describe, expect, it } from "vitest";
import { dropRight } from "../../array/dropRight";
import { falsey } from "../_internal/falsey";

/**
 * @see https://github.com/lodash/lodash/blob/6a2cc1dfcf7634fea70d1bc5bd22db453df67b42/test/dropRight.spec.js#L1
 */
describe('dropRight', () => {
  const array = [1, 2, 3];

  it('should drop the last two elements', () => {
    expect(dropRight(array, 2)).toEqual([1]);
  });

  it('should return all elements when `n` < `1`', () => {
    [0, -1, -Infinity].forEach((n) => {
      expect(dropRight(array, n)).toEqual(array);
    });
  });

  it('should return an empty array when `n` >= `length`', () => {
    [3, 4, 2 ** 32, Infinity].forEach((n) => {
      expect(dropRight(array, n)).toEqual([]);
    });
  });

  it('should coerce `n` to an integer', () => {
    expect(dropRight(array, 1.6)).toEqual([1, 2]);
  });
});
