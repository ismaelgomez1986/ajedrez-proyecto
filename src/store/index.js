import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pieces: [{
      name: "Reina",
      move: "La dama se mueve en línea recta por las filas, columnas y diagonales en el tablero. No puede saltar a sus propias piezas o las adversarias y captura tomando el escaque ocupado por el escaque adversario.",
      image: "https://media.istockphoto.com/photos/white-queen-chess-piece-picture-id882999104?k=20&m=882999104&s=170667a&w=0&h=uQtUadcyGTJZQBQh5IahCrWkAayUObq5m1YaPBlW6v0="
  },
  {
      name: "Rey",
      move: "El Rey sólo puede avanzar una casilla en cualquier dirección (arriba, abajo, izquierda, derecha o diagonal), a excepción de aquellos lugares en los que se sienta amenazado por otra pieza, ya que sería jaque.",
      image: "https://static.turbosquid.com/Preview/000197/728/NR/pieces-chess-3d-model_D.jpg"
  },
  {
      name: "Torre",
      move: "Se mueve en líneas rectas en las columnas y filas del tablero no pudiendo, sin embargo, saltar piezas adversarias o aliadas y captura al ocupar el escaque dejado por el oponente.",
      image: "https://preview.free3d.com/img/2017/04/2279464396147132060/nqov1zti-900.jpg"
  },
  {
      name: "Alfil",
      move: "Se mueve en diagonal, no puede saltar piezas intervinientes, y captura tomando el lugar ocupado por la pieza adversaria. Debido a las características de su movimiento, tiene la deficiencia de la debilidad del color porque su movimiento queda limitado al color del escaque en el que se inicia la partida.",
      image: "https://previews.123rf.com/images/gelpi/gelpi1911/gelpi191100884/135767450-obispo-marr%C3%B3n-pieza-de-ajedrez-aislado-sobre-un-fondo-blanco-.jpg"
  },
  {
      name: "Caballo",
      move: "El caballo es una pieza menor del ajedrez occidental de un valor aproximado de tres peones. Tiene un movimiento semejante a una 'L' y, a diferencia de otras piezas, puede saltar piezas intermedias una a la vez. Captura tomando el escaque ocupado por la pieza adversaria.",
      image: "https://static.turbosquid.com/Preview/2019/01/30__10_09_07/marble_02.jpeg0F30010D-0801-41E3-AC3F-3ECDAD6AF0FCLarge.jpg"
  },
  {
      name: "Peón",
      move: "El peón se mueve verticalmente por la columna en la que se encuentra, sin poder retroceder. En el primer movimiento, desde el punto inicial, pueden avanzar dos escaques y, a partir de allí, de uno en uno. Para que un peón pueda capturar la pieza debe moverse de su lugar inicial inmediatamente en la fila en diagonal.",
      image: "https://static.turbosquid.com/Preview/001325/887/HW/_600.jpg"
  }
]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  plugins: [createPersistedState()],
})
