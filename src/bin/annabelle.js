#!/usr/bin/env node

import yargs from 'yargs'
import {checkDir, readConfig, saveConfig, Generate} from '../utils'

let {config} = yargs
  .options('config', {
    alias: 'c',
    type: 'string',
  })
  .example('anabelle -c config.json')
  .example('anabelle --config config.json')
  .argv

config = readConfig(config)

checkDir(config.output)

const result = new Generate(config)

saveConfig(
  `${config.output}/${config.name}.js`,
  result.generate()
)
