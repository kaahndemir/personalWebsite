import logo from './logo.svg';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css'; 
import NoPage from './pages/NoPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';




export const theme = createTheme({
  palette: {
    text: {
      primary: "#FFFFF",
      secondary: "#FFFFFF"
    },
    primary: {
      main: '#B0C4B1',
    },
    secondary: {
      main: '#EDAFB8',
    },
  },
  typography: {
    allVariants: {  
      color: "white",
      fontSize: "18px"
    },
    fontFamily: [
      'SFPro',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  components: {
    
    MuiTextField: {
      defaultProps: {
        sx: {
          borderRadius: "10px",
          backgroundColor: "#001B29",
          color: "#A9A9A9",
          fontSize: '18px',
        }
      }
    },
    MuiButton: {
      defaultProps: {
        sx: {
          backgroundColor: '#007AFF',
          color: "white",
          textTransform: "none",
          borderRadius: "10px",
          ":hover": {
            backgroundColor: "#DB2551"
          },
          margin:"5px 0",
          padding: "7px 15px"
        },
      },
    }
  }
});


function App() {
  return (
    <div className="App" style={{backgroundColor: "black", height:'100%'}}>
      <Header/>
      <ThemeProvider theme={theme}><div className="App">

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects/:projectId" element={<ProjectPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </BrowserRouter>

      </div>
      </ThemeProvider>
      <Footer/>
    </div>
  );
}

export default App;
