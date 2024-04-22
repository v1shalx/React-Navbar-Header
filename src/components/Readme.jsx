import React from 'react';
import './Readme.css'
function Readme() {
  return (
    <div className="Readme">
      <h1>Instructions</h1>
      <ol>
        <li>Install the following packages:</li>
        <code>
          npm install react-router-dom @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons react-bootstrap bootstrap
        </code>
      </ol>
      <h2>In index.js</h2>
      <p>Add the following imports:</p>
      <code>
        import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS import
      </code>
      <br />
      <p>At the bottom of your file, add:</p>
      <code>
        {/* Assuming this is the bottom of the index.js file */}
        <br />
        <em>Developed by Vishal Mahajan</em>
      </code>
    </div>
  );
}

export default Readme;
