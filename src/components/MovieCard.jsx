import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card" style={cardStyle}>
      <h2 style={titleStyle}>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} style={imageStyle} />
      <p style={textStyle}>Rating: {movie.rating}</p>
      <p style={textStyle}>Description: {movie.description}</p>
    </div>
  );
}

const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '5px',
  padding: '10px',
  marginBottom: '20px',
};

const titleStyle = {
  fontSize: '20px',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const imageStyle = {
  maxWidth: '100%',
  height: 'auto',
  marginBottom: '10px',
};

const textStyle = {
  fontSize: '16px',
};

export default MovieCard;
