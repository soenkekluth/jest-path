#!/usr/bin/env node

const shell = require('shelljs');
const jestPath = require('./bin-path');

async function initPath() {
  if (global.jestPath) {
    return Promise.resolve(global.jestPath);
  }
  global.jestPath = await jestPath();
  return global.jestPath;
}

async function runShell() {
  const jestPath = await initPath();
  if (!jestPath) {
    throw new Error('jest must be installed locally or global');
  }
  const args = process.argv.slice(2);
  const command = jestPath + (args.length ? ' ' + args.join(' ') : '');
  shell.exec(command);
}
runShell();
