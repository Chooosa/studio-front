import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import useErrorBoundary from "use-error-boundary";
import smoothscroll from 'smoothscroll-polyfill';


import { AppWrapper, AppContainer } from './App.styles';
import MenuState from './context/menu-state';
import Header from './components/Header/header.component';
import Footer from './components/Footer/footer.component';
import ErrorFallback from './components/ErrorFallback/error-fallback.component';
import Main from './pages/Main/main.component';
import WorksPage from './pages/Works/works.component';
import Cooperation from './pages/Cooperation/cooperation.component';
import Guarantees from './pages/Guarantees/guarantees.component';
import Loader from './components/Loader/loader.component';
import { useDispatch } from 'react-redux';
import { fetchContent } from './redux/content/content.actions';
import ServicesPage from './pages/Services/services.component';
import AnimatedBackground from './components/AnimatedBackground/animated-background.component';
import Contacts from './pages/Contacts/contacts.component';
import NotFound from './pages/NotFound/not-found.component';


smoothscroll.polyfill();
// window.__forceSmoothScrollPolyfill__ = true;

function App() {
  // const [loading, setLoading] = useState(true)
  const location = useLocation()
  const { pathname } = useLocation()
  const dispatch = useDispatch()

  const addr = window.localStorage.getItem('address')
  const [websites, setWebsites] = useState(addr ? addr : 'contacts')

  const setAddr = () => {
    setWebsites('kontakty')
    window.localStorage.setItem('address', 'kontakty')
  }

  useEffect(() => {

    localStorage.setItem('scroll', false)
  }, [])


  useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch])

  const { ErrorBoundary, didCatch, error } = useErrorBoundary();

  return (
    <AppWrapper>
      {
        didCatch ? <ErrorFallback error={error} /> :
          <ErrorBoundary>
            <MenuState>
              <Header />
            </MenuState>

            <AppContainer>
              {/* <AnimatePresence > */}
              <Switch location={location} key={location.pathname}>
                <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                <Route exact path='/' component={Main} />
                <Route exact path='/works/:section/:itemId' component={WorksPage} />
                {/* <Route exact path='/works/:section/:itemId' component={WorksPage} /> */}
                <Route exact path='/services/:section' component={ServicesPage} />
                <Route exact path='/cooperation' component={Cooperation} />
                <Route exact path='/guarantees' component={Guarantees} />
                <Route exact path={`/${websites}`} component={Contacts} />
                <Route path='/' component={NotFound} />
              </Switch>
              {/* </AnimatePresence> */}
              {/* <button onClick={() => setAddr()}>change</button> */}
            </AppContainer>
            <AnimatedBackground />
            <Footer />
          </ErrorBoundary>
      }
      <Loader />
    </AppWrapper>
  );
}

export default App;