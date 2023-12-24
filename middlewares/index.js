const fs = require("fs");

const logger = (filename) => {
  return (req, res, next) => {
    fs.appendFile(
      filename,
      `\n${new Date().toLocaleDateString()} [${req.method} ${req.path}]`,
      (err, data) => {
        next();
      }
    );
  };
};

module.exports = logger;
