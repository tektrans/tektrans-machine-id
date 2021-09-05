# tektrans-machine-id
CLI tool to extract hashed machine-id, compatible with Tektrans License Manager.

This tool use [node-machine-id](https://github.com/automation-stack/node-machine-id)
to extract machine-id.

## Usage

```
$ git clone https://github.com/tektrans/tektrans-machine-id.git
$ cd tektrans-machine-id
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
