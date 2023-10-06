import logo from './logo.svg';
import './App.css';
import Search from './Components/search';
import MovieList from './Components/movieList';

function App() {
  return (
    <div className="App">
      <Search/>
      <MovieList/>
    </div>
  );
}

export default App;
