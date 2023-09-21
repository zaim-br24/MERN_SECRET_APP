import React from 'react';
import styled from 'styled-components';


const DropdownMenu = ({children}) => {
  return (
    <Wrapper className="dropdown">
        {/* <div className='rotated-squire'></div> */}
        <div className="dropdown-menu">
         {
            children
         }
        </div>
    </Wrapper>
  );
};

export default DropdownMenu;


const Wrapper = styled.div`
    /* background-color: white; */
    background-color: rgba(255, 255, 255, 0.5); 
    /* backdrop-filter: blur(10px); */
    border-radius: 5px;
    position: absolute;
    top:    50px;
    right: 0px;
    /* padding: 5px; */
    transition: all .4s ease-in;
    /* box-shadow: var(--box-shadow);*/
    box-shadow: 2px 2px 8px -2px rgba(0,0,0,.5);
 
    min-width: 200px;
    z-index: 1;

    .rotated-squire{
        background-color: white;
        /* box-shadow: 2px 2px 8px -2px rgba(0,0,0,.5); */
        width: 10px;
        height: 10px;
        position: absolute;
        top: -5px;
        right: 10px;
        transform: rotate(50deg);
        border-radius: 5px;
        z-index:-110;

    }
    .dropdown-menu{
        display: flex;
        flex-direction: column;
        transition: all .4s ease-in;

        a{
            margin:5px;
            font-weight:500;
            padding: 5px;
            border-radius: 2px;
            :hover{
                background-color: rgba(35, 165, 213, 0.5);
            }
        }
    }
`
