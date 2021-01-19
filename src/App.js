import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { listBlogs } from './graphql/queries';

import { User, Guest, Home } from './pages';
import { Title, ImageGrid, Modal } from './components';

import './app.css';

import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const App = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  async function fetchBlogs() {
    try {
      const blogData = await API.graphql(graphqlOperation(listBlogs));
      const blogs = blogData.data.listBlogs.items;
      setBlogs(blogs);
    } catch (err) { console.log('error fetching blogs') }
  }

  // console.log(blogs);

  return (
    <Router>
      <div className="App">
        <Title />
        <Switch>
          <Route path="/user">
            <User blogs={blogs} />
          </Route>
          <Route path="/guest">
            <Guest />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <ImageGrid setSelectedImg={setSelectedImg} />
        { selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </Router>
  );
}

export default App;
