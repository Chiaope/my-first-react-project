
import Header from "./components/Header"
import { CORE_CONCEPTS } from "./data"


function CoreConceptListItem({ title, description, image }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  )
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

function App() {
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
      </main>
    </div>
  );
}

export default App;
