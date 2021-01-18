import { useEffect, useState } from 'react';
import Amplify, { API, graphqlOperation } from 'aws-amplify';
import { createBlog } from './graphql/mutations';
import { listBlogs } from './graphql/queries';

import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

import awsExports from "./aws-exports";

Amplify.configure(awsExports);

const initialState = { name: '', description: '' };

const App = () => {
  const [formState, setFormState] = useState(initialState);
  const [blogs, setBlogs] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchBlogs() {
    try {
      const blogData = await API.graphql(graphqlOperation(listBlogs));
      const blogs = blogData.data.listBlogs.items;
      setBlogs(blogs);
    } catch (err) { console.log('error fetching blogs') }
  }

  async function addBlog() {
    try {
      if (!formState.name || !formState.description) return;
      const blog = { ...formState };
      setBlogs([...blogs, blog]);
      setFormState(initialState);
      await API.graphql(graphqlOperation(createBlog, {input: blog}));
    } catch (err) {
      console.log('error creating blog:', err);
    }
  }

  // console.log(blogs);

  return (
    <div className="App">
      <Title />
      <UploadForm setInput={setInput} addBlog={addBlog} />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
