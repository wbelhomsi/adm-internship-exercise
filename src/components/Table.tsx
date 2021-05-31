import { FunctionComponent } from "react";
import { Org, Person } from "../models/Model";
import { default as TableView } from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import { BsListUl, BsTrash, BsPlus } from "react-icons/bs";

type TableProps = {
  data: Person[] | Org[];
  // onSelect: () => void;
  onDelete: (id: number) => void;
  onCreate: () => void;
  onUpdate: () => void;
};

const Table: FunctionComponent<TableProps> = (props) => {
  return (
    <TableView striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>
            <Row className="justify-content-end">
              <BsPlus onClick={() => props.onCreate()} />
            </Row>
          </th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((e: any) => (
          <tr>
            <td>{e.id}</td>
            <td>{e.name}</td>
            <td>{e.email}</td>
            <td>{e.phone}</td>
            <td>
              <Row className="justify-content-around margin-x-md-0">
                <BsListUl onClick={() => props.onUpdate()} />
                <BsTrash onClick={() => props.onDelete(1)} />
              </Row>
            </td>
          </tr>
        ))}
      </tbody>
    </TableView>
  );
};

export default Table;
