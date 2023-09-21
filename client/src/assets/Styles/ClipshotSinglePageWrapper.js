import styled from 'styled-components'


const Wrapper = styled.div`
    .publisher{
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    position: relative;

    .avatar {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    background-color: blueviolet;
    background-image: linear-gradient(to top left, blueviolet, #23a6d5);
    }
    .publisher-name{
        font-size: .7rem;
        font-weight: 600;
        margin-left: 10px;
    }
    .published-date{
        font-size:.5rem;
    }
    .reply-btn{
        border: none;
        padding: 5px;
        border-radius: 10px;
        color: #000;
        font-weight: 600;
        position: absolute;
        right: 0;
        cursor: pointer;

        :hover{
            opacity: .7;
        }
    }
}
`


export default Wrapper