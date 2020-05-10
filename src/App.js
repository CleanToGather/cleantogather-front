import React from 'react';
import './App.css';
import AppRouter from "./components/common/routes/Routes";
import NavBar from "./components/common/layout/Navbar";
import Container from '@material-ui/core/Container';

function App() {
  return (
      <div>
	<NavBar/>
          <Container>
	      <AppRouter/>
          </Container>
      </div>
  );
}

export default App;
