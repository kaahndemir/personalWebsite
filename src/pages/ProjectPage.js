import { CircularProgress, Container } from "@mui/material";
import hatmedecemImage from "../assets/hatmedecem-project.png"
import LinkIcon from "../assets/link-icon.svg"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "@firebase/firestore";
import { db } from "..";
import useWindowDimensions from "../components/useWindowDimensions";

export default function ProjectPage() {
    const params = useParams();
    const projectId = params.projectId
    const [loading, setLoading] = useState(true)
    const [projectData, setProjectData] = useState()

    useEffect(() => {
        getDoc(doc(db, 'projects', projectId)).then((projectDoc => {
            console.log(projectDoc.data())
            setProjectData(projectDoc.data())
            setLoading(false)
        }))
    }, [])

    const { height, width } = useWindowDimensions();
    let smallScreen = width < 1000

    return loading ? <CircularProgress /> : <Container sx={{ width: smallScreen ? "90%" : "40%" }}>
        <h2 style={{ textAlign: "center", overflowWrap: "break-word" }}>{projectData.name}</h2>
        <div style={{ display: 'flex', justifyContent: "center" }}>
            <img src={projectData.featuredImage} style={{ height: "300px" }} />
        </div>
        {projectData.link && <a href={projectData.link} style={{ fontSize: "24px", display: "flex", alignContent: "center" }}> <img src={LinkIcon} style={{ height: "25px" }} /> visit website</a>}
        <div dangerouslySetInnerHTML={{ __html: projectData.content }}  style={{ whiteSpace: "pre-line", fontSize: "24px", fontWeight: "medium" }}/>
    </Container>
}

<p> Welcome to our web application project, Hatmedecem! We are thrilled to have you here and can't wait to tell you all about our platform. Hatmecem is a user-friendly web application designed to help you complete the Quran with friends and family. <br/><br/>The application allows users to create a Hatim, a communal recitation of the Quran, and invite others to join in the recitation. With Hatmecem, you can easily connect with your loved ones and strengthen your bond through a shared love for the Quran. <br/><br/>Our platform offers a simple and intuitive user interface that makes creating and managing a Hatim a breeze. Once you create a Hatim, you can invite friends and family to join by sharing a unique link. You can also choose which parts of the Quran you want to recite and keep track of the progress made by each participant. <br/><br/>Hatmedecem is perfect for those who are looking to complete the Quran with their loved ones or form a close-knit community centered around the Quran. Join us today and experience the joy of completing the Quran with your loved ones. <br/><br/>Sign up now at hatmecem.web.app and start your Hatim journey today! </p>