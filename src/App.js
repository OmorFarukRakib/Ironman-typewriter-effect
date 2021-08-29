import './App.css';
import { Typewriter } from "react-simple-typewriter";
import TonyImg from "./tony.jpg";
// import "react-simple-typewriter/dist/index.css";
function App() {
  return (
    <div className="background">
      <img className="tony-img" src={TonyImg} />
      <h1 className="text">
        He is a{" "}
        <span>
          <Typewriter
            words={["Genius.", "billionaire.", "playboy.", "philanthropist."]}
            loop
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
}

export default App;
