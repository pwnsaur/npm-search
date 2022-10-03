import { FormEventHandler, useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoiesList = (): JSX.Element => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector(
    state => state.repositories
  );

  const onSubmit: FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={term}
          onChange={e => setTerm(e.target.value)}
          type='text'
          placeholder='package name'
        />
        <button>Search</button>
      </form>
      {error && <h3>get rekt lmao</h3>}
      {loading && <h3>loading...</h3>}
      {!error && !loading && data.map(name => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoiesList;
