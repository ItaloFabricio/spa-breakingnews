import { Link } from "react-router-dom";
import { TextLimit } from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardFooter, CardHeader, Span } from "./CardStyled";

export function Card({ title, text, banner, likes, comments, top, actions = false, id }) {
  return (
    <CardContainer top={top} banner={banner}>
      <CardBody top={top}>
        <div>
          <CardHeader top={top}>
            {actions && (
              <Span>
                <Link to={`/manage-news/edit/${id}`}>
                  <i className="bi bi-pencil-square"></i>
                </Link>
                <Link to={`/manage-news/delete/${id}`}>
                  <i className="bi bi-trash3"></i>
                </Link>
              </Span>
              
            )}
            
            
            <TextLimit text={title} limit={60} as="h2" />
            <TextLimit text={text} limit={120} />
          </CardHeader>

          <CardFooter top={top}>
            <section top={top}>
              <i className="bi bi-hand-thumbs-up"></i>
              <span>{likes?.length}</span>
            </section>

            <section top={top}>
              <i className="bi bi-chat"></i>
              <span >{comments?.length}</span>
            </section>
          </CardFooter>
        </div>

        <img src={banner} alt="Imagem" />
      </CardBody>
    </CardContainer>
  );
}
