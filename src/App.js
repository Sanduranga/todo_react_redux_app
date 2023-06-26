
import './App.css';
import TodoUi from './components/TodoUi';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">

        <TodoUi/>
      </div>
    </Provider>
  );
}

export default App;
