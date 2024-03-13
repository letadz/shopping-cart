import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import AuthDetails from "./pages/auth/AuthDetails";

const App = () => {
  return (
    <>
      <div>
        <Login />
        <SignUp />
        <AuthDetails />
      </div>
    </>
  );
};

export default App;
