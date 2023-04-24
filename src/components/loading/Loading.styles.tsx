import styled from 'styled-components';

export const Component = styled.div`
  .preload {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: var(--gold-crayola);
    z-index: 10;
    display: grid;
    place-content: center;
    justify-items: center;
    transition: var(--transition-2);
  }

  .preload > * {
    transition: var(--transition-1);
  }

  .preload.loaded > * {
    opacity: 1;
  }

  .preload.loaded {
    transition-delay: 1s;
    transform: translateY(100%);
  }

  .circle {
    width: 112px;
    height: 112px;
    border-radius: var(--radius-circle);
    border: 3px solid var(--white);
    border-block-start-color: var(--smoky-black-3);
    margin-block-end: 45px;
    animation: rotate360 1s linear infinite;
  }

  .preload .text {
    background-image: var(--loading-text-gradient);
    background-size: 500%;
    font-size: calc(2rem + 3vw);
    font-weight: var(--weight-bold);
    line-height: 1em;
    text-transform: uppercase;
    letter-spacing: 16px;
    padding-inline-start: 16px;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-stroke: 0.5px var(--eerie-black-3);
    animation: loadingText linear 2s infinite;
  }

  @keyframes rotate360 {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(1turn);
    }
  }

  @keyframes loadingText {
    0% {
      background-position: 100%;
    }
    100% {
      background-position: 0%;
    }
  }
`;
