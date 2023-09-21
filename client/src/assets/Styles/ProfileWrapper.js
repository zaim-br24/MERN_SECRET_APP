
import styled from "styled-components";


const Wrapper = styled.div`
    
.profile-container{
     display: grid; 
      grid-template-columns: 1fr 1fr 1fr; 
      /* grid-template-rows: 1fr 1fr 1fr;  */
      grid-gap: 10px; 
      grid-template-areas: 
      "profile budget activities"
      "profile statistics statistics"
      "profile posts posts"; 
      margin: 0 auto;
      margin-top: 65px;
      max-width: 80%;

     @media screen and (max-width : 992px){
      max-width: 100%;
      margin-top: 0;

      grid-template-areas: 
      "profile profile profile"
      "budget budget budget"
      "activities activities activities"
      "statistics statistics statistics"
      "posts posts posts"; 
     }
}

.profile { 
  grid-area: profile;
}
.activities { grid-area: activities; }
.budget { grid-area: budget; }
.statistics { grid-area: statistics; }
.posts { grid-area: posts; }

.user-profile-title{
      margin: 5px 0;
      font-size: 1.1rem;
      font-weight: 600;
}

.user-friends, .user-skills{
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
}
.user-skills{
  .skills{
    div{
    background-color: rgba(35, 165, 213, 0.7);
    border-radius: 20px;
    padding: 6px;
    font-size: .8rem;
    font-weight: 600;
    margin: 2px;
    color: #fff;
    display: inline-block;
  }
  }

}
.user-friends{
    a{
        color: rgba(0, 0, 0, 0.5);
        
        font-weight: 600;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: .5rem 0;
        :hover{
          color: rgba(0, 0, 0, 0.8);

        }
        span{
          font-size: .9rem;
        }
      }
    }

.user-profile{
  padding: .5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
.user-profile-container{
  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  .user-image{
    height: 5rem;
    width:5rem;
    /* background-color: rgba(225, 225, 225, 0.5); */
    border-radius: .5rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    outline: 3px solid rgba(35, 165, 213, 0.7);


    img{
      border-radius: .5rem;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }

    label{
      position: absolute;
      top: 0;
      left:0;
      right: 0;
      bottom: 0;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      #avatar{
      display: none;
     }
     .icon{
      display: none;
      color: rgba(0, 0, 0, 0.5);
      transition: all .3s ease-in;
    }
    :hover{
        .icon{
          display: block;
        }
        background-color: rgba(225, 225, 225, 0.5);

      } 
    }
    
   

  }
  .user-info{
    width: 70%;
    .personal-account{
      font-size: .8rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.5);
      margin-top: 5px;
    }
    p{
      font-size: 1.3rem;
      font-weight: 700;
      color: rgba(0, 0, 0, 0.85);
    }
  }
}
.edit-btn{
  margin: 1rem auto;
  opacity: 1;
  background-color:  #23a6d5;
  color: #fff;
}
}
.update-profile{
  border-radius: 10px;
  margin: 0 auto;
  max-width: 80%;
  background: white;
  padding: 3rem 2rem 4rem;
  margin-top: 10px;
  
  @media screen and (max-width : 992px){
      max-width: 100%;
     }
}

h3 {
    margin-bottom: 10px;
  }
  .form {
    
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;

  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 0.5rem;
  }
  .form-center button {
    align-self: end;
    height: 35px;
    margin-top: 1rem;
  }
  .btn-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
    align-self: flex-end;
    margin-top: 0.5rem;
    button {
      height: 35px;
    }
  }
  .clear-btn {
    background: var(--grey-500);
  }
  .clear-btn:hover {
    background: var(--black);
  }
  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
      width: 100%;
    }
    .btn-container {
      margin-top: 0;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
    .form-center button {
      margin-top: 0;
    }
  }
`

export default Wrapper