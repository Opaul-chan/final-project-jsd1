import axios from "axios";
// import { response } from "express";
import { useState, useEffect } from "react";
// import { useAxios } from "use-axios-client";
//axios instance
const client = axios.create({
  baseURL: "http://localhost:4000",
});

export default function App() {
  // const { data, error, loading } = useAxios({
  //   url: "http://localhost:4000",
  // });
  // if (loading || !data) return "Loading...";
  // if (error) return "Error!!!";
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    // search activity by activityType
    async function getPost() {
      const response = await client.get("/id");
      setPost(response.data);
    }
    getPost();
    client
      .get("/activities")
      .then((response) => {
        setPost(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  async function createPost() {
    await client
      .post("/", {
        activityDate: "activityDate",
        activityName: "activityName",
        activityDuration: "activityDuration",
        activityType: "activityType",
        activityDescription: "activityDescription",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  async function updatePost() {
    await client
      .put("/id", {
        activityDate: "activityDate",
        activityName: "activityName",
        activityDuration: "activityDuration",
        activityType: "activityType",
        activityDescription: "activityDescription",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  async function deletePost() {
    await client.delete("/id").then(() => {
      alert("Post deleted!!!");
      setPost(null);
    });
  }
  if (error) return `Error: ${error.message}`;
  if (!post) return "No post";

  return (
    <div>
      {/* แบบ post.body */}
      {/* <p>{post.body}</p> */}
      {/* แบบ post.activity */}
      <p>{post.activityDate}</p>
      <p>{post.activityName}</p>
      <p>{post.activityDuration}</p>
      <p>{post.activityType}</p>
      <p>{post.activityDescription}</p>
      <button onclick={createPost}>Creat Post</button>
      <button onclick={updatePost}>Edit Post</button>
      <button onclick={deletePost}>Delete Post</button>
    </div>
  );
}

// function Main(props)
// const post = [
//   {
//     key: post.id,
//     id: post.id,
//     ActivityName: post.ActivityName,
//     ActivityType: post.ActivityType,
//     ActivityDuration: post.ActivityDuration,
//     ActivityDesciption: post.ActivityDesciption,
// }
// ]
