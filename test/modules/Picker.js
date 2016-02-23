import React from 'react'
import TestUtils from 'react-addons-test-utils'
import Picker from '../../src/js/modules/Picker'

describe('Picker', () => {
  it('renders options via props', () => {
    const options = ['foo', 'bar']
    const picker = TestUtils.renderIntoDocument(
      <Picker options={options} />
    )

    const optionNodes = TestUtils.scryRenderedDOMComponentsWithTag(picker, 'option')
    const optionNodeValues = optionNodes.map(node => node.textContent)

    expect(optionNodeValues).to.deep.equal(options)
  })

  it('does not render a select element if no options are provided', () => {
    const picker = TestUtils.renderIntoDocument(
      <Picker />
    )

    const selectNode = TestUtils.scryRenderedDOMComponentsWithTag(picker, 'select')

    expect(selectNode.length).to.equal(0)
  })
})
