import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RecipeList from "./components/RecipeList";

import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./SearchBar";

const App = () => (
  <Router>
    <div className="App">
      <h1>Recipe Sharing App</h1>
      <SearchBar /> {/* Search bar at the top */}
      <AddRecipeForm />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetails />} />
      </Routes>
    </div>
  </Router>
);

export default App;
