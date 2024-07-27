import { useState } from "react";
import CoreConceptListItem from "./components/CoreComponent/CoreConcept";
import Header from "./components/Header/Header"
import { CORE_CONCEPTS, EXAMPLES } from "./data"
import MenuButton from "./components/MenuButton/MenuButton";
import ExampleMenu from "./components/ExampleMenu/ExampleMenu";


function App() {
  function MapCoreConcepts(coreConcepts) {
    return (
      <>
        {
          coreConcepts.map((coreConcept, index) => {
            return (
              <li key={index}>
                <CoreConceptListItem {...coreConcept} />
              </li>
            )
          })
        }
      </>
    )
  }


  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {MapCoreConcepts(CORE_CONCEPTS)}
          </ul>
        </section>
        <section id='examples'>
          {ExampleMenu(EXAMPLES)}
        </section>
      </main>
    </div>
  );
}

export default App;
