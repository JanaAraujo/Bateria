document.body.addEventListener('keyup', (event)=>{
  playSound(event.code.toLowerCase() );
});
document.querySelector('.composer button').addEventListener('click', () =>{
  let song = document.querySelector('#input').value;
 if(song !== ''){
   let songArray = song.split('');
   palyComposition(songArray);
 }
});

function playSound(sound){
  let audioElement = document.querySelector(`#s_${sound}`);
  let keyElement = document.querySelector(`div[data-key="${sound}"]`)
  
  if(audioElement){
    audioElement.currentTime=0;//reinicia o som caso clicado novamente
    audioElement.play();
  }
  if(keyElement){
    keyElement.classList.add('active'); //Utiliza uma classe do CSS para alterar a cor do botão
    setTimeout(()=>{
      keyElement.classList.remove('active'); //remove a cor após um certo tempo
    }, 300);
  }


}
function palyComposition(songArray){
  let wait = 0;

  for(let songItem of songArray){ 
    setTimeout(()=>{
      playSound(`key${songItem}`);

    }, wait);
    wait += 250;
  }
}