import { Button, Form, Container } from "react-bootstrap";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const complainsUrl = "http://localhost:4000/comments";
  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const { postData, data, error } = useFetch(complainsUrl, "POST");

  const handleSubmit = (event) => {
    event.preventDefault();
    postData({
      userEmail: email,
      userComments: comment,
    });
  };

  return (
    <Container className="pt-5 ">
      <Form className="mt-4 w-50 " onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={(e) =>
              setEmail((prevEmail) => (prevEmail = e.target.value))
            }
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="my-4">
          <Form.Label>What should we Chnage:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            onChange={(e) =>
              setComment((prevComment) => (prevComment = e.target.value))
            }
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
  );
};

export default Contact;
