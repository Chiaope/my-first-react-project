import { useState } from "react";
import CoreConceptListItem from "./components/CoreComponentListItem/CoreConceptListItem";
import Header from "./components/Header/Header"
import { CORE_CONCEPTS } from "./data"
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
          coreConcepts.map((coreConcept) => {
            return (
              <CoreConceptListItem {...coreConcept} />
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
            <MenuButton onSelect={() => handleOnSelect('components')}>Components</MenuButton>
            <MenuButton onSelect={() => handleOnSelect('jsx')}>JSX</MenuButton>
            <MenuButton onSelect={() => handleOnSelect('props')}>Props</MenuButton>
            <MenuButton onSelect={() => handleOnSelect('state')}>State</MenuButton>
          </menu>
          {selectedMenuItem}
        </section>
      </main>
    </div>
  );
}

export default App;
