import people from "../resources/mock_people.json";
import orgs from "../resources/mock_orgs.json";

export type Org = {
  id: number;
  name: string;
  phone: string;
  email: string;
};

export type Person = {
  id: number;
  name: string;
  phone: string;
  email: string;
  org_id: number;
};

export class Model {
  people: Person[];
  orgs: Org[];

  constructor() {
    this.people = people as Person[];
    this.orgs = orgs as Org[];
  }
}
