import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('g/crud', () => {
  it('runs g/crud cmd', async () => {
    const {stdout} = await runCommand('g/crud')
    expect(stdout).to.contain('hello world')
  })

  it('runs g/crud --name oclif', async () => {
    const {stdout} = await runCommand('g/crud --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
