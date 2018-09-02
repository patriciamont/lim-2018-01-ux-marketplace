const btnTienda = document.getElementById('tienda')
const home=document.getElementById('home')
const containerInicio = document.getElementById('containerInicio') 
const bebesyniños= document.querySelector('.containerBebesyniños')
const mamas=document.querySelector('.containerMamas')
const filtros=document.getElementById('filtros')

btnTienda.addEventListener('click', () => {
  ocultar() 
   /*  document.getElementById('containerInicio').style = 'display:none'; */
})
bebesyniños.addEventListener('click',()=>{
ocultar2()
})

home.addEventListener('click', ()=>{
  containerInicio.style = 'display:block';
  bebesyniños.style = 'display:none';
    mamas.style = 'display:none';
    filtros.style='display:none';
})