import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchNews } from "../../services/newsServices";
import { ContainerResults, SearchNews, TextResults } from "./SearchStyled";
import { Card } from "../../components/Cards/Card";


export function Search() {
  const { title } = useParams(); //hook que vai puxar o titulo que vai vir como parametro
  const [news, setNews] = useState([]);

  async function search() {
    try {
      const newsApi = await searchNews(title);
      setNews(newsApi.data.results);
      console.log("Resposta da API:", newsApi);
      console.log("Dados da API:", newsApi.data);
      console.log("Resultados:", newsApi.data.results);
    } catch (err) {
      setNews([]);
    }
  }

  useEffect(() => {
    search();
  }, [title]);

  return (
    <ContainerResults>
      <TextResults>
        <span>
          {news.length ? `Encontramos ${news.length} ${news.length > 1 ? "resultados" : "resultado"} para` : "Não encontramos resultados para:"}
        </span>
        <h2>{title}</h2>
      </TextResults>
      <SearchNews>
        {news.map((item) => (   
            <Card
              key={item.id}
              id={item.id}
              title={item.title}
              text={item.text}
              banner={item.banner}
              likes={item.likes}
              comments={item.comments}
            />
        ))}
      </SearchNews>
    </ContainerResults>
  );
}
