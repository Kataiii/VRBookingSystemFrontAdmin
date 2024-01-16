import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from "react-router-dom";
import router from './routing/Router';
import { ThemeProvider } from './ThemeProvider';
import Store from './store/Store';
import { createContext } from 'react';
import Auth from './store/Auth';
import RoomStore from './store/RoomStore';


interface IState {
  store: Store,
  auth: Auth,
  rooms: RoomStore
}

const store = new Store();
const auth = new Auth();
const rooms = new RoomStore();

export const Context = createContext<IState>(
  { 
    store,
    auth,
    rooms
  }
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Context.Provider value={{
    store, auth, rooms
  }}>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </Context.Provider>
);

