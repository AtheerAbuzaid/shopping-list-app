import './App.css';
import ShoppingList from './components/ShoppingList';
import { AppProvider } from './context/AppContext';

const App = () => {
  return (
    <AppProvider>
      <div>
        {/*Settings*/}
        {/*Shopping list*/}
        <ShoppingList/>
        {/*Menu Button*/}
      </div>
    </AppProvider>
  );
}

export default App;
