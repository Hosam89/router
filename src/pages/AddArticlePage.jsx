import { Container, Modal, Button, ListGroup, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
const AddnewArticle = () => {
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const complainsUrl = "http://localhost:4000/articles";
  const { postData, data, error } = useFetch(complainsUrl, "POST");

  const handleSubmit = (event) => {
    event.preventDefault();
    postData({
      author: author,
      title: title,
      body: body,
    });
    setAgree(false);
  };
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      {!show && (
        <Modal.Dialog>
          <Modal.Header closeButton onClick={() => navigate("/")}>
            <Modal.Title>Rules</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>Terms and Conditions:</p>
            <ListGroup>
              <ListGroup.Item>Be respectful</ListGroup.Item>
              <ListGroup.Item>no spam</ListGroup.Item>
              <ListGroup.Item>
                Make sure to link the source and give created when needed
              </ListGroup.Item>
              <ListGroup.Item>
                Try no search the Thema before you add it
              </ListGroup.Item>
              <ListGroup.Item>Worship me at all time</ListGroup.Item>
            </ListGroup>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="danger" onClick={() => navigate("/")}>
              Decline
            </Button>
            <Button
              variant="success"
              onClick={(e) => {
                setShow(true);
                setAgree(true);
              }}
            >
              Agree
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      )}
      {agree && (
        <Container className="mt-5">
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Author:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter the Author Name"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicText">
              <Form.Label>Atricle Title: </Form.Label>
              <Form.Control
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicTextarea">
              <Form.Label>Article:</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="The Article"
                style={{ height: "200px" }}
                onChange={(e) => setBody(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              onClick={() =>
                setTimeout(() => {
                  navigate("/");
                }, 2000)
              }
            >
              Submit
            </Button>
          </Form>
        </Container>
      )}
    </div>
  );
};

export default AddnewArticle;
