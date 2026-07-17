const c=document.getElementById("container"),nameEl=document.getElementById("name");
const pts=[];for(let t=0;t<Math.PI*2;t+=0.01){let x=16*Math.sin(t)**3;let y=13*Math.cos(t)-5*Math.cos(2*t)-2*Math.cos(3*t)-Math.cos(4*t);pts.push([x*18,-y*18]);}
const total=1200,els=[];
for(let i=0;i<total;i++){let s=document.createElement("span");s.className="love";s.textContent="I love you";c.appendChild(s);els.push(s);s.style.left=Math.random()*innerWidth+"px";s.style.top=Math.random()*innerHeight+"px";}
function form(){const cx=innerWidth/2,cy=innerHeight/2;els.forEach((e,i)=>{const p=pts[i%pts.length];e.style.left=(cx+p[0])+"px";e.style.top=(cy+p[1])+"px";});setTimeout(()=>nameEl.classList.add("show"),2800);}
setTimeout(form,1200);
window.onresize=form;