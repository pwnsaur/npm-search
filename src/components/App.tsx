import { Provider } from 'react-redux';
import { store } from '../state';
import RepositoiesList from './RepositoiesList';

const App = () => {
  return (
    <Provider store={store}>
      <RepositoiesList />
    </Provider>
  );
};

export default App;
