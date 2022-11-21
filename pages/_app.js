import { useEffect } from "react"; // method used to import bootstrap JS
import 'bootstrap/dist/css/bootstrap.css'; // bootstrap CSS
import '../styles/globals.css';



function MyApp({ Component, pageProps }) {

  // import bootstrap JS
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return(
      <Component {...pageProps} />  
  )
}

export default MyApp
