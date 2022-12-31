import { useState } from "react";
import Catalog from "./Catalog";
import Video from "./Video";

function App() {
  const [home, setHome] = useState(true);
  return home ? <Catalog setHome={setHome} /> : <Video />;
}

export default App;
