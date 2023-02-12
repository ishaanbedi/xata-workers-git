import { useState } from "react";
import "./App.css";
import { xataWorker } from "./xata";
function NewPost() {
  const [postText, setPostText] = useState("");
  const [title, setTitle] = useState("");
  const [labels, setLabels] = useState("");
  const [slug, setSlug] = useState("");
  const [author, setAuthor] = useState("");
  const newPost = xataWorker("newPost", async ({ xata }) => {
    const record = await xata.db.Posts.create({
      title: "string",
      labels: ["string"],
      slug: "string",
      text: "longer text",
      author: "rec_xyz",
      createdAt: new Date("2000-01-01T00:00:00Z"),
      views: 3,
    });
    return record;
  });
  return (
    <div>
      <h2>Create a new post</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="labels">Labels:</label>
        <input
          type="text"
          id="labels"
          value={labels}
          onChange={(e) => setLabels(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="slug">Slug:</label>
        <input
          type="text"
          id="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <textarea
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
        rows={15}
        style={{ width: "100%", fontSize: "20px" }}
      />
      <button
        onClick={() => {
          newPost().then((res) => {
            console.log(res);
          });
        }}
        style={{ width: "100%", fontSize: "20px", padding: "15px" }}
      >
        Create Post
      </button>
    </div>
  );
}
export default NewPost;
