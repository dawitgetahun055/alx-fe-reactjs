import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Homepage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
