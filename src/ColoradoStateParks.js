import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain"
console.log(RMFunctions.trees)
RMFunctions.wildlife()

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return(
    <>
    <div>
      <MesaVerde />
      </div>
    <h1>Colorado State Parks!</h1>;
    </>
    ) 
}

export default ColoradoStateParks
