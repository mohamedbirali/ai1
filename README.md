# ai1

Save effots and time by generating boilerplates, inpired by Angular CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/ai1.svg)](https://npmjs.org/package/ai1)
[![Downloads/week](https://img.shields.io/npm/dw/ai1.svg)](https://npmjs.org/package/ai1)

<!-- toc -->
* [ai1](#ai1)
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->
```sh-session
$ npm install -g ai1
$ ai1 COMMAND
running command...
$ ai1 (--version)
ai1/0.0.0 win32-x64 node-v20.14.0
$ ai1 --help [COMMAND]
USAGE
  $ ai1 COMMAND
...
```
<!-- usagestop -->

# Commands

<!-- commands -->
* [`ai1 g ejb PATH`](#ai1-g-ejb-path)
* [`ai1 help [COMMAND]`](#ai1-help-command)
* [`ai1 plugins`](#ai1-plugins)
* [`ai1 plugins add PLUGIN`](#ai1-plugins-add-plugin)
* [`ai1 plugins:inspect PLUGIN...`](#ai1-pluginsinspect-plugin)
* [`ai1 plugins install PLUGIN`](#ai1-plugins-install-plugin)
* [`ai1 plugins link PATH`](#ai1-plugins-link-path)
* [`ai1 plugins remove [PLUGIN]`](#ai1-plugins-remove-plugin)
* [`ai1 plugins reset`](#ai1-plugins-reset)
* [`ai1 plugins uninstall [PLUGIN]`](#ai1-plugins-uninstall-plugin)
* [`ai1 plugins unlink [PLUGIN]`](#ai1-plugins-unlink-plugin)
* [`ai1 plugins update`](#ai1-plugins-update)

## `ai1 g ejb PATH`

Convert files ejb files

```
USAGE
  $ ai1 g ejb PATH [-d <value>] [-e <value>]

ARGUMENTS
  PATH  Directory's path

FLAGS
  -d, --destination=<value>  Where to generate ejb files
  -e, --extension=<value>    Extension to convert

DESCRIPTION
  Convert files ejb files

EXAMPLES
  - Command bellow will convert ALL (*.ts) files under (repo/ts-files) directory to (*.ts.ejb) and generates the output under (repo/my-directory) directory :

  $ ai1 g ejb repo/ts-files -e ts -o repo/my-directory

  NOTE: Existing files will NOT be renamed, replaced or deleted.
```

_See code: [src/commands/g/ejb.ts](https://github.com/mohamedbirali/ai1/blob/v0.0.0/src/commands/g/ejb.ts)_

## `ai1 help [COMMAND]`

Display help for ai1.

```
USAGE
  $ ai1 help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for ai1.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.7/src/commands/help.ts)_

## `ai1 plugins`

List installed plugins.

```
USAGE
  $ ai1 plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ ai1 plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.9/src/commands/plugins/index.ts)_

## `ai1 plugins add PLUGIN`

Installs a plugin into ai1.

```
USAGE
  $ ai1 plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into ai1.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the AI1_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the AI1_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ ai1 plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ ai1 plugins add myplugin

  Install a plugin from a github url.

    $ ai1 plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ ai1 plugins add someuser/someplugin
```

## `ai1 plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ ai1 plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ ai1 plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.9/src/commands/plugins/inspect.ts)_

## `ai1 plugins install PLUGIN`

Installs a plugin into ai1.

```
USAGE
  $ ai1 plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into ai1.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the AI1_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the AI1_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ ai1 plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ ai1 plugins install myplugin

  Install a plugin from a github url.

    $ ai1 plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ ai1 plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.9/src/commands/plugins/install.ts)_

## `ai1 plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ ai1 plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ ai1 plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.9/src/commands/plugins/link.ts)_

## `ai1 plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ ai1 plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ai1 plugins unlink
  $ ai1 plugins remove

EXAMPLES
  $ ai1 plugins remove myplugin
```

## `ai1 plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ ai1 plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.9/src/commands/plugins/reset.ts)_

## `ai1 plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ ai1 plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ai1 plugins unlink
  $ ai1 plugins remove

EXAMPLES
  $ ai1 plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.9/src/commands/plugins/uninstall.ts)_

## `ai1 plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ ai1 plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ ai1 plugins unlink
  $ ai1 plugins remove

EXAMPLES
  $ ai1 plugins unlink myplugin
```

## `ai1 plugins update`

Update installed plugins.

```
USAGE
  $ ai1 plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.3.9/src/commands/plugins/update.ts)_
<!-- commandsstop -->
