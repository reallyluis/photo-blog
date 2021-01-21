// import { useState } from 'react';
// import { API, graphqlOperation } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
// import { createBlog } from '../graphql/mutations';

// const initialState = { name: '', description: '' };

const SignIn = () => {
  // const [formState, setFormState] = useState(initialState);
  // const [blogs, setBlogs] = useState([]);

  // function setInput(key, value) {
  //   setFormState({ ...formState, [key]: value });
  // }

  // async function addBlog() {
  //   try {
  //     if (!formState.name || !formState.description) return;
  //     const blog = { ...formState };
  //     setBlogs([...blogs, blog]);
  //     setFormState(initialState);
  //     await API.graphql(graphqlOperation(createBlog, {input: blog}));
  //   } catch (err) {
  //     console.log('error creating blog:', err);
  //   }
  // }

  return (
    <AmplifyAuthenticator>
      <AmplifySignIn
        hideSignUp={true}
        slot='sign-in'
      ></AmplifySignIn>
    </AmplifyAuthenticator>
  );
}

export default SignIn;
