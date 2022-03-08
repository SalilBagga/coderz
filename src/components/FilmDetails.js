import React from 'react';

export default function FilmDetails({ filmdetails }) {
  return (
    <div className="flex flex-col items-start    text-white rounded-lg text-left">
      <h1>
        Title: <span>{filmdetails.Title}</span>
      </h1>
      <h1>
        Rated: <span>{filmdetails.Rated}</span>
      </h1>
      <h1>
        Runtime: <span>{filmdetails.Runtime}</span>
      </h1>
      <h1>
        Genre: <span>{filmdetails.Genre}</span>
      </h1>
      <h1>
        Director: <span>{filmdetails.Director}</span>
      </h1>
      <h1>
        Writer: <span>{filmdetails.Writer}</span>
      </h1>
      <h1>
        Actors: <span>{filmdetails.Actors}</span>
      </h1>
      <h1>
        Plot: <span>{filmdetails.Plot}</span>
      </h1>
    </div>
  );
}
