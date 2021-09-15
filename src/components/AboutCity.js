function AboutCity(props) {
  console.log(props);

  function renderAboutCity() {
    const result = props.cities.find(
      (cityObj) => cityObj.link === props.match.params.city
    );

    if (result) {
      return (
        <div>
          <h1>{result.title}</h1>
          <p>{result.paragraph}</p>
        </div>
      );
    }

    return <p>Campus not found ):</p>;
  }

  return <div>{renderAboutCity()}</div>;
}

export default AboutCity;
