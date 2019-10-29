import React from 'react';

const Styles = {
  card: {
    width: '250px',
    height: '300px',
    overflow: 'hidden',
    background: '#ffecd2',
    boxShadow: '0 .5rem 1rem rgba(0,0,0,.15)',
    border: '1px solid #fc9f81',	//#dee2e6
    padding: '1rem',
    margin: '0.5rem',
    display: 'inline-block',

    ':hover': {
      border: '50px solid #000',
      cursor: 'pointer',
    }
  }
};

const Card = ({ name, email, id }) => {
  return (
    <div className='' style={Styles.card}>
      <img alt='robots' src={`https://robohash.org/${id}?set=set5&size=150x150`} />
      <div>
        <h4 className="mt-3">{name}</h4>
        <p className="mt-0 text-danger card-text">{email}</p>
      </div>
    </div>
  );
}

/*
function CardList(props) {
  return (
    <div className="" key={robot.id} style={Styles.card}>
      <img
        src={`https://robohash.org/${robot.id}?set=set5`}
        width="150"
        alt="robots"
      />
      <h4 className="mt-3">{robot.name}</h4>
      <p className="mt-0 text-danger card-text">{robot.email}</p>
    </div>
  );
}
*/

export default Card;
