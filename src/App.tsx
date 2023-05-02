import { RouterProvider } from "react-router-dom";
import useRoute from "./Routes/useRoute";
import useAuth from "./customHooks/useAuth";

function App() {
  const Routes = useRoute();
  useAuth();
  return <RouterProvider router={Routes} />;
}

export default App;
