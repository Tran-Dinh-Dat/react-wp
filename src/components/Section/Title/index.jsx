function SectionTitle(props) {
  return (
    <>
      <h2 className={`c-title-main ${props.style}`}>{props.title}</h2>
    </>
  );
}

export default SectionTitle;
