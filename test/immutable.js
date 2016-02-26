import {expect} from 'chai'
import {
  List,
  Map
} from 'immutable'

// Demos of Immutability
describe('immutability', () => {
  describe('a number', () => {
    const increment = currentState => currentState + 1

    it('is immutable', () => {
      let state = 42
      let nextState = increment(state)

      expect(nextState).to.equal(43);
      expect(state).to.equal(42)
    })
  })

  describe('A List', () => {
    const addMovie = (currentState, movie) => currentState.push(movie)

    it('is immutable', () => {
      let state = List.of('Backdraft', 'Mighty Ducks')
      let nextState = addMovie(state, 'D2')

      expect(nextState).to.equal(List.of(
        'Backdraft',
        'Mighty Ducks',
        'D2'
      ))

      expect(state).to.equal(List.of(
        'Backdraft',
        'Mighty Ducks'
      ))
    })
  })

  describe('a tree', () => {
    const addMovie = (currentState, movie) => currentState.update('movies', movies => movies.push(movie))

    it('is immutable', () => {
      let state = Map({
        movies: List.of('Backdraft', 'Mighty Ducks')
      })
      let nextState = addMovie(state, 'D2')

      expect(nextState).to.equal(Map({
        movies: List.of(
          'Backdraft',
          'Mighty Ducks',
          'D2'
        )
      }))

      expect(state.toJS()).to.deep.equal({
        movies: ['Backdraft', 'Mighty Ducks']
      })
    })
  })
})
