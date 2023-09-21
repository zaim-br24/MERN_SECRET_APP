import styled from "styled-components";

const Wrapper = styled.div`
    display: flex ;
    border: 1px solid var(--border-color) ;
    margin-bottom: 5px;
    /* background-color: white; */
    transition: all .3s ease-out;
    min-height: 120px;
    :hover{
        border: 1px solid gray;
    }
    
    :first-child{
        border-top-left-radius: 10px ;
        border-top-right-radius: 10px ;
    }
    :last-child{
        border-bottom-left-radius: 10px ;
        border-bottom-right-radius: 10px ;
    }
    :first-child .post_img { border-top-left-radius: 10px ;}
    :last-child .post_img{ border-bottom-left-radius: 10px ;} 
    .post_img{
        background-color: #000000 ;
        width: 40% ;
        min-width: 200px ;
        /* height: 100; */
    }
    .content{
        margin-left: 10px ;
        padding:10px ;
        .post_details{
            font-size: 18px; 
            font-weight: 600;
            @media screen and (max-width: 1200px){
                font-size: .8rem;
            }
        }        
        .post_content_text{
        margin-top: 10px;
        color: var(--font-color);
        @media screen and (max-width: 1200px){
                font-size: .9rem; 
         }
    }
        
    }
   

`;


export default Wrapper