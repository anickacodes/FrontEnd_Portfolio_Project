import StylesList from "../components/StylesList";

const Index = () => {
  return (
    <div
      className="styles-container"
      style={{ backgroundImage: "src/assets/cnl.jpeg" }}
    >
      <h2>
        <em> Styles </em>{" "}
      </h2>
      <section>
        <StylesList />
      </section>
    </div>
  );
};

export default Index;
