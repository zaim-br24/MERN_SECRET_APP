import styled from 'styled-components'

const Wrapper = styled.nav`
  /* height: 130px; */
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  background-color: white;
  
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
  }
  /* .logo {
    display: flex;
    align-items: center;
    width: 100px;
  } */
   .burger-menu{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .burger-icon-container{
      padding: 10px;
      width: 60px;
      margin-left: -10px;
      display: flex;
      align-items: center;
      justify-content: center;
      :hover{
        background-color: whitesmoke;
        border-radius: 10px;
      }
      .burger-icon{
      font-size: 1.5rem;
      cursor: pointer;
      }
    }
 
   }
   .icon{
    font-size:  23px;
    color: var( --font-color);
    cursor: pointer;
   }
   .profile-container {
    background-color: var(--secondary-bg-color);
    cursor: pointer;
    border-radius: 20px;
    padding: 10px 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    button{
      background: none;
      border: none;
      outline: none;
      margin-left: 5px;

      .rotate{
        transform: rotate(180deg);
      }
    }
   }
  
   p{
      font-size: 16px;
      font-weight: 500;
      margin-left: 5px;
    }

   .nav_search_box{
    display: flex ;
    align-items: center ;
    width:40%  ;
    border: 1px solid var(--border-color) ;
    padding: 6px 10px;
    border-radius:20px ;
  

    @media screen and (max-width : 1000px){
      display: none;
     }

    .search_icon{
      width: 10% ;
      border-right: 1px solid var(--border-color) ;
      cursor: pointer;
      img{
        width: 18px ;
      }
    }
    .nav_input_search{
      width:  100%;
      padding:7px ;
      border: none ;
      outline: none ;
      font-size:.8rem ;
      font-weight:500 ;
      font-family: var(--font-family);
      letter-spacing:.7px ;
      background: none;
    }
   }

  .navbar_items{
      display: flex;
      justify-content: center ;
      align-items: center ; 
    .nav_item{
      width:33px ;
      margin-left: 15px ;
    }
  }


  /* .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  background: var(--white);
  .btn-container {
    position: relative;
  }
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
    position: relative;
    box-shadow: var(--shadow-2);
  }

  .dropdown {
    position: absolute;
    top: 40px;
    left: 0;
    width: 100%;
    background: var(--primary-100);
    box-shadow: var(--shadow-2);
    padding: 0.5rem;
    text-align: center;
    visibility: hidden;
    border-radius: var(--borderRadius);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    background: transparent;
    border-color: transparent;
    color: var(--primary-500);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
    cursor: pointer;
  }
  .logo-text {
    display: none;
    margin: 0;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  } */
`
export default Wrapper
