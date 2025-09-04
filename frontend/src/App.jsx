import { Routes, Route } from 'react-router-dom';
import WebinarPage from './pages/WebinarPage';
import SuccessPage from './pages/SuccessPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<WebinarPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </>
  );
}

export default App;