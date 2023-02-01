import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const ArticelPage = () => {
  const { id } = useParams();
  console.log(id);
  const articleUrl = `http://localhost:4000/articles/${id}`;
  const { data: article, isPending, errors } = useFetch(articleUrl);

  return (
    <div className="p-5">
      <div>
        {article && (
          <div>
            <h2>
              {article.title} by: {article.author}
            </h2>
            <p className="fs-4">{article.body}</p>
          </div>
        )}
      </div>
      <div>
        <Button variant="primary">
          <Link to="/" className="text-decoration-none">
            {" "}
            Back Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ArticelPage;
