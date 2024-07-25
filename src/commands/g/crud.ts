import {Args, Command, Flags} from '@oclif/core'

export default class GCrud extends Command {
  static override args = {
    entity: Args.string({description: 'Entity name'}),
  }

  static override description = 'Generate CRUD operations for an entity including routes and search'

  static override examples = [
    '- Command bellow will gnerate blog-card, blog-list, blog-edit and parent component blog',
    '<%= config.bin %> <%= command.id %> blog',
  ]

  static override flags = {
    model: Flags.string({char: 'm', description: 'Entity model/types separated by comma(,)', required: false}),
  }

  public async run(): Promise<void> {
    // const {args,} = await this.parse(GAi1Crud)

    this.log(`g crud`)
  }
}
