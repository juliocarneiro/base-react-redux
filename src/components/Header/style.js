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
    .header-logo-project {
      font-size: 15px;
      letter-spacing: 1px;
      color: #fff;
      text-transform: uppercase;
      border-left: 1px solid #fff;
      padding-left: 20px;
      margin-left: 20px;
    }
  }
  @media screen and (max-width: 865px) and (min-width: 768px) {
    .row .col-md-3 .header-logo {
      img {
        max-width: 70px !important;
      }
    }
  }
  @media screen and (max-width: 1085px) and (min-width: 865px) {
    .row .col-md-3 .header-logo {
      img {
        max-width: 95px !important;
      }
    }
  }
  @media screen and (max-width: 1340px) {
    .row .col-md-3 .header-logo {
      img {
        max-width: 150px;
      }
      .header-logo-project {
        font-size: 12px;
      }
    }
  }
`;

export default HeaderStyled;
