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
      </div>
    </div>
  );
};

export default ArticelPage;
