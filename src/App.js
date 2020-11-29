import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { GetData } from './store/actions';
import { useDispatch } from 'react-redux';
import ScrollToTop from './constant/scrollToTop';
import ContainerNav from './containers/nav';
import ContainerFooter from './containers/footer';
import Home from './pages/home';
import Tv from './pages/tv';
import Movies from './pages/movies';
import SingleFilm from './pages/film';
import Error from './components/error';
import Notfound from './pages/notfound';
import SearchInput from './components/searchInput';
import SearchPage from './pages/search';

function App() {
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetData());
  }, [dispatch]);

  return (
    <>
      {error ? (
        <Error>
          <Error.Icon />
          <Error.Head>oops!</Error.Head>
          <Error.Text>sorry error</Error.Text>
        </Error>
      ) : (
        <Router>
          <ScrollToTop />
          <ContainerNav />
          <SearchInput />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/:page/:id' exact component={SingleFilm} />
            <Route path='/movies' component={Movies} />
            <Route path='/tv' component={Tv} />
            <Route path='/search' component={SearchPage} />
            <Route component={Notfound} />
          </Switch>
          <ContainerFooter />
        </Router>
      )}
    </>
  );
}

export default App;
