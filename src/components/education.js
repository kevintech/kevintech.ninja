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
            <a href="#" target="_blank">Advanced Node.js</a>
            {/* /certifications/pluralsight-advanced-nodejs.pdf */}
            <a href="#" target="_blank">Basics React.js</a>
            {/* /certifications/pluralsight-gs-reactjs.pdf */}
            <a href="#" target="_blank">Practical Design Patterns in
              {/* /certifications/pluralsight-design-patterns-javascript.pdf */}
              Javascript</a>
            <a href="#" target="_blank">Javascript Best Practices</a>
            {/* /certifications/pluralsight-javascript-best-practices.pdf */}
            <a href="#" target="_blank">C# Fundamentals</a>
            {/* /certifications/pluralsight-csharp-fundamentals-vs2015.pdf */}
            <a href="#" target="_blank">Understanding Machine
              {/* /certifications/pluralsight-understanding-machine-learning.pdf */}
              Learning</a>
            <a href="#" target="_blank">Asynchronous Programming in .NET</a>
            {/* /certifications/pluralsight-gs-async-dotnet.pdf */}
            <a href="#" target="_blank">Developer to Architect</a>
            {/* /certifications/pluralsight-developer-architect.pdf */}
            <a href="#" target="_blank">Mastering Flux and Redux</a>
            {/* /certifications/pluralsight-flux-redux.pdf */}
            <a href="#" target="_blank">Building Offline Web Apps with Service
              {/* /certifications/pluralsight-service-worker.pdf */}
              Worker</a>
            <a href="#" target="_blank">Progressive Web App
              {/* /certifications/pluralsight-progressive-web-app-fundamentals.pdf */}
              Fundamentals</a>
            <a href="#" target="_blank">Google Analytics
              {/* /certifications/pluralsight-google-analytics-creative-professionals.pdf */}
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
