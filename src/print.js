/**
 * functions for printing data on console
 * @function
 */

const { COLORS } = require("./constants");

/**
 * Render colored text in console
 * @function
 * @param {COlORS} color
 * @param {string} text
 */
function coloredText(color, text) {
  switch (color) {
    case COLORS.black:
      return `\x1b[30m${text}\x1b[0m`;
    case COLORS.red:
      return `\x1b[31m${text}\x1b[0m`;
    case COLORS.green:
      return `\x1b[32m${text}\x1b[0m`;
    case COLORS.yellow:
      return `\x1b[33m${text}\x1b[0m`;
    case COLORS.blue:
      return `\x1b[34m${text}\x1b[0m`;
    case COLORS.magenta:
      return `\x1b[35m${text}\x1b[0m`;
    case COLORS.cyan:
      return `\x1b[36m${text}\x1b[0m`;
    case COLORS.white:
      return `\x1b[37m${text}\x1b[0m`;
    case COLORS.gray:
      return `\x1b[90m${text}\x1b[0m`;
    default:
      return text;
  }
}

/**
 * Print error with red font color
 * @function
 * @param {string} text
 */
function error(text) {
  console.log(coloredText(COLORS.red, text));
}

/**
 * Print info text with yellow font color
 * @function
 * @param {string} text
 */
function info(text) {
  console.log(coloredText(COLORS.yellow, text));
}

/**
 * Print success text with green font color
 * @function
 * @param {string} text
 */
function success(text) {
  console.log(coloredText(COLORS.green, text));
}

/**
 * Print processing text with magenta font color
 * @function
 * @param {string} text
 */
function processing(text) {
  console.log(coloredText(COLORS.magenta, text));
}

/**
 * error messages
 */
const strings = {
  /**
   * file missing string
   * @error
   */

  fileMissing: file => `${coloredText(
    COLORS.red,
    "file name is required but not given."
  )}
${coloredText(COLORS.yellow, `rn-generate ${file} filename`)}`,

  /**
   * Help message string
   * @help
   */
  helpString: `${coloredText(
    COLORS.cyan,
    "React native CLI for generating files for you."
  )}
${coloredText(COLORS.white, "Version 1.0")}
\x1b[32m
-h       prints this help message
-v       prints current cli version
-c [com] generate boilerplate component file
-t [con] generate container file
-l [lib] generate library file
-u [uti] generate utils file
-p [pag] generate page/screen. ( alias -s )\x1b[0m`,

  /**
   * Help message string
   * @version
   */
  versionString: `${coloredText(
    COLORS.gray,
    "React native CLI for generating files for you."
  )}
${coloredText(COLORS.white, "Version 1.0")}`
};

module.exports = {
  info,
  success,
  error,
  processing,
  strings
};
