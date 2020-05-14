import React, {useEffect} from "react";
import { connect } from "react-redux";
import { fetchLolChamps } from "../actions/champActions";


const LoLChamps = (props) => {
    useEffect(() => {
        props.fetchLolChamps();
      }, []);
      return (
        <div className="cardContainer">
          <header>
            <h1>League Of Legends Champions</h1>
          </header>
          {props.isFetching && <div>fetching champions...</div>}
          {props.data &&
            props.data.map((card) => {
                console.log(card)
              return (
                <div>
                  <h2>{card.name}</h2>
                  <h3>{card.title}</h3>
                  <p> Attack: {card.info.attack}</p>
                  <p> Defense: {card.info.defense}</p>
                  <p> Magic: {card.info.magic}</p>
                  <p> Difficulty: {card.info.difficulty}</p>
                  <h4>{card.blurb}</h4>
                  <img src={card.image.sprite} />
                </div>
                // {card.map((item) )}
              );
            })}
        </div>
      );
    };

const mapStateToProps = state => {
    console.log(state)
    return {
        isFetching: state.isFetching,
        data: state.data,
        error: state.error
    }
}

export default connect(mapStateToProps, {fetchLolChamps})(LoLChamps)