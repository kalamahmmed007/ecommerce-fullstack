import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from 'react-hot-toast';

import AppRoutes from './routes/AppRoutes';
import store from './app/store';
import { ThemeProvider } from './context/ThemeContext';
import { NotificationProvider } from './context/NotificationContext';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <NotificationProvider>
          <Router>
            <AppRoutes />
          </Router>
          <Toaster />
        </NotificationProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
