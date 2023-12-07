// PascalCasing
function Message() {
  const name = "Rasel";

  // JSX: Javascript XML
  return <h1>Hello {name.length > 0 ? name : "World"}</h1>;
}

export default Message;
