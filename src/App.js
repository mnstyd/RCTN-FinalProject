import './App.css';
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import MovieDisplay from "./components/MovieDisplay";
import SearchBar from "./components/SearchBar";
import MovieSource from "./api/MovieSource";
import { Navbar, Container } from 'react-bootstrap';

function App() {
  const [search, setSearch] = useState({
    results: []
  });

  const [hideDisplay, setHideDisplay] = useState(true)

  const onSearch = async (text) => {
    const results = await MovieSource.get("/", { params: { s: text, i: "tt3896198", apiKey: "48e2281c" }});

    setSearch(prevState => {
      return { ...prevState, results: results }
    })

    setHideDisplay(false)
  };

  if(!hideDisplay) {
    return (
      <div className="App">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand></Navbar.Brand>
            <SearchBar onSearch={onSearch} />
          </Container>
        </Navbar>
        <br />
        <MovieList results={search.results} />
      </div>
    );
  }
  return (
      <div className="App">
        <Navbar bg="dark" variant="dark" style={{borderRadius:"5px"}}>
          <Container>
            <Navbar.Brand></Navbar.Brand>
            <SearchBar onSearch={onSearch} />
          </Container>
        </Navbar>
        <br />
        <MovieDisplay />
      </div>
  );
}

export default App;
