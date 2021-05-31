import "./App.css";
import { Model, Org, Person } from "./models/Model";
import Table from "./components/Table";
import Container from "react-bootstrap/Container";
function App() {
  const model = new Model();
  const people: Person[] = model.people;
  const orgs: Org[] = model.orgs;
  // const createPerson = () => {};
  // const updatePerson = (id: number) => {};
  // const deletePerson = (id: number) => {};

  const createOrg = () => {
    console.log("create new org");
  };
  const updateOrg = () => {
    console.log("update org");
  };
  const deleteOrg = (id: number) => {
    console.log("delete org");
  };
  return (
    <div className="App">
      <Container>
        <Table
          data={orgs}
          onCreate={createOrg}
          onDelete={deleteOrg}
          onUpdate={updateOrg}
        />
        <Table
          data={people}
          onCreate={createOrg}
          onDelete={deleteOrg}
          onUpdate={updateOrg}
        />
      </Container>
    </div>
  );
}

export default App;
