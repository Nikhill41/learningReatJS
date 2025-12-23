import Child from "./child";

function Parent({ userName }) {
  return (
    <div className="box">
      <h2>Parent Component</h2>
      <Child userName={userName} />
    </div>
  );
}

export default Parent;
