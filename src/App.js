import Landing from '@views/Landing';
import SignIn from "@views/SignIn";
import { Routes, Route } from "react-router-dom";
import SplitPane from "@components/SplitPane";
function App() {
  return (
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/app" element={<SplitPane />}></Route>
        <Route path="/sign-in" element={<SignIn />}></Route>
      </Routes>
  );
}
export default App;
