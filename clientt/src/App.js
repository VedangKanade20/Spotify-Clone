import { BrowserRouter } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
        <HomeScreen />
      </div>
    </BrowserRouter>
  );
}

export default App;
