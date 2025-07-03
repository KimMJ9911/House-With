import { BrowserRouter, Routes } from 'react-router-dom';
import { OnboardingRoutes } from './routes/OnboardingRoutes';
import { Mypage } from './routes/Mypage';

function App() {
  return (
    <BrowserRouter>
      <Routes>{OnboardingRoutes}</Routes>
      <Routes>{Mypage}</Routes>
    </BrowserRouter>
  );
}

export default App;
