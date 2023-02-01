import { Button, Form, Container } from "react-bootstrap";
// import { useFetch } from "../hooks/useFetch";
import { useState } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");
  const complainsUrl = "http://localhost:4000/comments";
  const [send, setSend] = useState(false);
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState("/");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(complainsUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: email,
          userComment: comment,
        }),
      });
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      }
      const data = await response.json();
      setSend(true);
      setError(null);
    } catch (e) {
      setError(e);
      setSend(false);
    }
  };

  if (send) {
    setRedirect("/contact");
  }
  // const { data: comments } = useFetch(complainsUrl, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     userEmail: email,
  //     userComment: comment,
  //   }),
  // });
  // console.log(comments);
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(comments);
  // };
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
            resize="none"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            onChange={(e) =>
              setComment((prevComment) => (prevComment = e.target.value))
            }
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Contact;
