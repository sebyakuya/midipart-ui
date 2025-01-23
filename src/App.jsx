import SmoothScroll from "smooth-scroll";
import CssBaseline from '@mui/material/CssBaseline';
import AppAppBar from './components/AppAppBar';
import Hero from './components/Hero';
import FAQ from './components/FAQ';
import About from './components/About';
import Footer from './components/Footer';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
 
  return (
    <div>
      <CssBaseline enableColorScheme />
      <AppAppBar />
      <Hero />
      <FAQ />
      <About />
      <Footer />
    </div>
  );
};

export default App;
