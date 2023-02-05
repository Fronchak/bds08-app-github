import './styles.css';

type Props = {
  label: string;
  description: string;
  isLink?: boolean;
}

const UserCardItem = ({ label, description, isLink }: Props) => {

  return (
    <div className="px-1 py-2 card-item">
      <span className="third-color fw-bold">{ label }: </span>
      { isLink ? (<a href={ description } target="_blank">{ description }</a>) : (<span className="third-color">{ description }</span>) }

    </div>
  );
}

export default UserCardItem;
