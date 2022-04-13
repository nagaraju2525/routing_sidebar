import{
    BrowserRouter as Router,
    Routes,
    Route,
    
  } from "react-router-dom";
  import Dashboard from "./dashboard";
  import Users from "./users";
  import Userdetails from "./userdetails";
  import Posts from "./Posts";
import Comments from "./Comments";
import Todos from "./Todos";

export default function Content()
{
    return <div>
        <main>
            <Routes>
                <Route exact path="/" element={<Dashboard/>}/>
                <Route exact path="/users" element={<Users/>}/>
                <Route exact path="/user-details/:id/:name" element={<Userdetails/>}/>
                <Route exact path="/posts" element={<Posts/>}/>
                <Route exact path="/comments" element={<Comments/>}/>
                <Route exact path="/todos" element={<Todos/>}/>

            </Routes>
        </main>
    </div>
}