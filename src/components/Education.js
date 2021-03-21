import React from "react";

function Education(props) {
  const { title, items } = props.info;
  return (
    <section>
      <h2>{title}</h2>
      <p>Образование: {items.univercity}</p>
      <p>Окончание: {items.finished}</p>
    </section>
  );
}

export default Education