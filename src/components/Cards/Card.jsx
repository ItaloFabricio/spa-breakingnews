import { TextLimit } from "../TextLimit/TextLimit";
import { CardBody, CardContainer, CardFooter } from "./CardStyled";

export function Card({title, text, banner, likes, comments}) {
    return(
       <CardContainer>
            <CardBody>
                <div>
                    <h2>{title}</h2>
                    <img src={banner} alt="Imagem" />
                </div>
                <TextLimit text={text} limit={150}/>
            </CardBody>
            
            <CardFooter>
                <div>
                    <i className="bi bi-hand-thumbs-up"></i>
                    <span>{likes}</span>
                </div>
                
               <div>
                    <i className="bi bi-chat"></i>
                    <span>{comments}</span>
               </div>
            </CardFooter>
                

       </CardContainer>
    );
}