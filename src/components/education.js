import React from "react"
import styles from "./education.css";

function Education() {
  return (
    <div>
      <h2>Education</h2>
      <ul className='education'>
        <li>
          <span className='education__title'>
            Pluralsight Certificates Completed
          </span>
          <p className='education__certificates'>
            <a href="/certifications/pluralsight-advanced-nodejs.pdf" target="_blank">Advanced Node.js</a>
            <a href="/certifications/pluralsight-gs-reactjs.pdf" target="_blank">Basics React.js</a>
            <a href="/certifications/pluralsight-design-patterns-javascript.pdf" target="_blank">Practical Design Patterns in
              Javascript</a>
            <a href="/certifications/pluralsight-javascript-best-practices.pdf" target="_blank">Javascript Best Practices</a>
            <a href="/certifications/pluralsight-csharp-fundamentals-vs2015.pdf" target="_blank">C# Fundamentals</a>
            <a href="/certifications/pluralsight-understanding-machine-learning.pdf" target="_blank">Understanding Machine
              Learning</a>
            <a href="/certifications/pluralsight-gs-async-dotnet.pdf" target="_blank">Asynchronous Programming in .NET</a>
            <a href="/certifications/pluralsight-developer-architect.pdf" target="_blank">Developer to Architect</a>
            <a href="/certifications/pluralsight-flux-redux.pdf" target="_blank">Mastering Flux and Redux</a>
            <a href="/certifications/pluralsight-service-worker.pdf" target="_blank">Building Offline Web Apps with Service
              Worker</a>
            <a href="/certifications/pluralsight-progressive-web-app-fundamentals.pdf" target="_blank">Progressive Web App
              Fundamentals</a>
            <a href="/certifications/pluralsight-google-analytics-creative-professionals.pdf" target="_blank">Google Analytics
              for Creative Professionals</a>
          </p>
        </li>
        <li>
          <span className='education__date'>
            2016
          </span>
          <span className='education__title'>
            Computing and Information Technology
          </span>
          <p className='education__entity'>
            Universidad Mariano Gálvez de Guatemala
          </p>
        </li>
        <li>
          <span className='education__date'>
            2013
          </span>
          <span className='education__title'>
            B.S. Systems Engineering
          </span>
          <p className='education__entity'>
            Universidad Mariano Gálvez de Guatemala
          </p>
        </li>
        <li>
          <span className='education__date'>
            2008
          </span>
          <span className='education__title'>
            Computer Science Degree
          </span>
          <p className='education__entity'>
            Colegio Mixto Centroamericano
          </p>
        </li>
      </ul>
    </div>
  )
}

export default Education
