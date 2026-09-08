import AppThemeConfig from "./theme";
import Navbar from "./components/Navbar/Navbar";
import OnboardingPage from "./pages/OnboardingPage";

function App() {
  return (
    <AppThemeConfig>
      <Navbar />
      <OnboardingPage />
    </AppThemeConfig>
  );
}

export default App;
