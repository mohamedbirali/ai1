import {Args, Command, Flags} from '@oclif/core'

export default class GForm extends Command {
  static override args = {
    inputs: Args.string({description: 'Inputs to generate separated by comma'}),
  }

  static override description = 'Generate form using Angular Material, tailwindcss'

  static override examples = ['<%= config.bin %> <%= command.id %>']

  static override flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(GForm)

    const name = flags.name ?? 'world'
    this.log(`hello ${name} from C:\\Users\\dell\\OneDrive\\Bureau\\ainone\\ai1\\src\\commands\\g\\form.ts`)
    if (args.inputs && flags.force) {
      this.log(`you input --force and --file: ${args.inputs}`)
    }
  }
}
