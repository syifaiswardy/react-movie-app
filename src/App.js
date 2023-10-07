import './index.css';
import './App.css';
import Search from './Components/search';
import MovieList from './Components/movieList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/home';

function App() {

  return (
     <div style={{background : 'rgb(19, 23, 53)', fontFamily: 'Roboto Mono'}}>
      <Search />
      <MovieList />
    </div>
  );
}

export default App;
