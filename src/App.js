import "./App.css";
import { useState, useMemo } from "react";
// import Content from "./Content";

// 1. memo() => Higher Order Component (HOC) that prevents unnecessary re-renders
// memo giúp ghi nhớ các component con, tránh việc re-render không cần thiết
// Ví dụ: nếu component cha re-render, nhưng component con không thay đổi props (dạng text cố định), thì component con sẽ không re-render.

// 2. useCallback() => Returns a memoized callback function
// useCallback giúp ghi nhớ các hàm bằng cách tạo một tham chiếu bên ngoài để lưu hàm, tránh việc tạo mới hàm mỗi lần re-render
// Ví dụ: nếu bạn truyền một hàm vào component con, và hàm đó không thay đổi, thì component con sẽ không re-render lại khi component cha re-render.

// 3. useMemo() => Returns a memoized value
// useMemo giúp ghi nhớ giá trị tính toán, tránh việc tính toán lại mỗi lần re-render

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  const handleSubmit = () => {
    setProducts((prev) => [...prev, { name, price: +price }]);
  };

  const totalPrice = useMemo(() => {
    const result = products.reduce((total, product) => {
      console.log("calculate total price");
      return total + product.price;
    }, 0);
    return result;
  }, [products]);

  return (
    <div style={{ padding: "10px 32px" }}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <h2>Total price: {totalPrice}</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            {product.name} - {product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
