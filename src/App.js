import styled from "styled-components";

const Father = styled.div``;
function App() {
  return (
    // 원래방법
    <div style={{ display: "flex" }}>
      <div style={{ backgroundColor: "tomato", width: 100, height: 100 }}></div>
      <div style={{ backgroundColor: "teal", width: 100, height: 100 }}></div>
    </div>
  );
}

export default App;
