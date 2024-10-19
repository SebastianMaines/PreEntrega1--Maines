import React from 'react';
import Header from "./components/Header";
import ItemListContainer from "./components/ItemListContainer"
function App() {
    return (
        <div className="App">
            <Header />
            <ItemListContainer greeting="¡Bienvenidos a nuestra tienda!" />
        </div>
    );
}

export default App;