import './App.css';
import AppHeader from './appHeader.js';
import AppFooter from './appFooter.js';
import { HashRouter , Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing.js";
import EmergencyRoute from "./pages/EmergencyRoute.js";
import EmergencyRouteBarnsley from "./pages/EmergencyRouteBarnsley.js";
import EmergencyRouteDoncaster from "./pages/EmergencyRouteDoncaster.js";
import EmergencyRouteRotherham from "./pages/EmergencyRouteRotherham.js";
import EmergencyRouteSheffield from "./pages/EmergencyRouteSheffield.js";
import Support from "./pages/Support.js";
import SupportPage from "./pages/SupportPage.js";
import Resources from "./pages/Resources.js";
import SelfCare from "./pages/SelfCare.js";
import ThreeItems from "./pages/ThreeItems/ThreeItems.js";
import MoodIndicator from "./pages/MoodIndicator/MoodIndicator.js";


function App() {
  return (
    <div className="App fill-window">

      <AppHeader />

      <HashRouter >
        <Routes>
          <Route basename="/platinum-project" path="/" >
            <Route index element={ <Landing /> } />
            <Route path="emergency" element={ <EmergencyRoute /> } />
            <Route path="emergency/barnsley" element={ <EmergencyRouteBarnsley /> } />
            <Route path="emergency/doncaster" element={ <EmergencyRouteDoncaster /> } />
            <Route path="emergency/rotherham" element={ <EmergencyRouteRotherham /> } />
            <Route path="emergency/sheffield" element={ <EmergencyRouteSheffield /> } />
            <Route path="support" element={ <Support /> } />
            <Route path="support/barnsley" element={ <SupportPage Location="Barnsley" /> } />
            <Route path="support/doncaster" element={ <SupportPage Location="Doncaster" /> } />
            <Route path="support/rotherham" element={ <SupportPage Location="Rotherham" /> } />
            <Route path="support/sheffield" element={ <SupportPage Location="Sheffield" /> } />
            <Route path="support/threeitems" element={ <ThreeItems /> } />
            <Route path="support/moodindicator" element={ <MoodIndicator /> } />
            <Route path="support/resources" element={ <Resources /> } />
            <Route path="support/selfcare" element={ <SelfCare /> } />
          </Route>
        </Routes>
      </HashRouter >
      
      <AppFooter />

    </div>
  );
}

export default App;
