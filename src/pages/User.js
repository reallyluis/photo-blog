import { useState } from 'react';
import { API, graphqlOperation } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { createBlog } from '../graphql/mutations';

import { UploadForm } from '../components';

const initialState = { name: '', description: '' };

const User = () => {
  const [formState, setFormState] = useState(initialState);
  const [blogs, setBlogs] = useState([]);

  function setInput(key, value) {
    setFormState({ ...formState, [key]: value });
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

  return (
    <UploadForm setInput={setInput} addBlog={addBlog} />
  );
}

export default withAuthenticator(User);
