import "./App.css";
import Intro from "./components/intro";
import Navbar from "./components/navbar";


function App() {
  return (
    <div className="bg-slate-900 text-slate-400 h-screen">
      <Navbar></Navbar>
      <Intro></Intro>
    </div>
  );
}

export default App;
