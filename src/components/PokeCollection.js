import React from "react";
import PokeCard from './PokeCard'

function PokeCollection({pokes}) {
  // Your code here
  return (
        {pokes.map((poke) => <PokeCard key={pokes.id} poke={poke} />)}
        )
  }