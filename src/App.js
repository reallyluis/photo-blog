import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import Amplify /* , { API, graphqlOperation } */ from 'aws-amplify';
import { useAuth } from './hooks';
// import { listBlogs } from './graphql/queries';

import { Admin, Guest, Home, SignIn } from './pages';
import { Header } from './components';

import './App.css';

import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const App = () => {
  const { isSignedIn=false } = useAuth();
  // const [blogs, setBlogs] = useState([]);

  // useEffect(() => {
  //   fetchBlogs();
  // }, []);

  // async function fetchBlogs() {
  //   try {
  //     const blogData = await API.graphql(graphqlOperation(listBlogs));
  //     const blogs = blogData.data.listBlogs.items;
  //     setBlogs(blogs);
  //   } catch (err) { console.log('error fetching blogs') }
  // }

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/admin">
            {isSignedIn ? <Admin /> : <Redirect to="/signin" />}
          </Route>
          <Route path="/guest">
            <Guest />
          </Route>
          <Route path="/signin">
            {isSignedIn ? <Redirect to="/admin" /> : <SignIn />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
