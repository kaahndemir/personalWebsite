import { formatISO9075 } from "date-fns";
import { Box, Container, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export default function Post({ id, title, slug, featuredImage }, smallScreen) {

  console.log(title)

  return (


    <Link to={`/post/${slug}`}>
      <Box sx={{ backgroundSize: "cover", backgroundPosition: "center", backgroundImage: `url(${featuredImage})`, height: "500px", borderRadius: "5px", display: "flex", justifyContent: "center", alignItems: "center", fontSize: "48px", fontWeight: "bold", flexDirection: "column" }}>
        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)', width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <h2 style={{ textAlign: "center" }}>{title}</h2>
        </div>
      </Box>
    </Link>


    /*  <div style={{ marginLeft: "20px" }}>
      <Link to={`/post/${_id}`}>
        <h2>{title}</h2>
      </Link>
      <p className="summary">{summary}</p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <a className="author">{author.username}</a>
        <time>{formatISO9075(new Date(createdAt))}</time>
      </div>
    </div> */
  );
}