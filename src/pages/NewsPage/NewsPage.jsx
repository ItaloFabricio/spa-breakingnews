import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNewsById } from "../../services/newsServices";
import { Comments, NewsComment, NewsContainer, NewsContent } from "./NewsPageStyled";
import { TextLimit } from "../../components/TextLimit/TextLimit";

export function NewsPage() {
  const { id } = useParams(); // Captura o ID da notícia da URL

  const [news, setNews] = useState(null); // Inicializa com null pois será um único objeto

  // Função para buscar a notícia pelo ID
  async function findNewsById(id) {
    try {
      const { data } = await getNewsById(id);
      console.log(data.news.title);
      setNews(data.news);
      console.log(data);
      console.log('Comentários:', data.news.comments);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
  }

  // useEffect para chamar a função ao montar o componente
  useEffect(() => {
    if (id) {
      findNewsById(id); // Chama a função apenas se o ID estiver disponível
    }
  }, []);

  // Renderiza a página da notícia
  return (
    <NewsContainer>
      <NewsContent>
        {news ? ( // Verifica se os dados da notícia estão disponíveis
          <>
            <h1>{news.title}</h1>
            <p>Autor: {news.userName}</p>
            <img src={news.banner} alt={news.title} />
            <p>{news.text}</p>
            <NewsComment>
              <div>
                <h2>Comentários</h2>
                <Comments>
                  {Array.isArray(news.comments) && news.comments.length > 0 ? (
                    news.comments.map((commentObj, index) => (
                      <div key={index}>
                        <p>{commentObj.comment?.comment || 'Comentário inválido'}</p>
                        <p>Autor: {commentObj.userId || 'Desconhecido'}</p>
                      </div>
                    ))
                  ) : (
                    <p>Não há comentários para esta notícia.</p>
                  )}
                </Comments>
              </div>
            </NewsComment>
            <div>
              <h2>Likes:</h2>
              {news.likes.map((like) => (
                <div key={like._id}>
                  <p>
                    Usuário {like.userId} deu like em {like.created}
                  </p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Loading...</p> // Exibe um indicador de carregamento enquanto os dados são buscados
        )}
      </NewsContent>
    </NewsContainer>
  );
}
