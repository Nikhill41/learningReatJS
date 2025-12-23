import GrandChild from "./grandChild";

function Child({ userName }) {
  return (
    <div className="box">
      <h3>Child Component</h3>
      <GrandChild userName={userName} />
    </div>
  );
}

export default Child;
