/* eslint-disable import/extensions */
import { Suspense, useEffect, lazy } from 'react';
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { addAllProducts } from 'store/products/reducer';

import Loader from 'components/Loader';
import AuthProvider from 'components/HOCs/AuthProvider';
import ErrorBoundary from 'components/ErrorBoundary';
import RequireAuth from 'components/HOCs/RequireAuth';

const Layout = lazy(() => import('components/Layout'));
const Products = lazy(() => import('pages/Products'));
const Product = lazy(() => import('pages/Product'));
const Registration = lazy(() => import('pages/Registration'));
const Login = lazy(() => import('pages/Login'));
const CartPage = lazy(() => import('pages/Cart'));
const Users = lazy(() => import('pages/Users'));
const NotFound = lazy(() => import('pages/NotFound'));

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addAllProducts());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <AuthProvider>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                element={
                  <ErrorBoundary>
                    <Products />
                  </ErrorBoundary>
                }
              />
              <Route
                path="products"
                element={
                  <ErrorBoundary>
                    <Products />
                  </ErrorBoundary>
                }
              />
              <Route
                path="products/category/:category"
                element={
                  <ErrorBoundary>
                    <Products />
                  </ErrorBoundary>
                }
              />
              <Route
                path="products/:id"
                element={
                  <ErrorBoundary>
                    <Product />
                  </ErrorBoundary>
                }
              />
              <Route
                path="cart"
                element={
                  <ErrorBoundary>
                    <CartPage />
                  </ErrorBoundary>
                }
              />
              <Route
                path="registration"
                element={
                  <ErrorBoundary>
                    <Registration />
                  </ErrorBoundary>
                }
              />
              <Route
                path="login"
                element={
                  <ErrorBoundary>
                    <Login />
                  </ErrorBoundary>
                }
              />
              <Route
                path="users"
                element={
                  <ErrorBoundary>
                    <RequireAuth>
                      <Users />
                    </RequireAuth>
                  </ErrorBoundary>
                }
              />
              <Route path="user" element={<Navigate to="/users" replace />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
