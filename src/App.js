import styled, { keyframes } from "styled-components";

const Father = styled.div`
  display: flex;
`;
const rotateAnimation = keyframes`
from {
  transform:rotate(0deg);
  border-radius:0px;
}to{
  transform:rotate(360deg);
  border-radius:100px;
}
`;

const Emoji = styled.span`
  font-size: 36px;
`;
const Box = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
  animation: ${rotateAnimation} 1s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 직접 언급 가능 */
  ${Emoji}:hover {
    font-size: 98px;
  }
`;

const Text = styled.span`
  color: white;
`;

const Circle = styled(Box)`
  border-radius: 50px;
`;
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;

const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

function App() {
  return (
    // 원래방법
    <Father>
      <Box>
        <Emoji>😄</Emoji>
      </Box>
    </Father>
  );
}

export default App;
