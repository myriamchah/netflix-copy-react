const Section = ({ title, films }) => {
  return (
    <section>
      <h1>{title}</h1>
      <div>{films}</div>
    </section>
  );
};

export default Section;
