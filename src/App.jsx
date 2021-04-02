import React, { useEffect, useRef, useState } from 'react';
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
  const containerRef = useRef()

  // const addr = window.localStorage.getItem('address')
  // const [websites, setWebsites] = useState(addr ? addr : 'contacts')

  const [endLoader, setEndLoader] = useState(false)
  const [animationHeight, setAnimationHeight] = useState(containerRef.current?.clientHeight)

  // const setAddr = () => {
  //   setWebsites('kontakty')
  //   window.localStorage.setItem('address', 'kontakty')
  // }

  useEffect(() => {
    document.addEventListener('touchmove', function(e) {
      e.preventDefault()
    }, false)
    window.addEventListener('touchmove', function(e) {
      e.preventDefault()
    }, {
      passive: false
   });
    localStorage.setItem('scroll', false)
  }, [])

  useEffect(() => {
    setAnimationHeight(containerRef.current?.clientHeight)

  }, [pathname])

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

            <AppContainer id="app-container" ref={containerRef}>
              {/* <AnimatePresence > */}
              <Switch location={location} key={location.pathname}>
                <Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
                <Route exact path='/' component={Main} />
                <Route exact path='/works/:section/:itemId' component={WorksPage} />
                {/* <Route exact path='/works/:section/:itemId' component={WorksPage} /> */}
                <Route exact path='/services/:section' component={ServicesPage} />
                <Route exact path='/cooperation' component={Cooperation} />
                <Route exact path='/guarantees' component={Guarantees} />
                <Route exact path={`/contacts`} component={Contacts} />
                <Route path='/' >
                  <NotFound endLoader={endLoader} error={error} />
                </Route>
              </Switch>
              {/* </AnimatePresence> */}
              {/* <button onClick={() => setAddr()}>change</button> */}
            </AppContainer>
            <AnimatedBackground animationHeight={animationHeight} />
            <Footer />
          </ErrorBoundary>
      }
      <Loader setEndLoader={setEndLoader} />
    </AppWrapper>
  );
}

export default App;