import { Route, Routes } from "react-router-dom";
import CompanyListComponent from "./components/CompanyListComponent";
import LoginComponent from "./components/LoginComponent";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginComponent />} />
      <Route path="companies" element={<CompanyListComponent />} />
    </Routes>
  );
};

export default App;
