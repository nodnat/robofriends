import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

/*
function CardList(props) {
	return (
		<>
			{props.robots.map(robot => (
				<div className="" key={robot.id} style={Styles.card}>
					<img
						src={`https://robohash.org/${robot.id}?set=set5`}
						width="150"
						alt="robots"
					/>
					<h4 className="mt-3">{robot.name}</h4>
					<p className="mt-0 text-danger card-text">{robot.email}</p>
				</div>
			))}
		</>
	);
}
*/

export default CardList;
