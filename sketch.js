// variaveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro/2;

// velocidade da bolinha
let velocidadeXBolinha = 7;
let velocidadeYBolinha = 7;

// variaveis da raquete
 let xRaquete1 = 07;
 let yRaquete1 = 150;
 let larguraRaquete = 10;
 let alturaRaquete = 100;
 let colidiu = false;
 
 // variaveis do oponente

 let xOponente = 585;
 let yOponente = 150;
 let yVelocidadeOponente;

// variaveis placar

 let pontosOponente= 0;
 let meusPontos= 0;

// sons do jogo

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload() {
    trilha = loadSound("trilha.mp3");
    ponto = loadSound("ponto.mp3");
    raquetada = loadSound("raquetada.mp3");
}

function setup() {
    createCanvas(600, 400);
    trilha.loop();
  }
    
    
    function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete1, yRaquete1);
  movimentoRaquete1();
  colisaoRaquetesBiblioteca(xRaquete1,yRaquete1);
  mostraRaquete(xOponente,yOponente);
  movimentaRaqueteOponente();
  colisaoRaquetesBiblioteca(xOponente,yOponente);
  incluiPlacar();
  marcaPonto();
  }
  

  function mostraBolinha(){
   circle(xBolinha, yBolinha, diametro);
 
  
  }  

  function movimentaBolinha(){
    
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha
    
  }
  

  function bolinhaNaoFicaPresa(){
      if (XBolinha - raio < 0){
        XBolinha = 23
    }
  }

  function verificaColisaoBorda(){
    
    if (xBolinha > width || xBolinha < 0) {
        velocidadeXBolinha *= -1;
    }
    if (yBolinha > height || yBolinha < 0) {
        velocidadeYBolinha *= -1;
           raquetada.play
    }
     
  }

  function mostraRaquete (x,y){
    
    rect(x, y, larguraRaquete,alturaRaquete);
    raquetada.play
    
  }


   function movimentoRaquete1 (){
     if (keyIsDown(UP_ARROW)){
         yRaquete1 -=10
     }
      if (keyIsDown(DOWN_ARROW)){
           yRaquete1 +=10
      }
   }

    function colisaoRaquetesBiblioteca(x, y) {
    colidiu = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
    }
}

function movimentaRaqueteOponente(){
  velocidadeYOponente = yBolinha - yOponente - alturaRaquete / 2 - 30;
  yOponente += velocidadeYOponente
}

/*
        Ative este comentario tirando as barras e comente o código acima para jogar multiplayer (multiplayer joga com W e s e você com as setinhas)

function movimentaRaqueteOponente(){
 if (keyIsDown(87)){
         yOponente -=10
     }
      if (keyIsDown(83)){
           yOponente +=10
      }
*/

  function incluiPlacar(){
    stroke(255)
    textAlign(CENTER)
    textSize(16)
    fill(color(255, 140, 0));
    rect(150, 10, 40, 20)
    fill(255);
    text(meusPontos, 170, 26);
    fill(color(255, 140, 0));
    rect(450, 10, 40, 20)
    fill(255);
    text(pontosOponente, 470, 26);
  }

 
function marcaPonto(){
  if (xBolinha > 598){
    meusPontos += 1;
    ponto.play()
  }
  if (xBolinha < 5){
    pontosOponente += 1;
  }
}

  

