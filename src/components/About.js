import { Link } from "react-router-dom";

function About(props) {
  return (
    <div>
      <h1>This is the about page</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus
        pretium nulla. Nulla dui lorem, malesuada vitae est et, condimentum
        sodales ante. Vivamus venenatis ante nunc. In in faucibus mi. Mauris
        egestas velit augue, at iaculis enim rhoncus ac. Fusce vehicula ex in
        mauris luctus fermentum. Vivamus vitae tincidunt metus. Pellentesque
        maximus neque diam, eget vehicula justo feugiat non.
      </p>
      <h2>Meet our campuses</h2>
      <ul>
        {props.cities.map((cityObj) => {
          return (
            <li key={cityObj.link}>
              <Link to={`/about/${cityObj.link}`}>{cityObj.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default About;
