import GlobalStyles from "./components/GlobalStyles";
import Button from "./components/Button";

function App() {
  return (
    <GlobalStyles>
      <div style={{ padding: "10px 32px" }}>
        <Button />
      </div>
    </GlobalStyles>
  );
}

export default App;

// Học CSS Module
// Việc dùng CSS Module giúp cho việc code sẽ rõ ràng, CSS của từng component sẽ ko trùng tên nhau, đồng thời nếu không sử dụng CSS, thì sẽ tự gỡ phần CSS khỏi app, tránh thừa tài nguyên

// Styled component
