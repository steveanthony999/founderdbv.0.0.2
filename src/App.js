import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// ======== Contexts
import { AuthProvider } from './contexts/AuthContext';

// ======== Components
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';

// ======== Screens
import Home from './screens/Home';
import Login from './screens/Login';
import Founders from './screens/Founders';

import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Switch>
          <PrivateRoute exact path='/' component={Home} />
          <PrivateRoute path='/founders' component={Founders} />
          <Route path='/login' component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
