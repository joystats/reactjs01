import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { store, persistor } from './configs/Redux'
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <PersistGate load={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);
