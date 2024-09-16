import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getNewsById } from "../../services/newsServices";

export function NewsPage() {
    const { id } = useParams();  // Captura o ID da notícia da URL
    
    const [news, setNews] = useState(null);  // Inicializa com null pois será um único objeto

    // Função para buscar a notícia pelo ID
    async function findNewsById(newsId) {
        try {
            const { data } = await getNewsById(id);
            console.log(data.news.title)
            setNews(data.news);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    }

    // useEffect para chamar a função ao montar o componente
    useEffect(() => {  
        if (id) {
            findNewsById(id);  // Chama a função apenas se o ID estiver disponível
        }
    }, [id]);

    // Renderiza a página da notícia
    return (
        <div>
            {news ? (  // Verifica se os dados da notícia estão disponíveis
                <>
                    <h1>{news.title}</h1>
                    <p>{news.text}</p>
                    <img src={news.banner} alt={news.title} />
                    <p>Autor: {news.userName}</p>
                    <p>Comentários: {news.comments}</p>
                    <p>Likes: {news.likes}</p>
                </>
            ) : (
                <p>Loading...</p>  // Exibe um indicador de carregamento enquanto os dados são buscados
            )}
        </div>
    );
}
