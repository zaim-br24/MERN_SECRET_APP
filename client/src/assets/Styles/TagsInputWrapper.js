import styled from "styled-components";


const Wrapper = styled.div`
/* TagInput.css */

.tag-input-container {
  border: 1px solid #ccc;
  padding: 5px;
  display: inline-block;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  margin-top: 5px;
}

.tag {
  display: inline-flex;
  align-items: center;
  background-color: #23d5ab;
  color: white;
  padding: 3px 6px;
  margin: 2px;
  border-radius: 3px;
  border: 1px solid #ccc;
  position: relative;
}

.tag-remove {
  cursor: pointer;
  position: absolute;
  top: -10px;
  right: -5px;
  color: black;
  font-weight: 700;

}

.tag-input {
  border: none;
  outline: none;
  margin-top: 5px;
  width: 100%;
  border: 2px solid #cacaca;
  border-radius: 10px;
}

`

export default Wrapper