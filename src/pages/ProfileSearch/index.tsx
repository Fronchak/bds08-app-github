import { useState } from 'react';
import axios from 'axios';
import { Form, useSubmit, LoaderFunctionArgs, useLoaderData, useNavigation } from 'react-router-dom';
import UserCard from '../../components/UserCard';

import './styles.css';
import { GithubUser } from '../../types/vendor/GithubUser';
import ProfileLoader from './ProfileLoader';

export const loader = async({ request }:LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const username = url.searchParams.get('username');
  try {
    if(username !== null && username != '') {
      console.log('AXIOS REQUEST')
      const response = await axios.get(`https://api.github.com/users/${username}`);
      const user = response.data;
      return { user, username };
    }

    return { user: null, username };
  }
  catch(e) {
    const error = e as any;
    console.log(error.response.request.status);
    if(error.response.request.status === 404) {
      return { user: null, username, isNotFound: true }
    }
    throw e;
  }

}

type Loader = {
  user: GithubUser | null;
  username: string;
  isNotFound?: boolean;
}

const ProfileSearch = () => {

  const [error, setError] = useState<string>('');
  const [wasSubmit, setWasSubmited] = useState<boolean>(false);
  const submit = useSubmit();
  const navigation = useNavigation();
  const { user, username, isNotFound } = useLoaderData() as Loader;

  const checkError = ():boolean => {
    const form = document.getElementById('username') as HTMLFormElement;
    const value = form.value;
    if(value === '') {
      setError('Campo obrigatório');
      return true;
    }
    if(value.trim() === '') {
      setError('Nome do usuário não pode estar em branco');
      return true;
    }
    setError('');
    return false;
  }

  const onClick = () => {
    if(!wasSubmit) {
      setWasSubmited(true);
    }
    const hasError = checkError();
    console.log(hasError);
    if(hasError) return;
    console.log('Submit')
    const form = document.getElementById('form') as HTMLFormElement;
    submit(form);
  }

  const onChange = () => {
    checkError();
  }

  return (
    <div className="container mt-4">
      <div id="search-card" className="px-2 px-lg-4 py-3 py-lg-5 mb-5 fourth-bg-color">
        <h2>Encontre um perfil Github</h2>
        <Form id="form">
          <div className="mb-3">
            <input
              type="text"
              id="username"
              name="username"
              onChange={onChange}
              defaultValue={username}
              className={`form-control ${wasSubmit ? (error !== '' ? 'is-invalid' : 'is-valid') : ''}`}
              placeholder="Usuário Github"
            />
            <div className="invalid-feedback d-block">
              { error }
            </div>

          </div>
          <button
            type='submit'
            className="btn default-btn"
            onClick={onClick}
          >Encontrar</button>
        </Form>
      </div>
      { navigation.state === 'loading' ? (
        <ProfileLoader />
      ) : (
        <>
          {user !== null && (
          <div id="profile-result-container" className="p-3 p-md-4 p-xxl-5">
            <UserCard user={user} />
          </div>
          )}
        { isNotFound && (
          <div>
            <div className="alert alert-danger" role="alert">
              Sorry, there is no Github profile with this username
            </div>
          </div>
        ) }
        </>
      )}
    </div>
  );
}

export default ProfileSearch;
