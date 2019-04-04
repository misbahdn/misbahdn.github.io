
var target_gambar = document.getElementById('target_gambar');
var array_gambar = document.getElementById('asset').children;
var no_sekarang = 0;

function ganti_gambar(gambar){
  target_gambar.src = gambar.getAttribute('src');
  no_sekarang = gambar.className;
}

function left1(){
  no_sekarang = no_sekarang - 1;
  if(no_sekarang < 0) no_sekarang = 5;

  target_gambar.src = array_gambar[no_sekarang].getAttribute('src');
}

function right1(){
  no_sekarang = no_sekarang + 1;
  if(no_sekarang > 5) no_sekarang = 0;

  target_gambar.src = array_gambar[no_sekarang].getAttribute('src');
}
