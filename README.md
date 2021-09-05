# tektrans-machine-id
CLI tool to extract hashed machine-id.

Compatible and created for Tektrans License Manager.

This tool is a simple wrap of
[node-machine-id](https://github.com/automation-stack/node-machine-id)
as a CLI tool to extract machine-id.

## Install and Usage

### Simplest mode using npx
Using npx, you can run it instantly without installing the package.

```
$ npx tektrans-machine-id
8a83665f3798727f14f92ad0e6c99fdab08ee731d6cd644c131223fd2f4fed2a

$ npx tektrans-machine-id --original
11111111111111111111111111111111
```

### Git clone
Alternatively, you can clone the source using git and run the
cli tool.

```
$ git clone https://github.com/tektrans/tektrans-machine-id.git
$ cd tektrans-machine-id
$ npm ci
```

```
$ node index.js
8a83665f3798727f14f92ad0e6c99fdab08ee731d6cd644c131223fd2f4fed2a

$ node index.js --original
11111111111111111111111111111111
```

## Options
```
  --help      Show help                                                [boolean]
  --version   Show version number                                      [boolean]
  --original  If true return original value of machine id, otherwise return
              hashed value (sha-256), default: false                   [boolean]
```

## Old Node.js before v12
Because of latest yargs minimum support is Node.js v12,
we provide alternative version without yargs options support.

```
$ npx -p tektrans-machine-id tektrans-machine-id-old
```

And to show original (non sha256 hashed):
```
$ npx -p tektrans-machine-id tektrans-machine-id-old-original
```

## Changelog
See `CHANGELOG.md` file.

## Credit
* [node-machine-id](https://github.com/automation-stack/node-machine-id).
  Yes, we just wrap that package in a simple CLI script.
  Big thanks for them.

## License
Licensed under MIT License. So, feel free to use it if you think it would be
usefull for you.

Copyright TEKTRANS 2021.

http://tektrans.id/
