import Home from "./Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes} from "react-router-dom";
import Create from "./Create";
import Update from "./Update";


function App() {
  return (
    <div >
    <Routes>
    <Route path="/" element={ <Home/>}></Route>
    <Route path="/create" element={ <Create/>}></Route>
    <Route path="/edit/:id" element={ <Update/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
