import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/Homepage";
import { Sidebar } from "./components/Sidebar";
import { Profile } from "./pages/Profile";

const AppShell = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route path="/home" element={<Homepage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<div>Notifications</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
