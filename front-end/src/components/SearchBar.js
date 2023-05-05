import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { React, useState } from "react";
import List from "./List";

function Searchbar() {
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    //convert input text to lower case
    var lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <>
      <div
        className="container"
        style={{ maxWidth: "50%", marginBottom: "40px", marginTop: "50px" }}
      >
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search Recipe"
            aria-label="Search"
            aria-describedby="basic-addon2"
            onChange={inputHandler}
          />
        </InputGroup>
      </div>
      <List input={inputText} />
    </>
  );
}

export default Searchbar;
