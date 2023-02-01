import "./Article.scss";
import { Link } from "react-router-dom";
const Article = ({ author, title, id, path }) => {
  return (
    <div key={id} className=" articelBox p-4  col-sm-12 col-md-6 col-lg-3">
      <h3 className="text-truncate">{title}</h3>
      <h4 className="fs-5">{author}</h4>
      <Link to={`/articles/${path}`} className="text-decoration-none">
        Read more ...
      </Link>
    </div>
  );
};

export default Article;
