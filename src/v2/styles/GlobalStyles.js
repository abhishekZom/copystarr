import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Poppins', sans-serif;
    line-height: 1.6;
    color: #333;
    overflow-x: hidden;
    background: #0d1b2a;
  }

  .section {
    padding: 5rem 0;
    position: relative;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-title {
    font-size: 3rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 3rem;
    background: linear-gradient(135deg, #d4af37, #f4d03f);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: 1px;
    position: relative;
  }

  .section-title::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 3px;
    background: linear-gradient(90deg, #d4af37, #f4d03f);
    border-radius: 2px;
    display: block;
  }

  /* Floating elements */
  .floating-element {
    position: absolute;
    font-size: 2rem;
    color: rgba(212, 175, 55, 0.1);
    animation: float 6s ease-in-out infinite;
    pointer-events: none;
    z-index: 0;
    transition: transform 0.1s ease-out;
  }

  .floating-icon-1 {
    top: 10%;
    left: 10%;
    animation-delay: 0s;
  }

  .floating-icon-2 {
    top: 20%;
    right: 15%;
    animation-delay: 2s;
  }

  .floating-icon-3 {
    bottom: 20%;
    left: 20%;
    animation-delay: 4s;
  }

  /* Parallax sections */
  .section {
    transition: transform 0.1s ease-out;
    will-change: transform;
  }

  /* Enhanced parallax background elements */
  .parallax-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 120%;
    background: radial-gradient(circle at 30% 40%, rgba(212, 175, 55, 0.02) 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
    transition: transform 0.1s ease-out;
  }

  @keyframes float {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(5deg);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(50px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .section {
      padding: 3rem 0;
    }

    .container {
      padding: 0 1rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .floating-element {
      display: none;
    }
  }
`;
