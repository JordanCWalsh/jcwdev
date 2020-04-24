import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Movie from './Movie'

describe('Movie: unit test suite', () => {
  const movieWithPosterUrl = {
    "Poster": "movie.media.poster.the-marvelous-wonderspiderthing-6-reloaded",
    "Title": "Wonderspiderthing 6 Reloaded",
    "Year": 2222
  }

  const movieNoPoster = {
    "Poster": "N/A",
    "Title": "Wonderspiderthing 6 Reloaded",
    "Year": 2222
  }

  it('renders component without crashing', () => {
    expect(shallow(<Movie movie={movieWithPosterUrl} />).find('.App-movie').length).toEqual(1)
  })

  it('renders component with a placeholder image without crashing', () => {
    expect(shallow(<Movie movie={movieNoPoster} />).find('.App-movie').length).toEqual(1)
  })
})
