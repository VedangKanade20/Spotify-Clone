import { BrowserRouter } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen.jsx";

function App() {
  return (
    <BrowserRouter>
      <HomeScreen />
    </BrowserRouter>
  );
}

export default App;
