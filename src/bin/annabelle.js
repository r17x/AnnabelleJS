#!/usr/bin/env node

import yargs from 'yargs'
import {checkDir, readConfig, saveConfig, Generate} from '../utils'

let {config} = yargs
  .options('config', {
    alias: 'c',
    type: 'string',
  })
  .example('anabelle --endpoint https://api.domain/v1/post --name Post --method  get')
  .argv

config = readConfig(config)

checkDir(config.output)

const result = new Generate(config)

saveConfig(
  `${config.output}/${config.name}.js`,
  result.generate()
)
