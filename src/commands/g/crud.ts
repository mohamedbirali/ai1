import {Args, Command, Flags} from '@oclif/core'
import {camelCase, capitalCase, constantCase, noCase, paramCase, pascalCase, snakeCase} from 'change-case'
import {renderFile} from 'ejs'
import {outputFile, readdirSync} from 'fs-extra'
import {join} from 'node:path'

export default class GCrud extends Command {
  static override args = {
    entity: Args.string({description: 'Entity name (singular name)', required: true}),
  }

  static override description = 'Generate CRUD operations for an entity including routes and search'

  static override examples = [
    '- Command bellow will gnerate blog-card, blog-list, blog-edit and parent component blog',
    '<%= config.bin %> <%= command.id %> blog',
  ]

  static override flags = {
    alertDelete: Flags.string({char: 'a', description: 'Message to show when deleting'}),
    destination: Flags.string({char: 'd', default: '.', description: 'Path to directory'}),
    model: Flags.string({char: 'm', description: 'Entity model/types separated by comma(,)', required: false}),
    parentCollection: Flags.string({
      char: 'p',
      description: 'Which collection this entity belong to, its like one to many in the SQL world',
      required: false,
    }),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(GCrud)
    const {alertDelete, destination, model, parentCollection} = flags
    const {entity} = args
    const entityProps = model?.trim().split(',') ?? 'id: string;\n    name: string;\n    description: string;'
    const entityLower = noCase(entity)
    const entityCamel = camelCase(entity)
    const entityCapital = capitalCase(entity)
    const entityKebab = paramCase(entity)
    const entityConstant = constantCase(entity)
    const entityPascal = pascalCase(entity)
    const entitySnake = snakeCase(entity)
    const outputDir = `${destination}\\${entityKebab}`
    const templatesDir = join(__dirname, '../../../templates/crud')

    const data = {
      alertDelete: alertDelete ? `${noCase(`${alertDelete}`)}` : entityLower,
      entityCamel,
      entityCapital,
      entityConstant,
      entityKebab,
      entityLower,
      entityPascal,
      entityProps,
      entitySnake,
      parentCollection: parentCollection ? `${snakeCase(parentCollection)}_` : '',
    }

    /**
     * read files name
     */
    // read all files recursivly
    const files = readdirSync(templatesDir, {recursive: true, withFileTypes: true})
      .filter((file) => file.isFile() && file.name)
      .map((file) => ({
        name: file.name,
        parentPath: file.parentPath,
      }))
    const filesLen = files.length
    // const ejs = 'ejs'

    for (let idx = 0; idx < filesLen; idx++) {
      const {name, parentPath} = files[idx]
      const localDir = parentPath.split('crud')[1]
      // createFileSync(`${ejs}\\${file.parentPath}\\${file.name}.${ejs}`)
      // copyFileSync(`${file.parentPath}\\${file.name}`, `${ejs}\\${file.parentPath}\\${file.name}.${ejs}`)

      // eslint-disable-next-line no-await-in-loop
      const rendered = await new Promise<string>((resolve, reject) => {
        renderFile(`${parentPath}\\${name}`, data ?? {}, (err, str) => {
          if (err) reject(err)
          return resolve(str)
        })
      })
      const replacedName = name.replace('entity', entityKebab).replace('.ejs', '')
      // eslint-disable-next-line no-await-in-loop
      await outputFile(`${outputDir}\\${localDir}\\${replacedName}`, rendered)
      // replace vars
    }

    // if models
    if (model) {
      //
      // generate model input
    }

    // algo
    /**
     * get entity & path
     * declare variables needed
     * replace template vars
     * render template to that path
     * rename files
     */

    this.log(`${entity} was generated`)
  }
}
