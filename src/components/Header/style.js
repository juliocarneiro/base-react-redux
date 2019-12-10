import styled from 'styled-components';

const HeaderStyled = styled.div`
  background: #191818;
  color: white;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9997;
  height: 90px;
  border-bottom: 4px solid #c9d12a;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.38);
  p {
    margin: 0;
  }
  div {
    height: 100%;
  }
  .header-logo {
    img {
      max-width: 200px;
    }
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
  }
`;

export default HeaderStyled;
