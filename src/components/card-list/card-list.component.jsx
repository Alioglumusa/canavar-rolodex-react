import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ canavarlar }) => (
  <div className="card-list">
    {canavarlar.map((canavar) => {
      return <Card key={canavar.id} canavar={canavar} />;
    })}
  </div>
);

export default CardList;
