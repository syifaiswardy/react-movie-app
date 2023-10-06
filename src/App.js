import logo from './logo.svg';
import './App.css';
import Search from './Components/search';
import MovieList from './Components/movieList';
import { useContext } from 'react';
import { GlobalContext } from './GlobalContext';

function App() {

  const {movieList} = useContext(GlobalContext)

  return (
    <div style={{background : movieList && movieList.length > 0 && "pink"}}> 
    {/* to change background if have movie list after click submit */}
      <Search/>
      <MovieList/>
    </div>
  );
}

export default App;
