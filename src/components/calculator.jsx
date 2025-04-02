// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";

// const Calculator = () => {
//   const [input, setInput] = useState("");
//   const [showScientific, setShowScientific] = useState(false);

//   const handleClick = (value) => {
//     setInput((prev) => prev + value);
//   };

//   const clearInput = () => {
//     setInput("");
//   };

//   const backspace = () => {
//     setInput((prev) => prev.slice(0, -1));
//   };

//   const calculateResult = () => {
//     try {
//       let result = input
//         .replace(/√/g, "Math.sqrt")
//         .replace(/\^/g, "**")
//         .replace(/π/g, "Math.PI")
//         .replace(/e/g, "Math.E")
//         .replace(/log/g, "Math.log10")
//         .replace(/ln/g, "Math.log")
//         .replace(/sin/g, "Math.sin")
//         .replace(/cos/g, "Math.cos")
//         .replace(/tan/g, "Math.tan")
//         .replace(/%/g, "/100");

//       setInput(eval(result).toString());
//     } catch (error) {
//       setInput("Error");
//     }
//   };

//   return (
//     <Container className="mt-3">
//       <Row className="justify-content-center">
//         <Col xs={12} sm={8} md={6}>
//           <Card className="p-3 shadow-lg rounded bg-dark text-light">
//             <Card.Body>
//               <h2 className="mb-3 text-center text-white">Scientific Calculator</h2>

//               {/* Input Display Bada Kiya aur Shadow Lagaya */}
//               <Form.Control
//                 type="text"
//                 value={input}
//                 readOnly
//                 className="text-end mb-3 p-4 fs-3 rounded bg-light text-dark border-0 shadow-lg"
//               />

//               <Button
//                 variant="secondary"
//                 className="mb-3 w-100 rounded-pill shadow-sm"
//                 onClick={() => setShowScientific(!showScientific)}
//               >
//                 {showScientific ? "Hide Scientific Keys" : "Show Scientific Keys"}
//               </Button>

//               <div className="d-grid gap-2">
//                 {showScientific && (
//                   <Row className="gx-1">
//                     {[
//                       { value: "(", label: "(" },
//                       { value: ")", label: ")" },
//                       { value: "√(", label: "√" },
//                       { value: "^", label: "^" },
//                       { value: "π", label: "π" },
//                       { value: "e", label: "e" },
//                       { value: "log(", label: "log" },
//                       { value: "ln(", label: "ln" },
//                       { value: "sin(", label: "sin" },
//                       { value: "cos(", label: "cos" },
//                       { value: "tan(", label: "tan" },
//                       { value: "%", label: "%" },
//                     ].map((item, index) => (
//                       <Col key={index} xs={3} className="p-1">
//                         <Button
//                           variant="info"
//                           className="w-100 p-2 fs-6 rounded-4 shadow-sm"
//                           onClick={() => handleClick(item.value)}
//                         >
//                           {item.value}
//                         </Button>
//                       </Col>
//                     ))}
//                   </Row>
//                 )}

//                 <Row className="gx-1">
//                   {[
//                     { value: "C", color: "danger" },
//                     { value: "←", color: "secondary" },
//                     { value: "/", color: "warning" },
//                     { value: "*", color: "warning" },
//                     { value: "7", color: "primary" },
//                     { value: "8", color: "primary" },
//                     { value: "9", color: "primary" },
//                     { value: "-", color: "warning" },
//                     { value: "4", color: "primary" },
//                     { value: "5", color: "primary" },
//                     { value: "6", color: "primary" },
//                     { value: "+", color: "warning" },
//                     { value: "1", color: "primary" },
//                     { value: "2", color: "primary" },
//                     { value: "3", color: "primary" },
//                     { value: "=", color: "success" },
//                     { value: "0", color: "primary" },
//                     { value: ".", color: "info" },
//                     { value: "±", color: "secondary" },
//                   ].map((item, index) => (
//                     <Col key={index} xs={3} className="p-1">
//                       <Button
//                         variant={item.color || "primary"}
//                         className="w-100 p-2 fs-6 rounded-4 shadow-sm"
//                         onClick={() =>
//                           item.value === "="
//                             ? calculateResult()
//                             : item.value === "C"
//                             ? clearInput()
//                             : item.value === "←"
//                             ? backspace()
//                             : handleClick(item.value)
//                         }
//                       >
//                         {item.value}
//                       </Button>
//                     </Col>
//                   ))}
//                 </Row>
//               </div>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Calculator;




