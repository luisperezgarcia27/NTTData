import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home.js";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
