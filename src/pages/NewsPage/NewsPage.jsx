import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getNewsById } from "../../services/newsServices";
import { Comments, NewsAutor, NewsComment, NewsContainer, NewsContent, NewsText } from "./NewsPageStyled";
import { getUserById } from "../../services/userServices";

export function NewsPage() {
  const { id } = useParams(); // Captura o ID da notícia da URL

  const [news, setNews] = useState(null); // Inicializa com null pois será um único objeto
  const [commentsWithUsernames, setCommentsWithUsernames] = useState([]); // Para armazenar comentários com nomes dos usuários
  
  
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

  async function findUserByIdComment(id) {
    try {
      const { data } = await getNewsById(id);
      const { comments } = data.news;

      // Variável temporária para armazenar os comentários com os nomes dos usuários
      const updatedComments = [];

      for (const comment of comments) {
        const userId = comment.userId;

        if (userId) {
          try {
            const userResponse = await getUserById(userId);
            const userData = userResponse.data;

            if (userData) {
              // Adiciona o comentário com o nome do usuário
              updatedComments.push({
                ...comment, // Mantém as informações do comentário original
                userName: userData.name, // Adiciona o nome do usuário
              });
            }
          } catch (error) {
            console.log(`Erro ao buscar o usuário ${userId}:`, error);
          }
        }
      }

      // Atualiza o estado com os comentários e nomes dos usuários
      setCommentsWithUsernames(updatedComments);
    } catch (error) {
      console.log("Erro ao buscar usuário:", error);
    }
  }

  // useEffect para chamar a função ao montar o componente
  useEffect(() => {
    if (id) {
      findNewsById(id); // Chama a função apenas se o ID estiver disponível
      findUserByIdComment(id);
    }
  }, [id]);

  // Renderiza a página da notícia
  return (
    <NewsContainer>
      <NewsContent>
        {news ? ( // Verifica se os dados da notícia estão disponíveis
          <>
            <h1>{news.title}</h1>
            <NewsAutor>
              <img src={news.userAvatar} alt="" />
              <div>
                <div className="autorName">
                  <span>Por</span>
                  <Link to={`/profile/`}><p>{news.name}</p></Link>
                </div>
                <div className="dateCreated">
                  <span>Publicado em</span>
                  <p>{new Date(news.createdAt).toLocaleDateString("pt-BR")}</p>
                </div>
              </div>
            </NewsAutor>
            <img src={news.banner} alt={news.title} />
            <NewsText>
              <p>{news.text}</p>
            </NewsText>
            <NewsComment>
              <div>
                <h2>Comentários</h2>
                <Comments>
                  {Array.isArray(commentsWithUsernames) && commentsWithUsernames.length > 0 ? (
                    commentsWithUsernames.map((commentObj, index) => (
                      <div key={index}>
                        <p>{commentObj.comment?.comment || "Comentário inválido"}</p>
                        <p>Autor: {commentObj.userName || "Desconhecido"}</p> {/* Exibe o nome do usuário */}
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