import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [showScientific, setShowScientific] = useState(false);
  const [isResultDisplayed, setIsResultDisplayed] = useState(false); // 👈 New state

  const handleClick = (value) => {
    if (isResultDisplayed && !isNaN(value)) {
      // 👇 If result is displayed & number key is pressed, clear input
      setInput(value);
    } else {
      // 👇 Continue adding value
      setInput((prev) => prev + value);
    }
    setIsResultDisplayed(false); // 👈 Reset flag after typing
  };

  const clearInput = () => {
    setInput("");
    setIsResultDisplayed(false);
  };

  const backspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      let result = input
        .replace(/√/g, "Math.sqrt")
        .replace(/\^/g, "**")
        .replace(/π/g, "Math.PI")
        .replace(/e/g, "Math.E")
        .replace(/log/g, "Math.log10")
        .replace(/ln/g, "Math.log")
        .replace(/sin/g, "Math.sin")
        .replace(/cos/g, "Math.cos")
        .replace(/tan/g, "Math.tan")
        .replace(/%/g, "/100");

      setInput(eval(result).toString());
      setIsResultDisplayed(true); // 👈 Set flag after calculation
    } catch (error) {
      setInput("Error");
      setIsResultDisplayed(true);
    }
  };

  return (
    <Container className="mt-3">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
          <Card className="p-3 shadow-lg rounded bg-dark text-light">
            <Card.Body>
              <h2 className="mb-3 text-center text-white">Scientific Calculator</h2>

              {/* Input Display */}
              <Form.Control
                type="text"
                value={input}
                readOnly
                className="text-end mb-3 p-4 fs-3 rounded bg-light text-dark border-0 shadow-lg"
              />

              <Button
                variant="secondary"
                className="mb-3 w-100 rounded-pill shadow-sm"
                onClick={() => setShowScientific(!showScientific)}
              >
                {showScientific ? "Hide Scientific Keys" : "Show Scientific Keys"}
              </Button>

              <div className="d-grid gap-2">
                {showScientific && (
                  <Row className="gx-1">
                    {[
                      { value: "(", label: "(" },
                      { value: ")", label: ")" },
                      { value: "√(", label: "√" },
                      { value: "^", label: "^" },
                      { value: "π", label: "π" },
                      { value: "e", label: "e" },
                      { value: "log(", label: "log" },
                      { value: "ln(", label: "ln" },
                      { value: "sin(", label: "sin" },
                      { value: "cos(", label: "cos" },
                      { value: "tan(", label: "tan" },
                      { value: "%", label: "%" },
                    ].map((item, index) => (
                      <Col key={index} xs={3} className="p-1">
                        <Button
                          variant="info"
                          className="w-100 p-2 fs-6 rounded-4 shadow-sm"
                          onClick={() => handleClick(item.value)}
                        >
                          {item.value}
                        </Button>
                      </Col>
                    ))}
                  </Row>
                )}

                <Row className="gx-1">
                  {[
                    { value: "C", color: "danger" },
                    { value: "←", color: "secondary" },
                    { value: "/", color: "warning" },
                    { value: "*", color: "warning" },
                    { value: "7", color: "primary" },
                    { value: "8", color: "primary" },
                    { value: "9", color: "primary" },
                    { value: "-", color: "warning" },
                    { value: "4", color: "primary" },
                    { value: "5", color: "primary" },
                    { value: "6", color: "primary" },
                    { value: "+", color: "warning" },
                    { value: "1", color: "primary" },
                    { value: "2", color: "primary" },
                    { value: "3", color: "primary" },
                    { value: "=", color: "success" },
                    { value: "0", color: "primary" },
                    { value: ".", color: "info" },
                    { value: "±", color: "secondary" },
                  ].map((item, index) => (
                    <Col key={index} xs={3} className="p-1">
                      <Button
                        variant={item.color || "primary"}
                        className="w-100 p-2 fs-6 rounded-4 shadow-sm"
                        onClick={() =>
                          item.value === "="
                            ? calculateResult()
                            : item.value === "C"
                            ? clearInput()
                            : item.value === "←"
                            ? backspace()
                            : ["+", "-", "*", "/", "^", "%"].includes(item.value)
                            ? (setIsResultDisplayed(false), handleClick(item.value)) // 👈 Operators continue calculation
                            : handleClick(item.value)
                        }
                      >
                        {item.value}
                      </Button>
                    </Col>
                  ))}
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Calculator;
