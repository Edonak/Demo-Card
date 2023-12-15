import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import SuccessPage from "./components/pages/SuccessPage";
import { appRoutes } from "./lib/routes";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={appRoutes.home} element={<HomePage />} />
          <Route path={appRoutes.successPage} element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
