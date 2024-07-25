import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('g/ejb', () => {
  it('runs g/ejb cmd', async () => {
    const {stdout} = await runCommand('g/ejb')
    expect(stdout).to.contain('hello world')
  })

  it('runs g/ejb --name oclif', async () => {
    const {stdout} = await runCommand('g/ejb --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
