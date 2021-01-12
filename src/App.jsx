import React from 'react';
import { Route, Switch } from "react-router-dom";

import { AppWrapper, AppContainer } from './App.styles';
import MenuState from './context/menu-state';
import Header from './components/Header/header.component';
import Footer from './components/Footer/footer.component';
import Main from './pages/Main/main.component';

function App() {
  return (
    <AppWrapper>
      <MenuState>
        <Header />
      </MenuState>

      <AppContainer>
        <Switch>
          <Route exact path='/' component={Main} />
        </Switch>
      </AppContainer>

      <Footer />
    </AppWrapper>
  );
}

export default App;
