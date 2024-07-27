import { useState } from "react";
import CoreConceptListItem from "./components/CoreComponent/CoreConcept";
import Header from "./components/Header/Header"
import { CORE_CONCEPTS, EXAMPLES } from "./data"
import MenuButton from "./components/MenuButton/MenuButton";


function App() {
  const [selectedMenuItem, setSelectedMenuItem] = useState('Please select a menu item')

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
            let title = exampleItems[exampleItemKey].title
            return (
              <li key={index}>
                <MenuButton onSelect={() => handleOnSelect(title)}>{title}</MenuButton>
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
          <menu>
            {MapExampleItems(EXAMPLES)}
          </menu>
          <div id='tab-content'>
            {selectedMenuItem}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
