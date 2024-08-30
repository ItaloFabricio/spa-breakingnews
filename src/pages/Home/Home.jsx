import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { news } from "../../Data";

export default function Home() {
  return (
    <>
      <Navbar />
      {news.map((item, index) => {
        return <Card key={index} news={item}/>;
      })}
    </>
  );
}
