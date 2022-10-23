import { Link } from "react-router-dom";

function Episode({ id, title, img, description, number, season }) {
    return (
      <div className="card m-3" style={{ width: "18rem" }}>
        <img src={img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title || "default title"}</h5>
          <p className="cad-text">
            S{season} E{number}
          </p>
          <p className="card-text">{description}</p>

          <Link to={`/episodes/${id}`} className="btn btn-primary">Detail</Link>
        </div>
      </div>
    );
  }
  
  export default Episode;