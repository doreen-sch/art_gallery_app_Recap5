import styled from "styled-components";

export default function Comments({ comments }) {
  return (
    <StyledCommentSection>
      <h3>Comments:</h3>
      <StyledList>
        {comments.map((comment, index) => (
          <li key={index}>
            <p>
              {comment.text}{" "}
              <small>
                ({comment.date} at {comment.time})
              </small>
            </p>
          </li>
        ))}
      </StyledList>
    </StyledCommentSection>
  );
}

const StyledCommentSection = styled.section`
  margin: 0 2rem;
`;

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
`;
