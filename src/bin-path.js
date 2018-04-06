const { isFile } = require('./utils');
const { name, localPath } = require('./defaults');
const { resolve } = require('path');
const commandExists = require('command-exists');

// const shelljs = require('shelljs');

async function binPath() {
  const islocal = await isFile(resolve(process.cwd(), localPath));

  if (islocal) {
    return localPath;
  }
  const command = await commandExists(name);
  return command;
}
module.exports = binPath;
