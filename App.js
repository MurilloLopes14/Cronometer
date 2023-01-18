//* Components
import { StatusBar } from "expo-status-bar";
import { registerRootComponent } from "expo";

import Cronometer from "./src/components/Cronometer";

function App() {
  return (
    <>
      <StatusBar translucent={false} backgroundColor={"#13A4CA"} />
      <Cronometer />
    </>
  );
}

registerRootComponent(App);
