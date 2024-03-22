import './App.scss';
import ProductCard from './components/productCard/productCard';
import { Header } from './components/header/header';
import Filtreproduct from './components/productCard/filtreproduct';



function App() {
  // const handleCategoryClick = (category) => {
  //   Filtreproduct(category);
  
  return (
    <div className="App">
      <Header/>
      
      <Filtreproduct/>
      {/* <ProductCard /> */}
      
    </div>
  );
}

export default App;
