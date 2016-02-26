import {expect} from 'chai'
import {
  List,
  Map
} from 'immutable'

import {
  next,
  setEntries,
  vote
} from '../src/core'

describe('application logic', () => {
  describe('setEntries', () => {
    it('adds entries to the state', () => {
        const state = Map()
        const entries = List.of('Backdraft', 'Mighty Ducks')
        const nextState = setEntries(state, entries)

        expect(nextState).to.equal(Map({
          entries: List.of('Backdraft', 'Mighty Ducks')
        }))
    })

    it('converts to immutable', () => {
      const state = Map()
      const entries = List.of('Backdraft', 'Mighty Ducks')
      const nextState = setEntries(state, entries)

      expect(nextState).to.equal(Map({
        entries: List.of('Backdraft', 'Mighty Ducks')
      }))
    })
  })

  describe('next', () => {
    it('takes the next two entries under vote', () => {
      const state = Map({
        entries: List.of('Backdraft', 'Mighty Ducks', 'D2')
      })

      const nextState = next(state)

      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Backdraft', 'Mighty Ducks')
        }),
        entries: List.of('D2')
      }))
    })

    it('puts winner of current vote back to entries', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Backdraft', 'Mighty Ducks'),
          tally: Map({
            'Backdraft': 4,
            'Mighty Ducks': 2
          })
        }),
        entries: List.of('D2', 'Under Siege', 'Exit Wounds')
      })
      const nextState = next(state)

      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('D2', 'Under Siege')
        }),
        entries: List.of('Exit Wounds', 'Backdraft')
      }))
    })

    it('puts winner of current vote back to entries', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            'Trainspotting': 4,
            '28 Days Later': 2
          })
        }),
        entries: List.of('Sunshine', 'Millions', '127 Hours')
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Sunshine', 'Millions')
        }),
        entries: List.of('127 Hours', 'Trainspotting')
      }));
    });


    it('puts both from tied vote back to entries', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Backdraft', 'Mighty Ducks'),
          tally: Map({
            'Backdraft': 3,
            'Mighty Ducks': 3
          })
        }),
        entries: List.of('D2', 'Under Siege', 'Exit Wounds')
      })
      const nextState = next(state)

      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('D2', 'Under Siege')
        }),
        entries: List.of('Exit Wounds', 'Backdraft', 'Mighty Ducks')
      }))
    })

    it('marks winner when just one entry is left', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Backdraft', 'Mighty Ducks'),
          tally: Map({
            'Backdraft': 4,
            'Mighty Ducks': 2
          })
        }),
        entries: List()
      })

      const nextState = next(state)

      expect(nextState).to.equal(Map({
        winner: 'Backdraft'
      }))
    })
  })

  describe('vote', () => {
    it('creates a tally for the voted entry', () => {
      const state = Map({
        pair: List.of('Backdraft', 'Mighty Ducks')
      })

      const nextState = vote(state, 'Backdraft')

      expect(nextState).to.equal(Map({
        pair: List.of('Backdraft', 'Mighty Ducks'),
        tally: Map({
          'Backdraft': 1
        })
      }))
    })

    it('adds to existing tally for the voted entry', () => {
      const state = Map({
        pair: List.of('Backdraft', 'Mighty Ducks'),
        tally: Map({
          'Backdraft': 3,
          'Mighty Ducks': 2
        })
      })

      const nextState = vote(state, 'Backdraft')

      expect(nextState).to.equal(Map({
        pair: List.of('Backdraft', 'Mighty Ducks'),
        tally: Map({
          'Backdraft': 4,
          'Mighty Ducks': 2
        })
      }))
    })
  })
})

