import Header from "./components/Header/Header"
import ExampleMenu from "./components/ExampleMenu/ExampleMenu";
import CoreConcept from "./components/CoreConcept/CoreConcept"

function App() {
  return (
    <div>
      <Header />
      <main>
        <CoreConcept />
        <ExampleMenu />
      </main>
    </div>
  );
}

export default App;
