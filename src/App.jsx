import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";

import { AppWrapper, AppContainer } from './App.styles';
import MenuState from './context/menu-state';
import Header from './components/Header/header.component';
import Footer from './components/Footer/footer.component';
import Main from './pages/Main/main.component';
import WorksPage from './pages/Works/works.component';
import { AnimatePresence } from 'framer-motion';


function App() {
  const location = useLocation()

  console.log(location.pathname)

  return (
    <AppWrapper>
      <MenuState>
        <Header />
      </MenuState>

      <AppContainer>
        {/* <AnimatePresence > */}
          <Switch location={location} key={location.pathname}>
            <Route exact path='/' component={Main} />
            <Route exact path='/works/:section/:itemId' component={WorksPage} />
            {/* <Route exact path='/works/:section/:itemId' component={WorksPage} /> */}
          </Switch>
        {/* </AnimatePresence> */}
      </AppContainer>
      <Footer />
    </AppWrapper>
  );
}

export default App;
