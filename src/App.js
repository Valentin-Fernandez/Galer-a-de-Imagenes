import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [img, setImg] = useState([]);

  const HandleSubmit = async (term) => {
    const resultado = await searchImages(term);
    setImg(resultado);
  };
  return (
    <div>
      <Header></Header>
      <SearchBar onSubmit={HandleSubmit}></SearchBar>
      <ImageList images={img}></ImageList>
    </div>
  );
}

export default App;
