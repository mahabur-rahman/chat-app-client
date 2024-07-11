import { useRoutes } from "react-router-dom";
import { routes } from "./Route";
import { Navbar } from "./components/Navbar";

const App = () => {
  const router = useRoutes(routes);

  return (
    <>
      <Navbar />
      {router}
    </>
  );
};

export default App;
