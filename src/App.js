import Navbar from "./Navbar";
import Popularbar from "./Popularbar";
import Toprated from "./Toprated";
import Upcomingbar from "./Upcomingbar";
import "./pbar.css";
import Preview from "./Preview";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path={"/"}>
            <Redirect to="/home" />
          </Route>
          <Route path={"/home"}>
            <div className="myContainer">
              <h6 className="tgs">Popular</h6>
              <Popularbar />
              <h6 className="tgs">TopRated</h6>
              <Toprated />
              <h6 className="tgs">UpComing</h6>
              <Upcomingbar />
            </div>
          </Route>

          <Route path={"/preview/:id/:recv"}>
            <Preview />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
