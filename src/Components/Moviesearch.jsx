import React, { useState } from 'react';
import axios from 'axios';
import { Card, Container, Row, Col, Button, FormControl, Form } from 'react-bootstrap';

const MovieSearchResults = ({ results }) => {
  return (
    <Container fluid className="mt-4">
      <Row>
        {results.map((movie) => (
          <Col key={movie.imdbID} className="mb-4 col-12 col-md-6 col-lg-3">
            <Card style={{ width: '100%' }}>
              <Card.Img
                variant="top"
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
                alt={movie.Title}
              />
              <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>Year: {movie.Year}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

const MovieSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://www.omdbapi.com/?apikey=33544a1d&s=${searchQuery}`);
      setSearchResults(response.data.Search || []);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div className="mt-4">
      <Form onSubmit={handleSearchSubmit} style={{  padding: '15px', display: 'flex' }}>
        <FormControl
          type="search"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={handleSearchInputChange}
          style={{ marginRight: '10px' }}
        />
        <Button type="submit" variant="dark">
          Search
        </Button>
      </Form>

      {searchResults.length > 0 && <MovieSearchResults results={searchResults} />}
    </div>
  );
};

export default MovieSearch;