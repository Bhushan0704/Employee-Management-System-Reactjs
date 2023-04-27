import './App.css';
import ListEmployeeComponent from './components/ListEmployeeComponent';
//Functional component is just a simple javascript function; it accepts the data in the form of props and returns the react element
function App() {
  return (
    <div className="container">
      <ListEmployeeComponent />
    </div>
  );
}

export default App;