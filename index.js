const yargs = require('yargs')
const path = require('path')
const paths = { source: null, dist: null }
const readDir = require('./readFiles')
const fse = require('fs-extra')

const argv = yargs
  .usage('Usage: $0 [option]')
  .help('help')
  .alias('help', 'h')
  .version('0.0.1')
  .alias('version', 'v')
  .example('$0 --entry ./filesSort --output ./dist -D => Sortings folder')
  .option('entry', {
    alias: 'e',
    describe: 'Путь к читаемой директории',
    demandOption: true
  })
  .option('output', {
    alias: 'o',
    describe: 'Путь куда выложить',
    default: '/output'
  })
  .option('delete', {
    alias: 'D',
    describe: 'Удалять ли исходный каталог?',
    type: 'boolean',
    default: false
  })
  .epilog('Домашняя работа #1 Node.js').argv

paths.source = path.normalize(path.join(__dirname, argv.entry))
paths.dist = path.normalize(path.join(__dirname, argv.output))

readDir(paths.source, paths.dist)

if (argv.delete) {
  fse.remove(paths.source.toString(), (err) => {
    if (err) {
      console.error(err)
      return
    }
  })
}
