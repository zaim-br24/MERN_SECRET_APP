import styled from "styled-components";

const Wrapper = styled.div`

    .container{
        max-width: 700px;
        margin: 0 auto;
        margin-top: 65px;
        padding: 10px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        background-color: white;
    }
    h2{
        margin: 5px 0 20px 0;
        border-bottom: .5px solid  rgba(225, 225, 225, .7);
        padding: 10px 0;
    }
    .submit-types-container{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        border:.5px solid  rgba(225, 225, 225, .7) ;
     
    }
    .btns-submit{
        padding: 10px;
        border: none;
        outline: none;
        display: flex;
        align-items: center;
        justify-content:center;
        background-color: white;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        :not(:last-child){
            border-right: .5px solid gray;
        }
        :hover{
            background-color: rgba(225, 225, 225, .5);
        }
    }
    .submit-btn{
        width: 100%;
        border-radius: 10px ;
        margin-top: 10px;
        border: .5px solid  rgba(225, 225, 225, .7);
        color: white;
        background-color: rgba(0, 0, 0, .7);

        transition: all .3s ease-in;
        :hover{
            background-color: #1d1d1d;
        }
    }
    .icon{
        font-size: 1.5rem;
        margin: 0 5px;
        color: #1d1d1d;

    }
    input{
        border: 2px solid #cacaca;
        outline: none;
        padding: 10px;
    };
    .file-upload-input{
        width: 100%;
        color: #324759;
        margin-bottom: 10px;
        cursor: pointer;
    }
    .preview{
        max-height: 300px;
        width: 100%;
        margin: 10px 0;
        border-radius: 10px;
        object-fit: cover; /* Maintain aspect ratio */

    }
`

export default Wrapper