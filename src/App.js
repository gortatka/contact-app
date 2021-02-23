
import React from "react";
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <Contact avatar="https://zvetnoe.ru/upload/images/blog/Almazka/cat.jpg" 
        name="Cat"
        online={true} />

    </div>
  );
}

export default App;
