import styled from 'styled-components';

export const ArticleHeader = styled.header`
  color: red;
  background-color: ${props => props.backgroundColor || 'black'};
  \&::after {
    content: ${'hi'};
  }
`;

export const ArticlePost = styled.li`
  color: green;
`;

export const ArticlePosts = styled.ul`
  background-color: red;
`;
