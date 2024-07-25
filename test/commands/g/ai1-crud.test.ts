import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('g/ai1-crud', () => {
  it('runs g/ai1-crud cmd', async () => {
    const {stdout} = await runCommand('g/ai1-crud')
    expect(stdout).to.contain('hello world')
  })

  it('runs g/ai1-crud --name oclif', async () => {
    const {stdout} = await runCommand('g/ai1-crud --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
