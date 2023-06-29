
import './App.css';
import TodoUi from './components/TodoUi';
import { Provider } from 'react-redux';
import store from './redux/store';
import FormInputs from './containers/FormInputs';

function App() {
  return (
    <Provider store={store}>
      <div className="text-2xl">
        <FormInputs/>
      </div>
    </Provider>
  );
}

export default App;
