function GrandChild({ userName }) {
  return (
    <div className="box">
      <h4>GrandChild Component</h4>
      <p className="message">Hello, {userName} 👋</p>
    </div>
  );
}

export default GrandChild;
