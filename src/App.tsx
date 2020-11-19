import React from 'react';
import {StylesProvider} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {BrowserRouter as Router} from 'react-router-dom';
import {Routes} from './routes/Routes';
import {Navbar} from './components/Navbar/Navbar';
import {GlobalStyles, StyledContent} from './styles/GlobalStyles';
import {Footer} from './components/Footer/Footer';


export const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <GlobalStyles />
      <Router>
      <Navbar />
        <StyledContent className="App">          
          <h1>ALLorganizer frontend</h1>          
          <Routes />
        </StyledContent>
        <Footer />
      </Router>
    </StylesProvider>
  );
}
