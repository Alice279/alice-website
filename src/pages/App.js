import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import Header from '../componens/Header'

function App() {
  return (
    <Router>
      <Header />
    </Router>
  );
}

export default App;
