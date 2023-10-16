import Header from "../headphones/Header";
import Earphones from "./Earphones";

const EarphonesHome = () => {
  const headerTitle = "earphones";
  return (
    <div>
      <Header title={headerTitle} />
      <Earphones
        title={"string"}
        desc={"string"}
        image={"string"}
        slug={"string"}
      />
    </div>
  );
};

export default EarphonesHome;
