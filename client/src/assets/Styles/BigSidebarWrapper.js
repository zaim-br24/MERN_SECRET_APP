import styled from 'styled-components'

const Wrapper = styled.aside`
    display: none;
    max-height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 999;
    background-color:  rgba(0, 0, 0, 0.5);
    padding: 10px;
    @media (max-width: 992px) {
      display: block;
    .sidebar-container {
      padding: 10px;
      border-radius: 10px;
      background: white;
      height: 100%;
      width: 100%;
      box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
      transition: all .3s ease-in ;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .close-btn{
      font-size: 1.5rem;
      color: orange;
      position: absolute;
      top: 10px;
      left: 10px;
    }
    .nav-links {
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: black;
      padding: 1rem 2rem ;
      border-radius: 10px;
      margin: 5px 0;
      text-transform: capitalize;
      transition: all .3s ease-in;
      :hover{
        background-color: whitesmoke;
      }
    }
    .text{
      margin-left: 10px;
    }   
    .nav-link:hover {
      color: lightgray;
    }
    .icon {
     width:30px;
    }
    .active {
      color: var(--grey-900);
    }
    .active .icon {
      color: black;
    }
  }
`
export default Wrapper
