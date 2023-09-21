import styled from 'styled-components'


const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media screen and (max-width: 992px) {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        margin: 70px auto;
    }
    .content{
        display: flex;
        flex-direction: column;
    }
    .redoo-post-conatainer{
        max-width:  700px;
        display: flex;
        flex-direction: column; 
        padding: 5px;
   
        .publisher{
            background-color: white;
            padding: 5px;
            border-radius: 10px;
        }

        .post-content{
            background-color: white;
            border-radius: 10px;
            padding: 3% 5%;
            margin-top: 5px;
            .post-title{
                font-size: 1.4rem;
                /* line-height: px; */
            }
            .categories{
                display: flex;
                align-items: center;
                p{
                    margin-left: 10px;
                    font-size:.8rem ;
                    font-weight: 500;
                    color: gray;
                }
            }
            
        }
        .post-reactions{
            display: flex;
            align-items: center;
            justify-content: space-around;
            background-color: white;
            border-radius: 10px;
            padding: 5px;
            width: 100%;
            margin-top: 5px;

            div{
                cursor: pointer;
                height: 30px;
                width: 50px;
                /* padding: 0 3px; */
                display: flex;
                align-items: center;
                margin: auto;
                justify-content: center;
                font-weight: 900;
                border-radius: 10px;
                background-color: transparent;
                transition: all .15s ease;

                :hover {
                    background-color:#23a6d5;
                    color: #FFFF;
                }
            }
        }

        .img-container{
                width: 100%;
                margin-top: 5px;
                background-color: white;
                border-radius: 10px;
                padding: 3% 5%;

                img{
                    object-fit: cover;  
                    width: 100%;
                }
            }
            
        .text-content{
            margin: 10px auto;
            h1{
                margin: 10px 0;
            }
            p{
                line-height: 25px;
                font-weight: 500;
                color: gray;
            }
        }
    }

    .right-side{
        width: 300px;
        background-color: white;

    }
`


export default Wrapper