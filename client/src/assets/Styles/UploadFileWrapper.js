import styled from "styled-components";

const Wrapper = styled.label`
    display: grid;
    grid-template-columns: repeat(2, 1fr);    
    gap: 5px;

    @media (max-width: 992px) {
        display: grid;
        grid-template-columns: 1fr;

        .custum-file-upload{
            grid-column: span 2;
        }
    }
    /* input {
    display: none;
    } */
    textarea{
        height: 100%;
        width: 100%;
        border-radius: 10px;
        padding: 10px;
        outline: none;
        resize: none;
        font-size: 1rem;
        font-weight: 500;
        border: 2px solid #cacaca;
    }
    .video-description{
        position: relative;
    }
    .words-counter{
        font-size: .8rem;
        font-weight: 700;
        color: rgba(0,0,0,0.5);
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`

export default Wrapper