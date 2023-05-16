import { Button, CircularProgress, Container, Grid, Skeleton, Typography } from "@mui/material";
import hatmedecemImage from "../assets/hatmedecem-project.png"
import LinkIcon from "../assets/link-icon.svg"
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "..";
import EditIcon from '@mui/icons-material/Edit';
import useWindowDimensions from "../components/useWindowDimensions";
import { UserContext } from "../UserContext";

export default function ProjectPage() {
    const [projectInfo, setProjectInfo] = useState(null);
    const { userInfo } = useContext(UserContext);
    const { id } = useParams();

    useEffect(() => {
        console.log(id)
        fetch(`https://codeoguz-website.onrender.com/projects/${id}`)
            .then(response => {
                response.json().then(projectInfo => {
                    setProjectInfo(projectInfo);
                });
            });
    }, [])

    const { height, width } = useWindowDimensions();
    let smallScreen = width < 1000


    return !projectInfo ? <Grid container spacing={1} justifyItems={"center"} textAlign={'center'} marginTop={3}>

        <Grid item xs={12} display={"flex"} justifyContent={"center"}>
            <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                height={50}
                width={500}
            />
        </Grid>

        <Grid item xs={12} display={"flex"} justifyContent={"center"} marginBottom={2}>
            <Skeleton
                sx={{ bgcolor: 'grey.900' }}
                variant="rectangular"
                height={200}
                width={500}
            />
        </Grid>

        {
            [1, 2, 3, 4, 5, 6].map(line => {
                return <Grid item xs={12} display={"flex"} justifyContent={"center"}>
                    <Skeleton
                        sx={{ bgcolor: 'grey.900' }}
                        variant="rectangular"
                        height={20}
                        width={500}
                    />
                </Grid>
            })
        }

    </Grid> : <Container sx={{ width: smallScreen ? "90%" : "40%" }}>
        <h2 style={{ textAlign: "center", overflowWrap: "break-word" }}>
            {projectInfo.title}
        </h2>
        {userInfo.id === projectInfo.author._id && <Link className="edit-btn" to={`/editproject/${projectInfo._id}`}>
              <Button>
                <EditIcon />
                Edit this post
              </Button>
            </Link> }
        <div style={{ display: 'flex', justifyContent: "center" }}>
            <img src={`https://codeoguz-website.onrender.com/${projectInfo.cover}`} style={{ height: "300px" }} />
        </div>
        {projectInfo.link && <a href={projectInfo.link} style={{ fontSize: "24px", display: "flex", alignContent: "center" }}> <img src={LinkIcon} style={{ height: "25px" }} /> visit website</a>}
        <div dangerouslySetInnerHTML={{ __html: projectInfo.content }} style={{ whiteSpace: "pre-line", fontSize: "24px", fontWeight: "medium" }} />
    </Container>
}