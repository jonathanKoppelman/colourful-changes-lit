import { css } from 'lit-element';

// language=CSS
export const colourfulChangesStyles = css`
  :host {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    font-size: calc(10px + 2vmin);
    color: #1a2b42;
    /*max-width: 680px;*/
    margin: 0 auto;
    text-align: center;
    background-color: #c9b7a5;
  }

  main {
    max-width: 1000px;
  }

  .logo > svg {
    margin-top: 36px;
    animation: app-logo-spin infinite 20s linear;
  }

  @keyframes app-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .app-footer {
    font-size: calc(12px + 0.5vmin);
    align-items: center;
  }

  .app-footer a {
    margin-left: 5px;
  }

  /* Icon */

  .flex-container {
    display: flex;
    max-width: 580px;
    flex-direction: row;
    justify-content: center;
    padding: 0px;
  }
  nav {
    display: inline-block;
    margin: 0 auto;
  }

  .nav {
    padding: 24px;
    list-style: none;
    margin: 8px;
    border: solid 2px #8f5418;
    border-radius: 100%;
    transition: all 0.7s ease-out;
  }

  .nav:hover {
    background-color: grey;
    cursor: pointer;
  }

  li {
    list-style: none;
  }

  .text-li {
    text-align: left;
  }

  li.text.text-li:hover {
    cursor: pointer;
  }

  fa-icon {
    color: #8f5418;
    size: 2em;
  }

  .text {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 20px;
    color: #484848;
  }
  .nav-text {
    color: #8f5418;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 24px;
  }
  .li-text {
    display: inline-block;
    padding-left: 8px;
  }

  .second-section-container {
    margin-top: 24px;
    background-color: #f0eeeb;
    width: 95%;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 15px 15px 15px rgba(143, 137, 121, 0.5);
  }

  /*// TODO: pass the images dynamically*/
  .image-left {
    width: 12rem;
    height: 11rem;
    background: url('../assets/images/main2.jpg');
    border-radius: 50%;
    float: left;
    shape-outside: circle();
    margin: 0px 30px 30px 0;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .image-right {
    width: 12rem;
    height: 11rem;
    background: url('../assets/images/wood.png');
    border-radius: 50%;
    float: right;
    shape-outside: circle();
    margin: 0px 30px 30px 40px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  .image-icon {
    width: 100px;
    height: 80px;
    background: url('../assets/images/woody-cooking-icon.png');
    border-radius: 50%;
    float: right;
    shape-outside: circle();
    margin: 0px 40px 30px 40px;
  }

  .banner-wrap {
    background: url('../assets/images/blank.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    animation: feature-text-anim 0.75s ease-in-out;
    min-height: 300px;
    /*z-index: 100;*/
    /*position: relative;*/
    /*width: 100%;*/
    /*max-width: 956px;*/
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 32px;
    text-align: center;
    text-rendering: optimizeLegibility;
  }

  .groups {
    min-height: 300px;
    background-color: lightpink;
    /*z-index: 100;*/
    /*position: relative;*/
    width: 100%;
    /*max-width: 956px;*/
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 auto;
    padding: 32px;
    text-align: center;
    text-rendering: optimizeLegibility;
  }

  .banner-text {
    color: antiquewhite;
    font-weight: bold;
    font-size: 3rem;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  .banner-welcome {
    color: antiquewhite;
    font-family: sans-serif;
    margin-right: 10em;
  }

  .card-wrapper {
    padding: 12px;
    max-width: 1000px;
  }

  #lang {
    padding: 0px 20px 0px 20px;
    margin: 10px;
  }
`;
