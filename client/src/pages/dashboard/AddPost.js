import React, {useState} from "react"
import styled from "styled-components"

export default function AddPost() {
  
  return (
    <Wrapper>

    {/* <div className="glass-background container">
      <header>
        <h2>Create Post</h2>
      </header>
        <div className="creator">
          <div className="creator-info">
            <div></div>
            <p className="publisher-name">Zaim</p>
          </div>
          <form>
             <Input type='text' name='Title' placeholder="Title"/>
             <textarea name="post-content" id="postContent" cols="30" rows="10" placeholder="Add Text"></textarea>
             <Input type='file' />
             <ButtonCompo type='submit' text='Publish'/>
          </form>

        </div>
      </div> */}

    </Wrapper>
  )
}


const Wrapper = styled.div`
 margin-top: 70px ;
  width: 100%;
  height: 100vh;
  display: flex; 
   align-items: center; 
  justify-content:center ;

  
.container{
  width:70%;

  max-width: 60%;
  border: 1px solid black;
  border-radius: 5px;
  /* background-color: whitesmoke */

  @media screen and (max-width : 1000px){
    width: 100%;     
    max-width: 100%;
    margin:0 1rem;

  }
  header{
    padding: 15px 10px;
    background-color: black;
    color: white;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;


  }
  .creator{
    padding: 10px;

    .creator-info{
      display: flex;
      align-items: center;
      margin: 10px 0;
      div{
        height: 40px;
        width: 40px;
        background-color: black;
        border-radius: 50%;
      }
      .publisher-name{
        font-size: 18px;
        font-weight: 500;
        padding: 10px;
      }
    }
  form{
    display: flex;
    flex-direction: column;
    input[type="text"]{
        padding: 15px;
        width: 100%;
        border-radius: 5px;
        border: 1px solid var(--border-color);
        margin: 10px 0;
        font-size: 18px;
        background-color: white;
        color: black;
        font-weight: 500;
    }
    input[type="file"]{
      padding: 20px;
      border: 1px dotted black;
      margin: 15px 0;
      border-radius: 5px;
      cursor: pointer;
      ::file-selector-button {
        cursor: pointer;
        border-radius: 4px;
        padding: 0 16px;
        height: 40px;      
        background-color: white;
        border: 1px solid rgba(0, 0, 0, 0.16);
        box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05);
        margin-right: 16px;
        transition: background-color 200ms;
     
      }

      ::file-selector-button:hover {
      background-color: #f3f4f6;
      }
     ::file-selector-button:active {
      background-color: #e5e7eb;
      }
    }
 
    button{
      width: 100%;
    
    }
    textarea{
      resize: none;
      padding: 10px;
      border-radius: 5px;
      border: none;
      font-size: 18px;
      font-weight: 500;
      border: 1px solid rgba(0, 0, 0, 0.16);

    }
  }
}
}

`