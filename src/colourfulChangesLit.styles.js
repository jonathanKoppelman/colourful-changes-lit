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
    max-width: 580px;;
    margin: 0 auto;
    text-align: center;
    background-color: #c9b7a5;
  }

  main {
    flex-grow: 1;
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

  .nav {
    padding: 24px;
    list-style: none;
    margin: 8px;
    border: solid 1px #2980B9;
    border-radius: 100%;
    transition: all .7s ease-out;
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
    color: #2980B9;
    size: 2em;
  }

  .text {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 20px;
    color: #484848;
  }

  .second-section-container {
    margin-top: 12px;
    background-color: #f0eeeb;
    width: 95%;
    box-sizing: border-box;
    border-radius: 10px;
    box-shadow: 15px 15px 15px rgba(143, 137, 121, 0.5);
  }

  /*// TODO: pass the images dynamically*/
  .image-left {
    width: 300px;
    height: 300px;
    background: url("../assets/images/main2.jpg");
    border-radius: 50%;
    float: left;
    shape-outside: circle();
    margin: 0px 40px 30px 0;

  }


  .image-right {
    width: 300px;
    height: 300px;
    background: url("../assets/images/wood.png");
    border-radius: 50%;
    float: right;
    shape-outside: circle();
    margin: 0px 40px 30px 40px;

  }

  .image-icon {
    width: 100px;
    height: 80px;
    background: url("../assets/images/woody-cooking-icon.png");
    border-radius: 50%;
    float: right;
    shape-outside: circle();
    margin: 0px 40px 30px 40px;
  }

  .card-wrapper{
    padding: 12px;
  }

  #lang {
    padding: 0px 20px 0px 20px;
    margin: 10px;
  }

`;
