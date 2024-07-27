import reactAtomImage from "./assets/react-core-concepts.png"
import { CORE_CONCEPTS } from "./data"

function Header() {
  return <header>
    <img src={reactAtomImage} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      Fundamental React concepts you will need for almost any app you are
      going to build!
    </p>
  </header>
}

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
