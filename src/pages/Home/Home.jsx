import { Card } from "../../components/Cards/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAllNews, getTopNews } from "../../services/newsServices";
import { HomeBody, HomeHeader } from "./HomeStyled";
import { useEffect, useState } from "react";

export default function Home() {
  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState({});

  async function findAllNews() {
    const response = await getAllNews();
    setNews(response.data.results);

    const responseTopNews = await getTopNews();
    setTopNews(responseTopNews.data.news);
  }

  useEffect(() => {
    findAllNews();
  }, []);


  return (
    <>
      <HomeHeader>
        <Card
          top={true}
          title={topNews.title}
          text={topNews.text}
          banner={topNews.banner}
          likes={topNews.likes}
          comments={topNews.comments}
        />
      </HomeHeader>
      <HomeBody>
        {news.map((item) => {
          return (
            <Card
              key={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes}
              comments={item.comments}
            />
          );
        })}
      </HomeBody>
    </>
  );
}
