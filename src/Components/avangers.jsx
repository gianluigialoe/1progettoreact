import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CommentArea from "./CommentArea";

const Avangers = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(
          "https://www.omdbapi.com/?apikey=33544a1d&s=Avenger"
        );
        setMovies(response.data.Search || []);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  const handleCardClick = (asin) => {
    setSelectedMovie(asin);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  return (
   <Container fluid className="mt-5 bg-dark">
  <h1 className="text-start mb-4">Fast and Furious</h1>
  <Row>
    {movies.map((movie, index) => (
      <Col
        key={movie.imdbID}
        className={`mb-4 col-12 col-md-6 col-lg-2 col-xl-2 ${
          index >= 6 ? 'd-lg-none' : 'd-lg-block'
        }`}
      >
          
            <Card style={{ width: '100%' }}>
              <Card.Img
                variant="top"
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300'}
                alt={movie.Title}
                onClick={() => handleCardClick(movie.imdbID)}
                style={{ cursor: 'pointer' }}
              />
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
        <Modal.Title>
             <Modal.Title>{selectedMovie?.Title}</Modal.Title>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CommentArea asin={selectedMovie} />
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>
            Close
          </button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Avangers;