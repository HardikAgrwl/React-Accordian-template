import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [ques, setQues] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Questions And Answers about Login</h3>
        <section>
          {ques.map((question) => {
            return (
              <div>
                <SingleQuestion key={question.id} {...question} />
              </div>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
