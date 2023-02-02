import { useFetch } from "../hooks/useFetch";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
const ArticelPage = () => {
  const { id } = useParams();
  const articleUrl = `http://localhost:4000/articles/${id}`;
  const { data: article, isPending, errors } = useFetch(articleUrl);
  const [edit, setEdit] = useState(true);
  const [edited, setEdited] = useState(null);
  const [titleEdit, setTilteEdit] = useState("");
  const [bodyEdit, setbodyEdit] = useState("");

  const navigate = useNavigate();

  const handleEdit = (event) => {
    event.preventDefault();
    (async () => {
      try {
        const response = await fetch(articleUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            author: article.author,
            id: article.id,
            title: titleEdit,
            body: bodyEdit,
          }),
        });
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    })();

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };
  return (
    <div className="p-5">
      <div>
        {isPending && <h3>Loading ...</h3>}
        {errors && <h3>{errors.message}</h3>}
        {article && (
          <div className="dia">
            <h2 className="mb-4">
              {article.title} by: {article.author}
            </h2>
            <p className="fs-4">{article.body}</p>
          </div>
        )}
      </div>
      <div className="mt-5">
        <Button variant="primary">
          <Link to="/" className="text-decoration-none">
            Back Home
          </Link>
        </Button>
        {edit && (
          <Button onClick={() => setEdit(false)} className=" ms-4">
            Edit Article
          </Button>
        )}
      </div>
      <div>
        {!edit && (
          <Form className="my-4 w-50 " onSubmit={(e) => handleEdit(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Article Name:</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTilteEdit(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                as="textarea"
                style={{ height: "300px" }}
                onChange={(e) => setbodyEdit(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit">Save Edited</Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default ArticelPage;
