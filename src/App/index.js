import React from "react";
import AppUI from "./AppUI";
import { BookProvider } from "src/components/BookContext";

function App() {
  return (
    <BookProvider>
      <AppUI />
    </BookProvider>
  );
}

export default App;
