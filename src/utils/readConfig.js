import fs from 'fs'

export const readConfig = (file) => JSON
  .parse(
    fs.readFileSync(file, 'utf8')
  )

export const saveConfig = (
  path,
  result
) => fs.writeFileSync(path, result, 'utf8')

