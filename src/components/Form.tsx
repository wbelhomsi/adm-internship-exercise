import { FunctionComponent, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { default as FormBS } from "react-bootstrap/Form";

type FormProps = {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
};

const Form: FunctionComponent<FormProps> = ({ icon, onClick }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {icon}
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <FormBS>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <FormBS.Group controlId="formBasicName">
              <FormBS.Label>Name</FormBS.Label>
              <FormBS.Control type="text" placeholder="Your Name" />
            </FormBS.Group>

            <FormBS.Group controlId="formBasicEmail">
              <FormBS.Label>Email address</FormBS.Label>
              <FormBS.Control type="email" placeholder="Enter email" />
              <FormBS.Text className="text-muted">
                We'll never share your email with anyone else.
              </FormBS.Text>
            </FormBS.Group>

            <FormBS.Group controlId="formBasicPhone">
              <FormBS.Label>Password</FormBS.Label>
              <FormBS.Control type="tel" placeholder="Your phone" />
            </FormBS.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Modal.Footer>
        </FormBS>
      </Modal>
    </>
  );
};

export default Form;
