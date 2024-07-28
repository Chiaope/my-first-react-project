import { CORE_CONCEPTS } from "../../data"
import './CoreConcept.css'

export default function CoreConcept() {
  function CoreConceptListItem({ title, description, image }) {
    return (
      <>
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </>
    )
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
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {MapCoreConcepts(CORE_CONCEPTS)}
      </ul>
    </section>
  )
}