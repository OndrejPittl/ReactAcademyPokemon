import styled, { keyframes } from "styled-components";

export const StyledLoadingSpinner = styled.div`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top:0;
  bottom:0;
  animation: loadingAnimation 2s infinite;
`;
export const LoadingSpinnerBall = styled.div`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  border: 10px solid #1d1d1b; 
  z-index: 100;
  display: block;
  margin: auto;
  left: 0;
  right: 0;
  top:0;
  bottom:0;  
  position: absolute;
`;
export const LoadingSpinnerHalfBall = styled.div`
  margin: auto;
  left: 0;
  right: 0;
  top:100px;
  bottom:0;
  z-index: 0;
  position: absolute;
  background-color: white;
  border-radius: 0 0 90px 90px;
  width: 200px;
  height: 100px;
`;
export const LoadingSpinnerHorizon = styled.div`
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom:0;    
  margin-top: auto;
  border-radius: 0px;
  width: 200px;
  height: 40px;
  background-color: #1d1d1b;
  z-index: 3;
`;
export const LoadingSpinnerBigButton = styled.div`
  z-index: 4;
  margin: auto;
  left: 0;
  right: 0;
  top:0;
  bottom:0;
  border-radius: 50%;
  border: 10px solid #1d1d1b;
  position: absolute;
  height: 60px;
  width: 60px; 
  background-color: white;
`;
export const LoadingSpinnerSmallButton = styled.div`
  z-index: 5;
  margin: auto;
  left: 0;
  right: 0;
  top:0;
  bottom:0;
  border-radius: 50%;
  border: 6px solid #1d1d1b;
  position: absolute;
  height: 38px;
  width: 38px; 
  background-color: white;
`;

const loadingAnimation = keyframes`
  0% { transform: translate(0, 0) rotate(0); }
  25% { transform: translate(-8px, 0) rotate(-18deg); }
  33% { transform: translate(8px, 0) rotate(18deg); }
  50% { transform: translate(-8px, 0) rotate(-12deg); }
  60% { transform: translate(8px, 0) rotate(18deg); }
  100% { transform: translate(0, 0) rotate(0); }
`;