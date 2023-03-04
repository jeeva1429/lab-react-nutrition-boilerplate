
import './App.css';
import Foodbox from './FoodBox/Foodbox';
import FoodData from './resources/FoodData';
function App() {
  return (
    <div>
 <Foodbox data={FoodData}/>
    </div>
  );
}

export default App;
