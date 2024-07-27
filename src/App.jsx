import { useState } from "react";
import CoreConceptListItem from "./components/CoreComponent/CoreConcept";
import Header from "./components/Header/Header"
import { CORE_CONCEPTS, EXAMPLES } from "./data"
import MenuButton from "./components/MenuButton/MenuButton";


function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Please enter something')

  function handleOnSelect(newSelectedMenuItem) {
    setSelectedMenuItem(newSelectedMenuItem)
  }

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

  function MapExampleItems(exampleItems) {
    return (
      <>
        {
          Object.keys(exampleItems).map((exampleItemKey, index) => {
            let exampleItem = exampleItems[exampleItemKey]
            return (
              <li key={index}>
                <MenuButton onSelect={() => handleOnSelect(exampleItemKey)}>{exampleItem.title}</MenuButton>
              </li>
            )
          })
        }
      </>
    )
  }

  function MenuContainer({title, description, code}) {
    return (
      <>
        <h3>{title}</h3>
        <p>{description}</p>
        <pre>
          <code>
            {code}
          </code>
        </pre>
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
          <menu>
            {MapExampleItems(EXAMPLES)}
          </menu>
          <div id='tab-content'>
            {EXAMPLES[selectedMenuItem] ? MenuContainer(EXAMPLES[selectedMenuItem]) : selectedMenuItem}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
