import styled from "styled-components";

export default function CommentForm({ onSubmitComment }) {
  function handleSubmit(event) {
    event.preventDefault();
    const commentText = event.target.elements.comment.value;
    onSubmitComment(commentText);
    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit} style={{ width: "100%" }}>
      <label
        htmlFor="comment"
        style={{ display: "block", marginBottom: "5px" }}
      >
        Add comment:
      </label>
      <textarea
        id="comment"
        name="comment"
        rows="3"
        required
        style={{ width: "100%", display: "block", marginBottom: "10px" }}
      />
      <button type="submit">Send</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  margin: 0 2rem;
`;
