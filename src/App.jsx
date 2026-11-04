import Header from "./components/header";
import Home from "./pages/home/index";
import Detail from "./pages/detail/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="h-screen">
        <Header />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/country/:country" element={<Detail />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
