import {Map, fromJS} from 'immutable'
import {expect} from 'chai'

import reducer from '../src/reducer'

describe('reducer', () => {
  it('handles SET_ENTRIES', () => {
    const initialState = Map()
    const action = {type: 'SET_ENTRIES', entries: ['Backdraft']}
    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      entries: ['Backdraft']
    }))
  })

  it('handles NEXT', () => {
    const initialState = fromJS({
      entries: ['Backdraft', 'Mighty Ducks']
    })
    const action = {type: 'NEXT'}
    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Backdraft', 'Mighty Ducks']
      },
      entries: []
    }))
  })

  it('handles VOTE', () => {
    const initialState = fromJS({
      vote: {
        pair: ['Backdraft', 'Mighty Ducks']
      },
      entries: []
    })
    const action = {type: 'VOTE', entry: 'Backdraft'}
    const nextState = reducer(initialState, action)

    expect(nextState).to.equal(fromJS({
      vote: {
        pair: ['Backdraft', 'Mighty Ducks'],
        tally: {Backdraft: 1}
      },
      entries: []
    }))
  })

  it('has an initial state', () => {
    const action = {type: 'SET_ENTRIES', entries: ['Backdraft']}
    const nextState = reducer(undefined, action)

    expect(nextState).to.equal(fromJS({
      entries: ['Backdraft']
    }))
  })

  it('can be used with reduce', () => {
    const actions = [
      {type: 'SET_ENTRIES', entries: ['Backdraft', 'Mighty Ducks']},
      {type: 'NEXT'},
      {type: 'VOTE', entry: 'Backdraft'},
      {type: 'VOTE', entry: 'Mighty Ducks'},
      {type: 'VOTE', entry: 'Backdraft'},
      {type: 'NEXT'}
    ]

    const finalState = actions.reduce(reducer, Map())

    expect(finalState).to.equal(fromJS({
      winner: 'Backdraft'
    }))
  })
})
