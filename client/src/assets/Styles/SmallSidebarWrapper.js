import styled from 'styled-components'

const Wrapper = styled.aside`
  @media screen and (max-width : 992px){
      display: none;
  }
  .sidebar-container{
    width: 65px;
    position: fixed;
    left: 0;
    top:54px;
    bottom: 0;
    box-shadow: var(--box-shadow);
    border: 1px soild black;
    background-color: rgba(255, 255, 255, 1); 
    display: flex;
    justify-content: center;
    padding:10px;
    z-index: 300;
    transition: all .3s ease-in-out;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }
  .nav-links {
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    padding: 1rem;
    border-radius: 10px;
    text-transform: capitalize;
    :hover{
      background-color: whitesmoke; 
    }
  }

  .icon {
    width:30px;
  }
  .active {
    color: orange;
  }
  
`
export default Wrapper
