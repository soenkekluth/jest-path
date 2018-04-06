const pify = require('pify');
const stat = pify(require('fs').stat);

const isDir = async path => {
  const stats = await stat(path).catch(e => e && null);
  return stats && stats.isDirectory();
};

const isFile = async path => {
  const stats = await stat(path).catch(e => e && null);
  // const stats = await stat(path);
  return stats && stats.isFile();
};

module.exports = {
  isDir,
  isFile,
  // isGlob,
};
