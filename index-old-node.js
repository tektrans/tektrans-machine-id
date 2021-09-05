#!/usr/bin/env node

// This script for old node.js (before v12) because
// of yargs compability.

const { machineIdSync } = require('node-machine-id');

// eslint-disable-next-line no-console
console.log(
    machineIdSync(),
);
