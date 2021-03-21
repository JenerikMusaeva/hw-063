import React from "react";

function GeneralInfo(props) {
  const { title, items } = props.info;
  let now = new Date();
  const age = now.getFullYear() - +items.birthYear;

  const salaryHourly = (items.salary / 160).toFixed(1)

  return (
    <section>
      <h2>{title}</h2>
      <p>ФИО: {items.fullName}</p>
      <p>Год рождения: {items.birthYear}</p>
      <p>Возраст: {age}</p>
      <p>Должность: {items.position}</p>
      <p>Желаемая зп: {items.salary}</p>
      <p>Почасовой рейт: {salaryHourly}</p>
    </section>
  );
}

export default GeneralInfo;
