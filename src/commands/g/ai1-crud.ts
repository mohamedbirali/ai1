import {Args, Command, Flags} from '@oclif/core'

export default class GAi1Crud extends Command {
  static override args = {
    name: Args.string({description: 'Entity name'}),
  }

  static override description = 'Generate CRUD operations for an entity including routes and search'

  static override examples = [
    '- Command bellow will gnerate blog-card, blog-list, blog-edit and parent component blog',
    '<%= config.bin %> <%= command.id %> blog',
  ]

  static override flags = {
    // flag with no value (-f, --force)
    force: Flags.boolean({char: 'f'}),
    // flag with a value (-n, --name=VALUE)
    name: Flags.string({char: 'n', description: 'name to print'}),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(GAi1Crud)

    const name = flags.name ?? 'world'
    this.log(`hello ${name}`)
    if (args.name && flags.force) {
      this.log(`you input --force and --file: ${args.name}`)
    }
  }
}
