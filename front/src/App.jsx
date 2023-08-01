import {Route, Routes} from "react-router-dom";
import MainPage from "./pages/main";
import AuthPage from "./pages/auth";
import ProfilePage from "./pages/userProfile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </>
  );
}

export default App;
