import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import BooksLibrary from './components/BooksLibrary';
import Categories from './display/Categories';
import bookstore from './redux/configureStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={(
            <Provider store={bookstore}>
              <App />
            </Provider>
        )}
        >
          <Route path="/" element={<BooksLibrary />} />
          <Route path="/categories" element={<Categories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
