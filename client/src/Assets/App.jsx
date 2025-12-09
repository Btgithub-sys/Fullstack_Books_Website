import { BrowserRouter, Routes, Route} from "react-router-dom";
import Books from "./Assets/Books";
import CreateBook from "./Assets/CreateBook";
import UpdateBook from "./Assets/UpdateBook";
import Nav from ".Assets/Nav";

function App() {
    return (
        <BrowserRouter>
        <Nav />
            <Routes>
                <Route path='/' element={<Books />} />
                <Route path='/create' element={<CreateBook />} />
                <Route path='/update/:id' element={<UpdateBook />} />
            </Routes>
        </BrowserRouter>    

    );
}
export default App;