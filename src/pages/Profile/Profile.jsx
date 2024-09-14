import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../Context/UserContext";
import {
  ProfileActions,
  ProfileAvatar,
  ProfileBackground,
  ProfileContainer,
  ProfileHeader,
  ProfileIconAdd,
  ProfileIconEdit,
  ProfileNews,
  ProfileUser,
} from "./ProfileStyled";
import { Link } from "react-router-dom";
import { getAllNewsByUser } from "../../services/newsServices";
import { Card } from "../../components/Cards/Card";

export function Profile() {
  const { user } = useContext(UserContext);
  
  const [news, setNews] = useState([]);
  
  async function findAllNewsByUser() {
    const response = await getAllNewsByUser();
    setNews(response.data.results);
  }

  useEffect(() => {
    findAllNewsByUser();
  }, []);
  
  console.log(user);
  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileIconEdit>
          <Link to={`/manage-user/edit/${user._id}`}>
            <i className="bi bi-pencil-square">Perfil</i>
          </Link>
        </ProfileIconEdit>

        <ProfileBackground src={user.background} alt="" />

        <ProfileUser>
          <ProfileAvatar src={user.avatar} alt="Foto do usuário" />
          <h2>{user.name}</h2>
          <h3>@{user.username}</h3>
        </ProfileUser>

        <ProfileActions>
          <Link to="/manage-news/add/news">
            <ProfileIconAdd>
              <i className="bi bi-plus-circle"></i>
            </ProfileIconAdd>
          </Link>
        </ProfileActions>
      </ProfileHeader>
      <ProfileNews>
        {news.length === 0 && <h3> Você ainda não criou nenhuma notícia.</h3>}

        {news.map((news) => {
          return (
            <Card
              key={news.id}
              id={news.id}
              title={news.title}
              text={news.text}
              banner={news.banner}
              likes={news.likes}
              comments={news.comments}
              actions={true}
            />
          );
        })}
      </ProfileNews>
    </ProfileContainer>
  );
}
