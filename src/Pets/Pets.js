// Import libraries
import React from "react";
import { Route, Switch } from "react-router-dom";
// Import the mock API
import petAPI from "./petAPI";
// Import React Components
import Pet from "./Pet";
import PetList from "./PetList";

class Pets extends React.Component {
  renderPet = props => {
    const { id } = props.match.params;
    // const id = props.match.params.id
    console.log("id: ", id);
    const pet = petAPI.getOne(id);
    if (!pet) {
      return <div> could not find pet </div>;
    } else {
      return <Pet name={pet.name} species={pet.species} age={pet.age}/>;
    }
  };

  renderPetList = () => {
    const pets = petAPI.getAll();
    return <PetList pets={pets} />;
  };

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/pets" render={this.renderPetList} />
          <Route path="/pets/:id" render={this.renderPet} />
        </Switch>
      </div>
    );
  }
}
export default Pets;
