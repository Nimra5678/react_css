import Card from "./Card";
import ThemeBtn from "./Themebtn";

function Home() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold mt-5">Changing Mode</h1>
      <ThemeBtn />
      <Card />
    </div>
  );
}

export default Home;
