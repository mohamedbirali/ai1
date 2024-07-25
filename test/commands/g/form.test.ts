import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('g/form', () => {
  it('runs g/form cmd', async () => {
    const {stdout} = await runCommand('g/form')
    expect(stdout).to.contain('hello world')
  })

  it('runs g/form --name oclif', async () => {
    const {stdout} = await runCommand('g/form --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
