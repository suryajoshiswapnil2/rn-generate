/**
 * color enum for color rendering in console
 * @enum
 */
const COLORS = {
  red: Symbol("red"),
  blue: Symbol("blue"),
  gray: Symbol("gray"),
  cyan: Symbol("cyan"),
  black: Symbol("black"),
  green: Symbol("green"),
  white: Symbol("white"),
  yellow: Symbol("yellow"),
  magenta: Symbol("magenta")
};

/**
 * type of file to generate
 * @enum
 */
const TYPES = {
  component: Symbol("component"),
  page: Symbol("page"),
  lib: Symbol("lib"),
  utils: Symbol("utils"),
  container: Symbol("container")
};

module.exports = {
  TYPES,
  COLORS
};
