
import styled from 'styled-components'


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: orange;
    border-radius: 10px;
    margin-top: 5px;

    form{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        input{
            padding: 10px;
            font-size: .8rem;
            font-weight: 500;
            width: 100%;
            border-top-left-radius: 10px;
            border-bottom-left-radius: 10px;

            border: none;
            outline: none;
            height: 100%;
            width: 100%;

            
        }

        button{
            padding: 10px;
            font-size: .8rem;
            font-weight: 500;
            color: black;
            outline: none;
            border-top-right-radius: 10px;
            border-bottom-right-radius: 10px;
            border: none;

            :hover{
                background-color:  rgba(35, 165, 213, .9);
                cursor: pointer;
            }
        
        }
        .comment-btn{
            background-color: rgba(35, 165, 213,1);
            color: white;
        }
    }


`


export default Wrapper;
