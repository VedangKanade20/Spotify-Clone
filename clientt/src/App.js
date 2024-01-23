import { BrowserRouter } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import { Flex } from "@chakra-ui/react";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Flex direction="column" as="main">
        <HomeScreen />
      </Flex>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
