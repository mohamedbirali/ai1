import {Args, Command, Flags} from '@oclif/core'

export default class GModel extends Command {
  static override args = {
    properties: Args.string({description: 'Properties to generate separated by comma'}),
  }

  static override description = 'Generate typescript type'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(GModel)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from C:\\Users\\dell\\OneDrive\\Bureau\\ainone\\ai1\\src\\commands\\g\\model.ts`)
    if (args.properties && flags.force) {
      this.log(`you input --force and --file: ${args.properties}`)
    }
  }
}
