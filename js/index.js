const btnStore = document.getElementById('store')
const home = document.getElementById('home')
const containerStart = document.getElementById('containerStart')
const contBabiesAndChildren = document.querySelector('.contBabiesAndChildren')
const containerMon = document.querySelector('.containerMon')
const filtros = document.getElementById('filters')



/* Llamando a la función para ocultar el contenedor de Inicio */
btnStore.addEventListener('click', () => {
  hidenStart()
 
})

/* Llamando a la función para mostrar los filtros de la vista bebés y niños */
contBabiesAndChildren.addEventListener('click', () => {
  showStore()
})

/* Llamado para volver al inicio */
home.addEventListener('click', () => {
  containerStart.style = 'display:block';
  contBabiesAndChildren.style = 'display:none';
  containerMon.style = 'display:none';
  filters.style = 'display:none';
})