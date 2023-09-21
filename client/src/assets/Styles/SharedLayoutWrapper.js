import styled from 'styled-components'

const Wrapper = styled.section`

  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 100vw;
    margin: 0 auto;
    /* padding: 2rem 0; */
  }
  
  .create-post-btn{
      display: flex;
      flex-direction: column;
      padding: 10px;
      outline: 1px solid  rgb(35, 165, 213);
      border-radius: 10px;
      margin: 0 5px;
      p{
        font-weight: 600;
      }
      :hover{
        outline: 2px solid rgb(35, 165, 213);
      }
      img{
        width: 40px;
        margin: 10px auto;
      }
    }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`
export default Wrapper
