import { Button, ListGroup } from "react-bootstrap";

const SingleComment = ({ comment }) => {
  const deleteComment = async (asin) => {
    try {
      let response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + asin, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY5OWU2ZjA0NTg5ZjAwMTk0OGU1YmQiLCJpYXQiOjE3MTA4NTc4MzksImV4cCI6MTcxMjA2NzQzOX0.BSotV1Bzo4OFxIJoRYB6sZkNh2CMOsE0paL3dkCUvE4",
        },
      });
      if (response.ok) {
        alert("La recensione è stata elimata!");
      } else {
        throw new Error("La recensione non è stata eliminata!");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <ListGroup.Item>
      {comment.comment}
      <Button variant="danger" className="ms-2" onClick={() => deleteComment(comment._id)}>
        Elimina
      </Button>
    </ListGroup.Item>
  );
};

export default SingleComment;