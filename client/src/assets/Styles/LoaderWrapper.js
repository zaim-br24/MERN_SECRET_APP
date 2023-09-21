import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;

.loader {
  border: 8px solid #f2f2f2;
  border-top: 8px solid #23a6d5;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  animation: spin 2s linear infinite;
  top:  200px;
  position: absolute;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

`

export default Wrapper