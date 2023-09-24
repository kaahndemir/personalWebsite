import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { formatISO9075 } from "date-fns";
import { UserContext } from "../UserContext";
import { Link } from 'react-router-dom';
import { Box, Button, Container } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

export default function PostPage() {
  const [postInfo, setPostInfo] = useState(null);
  const { userInfo } = useContext(UserContext);
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://codeoguz.onrender.com/post/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
        });
      });
  }, []);

  if (!postInfo) return '';

  return (
    <Container>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img style={{ maxWidth: "100%", maxHeight: "600px" }} src={`https://codeoguz.onrender.com/${postInfo.cover}`} alt="" />
      </div>


      <h1 style={{ textAlign: "center" }}>{postInfo.title}</h1>

      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <time>{formatISO9075(new Date(postInfo.createdAt))}</time>

        <div>
          <div className="author">by @{postInfo.author.username}</div>
          {userInfo.id === postInfo.author._id && (

            <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
              <Button>
                <EditIcon />
                Edit this post
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="content" dangerouslySetInnerHTML={{ __html: postInfo.content }} />
    </Container>
  );
}