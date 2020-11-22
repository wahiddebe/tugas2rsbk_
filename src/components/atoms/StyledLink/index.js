import styled from "styled-components";

const Link = ({ href, label, className }) => (
  <a className={className} href={href}>
    {label}
  </a>
);

const StyledLink = styled(Link)`
  color: #2d6187;
  font-size: 14px;
  font-weight: 500;
  border: 2px solid #2d6187;
  border-radius: 10px;
  padding: 5px;
  text-decoration: none;
  :hover {
    color: white;
    border: 2px solid white;
  }
`;

export default StyledLink;
