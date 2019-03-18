/**
 * entry point for program
 */

const { TYPES } = require("./src/constants");
const { strings } = require("./src/print");
const { makeFile } = require("./src/files");

/**
 * extract arguments for cli
 * @argument
 */
const args = process.argv.slice(2);
const dir = process.cwd();

/**
 * Check for arguments
 * display help message if arguments not provided
 */
if (args.length > 0) {
  switch (args[0]) {
    case "-v":
      console.log(strings.versionString);
      break;
    case "-p" || "-s":
      if (args[1]) makeFile(args[1], TYPES.page, dir);
      else console.log(strings.fileMissing(args[0]));
      break;
    case "-c":
      if (args[1]) makeFile(args[1], TYPES.component, dir);
      else console.log(strings.fileMissing(args[0]));
      break;
    case "-t":
      if (args[1]) makeFile(args[1], TYPES.container, dir);
      else console.log(strings.fileMissing(args[0]));
      break;
    case "-l":
      if (args[1]) makeFile(args[1], TYPES.lib, dir);
      else console.log(strings.fileMissing(args[0]));
      break;
    case "-u":
      if (args[1]) makeFile(args[1], TYPES.utils, dir);
      else console.log(strings.fileMissing(args[0]));
      break;
    default:
      console.log(strings.helpString);
      break;
  }
} else {
  console.log(strings.helpString);
}
