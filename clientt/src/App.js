import { BrowserRouter } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import NewScreen from "./screens/NewScreen";

import { Flex } from "@chakra-ui/react";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Flex direction="column" as="main">
        <NewScreen />
      </Flex>
      
    </BrowserRouter>
  );
}

export default App;
