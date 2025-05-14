import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Network from './pages/Network';
import Solutions from './pages/Solutions';
import BuildOnXdc from './pages/BuildOnXdc';
import Resources from './pages/Resources';
import Community from './pages/Community';
import TechSpecs from './pages/TechSpecs';
import History from './pages/History';
import RWATokenization from './pages/RWATokenization';
import TradeFinance from './pages/TradeFinance';
import Enterprise from './pages/Enterprise';
import Developers from './pages/Developers';
import Ecosystem from './pages/Ecosystem';
import BrandAssets from './pages/BrandAssets';
import ProjectSupport from './pages/ProjectSupport';
import Forum from './pages/Forum';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';
import XdcDev from './pages/XdcDev';
import News from './pages/News';
import Documentation from './pages/Documentation';
import GoToTop from './components/GoToTop';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/network" element={<Network />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/build-on-xdc" element={<BuildOnXdc />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/community" element={<Community />} />

          {/* Network Section Routes */}
          <Route path="/tech-specs" element={<TechSpecs />} />
          <Route path="/history" element={<History />} />

          {/* Solutions Section Routes */}
          <Route path="/rwa-tokenization" element={<RWATokenization />} />
          <Route path="/trade-finance" element={<TradeFinance />} />
          <Route path="/enterprise" element={<Enterprise />} />

          {/* Build on XDC Section Routes */}
          <Route path="/developers" element={<Developers />} />
          <Route path="/ecosystem" element={<Ecosystem />} />
          <Route path="/xdc-dev" element={<XdcDev />} />

          {/* Resources Section Routes */}
          <Route path="/brand-assets" element={<BrandAssets />} />
          <Route path="/project-support" element={<ProjectSupport />} />

          {/* Documentation Routes */}
          <Route path="/docs" element={<Documentation />} />
          <Route path="/subnets" element={<Documentation />} />
          <Route path="/tutorials" element={<Documentation />} />
          <Route path="/whitepapers" element={<Documentation />} />

          {/* Community Section Routes */}
          <Route path="/forum" element={<Forum />} />

          {/* Legal Routes */}
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />

          {/* News Routes */}
          <Route path="/news" element={<News />} />
        </Routes>
        <GoToTop />
      </Layout>
    </Router>
  );
}

export default App;