function Pintar(col){
  document.bgColor=col;
}

var boton = document.getElementById("boton");

boton.addEventListener('onMouseOut',function(){
  console.log(Pintar('#fffff'));
});

boton.addEventListener('onMouseOver',function(){
  console.log(Pintar('#ff000'));
});
