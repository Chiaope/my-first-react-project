import { CORE_CONCEPTS } from "../../data"
import Section from "../Section/Section"
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
    <Section title={'Core Concepts'} id="core-concepts">
      <ul>
        {MapCoreConcepts(CORE_CONCEPTS)}
      </ul>
    </Section>
  )
}