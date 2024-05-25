import AppLayout from "./AppLayout";
import {UserProvider} from "./hooks/UserProvider";


export default function App() {
  return (
      <UserProvider>
        <AppLayout />
      </UserProvider>
  );
}

