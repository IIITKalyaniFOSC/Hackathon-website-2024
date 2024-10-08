import './App.css'
import Footer from './components/Footer/Footer'
import Discord from './components/Discord/Discord'
import Schedule from './components/Schedule/Schedule'
import TimerSection from './pages/TimerSection'
import Navbar from './components/Navbar'
import Tracks from './components/Tracks/Tracks'
import Sponsors from './components/Sponsors/Sponsors'
import Faq from './components/Faq/Faq'
import Cp from './components/Cp/Cp'
// import CursorFollower from './components/CursorFollower';

import LandingPage from './pages/LandingPage'
import StatusCode0 from './components/StatusCode0/StatusCode0'
import Prizes from './components/Prizes/Prizes'
function App() {

  return (
    <>
       {/* <CursorFollower /> */}
      <Navbar />
      <LandingPage/>
      <StatusCode0 />
      <Prizes/>
      <Tracks />
      <Sponsors />
      <Cp/>
      <Faq/>
      <Discord />
      <Footer />
    </>
  )
}

export default App
