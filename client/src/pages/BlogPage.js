import Post from "../Post";
import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function BlogPage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:4000/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            });
        });
    }, []);

    return (
        <Container>
            <h1>codeoguz Blog</h1>
            {posts.length > 0 && posts.map(post => (
                <Post {...post} />
            ))}
        </Container>
    );
}