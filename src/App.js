import logo from './logo.svg';
import './index.css';
import './App.css';
import Search from './Components/search';
import MovieList from './Components/movieList';
import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const { movieList } = useContext(GlobalContext)

  return (
     <div style={{background : 'rgb(19, 23, 53)', fontFamily: 'Roboto Mono'}}>
      <Search />
      <MovieList />
    </div>
  );
}

export default App;
