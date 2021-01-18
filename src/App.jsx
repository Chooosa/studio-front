import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';

import { AppWrapper, AppContainer } from './App.styles';
import MenuState from './context/menu-state';
import Header from './components/Header/header.component';
import Footer from './components/Footer/footer.component';
import Main from './pages/Main/main.component';
import WorksPage from './pages/Works/works.component';
import Cooperation from './pages/Cooperation/cooperation.component';
import Guarantees from './pages/Guarantees/guarantees.component';
import Loader from './components/Loader/loader.component';



function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()


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
            <Route exact path='/cooperation' component={Cooperation} />
            <Route exact path='/guarantees' component={Guarantees} />
          </Switch>
        {/* </AnimatePresence> */}
      </AppContainer>
      <Footer />
      {/* <Loader/> */}
    </AppWrapper>
  );
}

export default App;
