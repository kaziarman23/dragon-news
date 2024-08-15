import { Link } from "react-router-dom";

const NewsCards = ({ News }) => {
  const { title, image_url, details, _id } = News;
  return (
    <div className="card card-compact shadow-xl mb-10">
      <figure>
        <img src={image_url} alt="news images" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        {details.length > 200 ? (
          <p>
            {details.slice(0, 200)}{" "}
            <Link className="text-blue-500" to={`/news/${_id}`}>
              Read more...
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
      </div>
    </div>
  );
};

export default NewsCards;
