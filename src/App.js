import './App.css';
import AppHeader from './appHeader.js';
import AppFooter from './appFooter.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.js";
import EmergencyRoute from "./pages/EmergencyRoute.js";
import EmergencyRouteBarnsley from "./pages/EmergencyRouteBarnsley.js";
import EmergencyRouteDoncaster from "./pages/EmergencyRouteDoncaster.js";
import EmergencyRouteRotherham from "./pages/EmergencyRouteRotherham.js";
import EmergencyRouteSheffield from "./pages/EmergencyRouteSheffield.js";
import NormalRoute from "./pages/NormalRoute.js";




function App() {
  return (
    <div className="App fill-window">

      <AppHeader />

      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Landing />} />
            <Route path="emergencyroute" element={<EmergencyRoute />} />
            <Route path="emergencyroute/barnsley" element={<EmergencyRouteBarnsley />} />
            <Route path="emergencyroute/doncaster" element={<EmergencyRouteDoncaster />} />
            <Route path="emergencyroute/rotherham" element={<EmergencyRouteRotherham />} />
            <Route path="emergencyroute/sheffield" element={<EmergencyRouteSheffield />} />
            <Route path="normalroute" element={<NormalRoute />} />
          </Route>
        </Routes>
      </BrowserRouter>
      
      <AppFooter />

    </div>
  );
}

export default App;
