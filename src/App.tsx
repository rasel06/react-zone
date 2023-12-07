// import ListGroup from "./compoments/ListGroup";
// import Button from "./compoments/core/Button";
// import Counter from "./compoments/practice/Counter";
import Calculator from "./compoments/practice/calculator/Calculator";
import "./App.css";

function App() {
  return (
    <div>
      <Calculator></Calculator>
    </div>
  );
}

// function App() {
//   let cities = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];
//   let colors = ["white", "Black", "Green", "Red", "Yellow"];

//   const handleSelectItem = (item: string) => {
//     console.log("From Parent " + item);
//   };

//   const handleButtonClick = (item: string) => {
//     console.log("Button Click " + item);
//   };

//   return (
//     <div className="row py-3">
//       <ListGroup
//         onSelectItem={handleSelectItem}
//         items={cities}
//         heading="Customer List"
//       />

//       <ListGroup
//         onSelectItem={handleSelectItem}
//         items={colors}
//         heading="Colors List"
//       />

//       <Button
//         buttonType="secondary"
//         buttonSize="sm"
//         key="okokoko"
//         onButtonClick={() => {
//           console.log("Clicked !");
//         }}
//       >
//         My Button
//       </Button>
//       <Button buttonType="primary" key="okokokoko">
//         Submit Form
//       </Button>

//       <Button buttonType="danger" key="okokokoko">
//         Submit Form
//       </Button>

//       <Button buttonType="white" key="okokokoko">
//         Submit Form
//       </Button>
//     </div>
//   );
// }

export default App;
