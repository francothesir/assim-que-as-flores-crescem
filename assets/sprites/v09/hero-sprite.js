/* Assim que as Flores Crescem — v0.9. Protagonista low-poly vetorial. */
(function () {
'use strict';
const SKIN=['#f5d6ad','#dfaa83','#b87954','#83543e','#4c302a'];
const HAIR=['#382d27','#895436','#e8bc6e','#ab6a67','#d5c8b0','#353f53'];
const CLOTH=['#617d61','#ad7c60','#667b99','#b77794','#a99455','#685989'];
const HATS=['#bca04e','#7a9dc6','#d8ac55','#9570ad','#9d795a'];
function adjust(hex,delta){if(typeof hex!=='string'||!/^#[0-9a-f]{6}$/i.test(hex))return hex;const n=parseInt(hex.slice(1),16);return '#'+[n>>16,(n>>8)&255,n&255].map(v=>Math.max(0,Math.min(255,v+delta)).toString(16).padStart(2,'0')).join('');}
function polygon(c,points,fill){c.fillStyle=fill;c.beginPath();c.moveTo(points[0][0],points[0][1]);for(let j=1;j<points.length;j++)c.lineTo(points[j][0],points[j][1]);c.closePath();c.fill();}
function ellipse(c,x,y,rx,ry,fill){c.fillStyle=fill;c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fill();}
function rect(c,x,y,w,h,fill){c.fillStyle=fill;c.fillRect(x,y,w,h);}
function draw(c,cx,feet,custom={},dir='down',walk=0,zoom=1){
 if(!c||!Number.isFinite(cx)||!Number.isFinite(feet)||!Number.isFinite(zoom))return false;
 const skin=SKIN[(custom.skin??2)%SKIN.length],hair=HAIR[(custom.hair??0)%HAIR.length],suit=CLOTH[(custom.outfit??2)%CLOTH.length];
 const hat=Math.min(4,Math.max(0,Number(custom.hat??2))),side=dir==='left'||dir==='right',back=dir==='up';
 const bob=walk?Math.sin(walk)*.55:0,stride=walk?Math.sin(walk)*2.2:0;
 c.save();c.translate(Math.round(cx),Math.round(feet+bob*zoom));c.scale(zoom,zoom);
 ellipse(c,0,-1,14,3,'#201c1b42');
 polygon(c,[[-12,-27],[-16,-24],[-15,-13],[-9,-11],[-7,-25]],'#74533b');
 polygon(c,[[-16,-23],[-11,-27],[-10,-13],[-15,-12]],'#a77b4b');
 polygon(c,[[9,-27],[13,-24],[13,-14],[8,-12]],'#8a6041');
 for(const [cx0,phase] of [[-6,stride],[6,-stride]]){
  const lift=Math.max(0,phase)*.5;
  polygon(c,[[cx0-4,-13],[cx0+3,-13],[cx0+3,-5-lift],[cx0-4,-5-lift]],adjust(suit,-25));
  polygon(c,[[cx0-4,-6-lift],[cx0+5,-6-lift],[cx0+6,-2-lift],[cx0-5,-2-lift]],'#5e4130');
  polygon(c,[[cx0-5,-6-lift],[cx0+4,-6-lift],[cx0+5,-4-lift],[cx0-5,-4-lift]],'#896348');
 }
 polygon(c,[[-14,-27],[-9,-31],[-5,-22],[-10,-15],[-16,-18]],adjust(skin,-6));
 polygon(c,[[-14,-27],[-9,-30],[-7,-23],[-14,-22]],'#f2e0c2');
 polygon(c,[[9,-30],[14,-27],[16,-18],[10,-15],[5,-22]],adjust(skin,-8));
 polygon(c,[[9,-30],[14,-27],[14,-22],[7,-23]],'#f2e0c2');
 polygon(c,[[-10,-29],[10,-29],[11,-12],[-11,-12]],adjust(suit,-20));
 polygon(c,[[-9,-28],[9,-28],[10,-14],[-10,-14]],suit);
 polygon(c,[[-8,-22],[8,-22],[8,-13],[-8,-13]],adjust(suit,9));
 polygon(c,[[-8,-29],[-4,-29],[-2,-20],[-7,-20]],adjust(suit,-11));
 polygon(c,[[4,-29],[8,-29],[7,-20],[2,-20]],adjust(suit,-11));
 rect(c,-6,-19,12,5,adjust(suit,-12));rect(c,-5,-18,10,1,adjust(suit,20));
 ellipse(c,-7,-23,1.65,1.55,'#dfb862');ellipse(c,7,-23,1.65,1.55,'#dfb862');
 polygon(c,[[-9,-29],[0,-25],[9,-29],[3,-21],[-3,-21]],'#b94835');
 polygon(c,[[-7,-29],[0,-26],[7,-29],[0,-24]],'#ea6650');
 if(back){
   polygon(c,[[-8,-33],[8,-33],[9,-20],[-9,-20]],'#75523c');
   polygon(c,[[-7,-32],[7,-32],[7,-22],[-7,-22]],'#a7774c');rect(c,-2,-29,4,3,'#ebc46e');
 }
 ellipse(c,0,-34,13,11,'#362721');
 polygon(c,[[-12,-38],[-5,-44],[7,-43],[13,-38],[12,-28],[5,-24],[-5,-24],[-13,-29]],adjust(skin,-14));
 polygon(c,[[-12,-38],[-7,-42],[7,-41],[12,-36],[10,-29],[3,-26],[-5,-26],[-12,-31]],skin);
 polygon(c,[[1,-36],[9,-38],[9,-29],[4,-26]],adjust(skin,7));
 if(side){
   ellipse(c,dir==='left'?9:-9,-33,2.6,3.7,adjust(skin,-12));
   ellipse(c,dir==='left'?-4:4,-35,3.3,4.6,'#fff5e5');
   ellipse(c,dir==='left'?-5:5,-35,1.5,3,'#272325');
   ellipse(c,dir==='left'?-2:2,-30,2,1,'#ce8679');
 }else if(!back){
   ellipse(c,-5,-35,3.3,4.6,'#fff9ea');ellipse(c,5,-35,3.3,4.6,'#fff9ea');
   ellipse(c,-4.6,-34.8,1.65,2.9,'#252123');ellipse(c,5.4,-34.8,1.65,2.9,'#252123');
   rect(c,-4.8,-37,1,1.2,'#f7f7f2');rect(c,5.2,-37,1,1.2,'#f7f7f2');
   ellipse(c,-9,-29,2,1,'#d58f88');ellipse(c,9,-29,2,1,'#d58f88');rect(c,-1,-28,3,1,'#8f5547');
 }
 polygon(c,[[-12,-39],[-10,-43],[-4,-44],[0,-38],[5,-44],[11,-42],[13,-37],[7,-38],[3,-33],[-1,-38],[-7,-35]],hair);
 polygon(c,[[-12,-42],[-8,-45],[-4,-42],[-5,-37],[-12,-37]],adjust(hair,-18));
 if(custom.hairStyle===1){ellipse(c,-12,-36,3.3,4.5,hair);ellipse(c,12,-36,3.3,4.5,hair)}
 if(custom.hairStyle===2){rect(c,-13,-36,4,11,hair);rect(c,9,-36,4,11,hair)}
 if(custom.hairStyle===3){rect(c,-13,-37,3,14,hair);rect(c,10,-37,3,14,hair)}
 if(hat===1){
   polygon(c,[[-13,-42],[-9,-46],[8,-46],[13,-40],[9,-38],[-12,-38]],HATS[1]);
   polygon(c,[[-15,-39],[13,-39],[18,-36],[0,-36]],adjust(HATS[1],-18));
 }else if(hat===2){
   polygon(c,[[-12,-42],[-7,-49],[8,-49],[13,-41],[11,-38],[-12,-38]],'#deb568');
   polygon(c,[[-7,-49],[8,-49],[11,-42],[-10,-42]],'#efc675');
   polygon(c,[[-11,-42],[11,-42],[11,-39],[-11,-39]],'#73503d');
   polygon(c,[[-20,-39],[-11,-43],[12,-43],[20,-39],[17,-36],[-17,-36]],'#d4a35b');
   polygon(c,[[-19,-39],[-12,-41],[13,-41],[19,-39],[14,-38],[-16,-38]],'#f6ce80');
   polygon(c,[[3,-49],[8,-49],[11,-43],[7,-43]],'#c48a42');
 }else if(hat===3){
   polygon(c,[[-13,-44],[-8,-49],[8,-49],[13,-44],[12,-37],[-12,-37]],HATS[3]);
   rect(c,-13,-40,26,3,adjust(HATS[3],-24));
 }else if(hat===4){
   polygon(c,[[-15,-43],[-10,-48],[10,-48],[15,-43],[14,-27],[10,-31],[10,-41],[-10,-41],[-10,-31],[-14,-27]],HATS[4]);
 }
 c.restore();return true;
}
window.FloresHeroV09={draw,version:'0.9'};
})();