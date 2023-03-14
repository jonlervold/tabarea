const NullParameter = ({ title, text }) => {
  return (
    <div className={"search-parameter"}>
      <h5>{title}</h5>
      <div className={"null-selector-text"}>{text}</div>
    </div>
  );
};

export default NullParameter;
