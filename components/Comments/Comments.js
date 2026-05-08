import styled from "styled-components";

export default function Comments({ comments }) {
  return (
    <section>
      <h3>Comments:</h3>
      <StyledList>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>
              {comment.text} <small>({comment.date}) at {comment.time}</small>
            </p>
          </li>
        ))}
      </StyledList>
    </section>
  );
}
const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;