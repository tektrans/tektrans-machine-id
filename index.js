#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { machineIdSync } = require('node-machine-id');

const { argv } = yargs(hideBin(process.argv))
    .option('original', {
        type: 'boolean',
        description: 'If true return original value of machine id, otherwise return hashed value (sha-256), default: false',
    });

// eslint-disable-next-line no-console
console.log(
    machineIdSync(!!argv.original),
);
