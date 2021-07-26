import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Posts from "./Posts";
import Post from "./Post";

function App() {
  return (
    <BrowserRouter>
      {/* <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/posts">Posts</a> */}

      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/posts">Posts</Link>

      {/* <NavLink exact activeStyle={{ color: "yellow" }} to="/">
        Home
      </NavLink>
      <NavLink activeClass="active" to="/about">
        About
      </NavLink>
      <NavLink activeClass="active" to="/posts">
        Posts
      </NavLink> */}

      <Switch>
        <Route path="/about" component={About} />
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/post/:postId">
          <Post />
        </Route>
        <Route exact path="/" component={Home} />
        <Route path="/home">
          <Redirect to="/" />
        </Route>
        <Route path="*">
          <p>404 Page</p>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

/*
/ or /home => Home
/about => About
/posts => Posts
/post/1 => Post

*/
