import { useState } from "react"
import "./ExampleMenu.css"
import MenuButton from "../MenuButton/MenuButton"
import { EXAMPLES } from "../../data"
import Section from "../Section/Section"
import Tabs from "../Tabs/Tabs"

export default function ExampleMenu() {
    const [selectedMenuItem, setSelectedMenuItem] = useState(null)

    function handleOnSelect(newSelectedMenuItem) {
        setSelectedMenuItem(newSelectedMenuItem)
    }
    function MapExampleItems(exampleItems) {
        return (
            <>
                {
                    Object.keys(exampleItems).map((exampleItemKey, index) => {
                        let exampleItem = exampleItems[exampleItemKey]
                        return (
                            <li key={index}>
                                <MenuButton isSelected={selectedMenuItem === exampleItemKey ? true : false} onSelect={() => handleOnSelect(exampleItemKey)}>{exampleItem.title}</MenuButton>
                            </li>
                        )
                    })
                }
            </>
        )
    }

    function MenuContainer({ title, description, code }) {
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

    let tabContent = 'Please enter something'

    if (selectedMenuItem) {
        tabContent = <div id='tab-content'>
            {MenuContainer(EXAMPLES[selectedMenuItem])}
        </div>
    }

    return (
        <Section title={'Example'} id='examples'>
            <Tabs buttons={MapExampleItems(EXAMPLES)}>
                {tabContent}
            </Tabs>
        </Section>
    )
}
