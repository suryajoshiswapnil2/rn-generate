/**
 * functions for generating files
 * @function
 */

const { TYPES } = require("./constants");
const fs = require("fs");
const { info, success, error } = require("./print");
const BoilerPlates = require("./boilerplates");

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
  const __file_name = file;

  /**
   * Check if file type is container and rename file accordingly
   */
  if (type === "containers") {
    file = file + "Container";
  }

  const filename = file + ".js";
  const folder =
    type === "lib" || type === "utils" ? `app/${type}` : `app/${type}/${file}`;

  try {
    if (!fs.existsSync(folder)) {
      fs.mkdirSync(folder, { recursive: true });
      success("Created Folder: " + folder);
    }
    const fd = fs.openSync(`${folder}\/${file}.js`, "wx");
    switch (type) {
      case "components":
        fs.writeFileSync(fd, BoilerPlates.component(__file_name));
        break;
      case "containers":
        fs.writeFileSync(fd, BoilerPlates.container(__file_name));
        break;
      case "utils":
        fs.writeFileSync(fd, BoilerPlates.utils(__file_name));
        break;
      case "lib":
        fs.writeFileSync(fd, BoilerPlates.lib(__file_name));
        break;
      case "pages":
        fs.writeFileSync(fd, BoilerPlates.page(__file_name));
        break;
      default:
        break;
    }

    success("Created File  : " + folder + "/" + filename);

    if (type === "components" || type === "pages") {
      // fs.openSync(`${folder}\/index.js`, "wx"); // Only opens
      fs.writeFileSync(`${folder}\/index.js`, BoilerPlates.index(file));
      success("Created File  : " + folder + "/index.js");

      // fs.openSync(`${folder}\/styles.js`, "wx");
      fs.writeFileSync(`${folder}\/styles.js`, BoilerPlates.styles(file));
      success("Created File  : " + folder + "/styles.js");
    }
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
    case TYPES.container:
      createFiles(file, dir, "containers");
      break;
    case TYPES.lib:
      createFiles(file, dir, "lib");
      break;
    case TYPES.utils:
      createFiles(file, dir, "utils");
      break;
    case TYPES.container:
      createFiles(file, dir, "containers");
      break;
    default:
      createFiles(file, dir);
      break;
  }
}

/**
 * Write data to file
 * @function
 * @param {string} str (data to be written)
 */
function writeToFile(path, str) {
  console.log("content written");
}

module.exports = {
  print: function() {
    console.log("Hello world");
  },
  makeFile
};
