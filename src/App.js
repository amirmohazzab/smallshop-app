import Cart from "./components/Cart";
import Filter from "./components/Filter";
import Products from './components/Products';


function App() {
  return (
    <div className="container">
      <header>
        <a href=""> Small Shop</a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter/>
            <Products/>
          </div>
          <div className="sidebar">
            <Cart/>
          </div>
        </div>
      </main>
      <footer>
         Design and developement by you and me
      </footer>
     
    </div>
  );
}

export default App;
