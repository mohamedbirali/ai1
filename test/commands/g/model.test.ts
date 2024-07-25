import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('g/model', () => {
  it('runs g/model cmd', async () => {
    const {stdout} = await runCommand('g/model')
    expect(stdout).to.contain('hello world')
  })

  it('runs g/model --name oclif', async () => {
    const {stdout} = await runCommand('g/model --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
