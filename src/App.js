import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import CatsList from './components/CatsList/CatsList';
import Header from './components/Header/Header';
import Section from './components/Section/Section';

import store from './store/configureStore';

import './index.scss';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Section className="hero" title="Список котиков">
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/allCats" />}
              />
              <Route
                path="/allCats"
                element={<CatsList />}
              />
              <Route
                path="/likedCats"
                element={<CatsList />}
              />
            </Routes>
          </Section>
        </main>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
