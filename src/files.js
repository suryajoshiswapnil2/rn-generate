/**
 * functions for generating files
 * @function
 */

const { TYPES } = require("./constants");
const fs = require("fs");
const { info, success, error } = require("./print");

/**
 * Creates files for you.
 * @function
 * @param {string} file
 * @param {string} dir
 * @param {string} type
 */

function createFiles(file, dir, type = "components") {
  info(`We are creating ${file} pages for you...`);
  info(`Working Directory: ${dir}\n...`);
  const filename = file + ".js";
  const _dir = `${type}/${file}`;

  try {
    if (!fs.existsSync(_dir)) {
      fs.mkdirSync(_dir, { recursive: true });
      success("Created Folder: " + _dir);
    }

    fs.openSync(`${_dir}\/${file}.js`, "wx");
    success("Created File  : " + _dir + "/" + filename);

    fs.openSync(`${_dir}\/index.js`, "wx");
    success("Created File  : " + _dir + "/index.js");

    fs.openSync(`${_dir}\/styles.js`, "wx");
    success("Created File  : " + _dir + "/styles.js");
  } catch (err) {
    error(err.message);
  }
}

/**
 * Generates files for you
 * @function
 */
function makeFile(file, type, dir) {
  switch (type) {
    case TYPES.page:
      createFiles(file, dir, "pages");
      break;
    case TYPES.component:
      createFiles(file, dir, "containers");
      break;
    case TYPES.lib:
      createFiles(file, dir, "lib");
      break;
    case TYPES.utils:
      createFiles(file, dir, "utils");
      break;
    default:
      createFiles(file, dir);
      break;
  }
}

module.exports = {
  print: function() {
    console.log("Hello world");
  },

  makeFile
};
