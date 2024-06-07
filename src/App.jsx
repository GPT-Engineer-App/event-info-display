import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import EventInfo from "./pages/EventInfo.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route exact path="/events" element={<EventInfo />} />
      </Routes>
    </Router>
  );
}

export default App;
