import { GithubUser } from "../../types/vendor/GithubUser";
import UserCardItem from "../UserCardItem";
import './styles.css';

type Props = {
  user: GithubUser
}

const UserCard = ({ user }: Props) => {

  return (
    <div id="user-card-container">
      <img src={ user.avatar_url } className="img-fluid mb-3 mb-lg-0 me-lg-3" />
      <div id="card-content" className="p-2 bg-white">
        <h3 className="primary-color mb-4">Informações</h3>
        <div className="mb-1">
          <UserCardItem label="Perfil" description={ user.url } isLink={true} />
        </div>
        <div className="mb-1">
          <UserCardItem label="Seguidores" description={ user.followers + '' } />
        </div>
        <div className="mb-1">
          <UserCardItem label="Localidade" description={ user.location } />
        </div>
        <div className="mb-1">
          <UserCardItem label="Nome" description={ user.name } />
        </div>
      </div>
    </div>
  );
}

export default UserCard;
