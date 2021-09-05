#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');
const { machineIdSync } = require('node-machine-id');

const { argv } = yargs(hideBin(process.argv))
    .usage('CLI tool to extract machine-id. Compatible with Tektrans License Manager.')
    .option('original', {
        type: 'boolean',
        description: 'If true return original value of machine id, otherwise return hashed value (sha-256), default: false',
    })
    .epilog('Copyright Tektrans 2021. http://tektrans.id/');

// eslint-disable-next-line no-console
console.log(
    machineIdSync(!!argv.original),
);
