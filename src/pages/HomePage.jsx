import Article from "../components/Article/Article";

import { useFetch } from "../hooks/useFetch";
const HomePage = () => {
  const url = "http://localhost:4000/articles";
  const { data: articles, isPendeing: loading, errors } = useFetch(url);

  return (
    <div className="my-4 d-flex gap-4 flex-column">
      <h1 className="text-center fs-1">Articles</h1>
      {loading && <h3>Loading Please Wait</h3>}
      {errors && <h3>{errors.message}</h3>}
      <div className="d-flex flex-wrap  gap-4 justify-content-center">
        {articles?.map((article) => (
          <Article
            title={article.title}
            author={article.author}
            id={article.id}
            path={article.id}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
