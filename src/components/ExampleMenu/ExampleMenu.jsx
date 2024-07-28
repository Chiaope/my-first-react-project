import { useState } from "react"
import MenuButton from "../MenuButton/MenuButton"

export default function ExampleMenu(exampleObject) {
    console.log(exampleObject)

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
                                <MenuButton onSelect={() => handleOnSelect(exampleItemKey)}>{exampleItem.title}</MenuButton>
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
            {MenuContainer(exampleObject[selectedMenuItem])}
        </div>
    }

    return (
        <>
            <menu>
                {MapExampleItems(exampleObject)}
            </menu>
            {tabContent}
        </>
    )
}
