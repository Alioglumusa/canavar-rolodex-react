import { Component } from "react";

class CardList extends Component {
  render() {
    console.log(this.props.canavarlar);
    console.log("Kart listesinden işlendi");
    const { canavarlar } = this.props;
    return (
      <div>
        {canavarlar.map((canavar) => {
          const { name, email, id } = canavar;
          return (
            <div className="card-container" key={id}>
              <img
                src={`https://robohash.org/${id}?set=set2&size=180x180}`}
                alt={`canavar ${name}`}
              />
              <h2>{name}</h2>
              <p>{email}</p>
            </div>
          );
        })}
      </div>
    );
  }
}
export default CardList;
