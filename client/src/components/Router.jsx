import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
            path="/login"
            element={<Layout><Login /></Layout>}
          />
          <Route
            path="/register"
            element={<Layout><Register /></Layout>}
          />
          <Route
            path="/dashboard"
            element={<Layout><Dashboard /></Layout>}
          />
          
      </Routes>
    </BrowserRouter>
  );
}
export default Router;
