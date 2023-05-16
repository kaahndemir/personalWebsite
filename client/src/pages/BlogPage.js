import Post from "../Post";
import { Box, Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function BlogPage() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://codeoguz-website.onrender.com/post').then(response => {
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