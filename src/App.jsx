import SmoothScroll from "smooth-scroll";
import CssBaseline from '@mui/material/CssBaseline';
import AppAppBar from './components/AppAppBar';
import MainScreen from './components/MainScreen';
import FAQ from './components/FAQ';
import About from './components/About';
import Terms from './components/Terms';
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
 
  return (
    <div>
      <CssBaseline enableColorScheme />
      <ToastContainer />
      <AppAppBar />
      <MainScreen />
      <FAQ />
      <About />
      <Terms />
      <Footer />
    </div>
  );
};

export default App;
