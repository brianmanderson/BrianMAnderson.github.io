document.addEventListener('DOMContentLoaded',()=>{
  const nav=document.querySelector('.nav');const t=document.querySelector('.nav-toggle');
  if(t){t.addEventListener('click',()=>{nav.classList.toggle('open');t.setAttribute('aria-expanded',nav.classList.contains('open'));});}
  const slides=[...document.querySelectorAll('.hero-slide')];const dots=document.querySelector('.hero-dots');
  if(slides.length>1&&dots){slides.forEach((_,i)=>{const b=document.createElement('button');b.className='dot';b.addEventListener('click',()=>show(i));dots.appendChild(b);});let idx=0;function show(i){idx=i;slides.forEach((s,j)=>s.style.display=(i===j?'grid':'none'));[...dots.querySelectorAll('.dot')].forEach((d,j)=>d.classList.toggle('active',j===i));}function next(){show((idx+1)%slides.length);}show(0);setInterval(next,6000);}
});