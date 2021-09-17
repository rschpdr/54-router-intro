import { useState, useEffect } from "react";

function AboutCity(props) {
  const [campusData, setCampusData] = useState({ title: "", paragraph: "" });

  console.log(props);

  useEffect(() => {
    renderAboutCity();
  }, []);

  function renderAboutCity() {
    const result = props.cities.find(
      (cityObj) => cityObj.link === props.match.params.city
    );

    if (result) {
      setCampusData({ ...result });
      console.log(campusData);
    }

    // return <p>Campus not found ):</p>;
  }

  return (
    <div>
      <h1>{campusData.title}</h1>
      <p>{campusData.paragraph}</p>
    </div>
  );
}

export default AboutCity;
