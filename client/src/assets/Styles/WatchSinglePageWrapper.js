import styled from 'styled-components'


const Wrapper = styled.div`
    padding-top: 50px;
    margin: 0 auto;
    width:90%;
    display: grid; 

    /* grid-template-rows: 1fr 1fr 1fr; */
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;   
   .item1 {
    background-color: white; 
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-column-end: 3;

  }
  .item1-loading {
    grid-row-start: 1;
    grid-column-start: 1;
    grid-row-end: 2;
    grid-column-end: 3;
  }
  .item2 {
    border-radius: 10px;
    background-color: white; 
    grid-row-start: 1;
    /* grid-column-start: 3; */
    grid-row-end: 2;
    /* grid-column-end: 4; */

    }
  .item3 {
    border-radius: 10px;
    height: 50px;
    background-color: white; 
    grid-row-start: 2;
    grid-column-start: 1;

    grid-row-end: 4;
    grid-column-end: 3;

  }
  
/* Responsive styles for smaller screens */
@media (max-width: 1000px) {
 display: flex;
 flex-direction: column;
 width:98%;
}
`


export default Wrapper