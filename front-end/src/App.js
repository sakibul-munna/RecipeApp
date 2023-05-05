import React from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import BreakfastScreen from "./screens/BreakfastScreen";
import LunchScreen from "./screens/LunchScreen";
import DinnerScreen from "./screens/DinnerScreen";
import DrinksScreen from "./screens/DrinksScreen";
import HealthyDietsScreen from "./screens/HealthyDietsScreen";
import AppetizersScreen from "./screens/AppetizersScreen";
import RecipeDetails from "./screens/RecipeDetails";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";
import AddRecipeScreen from "./screens/AddRecipeScreen";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <main className="py-5">
        <Container>
          <Routes>
            <Route path="/" exact element={<HomeScreen />} />
            <Route path="login" exact element={<LoginScreen />} />
            <Route path="signup" exact element={<SignUpScreen />} />
            <Route path="breakfast" exact element={<BreakfastScreen />} />
            <Route path="lunch" exact element={<LunchScreen />} />
            <Route path="dinner" exact element={<DinnerScreen />} />
            <Route path="drinks" exact element={<DrinksScreen />} />
            <Route path="add-recipe" exact element={<AddRecipeScreen />} />
            <Route
              path="healthy_diets"
              exact
              element={<HealthyDietsScreen />}
            />
            <Route path="appetizers" exact element={<AppetizersScreen />} />
            <Route path="recipe/:id" exact element={<RecipeDetails />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
