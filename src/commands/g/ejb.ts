import {Args, Command, Flags} from '@oclif/core'
import {copyFileSync, readdirSync} from 'fs-extra'

export default class GEjb extends Command {
  static override args = {
    path: Args.string({description: "Directory's path", required: true}),
  }

  static override description = 'Convert files ejb files'

  static override examples = [
    '- Command bellow will convert ALL (*.ts) files under (repo/ts-files) directory to (*.ts.ejb) and generates the output under (repo/my-directory) directory :',
    '<%= config.bin %> <%= command.id %> repo/ts-files -e ts -o repo/my-directory',
    'NOTE: Existing files will NOT be renamed, replaced or deleted.',
  ]

  static override flags = {
    destination: Flags.string({char: 'd', description: 'Where to generate ejb files', required: false}),
    extension: Flags.string({char: 'e', description: 'Extension to convert', required: false}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(GEjb)

    // get use inputs
    const {path} = args
    const {destination, extension} = flags

    // business logic
    // read all files recusrsivly
    const files = readdirSync(path, {recursive: true, withFileTypes: true})
      .filter((file) => file.isFile() && file.name)
      .map((file) => ({
        name: file.name,
        parentPath: file.parentPath,
      }))

    const filesLen = files.length
    // const dist = `${distination}\\ejb`

    for (let idx = 0; idx < filesLen; idx++) {
      const file = files[idx]
      // writeFile(`ejb\\${file.parentPath}\\${file.name}.ejb`, '')
      copyFileSync(`${file.parentPath}\\${file.name}`, `ejb\\${file.parentPath}\\${file.name}.ejb`)
    }

    // this.log(files.map((file) => file.name + ' - ' + file.parentPath).join(' \n'))
    this.log(`path: ${path} \n extension: ${extension} \n  destination: ${destination}`)
  }
}
