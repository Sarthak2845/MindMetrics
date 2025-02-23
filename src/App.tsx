import { useState } from "react";
import Preloader from "./components/Preloader";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Navbar from "./components/NavBar";
import Home from "./pages/Home";
import Test from "./pages/Test";
const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center text-center p-6 ">
      {loading ? (
        <Preloader onFinish={() => setLoading(false)} />
      ) : (
      <Router>
        <Navbar/>
       <main >
       <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/test" element={<Test/>} />
        </Routes>
       </main>
      </Router>
      )}
    </div>
  );
};

export default App;

