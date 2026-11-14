/* AS FLORES CRESCEM · v1.0
 * Personagem modular: 8 camadas transparentes e alinhadas em três direções.
 * As escolhas são independentes: pele, cabelo, olhos, nariz, roupa, sapatos, chapéu, acessórios.
 * Arquivos WebP com transparência verdadeira; versão vetorial editável em source-svg.
 */
(function(){'use strict';
 const BASE='./assets/characters/v10/';
 const options={"version":"1.0","logical_cell":[192,256],"cell":[384,512],"directions":["down","right","up"],"layers":{"body":{"count":7,"cols":7,"rows":1,"cell":[384,512],"paths":{"down":"atlases/body/down.webp","right":"atlases/body/right.webp","up":"atlases/body/up.webp"}},"eyes":{"count":6,"cols":6,"rows":1,"cell":[384,512],"paths":{"down":"atlases/eyes/down.webp","right":"atlases/eyes/right.webp","up":"atlases/eyes/up.webp"}},"nose":{"count":6,"cols":6,"rows":1,"cell":[384,512],"paths":{"down":"atlases/nose/down.webp","right":"atlases/nose/right.webp","up":"atlases/nose/up.webp"}},"hair":{"count":56,"cols":8,"rows":7,"cell":[384,512],"paths":{"down":"atlases/hair/down.webp","right":"atlases/hair/right.webp","up":"atlases/hair/up.webp"}},"outfit":{"count":48,"cols":8,"rows":6,"cell":[384,512],"paths":{"down":"atlases/outfit/down.webp","right":"atlases/outfit/right.webp","up":"atlases/outfit/up.webp"}},"hat":{"count":8,"cols":8,"rows":1,"cell":[384,512],"paths":{"down":"atlases/hat/down.webp","right":"atlases/hat/right.webp","up":"atlases/hat/up.webp"}},"shoes":{"count":5,"cols":5,"rows":1,"cell":[384,512],"paths":{"down":"atlases/shoes/down.webp","right":"atlases/shoes/right.webp","up":"atlases/shoes/up.webp"}},"accessory":{"count":5,"cols":5,"rows":1,"cell":[384,512],"paths":{"down":"atlases/accessory/down.webp","right":"atlases/accessory/right.webp","up":"atlases/accessory/up.webp"}}},"palette":{"skin":["#f5d6ad","#dfaa83","#b87954","#83543e","#4c302a","#ffe6d2","#a77352"],"hair":["#382d27","#895436","#e8bc6e","#ab6a67","#d5c8b0","#353f53","#b7b5b6"],"outfit":["#617d61","#ad7c60","#667b99","#b77794","#a99455","#685989"],"hat":["#d5ad55","#c76c50","#617c9e","#8e719c","#608262","#5f534b"]},"styles":{"hair":["Espetado","Lateral","Cacheado","Franja reta","Longo","Tranças","Rabo de cavalo","Punk"],"eyes":["Oval","Grandes","Sonolentos","Felizes","Determinados","Clássicos"],"nose":["Sem nariz","Pequeno","Triangular","Arredondado","Longo","Pontudo"],"outfit":["Jardineira","Explorador","Poncho","Moletom","Jaleco","Armadura leve","Túnica","Social"],"hat":["Sem chapéu","Palha","Boné","Gorro","Aventureiro","Capuz","Coroa de folhas","Mago"],"shoes":["Couro","Pretos","Areia","Azuis","Claros"],"accessory":["Nenhum","Sardas","Óculos","Lenço","Bolsa"]}};
 const images={};
 let ready=0,broken=0,total=0;
 const dirs=['down','right','up'];
 for(const [layer,meta] of Object.entries(options.layers)){
   images[layer]={};
   for(const dir of dirs){
     const im=new Image();++total;
     im.addEventListener('load',()=>{++ready;if(ready===total) document.dispatchEvent(new Event('flores-v10-ready'));});
     im.addEventListener('error',()=>{++broken;console.warn('Sprite v10 não carregou:',layer,dir)});
     im.src=BASE+meta.paths[dir];images[layer][dir]=im;
   }
 }
 const max=(v,m)=>Math.max(0,Math.min(m,Number.isFinite(Number(v))?Math.floor(Number(v)):0));
 function selected(custom){
   const hatByLegacy=[0,2,1,3,5,4,6,7],
         styleByLegacy=[0,2,4,5,1,3,6,7];
   const hairStyle=max(custom?.hairStyle,7);
   const hat=max(custom?.hat??0,7);
   return [
     ['body',max(custom?.skin??2,6)],
     ['shoes',max(custom?.shoes??0,4)],
     ['outfit',max(custom?.outfitStyle??0,7)*6+max(custom?.outfit??0,5)],
     ['eyes',max(custom?.eyes??1,5)],
     ['nose',max(custom?.nose??1,5)],
     ['hair',styleByLegacy[hairStyle]*7+max(custom?.hair??0,6)],
     ['hat',hatByLegacy[hat]],
     ['accessory',max(custom?.accessory??3,4)]
   ];
 }
 function loaded(im){return im?.complete&&im.naturalWidth>0&&im.naturalHeight>0}
 function draw(cv,cx,feet,custom,dir='down',walk=0,zoom=2){
  if(!cv||!custom)return false;
  let d=dir==='up'?'up':dir==='right'||dir==='left'?'right':'down';
  const list=selected(custom);
  if(!list.every(([layer])=>loaded(images[layer][d])))return false;
  const w=40*zoom,h=53*zoom;
  const bob=walk?Math.sin(walk)*.37*zoom:0;
  const mir=dir==='left';
  cv.save();cv.translate(cx,feet+bob);if(mir)cv.scale(-1,1);cv.imageSmoothingEnabled=true;cv.imageSmoothingQuality='high';
  // Fonte de luz implícita e chão com sombra separada dos sprites transparentes.
  cv.fillStyle='rgba(28,24,20,.20)';cv.beginPath();cv.ellipse(0,-1,14*zoom,2.5*zoom,0,0,Math.PI*2);cv.fill();
  for(const [layer,index] of list){
   const m=options.layers[layer],im=images[layer][d],col=index%m.cols,row=Math.floor(index/m.cols);
   cv.drawImage(im,col*m.cell[0],row*m.cell[1],m.cell[0],m.cell[1],-w/2,-h,w,h);
  }
  cv.restore();return true;
 }
 window.FloresCharacterV10={draw,selected,version:'1.0',manifest:options,get stats(){return {ready,total,broken}},isReady:()=>ready===total};
})();
