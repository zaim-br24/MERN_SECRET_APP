import styled from 'styled-components'


 const Wrapper = styled.div`
     min-height: 100vh;
     width: 100%;
     background-size: cover;
     background-repeat:no-repeat ;
     background-position:center ;
     /* background-image: url( ${(props) => props.landingPageBg}) ;*/
     background-color: #111827 ;
  
     .landing_nav{
      display:flex ;
      align-items:center ;
      justify-content:space-between ;
      /* background-color: royalblue; */
      padding:10px 15px ;

      div{
        color:white
       }
    }
    
    .main_container{
      padding: 0% 7% ;
      height: 100vh;
      width:80%;
      margin: 0 auto;
      /* height: calc(100vh - 60px); */
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;

      .slang_header{
        text-align: center;
        color: white;
        font-size: 40px;
        font-weight: 700;

        .backdoor{
          font-size:55px ;
          font-weight:900;
       
        }
        .anonymusly, .publicly, .backdoor{
          background: linear-gradient(to right, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
      }
  
      .bottom_contaier{
        margin-top: 60px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        grid-gap: 10px;


        div{
          margin: 5px;
          padding: 15px;
          border-radius: 10px;
          display:flex;
          align-items: center;
          justify-content: center;
          line-height: 150%;
          /* color: rgba(225,225,225,.9); */
          color: white;
          font-weight: 500;
          box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.3) inset, 
              0 0 10px 5px transparent inset, 
              0 0 20px 10px rgba(0, 0, 0, 0.3);
        }
        .connect_anonymously{
          background-color: #e73c7e;
        }
        .connect_publicly{
          background-color: #23a6d5;
        }
        .join,.connect_anonymously, .connect_publicly{
          transition: all .3s ease-in;
          cursor: pointer;
          a{
             color: rgba(225,225,225,.9);
             font-weight: 700;   
             :hover{
              text-decoration: underline;
              text-decoration-thickness: 3px;
              }
             }
             .arrow-btn{
                border-radius: 50%;
                border: none;
                outline: none;
                transition: all .3s ease-in-out; 
                cursor: pointer;

                .icon{
                color: white;
                font-size: 25px;               
                padding: 10px;
               }
              }
        }

        .connect_anonymously{
          :hover{
             box-shadow: 0px 0px 0px 4px   rgba(231, 60, 125, 0.5);                    
            }
            .arrow-btn{
              background-color:   rgba(231, 60, 125, 0.8);
            }
        }
        .connect_publicly{
          :hover{
             box-shadow: 0px 0px 0px 4px    rgba(35, 165, 213, 0.5);                    
            }
            .arrow-btn{
              background-color:   rgba(35, 165, 213, 0.8);
            }
        }
        .join{
          background-color: #ee7752;
           :hover{
             box-shadow: 0px 0px 0px 4px    rgba(243, 113, 73,.5);                    
            }
            .arrow-btn{
              background-color:   rgba(243, 113, 73,.8);
            }
             
    
           }
        }
      }
  `;
  export default Wrapper