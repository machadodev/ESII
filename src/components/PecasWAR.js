function LogicaPecas (rodada, numTerritorios) {
  if (rodada === 1) {
    return numTerritorios
  }
  return numTerritorios === 1 ? numTerritorios : numTerritorios / 2
}
export default LogicaPecas
