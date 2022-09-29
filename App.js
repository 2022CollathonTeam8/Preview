import { Navigation } from "./src/Navigations";
import { UserProvider } from "./src/Contexts/User";

const App = () => {
  return (
    <UserProvider>
      <Navigation />
    </UserProvider>
  );
};

export default App;
