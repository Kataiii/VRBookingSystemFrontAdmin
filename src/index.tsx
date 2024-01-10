import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import router from './routing/Router';
import { ThemeProvider } from './ThemeProvider';
import Store from './store/Store';
import { createContext } from 'react';


interface IState {
  store: Store
}

const store = new Store();

export const Context = createContext<IState>({ store });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Context.Provider value={{
    store
  }}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Context.Provider>
);

