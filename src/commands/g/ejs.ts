import {Args, Command, Flags} from '@oclif/core'
import {copyFileSync, createFileSync, readdirSync} from 'fs-extra'

export default class GEjs extends Command {
  static override args = {
    path: Args.string({description: "Directory's path", required: true}),
  }

  static override description = 'Generate ejs file from existing files/templates'

  static override examples = [
    '- Command bellow will convert ALL (*.ts) files under (repo/ts-files) directory to (*.ts.ejs) and generates the output under (repo/my-directory) directory :',
    '<%= config.bin %> <%= command.id %> repo/ts-files -e ts -o repo/my-directory',
    'NOTE: Existing files will NOT be renamed, replaced or deleted.',
  ]

  static override flags = {
    destination: Flags.string({char: 'd', description: 'Where to generate ejs files', required: false}),
    extension: Flags.string({char: 'e', description: 'Extension to convert', required: false}),
  }

  public async run(): Promise<void> {
    const {args} = await this.parse(GEjs)

    // get use inputs
    const {path} = args

    // business logic

    // read all files recursivly
    const files = readdirSync(path, {recursive: true, withFileTypes: true})
      .filter((file) => file.isFile() && file.name)
      .map((file) => ({
        name: file.name,
        parentPath: file.parentPath,
      }))

    const filesLen = files.length
    const ejs = 'ejs'

    for (let idx = 0; idx < filesLen; idx++) {
      const file = files[idx]
      createFileSync(`${ejs}\\${file.parentPath}\\${file.name}.${ejs}`)
      copyFileSync(`${file.parentPath}\\${file.name}`, `${ejs}\\${file.parentPath}\\${file.name}.${ejs}`)
    }

    this.log(`files generated: ${path}/${ejs}`)
  }
}
