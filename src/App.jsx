import CookieClicker from "./components/CookieClicker.jsx";
import CatFacts from "./components/Catfacts.jsx";
import Users from "./components/Users.jsx";
import "./responsive_clean_style.css";

function App() {
  return (
    <main>
      <div className="app-container">
        <CookieClicker />
        <CatFacts />
        <Users />
      </div>
    </main>
  );
}

export default App;
