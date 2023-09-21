import React from 'react'
import styled from 'styled-components';
import { useAppContext } from '../context/appContext';


export default function Overly({children}) {
 
  const {handleCloseOverly} = useAppContext()

    return (
        <Wrapper className="overlay">
          
          <div className="overlay-content">
            {children}
            <button className="close-button" onClick={handleCloseOverly}>
              X
            </button>
          </div>
        </Wrapper>
      );
  
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Adjust the opacity value (0.5) as needed */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;

  .overlay-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
  .close-button {
    position: absolute;
    top: -15px;
    right: -20px;
    color: white;
    background:none;
    outline: none;
    font-weight: 700;
    font-size: 1.1rem;
    border: 1px solid white;
    padding: 5px 10px;
    border-radius: 20px;
    cursor: pointer;
    background-color:  rgb(35, 165, 213);


    } 
 }

`