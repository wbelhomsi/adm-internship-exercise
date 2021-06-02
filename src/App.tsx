import "./App.css";
import { Model, Org, Person } from "./models/Model";
import Table from "./components/Table";
import Container from "react-bootstrap/Container";
import React, { useState, useEffect } from "react";
import { log } from "console";

function App() {
  const [people, setPeople] = useState<Person[]>([]);
  const [orgs, setOrgs] = useState<Org[]>([]);
  const [selectedOrg, setSelectedOrg] = useState(0);

  useEffect(() => {
    setOrgs(new Model().orgs);
  }, []);
  useEffect(() => {
    setPeople(new Model().people);
  }, []);
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
    setOrgs(orgs.filter((org) => org.id !== id));
  };
  return (
    <div className="App">
      <Container>
        <Table
          data={orgs}
          onCreate={createOrg}
          onDelete={deleteOrg}
          onUpdate={updateOrg}
          onSelect={(id) => setSelectedOrg(id)}
        />
        <Table
          data={people.filter((person) => person.org_id === selectedOrg)}
          onCreate={createOrg}
          onDelete={deleteOrg}
          onUpdate={updateOrg}
        />
      </Container>
    </div>
  );
}

// function useData<T>(
//   getInitialState: () => T[]
// ): [T[], React.Dispatch<React.SetStateAction<T[]>>] {
//   const [state, setState] = useState<T[]>([]);
//   const callback = useCallback(() => {
//     return getInitialState();
//   }, [getInitialState]);
//   useEffect(() => {
//     //fetech data from remote database
//     const newState = callback();
//     setState(newState);
//     return () => {};
//   }, [callback]);

//   return [state, setState];
// }
export default App;
