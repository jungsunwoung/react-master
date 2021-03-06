import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
}
const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
`;

//shape of the object
//object가 어떻게 보일지 알려주는게 interface
interface CircleProps {
  bgColor: string;
}

function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor}></Container>;
}

export default Circle;
