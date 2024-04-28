// import ContactForm from "./components/ContactForm/ContactForm";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactList from "./components/ContactList/ContactList";
import { useDispatch } from "react-redux";
import { Suspense, lazy, useEffect } from "react";
import Layout from "./components/Layout/Layout";
import { Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import { refreshUser } from "./redux/auth/operations.js";
import RestrictedRoute from "./pages/RestrictedRoute";
import PrivateRoute from "./pages/PrivateRoute";

const HomePage = lazy(() => import("./pages/HomePage"));
const RegistrationFormPage = lazy(() => import("./pages/RegistrationFormPage"));
const LoginFormPage = lazy(() => import("./pages/LoginFormPage"));
const ContactsPage = lazy(() => import("./pages/ContactsPage"));

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchContacts());
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute>
                <RegistrationFormPage />
              </RestrictedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute>
                <LoginFormPage />
              </RestrictedRoute>
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;