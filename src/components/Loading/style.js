import styled from 'styled-components';

const LoadingStyled = styled.div`
.loader {
  position: fixed;
  text-align: center;
  width: 100%;
  left: 0;
  top: 0;
  height: 100%;
  background: black;
  z-index: 999999999;
}

.loader-content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.loader-content .dots {
  display: inline-block;
  position: relative;
  vertical-align: middle;
}
.loader-content .dots:not(:last-child) {
  margin-right: 9px;
}
.loader-content .dots:before, .loader-content .dots:after {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  position: absolute;
}
.loader-content .dots:nth-child(1):before {
  transform: translateY(-200%);
  animation: animBefore 1s linear infinite;
  animation-delay: -0.9s;
  background-color: #CAD22A;
}
.loader-content .dots:nth-child(1):after {
  transform: translateY(200%);
  animation: animAfter 1s linear infinite;
  animation-delay: -0.9s;
  background-color: #91B83B;
}
.loader-content .dots:nth-child(2):before {
  transform: translateY(-200%);
  animation: animBefore 1s linear infinite;
  animation-delay: -1.8s;
  background-color: #CAD22A;
}
.loader-content .dots:nth-child(2):after {
  transform: translateY(200%);
  animation: animAfter 1s linear infinite;
  animation-delay: -1.8s;
  background-color: #91B83B;
}
.loader-content .dots:nth-child(3):before {
  transform: translateY(-200%);
  animation: animBefore 1s linear infinite;
  animation-delay: -2.7s;
  background-color: #CAD22A;
}
.loader-content .dots:nth-child(3):after {
  transform: translateY(200%);
  animation: animAfter 1s linear infinite;
  animation-delay: -2.7s;
  background-color: #91B83B;
}
.loader-content .dots:nth-child(4):before {
  transform: translateY(-200%);
  animation: animBefore 1s linear infinite;
  animation-delay: -3.6s;
  background-color: #CAD22A;
}
.loader-content .dots:nth-child(4):after {
  transform: translateY(200%);
  animation: animAfter 1s linear infinite;
  animation-delay: -3.6s;
  background-color: #91B83B;
}
.loader-content .dots:nth-child(5):before {
  transform: translateY(-200%);
  animation: animBefore 1s linear infinite;
  animation-delay: -4.5s;
  background-color: #CAD22A;
}
.loader-content .dots:nth-child(5):after {
  transform: translateY(200%);
  animation: animAfter 1s linear infinite;
  animation-delay: -4.5s;
  background-color: #91B83B;
}
.loader-content .dots:nth-child(6):before {
  transform: translateY(-200%);
  animation: animBefore 1s linear infinite;
  animation-delay: -5.4s;
  background-color: #CAD22A;
}
.loader-content .dots:nth-child(6):after {
  transform: translateY(200%);
  animation: animAfter 1s linear infinite;
  animation-delay: -5.4s;
  background-color: #91B83B;
}
.loader-content .dots:nth-child(7):before {
  transform: translateY(-200%);
  animation: animBefore 1s linear infinite;
  animation-delay: -6.3s;
  background-color: #CAD22A;
}
.loader-content .dots:nth-child(7):after {
  transform: translateY(200%);
  animation: animAfter 1s linear infinite;
  animation-delay: -6.3s;
  background-color: #91B83B;
}
.loader-content .dots:nth-child(8):before {
  transform: translateY(-200%);
  animation: animBefore 1s linear infinite;
  animation-delay: -7.2s;
  background-color: #CAD22A;
}
.loader-content .dots:nth-child(8):after {
  transform: translateY(200%);
  animation: animAfter 1s linear infinite;
  animation-delay: -7.2s;
  background-color: #91B83B;
}
.loader-content .dots:nth-child(9):before {
  transform: translateY(-200%);
  animation: animBefore 1s linear infinite;
  animation-delay: -8.1s;
  background-color: #CAD22A;
}
.loader-content .dots:nth-child(9):after {
  transform: translateY(200%);
  animation: animAfter 1s linear infinite;
  animation-delay: -8.1s;
  background-color: #91B83B;
}
.loader-content .dots:nth-child(10):before {
  transform: translateY(-200%);
  animation: animBefore 1s linear infinite;
  animation-delay: -9s;
  background-color: #CAD22A;
}
.loader-content .dots:nth-child(10):after {
  transform: translateY(200%);
  animation: animAfter 1s linear infinite;
  animation-delay: -9s;
  background-color: #91B83B;
}

.loader-txt {
  color: #ddd;
  font: 11px "Gotham Book";
  text-transform: uppercase;
  margin-top: 35px;
  letter-spacing: 2px;
}

@keyframes animBefore {
  0% {
    transform: scale(1) translateY(-200%);
    z-index: 1;
  }
  25% {
    transform: scale(1.3) translateY(0);
    z-index: 1;
  }
  50% {
    transform: scale(1) translateY(200%);
    z-index: -1;
  }
  75% {
    transform: scale(0.7) translateY(0);
    z-index: -1;
  }
  100% {
    transform: scale(1) translateY(-200%);
    z-index: -1;
  }
}
@keyframes animAfter {
  0% {
    transform: scale(1) translateY(200%);
    z-index: -1;
  }
  25% {
    transform: scale(0.7) translateY(0);
    z-index: -1;
  }
  50% {
    transform: scale(1) translateY(-200%);
    z-index: 1;
  }
  75% {
    transform: scale(1.3) translateY(0);
    z-index: 1;
  }
  100% {
    transform: scale(1) translateY(200%);
    z-index: 1;
  }
}
  background: black;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  text-align: center;
`;

export default LoadingStyled;
