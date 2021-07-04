import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppLayout from "./layouts/AppLayout";
import Admin from "./pages/Admin/admin";
// import FilmDetail from "./pages/FilmDetail";
// import Home from './pages/Home/index';
// import Login from './pages/Auth/login';
// import Register from "./pages/Auth/register";
import LoginAsAdmin from "./pages/Admin/loginAsAdmin";
import LoadingPage from "./pages/LoadingPage";

const Home = lazy(() => import("./pages/Home/index"));
const FilmDetail = lazy(() => import("./pages/FilmDetail"));
const Register = lazy(() => import("./pages/Auth/register"));
const Login = lazy(() => import("./pages/Auth/login"));
const Checkout = lazy(() => import("./pages/Checkout"));

function App() {
  return (
    <Suspense fallback={<LoadingPage/>}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/login-as-admin">
            <LoginAsAdmin />
          </Route>
          <Route path="/checkout/:scheduleID" exact>
            <Checkout />
          </Route>
          {/* Route main */}
          <Route path="/">
            <AppLayout>
              <Switch>
                <Route path="/" exact>
                  <Home />
                </Route>
                <Route path="/films/:filmID" exact>
                  <FilmDetail />
                </Route>
              </Switch>
            </AppLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
