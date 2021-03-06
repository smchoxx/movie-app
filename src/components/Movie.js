import React from 'react';
import PropTypes, { string } from 'prop-types';
import { HashRouter, Link } from 'react-router-dom';
import { render } from 'react-dom';
import './Movie.css';

export default function Movie({ id, year, title, poster, summary, genres }) {
  let cutSummary = summary.slice(0, 140);
  cutSummary = cutSummary < 140 ? summary : cutSummary + '...';

  return (
    <div className='movie'>
      <img className='movie__poster' src={poster} alt={title} />
      <div className='movie__info'>
        <h3 className='movie__title'>
          <Link
            to={{
              pathname: `/movie/${id}`,
              state: {
                id, //
                year,
                title,
                poster,
                summary,
                genres,
              },
            }}
          >
            {title}
          </Link>
        </h3>
        <h5 className='moive__year'>{year}</h5>
        <ul className='movie__genres'>
          {genres.map((genre, index) => (
            <li key={index} className='genres__genre'>
              {genre}
            </li>
          ))}
        </ul>
        <p className='movie__summary'>{cutSummary}</p>
      </div>
    </div>
  );
}

Movie.prototype = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
