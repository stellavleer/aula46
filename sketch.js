var bg, bgImg;

//AULA 46 - criação de varáveis
var playerP, playerImgP, playerImgA, playerA;

function preload(){

  bgImg = loadImage("assets/bg.png");

  //AULA 46 - INSERÇÃO DO PLAYER
  playerImgP = loadImage("assets/MENINA ANDANDO/MA1.png")

  //AULA 46 - INSERÇÃO DA ANIMAÇÃO
  playerImgA = loadAnimation( 
    "assets/MENINA ANDANDO/MA2.png",
    "assets/MENINA ANDANDO/MA3.png",
    "assets/MENINA ANDANDO/MA4.png"
    )
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2 +250,displayHeight/2,20,20)
  bg.addImage(bgImg)
  bg.scale = 3.5
  
  //AULA 46 - ADICIONANDO PLAYER COM IMAGEM ESTÁTICA
  playerP = createSprite(displayWidth - 1500,displayHeight - 300, 20,20)
  playerP.addImage("stopped",playerImgP)
  playerP.scale= 0.8

  //AULA 46 - ADICIONANDO PLAYER COM ANIMAÇÃO ANIMAÇÃO
  playerA = createSprite(displayWidth - 1500,displayHeight - 300, 20,20)
  playerA.addAnimation("walking",playerImgA)
  playerA.scale= 0.8


  //AULA 46 - INVISIBILIDADE DA ANIMAÇÃO, POIS SÓ APARECE SE O PERSONAGEM ANDA.
   playerA.visible = false

  //AULA 46 - BLOQUEANDO AS PAREDES
 edges = createEdgeSprites()
  
}

function draw() {
  background(0); 
  
  //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
  //AULA 46 - INSERINDO MOVIMENTO
  if(keyDown("LEFT_ARROW")||touches.length>0){

    //AULA 46 - ADICIONANDO MOVIMENTO
   playerP.x = playerP.x - 30
    //AULA 46 - TROCA DE VISIBILIDADE
    playerA.visible = true
    playerP.visible = false
    //AULA 46 - ESPELHAMENTO
    playerA.mirrorX(-1)
    playerP.mirrorX(-1) 
  }else{
    //AULA 46 - TROCA DE VIDIBILIDADE NOVAMENTE
    playerA.visible = false
    playerP.visible = true

    //AULA 46 - ANIMAÇÃO RECEBE A POSIÇÃO DO PLAYER
    playerA.x = playerP.x
    playerA.y = playerP.y
  }

  if(keyDown("RIGHT_ARROW")||touches.length>0){
    //AULA 46 - ADICIONANDO MOVIMENTO
    playerP.x = playerP.x + 30

    //AULA 46 - TROCA DE VISIBILIDADE
    playerA.visible = true
    playerP.visible = false

    //AULA 46 - ESPELHAMENTO
    playerA.mirrorX(1)
    playerP.mirrorX(1) 
    
  }else{
    //AULA 46 - ANIMAÇÃO RECEBE A POSIÇÃO DO PLAYER
    playerA.x = playerP.x
    playerA.y = playerP.y
  }

  if(keyWentDown("space") ){
    //AULA 46 - PLAYER PRINCIPAL RECEBE LIMITE DE PIXELS AO CLICAR NO ESPAÇO
    playerP.y = 600
  }
  //AULA 46 - ANIMAÇÃO RECEBE A POSIÇÃO DO PLAYER
  playerP.velocityY = playerP.velocityY + 1.5

  //AULA 46 - COLISÃO
  playerP.collide(edges)
  

  //AULA 46 - HABILITA A VISUALIZAÇÃO DO JOGO
  drawSprites()

}

//AULA 46 - DECOMPOSIÇÃO DO JOGO
/*
1 - Inserir Personagem
2 - Criar movimentação de: pulo e andar (esquerda/direita)
3 - Espelhamento de movimento
4 - Bloqueio de Paredes da tela
5 - Hospedar no github
*/

//AULA 45 - DECOMPOSIÇÃO DO JOGO
/*
1 - Mudar background
2 - Colocar imagem da natureza
3 - Baixar imagem da natureza suja
4 - Baixar imagem de lixo
5 - Hospedar no github
*/

