
if('scrollRestoration' in history) history.scrollRestoration = 'manual';

/* ── PHOTO COLLECTION JS ── */
function switchTab(el, id) {
  document.querySelectorAll('.pcol-tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.pcol-panel').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('panel-' + id).classList.add('active');
}

function updateCollection(cat, filled, total) {
  const pct = (filled / total) * 100;
  const levels = ['Undiscovered','Beginner','Getting Warm','In Progress','Almost There','So Close','Complete'];
  const lv = filled;
  if (document.getElementById('xp-' + cat)) {
    document.getElementById('xp-' + cat).style.width = pct + '%';
    document.getElementById('xl-' + cat).textContent = filled + ' / ' + total + ' XP';
    document.getElementById('lv-' + cat).textContent = 'LV ' + lv;
    document.getElementById('tc-' + cat).textContent = filled + '/' + total;
    if (filled === total) {
      document.getElementById('done-' + cat).classList.add('show');
    }
  }
}
// init with zeros (update when photos added)
updateCollection('travel', 0, 6);
updateCollection('cats', 0, 6);
updateCollection('art', 0, 6);


/* ── DATA ── */
const CS_DATA = {
  quartic:{co:'Quartic.ai',role:'Product Designer II',period:'May 2024 – Present',domain:'Enterprise AI',pip:'#2563EB',thumb:'th-q',initial:'Q.',
    headline:'AI analytics for people who\'ve never used an AI tool',
    context:'Quartic builds decision-intelligence software for manufacturing plants. The products are powerful — but they were built by data scientists, for data scientists, not for the plant operators who actually needed to use them.',
    problem:'Plant operators at Fortune 500 manufacturers were being handed AI-powered dashboards they couldn\'t interpret without training sessions they didn\'t have time for. The software existed. The adoption didn\'t.',
    approach:['Shadowed operators on the factory floor to understand their actual workflow — what they needed to know, when, and in what form, not what the algorithm could technically surface.','Worked directly with ML engineers to understand what the models were detecting, then designed the simplest possible representation of that signal: one clear alert, not a wall of data.','Built Quartic\'s first design system — components, tokens, and handoff documentation — to bring consistency across 15+ product modules and make future design-to-dev much faster.'],
    results:['50K+ users across Fortune 500 clients','$2M+ in deals influenced by design work','40% reduction in design-to-dev handoff time','No training required for core operator workflows'],
    tags:['Design Systems','ML Interface Design','Data Visualization','Predictive Maintenance','Enterprise AI']},
  shelfpay:{co:'Shelfpay',role:'Founding Product Designer',period:'Dec 2022 – Jun 2023',domain:'Fintech · YC S22',pip:'#4F7E83',thumb:'th-s',initial:'S.',
    headline:'Building a group-payments product from nothing',
    context:'Shelfpay (YC S22) was building a group-payments app. I joined as the first and only designer — responsible for everything from the first wireframe to the font on the launch screen.',
    problem:'Group payments sound simple until you try to design them. Multiple payers, multiple payees, partial payments, reminders, edge cases everywhere. Most apps solve splitting. Nobody had properly solved settling.',
    approach:['Built and tested 15+ prototypes to work through every edge case of the group payment flow before committing to any direction — killing ideas fast is not failure, it\'s how you find the right one.','Designed a pooled-wallet model that put settling at the centre of the product, not splitting — a subtle reframe that changed the entire UX logic.','Built the design system and brand identity from scratch: color, typography, components, design language, across 100+ screens, with tokens and handoff documentation for the engineering team.'],
    results:['80% day-1 retention','0 to 5,000 users in six months','60% lift in payment completion','4.7/5 user satisfaction across tests'],
    tags:['0→1 Product Design','Design System','Brand Identity','Fintech UX','Group Payments']},
  hilabs:{co:'HiLabs',role:'Product Designer I',period:'Jun 2023 – Apr 2024',domain:'Health-tech',pip:'#059669',thumb:'th-h',initial:'H.',
    headline:'Healthcare data-quality tools that actually work for providers',
    context:'HiLabs builds data-quality software for the US healthcare market — tools that ensure provider records are accurate, current, and usable. The product was technically strong but hadn\'t been designed with its actual users in mind.',
    problem:'Healthcare providers were using tools that didn\'t map to how clinical work actually happens. The result was low adoption, workarounds, and data entry errors that compounded the very problems the software was meant to fix.',
    approach:['Ran 30+ interviews with healthcare providers across specialties to understand real clinical workflows — not what stakeholders assumed they were. The gap was significant.','Rebuilt the information architecture from the ground up, starting with what providers actually needed to accomplish, not what the system\'s data model exposed to the interface.','Implemented WCAG 2.1 AA accessibility standards across every design — built in from the start as a baseline, not retrofitted at the end as a compliance checkbox.'],
    results:['10K+ healthcare providers served','WCAG 2.1 AA across all designs','30+ user interviews conducted','US healthcare data market coverage'],
    tags:['Healthcare UX','User Research','Accessibility','Dashboard Design','Information Architecture']},
  redrop:{co:'Redrop',role:'Product Design',period:'2023',domain:'Health-tech',pip:'#E11D48',thumb:'th-r',initial:'R.',
    headline:'Making a clinical domain intuitive for first-time users',
    context:'Redrop is a health-tech app targeting a specific clinical workflow. The challenge was the same one that runs through all my work: a complex domain, users arriving with no prior context, and a product that had to just work without instructions.',
    problem:'Clinical domains carry enormous cognitive load — terminology, workflows, and edge cases that are second-nature to practitioners and opaque to everyone else. The app needed to serve people who arrived without a manual and without training.',
    approach:['Mapped the core user journeys before opening Figma — understanding what the user needed to accomplish, in what order, and where complexity could be hidden without losing function.','Designed progressive disclosure into the information architecture: simple, obvious surface for the common case, full depth available for users who needed it.','Tested with real users to validate that the simplification didn\'t break edge-case workflows — clean and simple doesn\'t mean incomplete.'],
    results:['First-time users navigated without training','Clean, accessible clinical interface','Progressive disclosure of full feature depth'],
    tags:['App Design','Information Architecture','Healthcare UX','Progressive Disclosure']},
  venton:{co:'Vent-On',role:'Product Designer',period:'2023',domain:'Mental Health · App Design',pip:'#FFCD29',thumb:'th-v',initial:'V.',
    headline:"A witty, Gen-Z mental health companion for tracking emotions and habits — but with personality.",
    context:"Personal project exploring what happens when a mental health app is designed around emotional approachability rather than clinical utility.",
    problem:"Most mental health apps are technically sound but feel sterile, clinical, and judgmental. Users stop returning not from lack of need — but because the tone feels inhuman.",
    approach:['Ran surveys and interviews to map the emotional gap between need and adoption','Used MoSCoW to prioritise personality as a non-negotiable feature, not an afterthought','Designed with Neobrutalism as the visual language — bold, warm, anti-clinical'],
    results:['25+ survey responses','6 user interviews','8 hi-fi screens','3 core user flows'],
    tags:['App Design','Mental Health','Neobrutalism','Personal Project']}
};

const CAREERS=[
  {id:'quartic',co:'Quartic.ai',role:'Product Designer II',period:'May 2024 – Present',domain:'Enterprise AI',pip:'#2563EB',color:'#2563EB',start:23,dur:25,current:true,
   desc:'Leading design for enterprise AI products used by 50K+ people at Fortune 500 manufacturers. Built Quartic\'s first design system, cutting handoff time by 40%. Partnered with ML engineers to translate manufacturing algorithms into dashboards that don\'t require training.',
   tags:['Design Systems','ML Interfaces','Data Visualization']},
  {id:'hilabs',co:'HiLabs',role:'Product Designer I',period:'Jun 2023 – Apr 2024',domain:'Health-tech',pip:'#059669',color:'#059669',start:12,dur:10,
   desc:'Designed for 10K+ healthcare providers across the US. Ran 30+ user interviews with clinical staff. WCAG 2.1 AA throughout — accessibility in from the start, not retrofitted.',
   tags:['User Research','Accessibility','Dashboard Design']},
  {id:'shelfpay',co:'Shelfpay',role:'Founding Product Designer',period:'Dec 2022 – Jun 2023',domain:'Fintech · YC S22',pip:'#4F7E83',color:'#4F7E83',start:6,dur:6,
   desc:'First and only designer. Built the product, design system, and brand from scratch across 100+ screens. 80% day-1 retention, 0 to 5K users in six months.',
   tags:['0→1 Product','Design System','Brand Identity']},
  {id:'appsecure',co:'Appsecure',role:'Product Design Intern',period:'Jun – Nov 2022',domain:'Developer Tools',pip:'#D97706',color:'#D97706',start:0,dur:5,
   desc:'Designed a bug-bounty platform for ethical hackers. Shaped vulnerability submission and review flows for a highly technical audience, improving submission success rates by 40%.',
   tags:['Developer Tools','Security UX']}
];
const TOTAL=48;
// Reversed: 2026 on left. Position = (TOTAL - start - dur)/TOTAL
// Year positions (months before Jun 2026): 2026=0, 2025=12, 2024=24, 2023=36, 2022=48
const YEAR_MARKS=[{y:2026,mo:0},{y:2025,mo:12},{y:2024,mo:24},{y:2023,mo:36},{y:2022,mo:48}];

let selectedCareer=null,prevPage='dashboard';

/* ── ROUTING ── */
function go(p){
  document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.ni').forEach(x=>x.classList.toggle('on',x.dataset.p===p));
  document.getElementById('page-'+p).classList.add('active');
  window.scrollTo(0,0);document.documentElement.scrollTop=0;document.body.scrollTop=0;
  document.querySelector('.main').scrollTo(0,0);
  location.hash=p;
  if(p==='dashboard')setTimeout(doCount,120);
  // staggered entrance
  const page=document.getElementById('page-'+p);
  const els=page.querySelectorAll('.card,.metrics-row,.plist,.sec-hd,.career-wrap,.cs-grid,.proc-card,.photos-outer,.nav-cards,.filter-row,.ph,.g2,.sp-wrap,.dna-outer,.dna-leg,.rrow,.soc-row,.wkx-head,.wkx-stats,.wkx-card,.abx-pagehead,.abx-hero,.abx-stats,.abx-two,.abx-gal,.abx-cta,.dsh-sec,.cnx-head,.cnx-hero,.cnx-sec,.cnx-cap,.cnx-close');
  els.forEach((el,i)=>{
    el.style.opacity='0';
    el.style.transform='translateY(10px)';
    el.style.transition='none';
    setTimeout(()=>{
      el.style.transition=`opacity .38s ease ${i*48}ms,transform .38s ease ${i*48}ms`;
      el.style.opacity='1';
      el.style.transform='translateY(0)';
    },16);
  });
}
window.addEventListener('hashchange',()=>{const h=location.hash.slice(1);if(h&&h!=='casestudy')go(h);});
go(location.hash.slice(1)||'dashboard');

/* ── CLOCK ── */
function tick(){
  const ist=new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'}));
  const p=n=>String(n).padStart(2,'0');
  document.getElementById('sbC').textContent=`${p(ist.getHours())}:${p(ist.getMinutes())}`;
  const d=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],m=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  document.getElementById('sbD').textContent=`${d[ist.getDay()]} ${m[ist.getMonth()]} ${ist.getDate()} · IST`;
}
setInterval(tick,1000);tick();

/* ── COUNT-UP ── */
function cUp(el){const t=parseFloat(el.dataset.count),sf=el.dataset.suffix||'';if(!t)return;let n=0;const iv=setInterval(()=>{n+=t/50;if(n>=t){el.textContent=t+sf;clearInterval(iv);}else el.textContent=Math.floor(n)+sf;},900/50);}
function doCount(){document.querySelectorAll('#page-dashboard .mc-val[data-count]').forEach(el=>{if(!el.dataset.done){el.dataset.done=1;cUp(el);}});}
setTimeout(doCount,200);

/* ── GANTT (reversed: 2026 left) ── */
function hexToRgba(hex,a){const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);return`rgba(${r},${g},${b},${a})`;}
function buildGantt(){
  const yrs=document.getElementById('ganttYears'),trk=document.getElementById('ganttTrack'),lbl=document.getElementById('ganttLabels');
  if(!yrs)return;
  YEAR_MARKS.forEach(({y,mo})=>{
    const pct=(mo/TOTAL)*100;
    const el=document.createElement('div');
    el.className='gantt-yr';
    el.style.left=pct+'%';
    el.style.transform=pct===0?'none':'translateX(-50%)';
    if(pct===100){el.style.left='auto';el.style.right='0';el.style.transform='none';}
    el.textContent=y;
    yrs.appendChild(el);
    if(mo>0&&mo<TOTAL){const tk=document.createElement('div');tk.className='gantt-tick';tk.style.left=pct+'%';trk.appendChild(tk);}
  });
  CAREERS.forEach(c=>{
    // reversed: left = (TOTAL - start - dur) / TOTAL
    const leftPct=((TOTAL-c.start-c.dur)/TOTAL)*100;
    const widthPct=(c.dur/TOTAL)*100;
    const wrap=document.createElement('div');
    wrap.className='gbar-wrap';
    wrap.style.cssText=`left:${leftPct}%;width:${widthPct}%;`;
    wrap.dataset.id=c.id;
    const bar=document.createElement('div');
    bar.className='gbar';
    bar.style.cssText=`background:${hexToRgba(c.color,.22)};border:1.5px solid ${hexToRgba(c.color,.5)};`;
    const nm=document.createElement('span');
    nm.className='gbar-name';
    nm.style.color=c.color;
    nm.textContent=c.co;
    bar.appendChild(nm);
    if(c.current){const now=document.createElement('span');now.className='gnow';now.style.background=c.color;bar.appendChild(now);}
    wrap.appendChild(bar);
    wrap.addEventListener('click',()=>selectCareer(c.id,wrap));
    trk.appendChild(wrap);
    // role label below (centered on bar)
    const rl=document.createElement('div');
    rl.className='grl';
    rl.style.left=(leftPct+widthPct/2)+'%';
    rl.textContent=c.role;
    lbl.appendChild(rl);
  });
}
function selectCareer(id,wrap){
  const detail=document.getElementById('careerDetail'),inner=document.getElementById('cdInner');
  const c=CAREERS.find(x=>x.id===id);
  if(!c)return;
  if(selectedCareer===id){
    selectedCareer=null;detail.classList.remove('open');
    document.querySelectorAll('.gbar-wrap').forEach(w=>{w.classList.remove('sel');const b=w.querySelector('.gbar'),cc=CAREERS.find(x=>x.id===w.dataset.id);if(cc)b.style.background=hexToRgba(cc.color,.22);});
    return;
  }
  selectedCareer=id;
  document.querySelectorAll('.gbar-wrap').forEach(w=>{
    const isMe=w.dataset.id===id,cc=CAREERS.find(x=>x.id===w.dataset.id);
    w.classList.toggle('sel',isMe);
    if(cc)w.querySelector('.gbar').style.background=isMe?cc.color:hexToRgba(cc.color,.12);
  });
  inner.innerHTML=`<div class="cd-top"><div class="cd-left"><div class="cd-dom"><span class="cd-pip" style="background:${c.pip};"></span>${c.domain}</div><div class="cd-co">${c.co}${c.current?` <span class="cd-cur"><span style="width:6px;height:6px;border-radius:50%;background:#22C55E;display:inline-block;margin-right:3px;"></span>Current</span>`:''}</div><div class="cd-role">${c.role}</div></div><div class="cd-period">${c.period}</div></div><div class="cd-desc">${c.desc}</div><div class="cd-tags">${c.tags.map(t=>`<span class="cd-tag">${t}</span>`).join('')}</div>`;
  detail.classList.add('open');
}
buildGantt();

/* ── CASE STUDY VIEWER ── */
function openCS(id){
  prevPage=document.querySelector('.ni.on')?.dataset.p||'dashboard';
  const d=CS_DATA[id];if(!d)return;
  const el=document.getElementById('csPageContent');

  if(id==='shelfpay'){
    el.innerHTML=`<div class="spcs">

<!-- ════ HERO ════ -->
<div class="spcs-hero">
  <div class="spcs-hero-l">
    <span class="spcs-domain">Fintech · Y Combinator S22</span>
    <h1 class="spcs-title">Shelfpay</h1>
    <p class="spcs-meta">Founding Product Designer · Dec 2022 – Jun 2023</p>
    <p class="spcs-tagline">Rebuilding how groups handle shared money — in real time.</p>
    <div class="spcs-kpis">
      <div class="spcs-kpi"><div class="spcs-kpi-v">80%</div><div class="spcs-kpi-l">Day-1 retention</div></div>
      <div class="spcs-kpi"><div class="spcs-kpi-v">5K</div><div class="spcs-kpi-l">Users, 6 months</div></div>
      <div class="spcs-kpi"><div class="spcs-kpi-v">60%</div><div class="spcs-kpi-l">Payment completion lift</div></div>
      <div class="spcs-kpi"><div class="spcs-kpi-v">30+</div><div class="spcs-kpi-l">Prototypes tested</div></div>
    </div>
  </div>
  <div class="spcs-hero-r" style="background:#fff;"></div>
</div>

<div class="spcs-body">

<!-- ════ 01 THE BRIEF ════ -->
<div class="spcs-sep"></div>
<div class="spcs-in" style="background:#09090B;padding:48px;">
  <div class="spcs-act"><span class="spcs-act-n">01</span> · THE BRIEF</div>
  <div style="display:grid;grid-template-columns:1fr 0.82fr;gap:56px;align-items:start;margin-top:8px;">
    <div style="position:sticky;top:20px;">
      <h2 class="spcs-h" style="color:white;margin-bottom:18px;">First designer in the door.</h2>
      <p class="spcs-p dark" style="margin-bottom:16px;">Shelfpay (YC S22) had a live product, a clear vision, and a founding team with strong technical conviction. What it didn&rsquo;t have was a designer. I joined to change that.</p>
      <p class="spcs-p dark" style="margin:0;">The mandate from day one was simple and total: own the entire surface of the product, and the brand around it.</p>
      <div style="display:flex;align-items:center;gap:10px;margin-top:24px;flex-wrap:wrap;">
        <span style="font-size:11px;font-weight:700;letter-spacing:.05em;color:#8FB6BA;background:rgba(79,126,131,.16);border:1px solid rgba(143,182,186,.32);border-radius:100px;padding:6px 14px;">Y Combinator S22</span>
        <span style="font-size:12px;color:rgba(255,255,255,.42);">First &amp; only designer</span>
      </div>
    </div>
    <div style="background:#111;border:1px solid #1f1f1f;border-radius:16px;padding:22px 26px;">
      <p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#8FB6BA;margin:0 0 8px;">Everything I owned</p>
      <div style="display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid #1a1a1a;"><span style="color:#8FB6BA;font-size:13px;flex-shrink:0;">&rarr;</span><span style="font-size:13.5px;color:rgba(255,255,255,.82);font-weight:500;">Product Design</span><span style="font-size:11px;color:rgba(255,255,255,.32);margin-left:auto;">app, flows, UI</span></div>
      <div style="display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid #1a1a1a;"><span style="color:#8FB6BA;font-size:13px;flex-shrink:0;">&rarr;</span><span style="font-size:13.5px;color:rgba(255,255,255,.82);font-weight:500;">Design System</span><span style="font-size:11px;color:rgba(255,255,255,.32);margin-left:auto;">tokens, components</span></div>
      <div style="display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid #1a1a1a;"><span style="color:#8FB6BA;font-size:13px;flex-shrink:0;">&rarr;</span><span style="font-size:13.5px;color:rgba(255,255,255,.82);font-weight:500;">Brand Identity</span><span style="font-size:11px;color:rgba(255,255,255,.32);margin-left:auto;">logo, voice, visual</span></div>
      <div style="display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid #1a1a1a;"><span style="color:#8FB6BA;font-size:13px;flex-shrink:0;">&rarr;</span><span style="font-size:13.5px;color:rgba(255,255,255,.82);font-weight:500;">Prototyping</span><span style="font-size:11px;color:rgba(255,255,255,.32);margin-left:auto;">30+ tested builds</span></div>
      <div style="display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid #1a1a1a;"><span style="color:#8FB6BA;font-size:13px;flex-shrink:0;">&rarr;</span><span style="font-size:13.5px;color:rgba(255,255,255,.82);font-weight:500;">User Research</span><span style="font-size:11px;color:rgba(255,255,255,.32);margin-left:auto;">calls, field tests</span></div>
      <div style="display:flex;align-items:center;gap:12px;padding:11px 0;border-bottom:1px solid #1a1a1a;"><span style="color:#8FB6BA;font-size:13px;flex-shrink:0;">&rarr;</span><span style="font-size:13.5px;color:rgba(255,255,255,.82);font-weight:500;">Onboarding</span><span style="font-size:11px;color:rgba(255,255,255,.32);margin-left:auto;">first-run &amp; growth</span></div>
      <div style="display:flex;align-items:center;gap:12px;padding:11px 0;"><span style="color:#8FB6BA;font-size:13px;flex-shrink:0;">&rarr;</span><span style="font-size:13.5px;color:rgba(255,255,255,.82);font-weight:500;">Marketing &amp; Outreach</span><span style="font-size:11px;color:rgba(255,255,255,.32);margin-left:auto;">social, campaigns</span></div>
    </div>
  </div>
</div>

<!-- ════ 02 THE PROBLEM ════ -->
<div class="spcs-sep-light"></div>
<div class="spcs-in" style="background:#fff;padding:48px;">
  <div class="spcs-act light"><span class="spcs-act-n-light">02</span> · THE PROBLEM</div>
  <div style="max-width:700px;margin-bottom:38px;">
    <h2 class="spcs-h" style="color:#09090B;margin-bottom:14px;">The real problem wasn&rsquo;t splitting. It was settling.</h2>
    <p class="spcs-p light">When people live together, travel, or share recurring costs, one person pays and the rest promise to settle. That promise quietly turns into a loop nobody enjoys &mdash; and existing apps were solving the math, not the awkwardness.</p>
  </div>

  <p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#A1A1AA;margin:0 0 16px;">The awkward money loop</p>
  <div style="display:flex;align-items:stretch;gap:0;">
    <div style="flex:1;background:#F1F7F7;border:1.5px solid #D3E3E3;border-radius:14px;padding:18px 12px;text-align:center;"><div style="width:44px;height:44px;border-radius:50%;background:#fff;border:1.5px solid #D3E3E3;display:flex;align-items:center;justify-content:center;font-size:21px;margin:0 auto 10px;">&#128184;</div><p style="font-size:12.5px;font-weight:700;color:#09090B;margin:0 0 3px;">Someone pays</p><p style="font-size:11px;color:#71717A;line-height:1.4;margin:0;">Picks up the whole bill</p></div>
    <div style="width:24px;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#A7CACD;font-size:18px;">&rarr;</div>
    <div style="flex:1;background:#F1F7F7;border:1.5px solid #D3E3E3;border-radius:14px;padding:18px 12px;text-align:center;"><div style="width:44px;height:44px;border-radius:50%;background:#fff;border:1.5px solid #D3E3E3;display:flex;align-items:center;justify-content:center;font-size:21px;margin:0 auto 10px;">&#129309;</div><p style="font-size:12.5px;font-weight:700;color:#09090B;margin:0 0 3px;">&ldquo;I&rsquo;ll settle later&rdquo;</p><p style="font-size:11px;color:#71717A;line-height:1.4;margin:0;">Everyone agrees, easily</p></div>
    <div style="width:24px;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#A7CACD;font-size:18px;">&rarr;</div>
    <div style="flex:1;background:#F1F7F7;border:1.5px solid #D3E3E3;border-radius:14px;padding:18px 12px;text-align:center;"><div style="width:44px;height:44px;border-radius:50%;background:#fff;border:1.5px solid #D3E3E3;display:flex;align-items:center;justify-content:center;font-size:21px;margin:0 auto 10px;">&#128197;</div><p style="font-size:12.5px;font-weight:700;color:#09090B;margin:0 0 3px;">Days slip by</p><p style="font-size:11px;color:#71717A;line-height:1.4;margin:0;">Nobody actually moves</p></div>
    <div style="width:24px;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#A7CACD;font-size:18px;">&rarr;</div>
    <div style="flex:1;background:#F1F7F7;border:1.5px solid #D3E3E3;border-radius:14px;padding:18px 12px;text-align:center;"><div style="width:44px;height:44px;border-radius:50%;background:#fff;border:1.5px solid #D3E3E3;display:flex;align-items:center;justify-content:center;font-size:21px;margin:0 auto 10px;">&#128556;</div><p style="font-size:12.5px;font-weight:700;color:#09090B;margin:0 0 3px;">Now it&rsquo;s awkward</p><p style="font-size:11px;color:#71717A;line-height:1.4;margin:0;">Too weird to bring up</p></div>
    <div style="width:24px;flex-shrink:0;display:flex;align-items:center;justify-content:center;color:#A7CACD;font-size:18px;">&rarr;</div>
    <div style="flex:1;background:#F1F7F7;border:1.5px solid #D3E3E3;border-radius:14px;padding:18px 12px;text-align:center;"><div style="width:44px;height:44px;border-radius:50%;background:#fff;border:1.5px solid #D3E3E3;display:flex;align-items:center;justify-content:center;font-size:21px;margin:0 auto 10px;">&#129296;</div><p style="font-size:12.5px;font-weight:700;color:#09090B;margin:0 0 3px;">So it&rsquo;s dropped</p><p style="font-size:11px;color:#71717A;line-height:1.4;margin:0;">Debt + quiet resentment</p></div>
  </div>
  <div style="display:flex;align-items:center;gap:10px;margin-top:18px;justify-content:center;">
    <span style="font-size:17px;">&#128260;</span>
    <span style="font-size:12.5px;color:#71717A;">Next dinner, next trip &mdash; the same loop starts over.</span>
  </div>

  <div style="background:#4F7E83;border-radius:12px;padding:18px 22px;margin-top:30px;max-width:780px;">
    <p style="font-size:14px;color:#fff;line-height:1.7;margin:0;">The friction wasn&rsquo;t awareness, and it wasn&rsquo;t access to payments. <strong>It was social discomfort.</strong> Solve the awkwardness and the money follows.</p>
  </div>
</div>

<!-- ════ 03 RESEARCH ════ -->
<div class="spcs-sep"></div>
<div class="spcs-in" style="background:#09090B;padding:48px;">
  <div class="spcs-act"><span class="spcs-act-n">03</span> · RESEARCH</div>
  <h2 class="spcs-h" style="color:white;margin-bottom:14px;">The data made it undeniable.</h2>
  <p class="spcs-p dark" style="max-width:680px;margin-bottom:32px;">Surveys and interviews with people who split costs regularly kept returning the same signal: the breakdown happens at repayment, not tracking.</p>
  <div style="display:grid;grid-template-columns:1.25fr 1fr;gap:40px;align-items:center;">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:12px;padding:20px;"><div style="font-size:33px;font-weight:800;letter-spacing:-.04em;color:#8FB6BA;line-height:1;margin-bottom:8px;">67%</div><p style="font-size:12px;color:rgba(255,255,255,.45);line-height:1.5;margin:0;">hesitate to remind friends to pay them back, leaving debts unresolved</p></div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:12px;padding:20px;"><div style="font-size:33px;font-weight:800;letter-spacing:-.04em;color:#8FB6BA;line-height:1;margin-bottom:8px;">&#8377;5K+</div><p style="font-size:12px;color:rgba(255,255,255,.45);line-height:1.5;margin:0;">average unresolved balance for urban millennials sharing a home</p></div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:12px;padding:20px;"><div style="font-size:33px;font-weight:800;letter-spacing:-.04em;color:#8FB6BA;line-height:1;margin-bottom:8px;">1 in 3</div><p style="font-size:12px;color:rgba(255,255,255,.45);line-height:1.5;margin:0;">groups abandon expense apps within two months over repayment awkwardness</p></div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:12px;padding:20px;"><div style="font-size:33px;font-weight:800;letter-spacing:-.04em;color:#8FB6BA;line-height:1;margin-bottom:8px;">85%</div><p style="font-size:12px;color:rgba(255,255,255,.45);line-height:1.5;margin:0;">said simpler repayment would rebuild trust and willingness to split again</p></div>
    </div>
    <div style="border-left:2px solid #4F7E83;padding-left:24px;">
      <p style="font-family:var(--fd);font-style:italic;font-size:22px;line-height:1.45;color:white;margin:0 0 12px;">&ldquo;I&rsquo;d rather lose the &#8377;400 than be the person who keeps asking for it.&rdquo;</p>
      <p style="font-size:12px;color:rgba(255,255,255,.4);margin:0;">&mdash; recurring sentiment across interviews</p>
    </div>
  </div>
</div>

<!-- ════ 04 COMPETITIVE ANALYSIS ════ -->
<div class="spcs-sep"></div>
<div class="spcs-in" style="background:#09090B;padding:48px;">
  <div class="spcs-act"><span class="spcs-act-n">04</span> · COMPETITIVE ANALYSIS</div>
  <div style="display:grid;grid-template-columns:1fr 1.15fr;gap:48px;align-items:start;">
    <div style="position:sticky;top:20px;">
      <h2 class="spcs-h" style="color:white;margin-bottom:14px;">What the market did &mdash; and where it stopped.</h2>
      <p class="spcs-p dark" style="margin-bottom:20px;">Most people already lived in Splitwise, Paytm Split, or WhatsApp Pay. The gap wasn&rsquo;t features &mdash; it was structural. Every tool either logged money or moved it, but none <em>held</em> it as a group.</p>
      <div style="background:#4F7E83;border-radius:12px;padding:18px 20px;">
        <p style="font-size:13.5px;color:#fff;line-height:1.65;margin:0;">Shelfpay was the missing <strong>group-wallet</strong> layer &mdash; groups pre-fund a shared balance and payments auto-settle in real time. No follow-ups. No reminders.</p>
      </div>
    </div>
    <div>
      <table class="spcs-table" style="margin-top:0;">
        <thead><tr><th></th><th>Group Wallet</th><th>Real-time</th><th>UPI</th><th>Flex Split</th><th>Log Only</th></tr></thead>
        <tbody>
          <tr class="spme"><td>Shelf &#10022;</td><td><span class="sptick">&check;</span></td><td><span class="sptick">&check;</span></td><td><span class="sptick">&check;</span></td><td><span class="sptick">&check;</span></td><td><span class="spcross">&times;</span></td></tr>
          <tr><td>Splitwise</td><td><span class="spcross">&times;</span></td><td><span class="spcross">&times;</span></td><td><span class="spcross">&times;</span></td><td><span class="sptick">&check;</span></td><td><span class="sptick">&check;</span></td></tr>
          <tr><td>Paytm Split</td><td><span class="spcross">&times;</span></td><td><span class="sptick">&check;</span></td><td><span class="sptick">&check;</span></td><td><span class="spcross">&times;</span></td><td><span class="spcross">&times;</span></td></tr>
          <tr><td>WhatsApp Pay</td><td><span class="spcross">&times;</span></td><td><span class="sptick">&check;</span></td><td><span class="sptick">&check;</span></td><td><span class="spcross">&times;</span></td><td><span class="spcross">&times;</span></td></tr>
        </tbody>
      </table>
      <p style="font-size:11px;color:rgba(255,255,255,.32);margin:10px 2px 0;line-height:1.5;">Only Shelfpay combined a shared group balance with real-time, UPI-native, flexible settlement &mdash; the structural gap every competitor left open.</p>
    </div>
  </div>
</div>

<!-- ════ 05 ECOSYSTEM ════ -->
<div class="spcs-sep-light"></div>
<div class="spcs-eco-wrap spcs-in">
  <div class="spcs-act light"><span class="spcs-act-n-light">05</span> · THE ECOSYSTEM</div>
  <h2 class="spcs-h" style="color:#09090B;">Designing the ecosystem, not just the interface.</h2>
  <p class="spcs-p light">Before opening Figma, I mapped the full product space. Shelfpay was six distinct workstreams, all owned by one designer. Hover each area.</p>
  <div class="spcs-eco-grid">
    <div class="spcs-eco-cell"><div class="spcs-eco-num">01</div><div class="spcs-eco-name">Core Features</div><div class="spcs-eco-subs"><span class="spcs-eco-sub">Group Wallet</span><span class="spcs-eco-sub">Pool Money</span><span class="spcs-eco-sub">Split Payment</span></div></div>
    <div class="spcs-eco-cell"><div class="spcs-eco-num">02</div><div class="spcs-eco-name">Data & Analytics</div><div class="spcs-eco-subs"><span class="spcs-eco-sub">Mixpanel Integration</span><span class="spcs-eco-sub">Behaviour Tracking</span><span class="spcs-eco-sub">Drop-off Analysis</span></div></div>
    <div class="spcs-eco-cell"><div class="spcs-eco-num">03</div><div class="spcs-eco-name">User Research & Testing</div><div class="spcs-eco-subs"><span class="spcs-eco-sub">Field Testing</span><span class="spcs-eco-sub">Bi-weekly User Calls</span><span class="spcs-eco-sub">Persona Development</span></div></div>
    <div class="spcs-eco-cell"><div class="spcs-eco-num">04</div><div class="spcs-eco-name">Mobile App Design</div><div class="spcs-eco-subs"><span class="spcs-eco-sub">Modern</span><span class="spcs-eco-sub">Easy to Use</span><span class="spcs-eco-sub">Intuitive</span></div></div>
    <div class="spcs-eco-cell"><div class="spcs-eco-num">05</div><div class="spcs-eco-name">Design System</div><div class="spcs-eco-subs"><span class="spcs-eco-sub">Custom UI Components</span><span class="spcs-eco-sub">Brand Colours</span><span class="spcs-eco-sub">Design Tokens</span></div></div>
    <div class="spcs-eco-cell"><div class="spcs-eco-num">06</div><div class="spcs-eco-name">Branding & Marketing</div><div class="spcs-eco-subs"><span class="spcs-eco-sub">Social & Website</span><span class="spcs-eco-sub">Physical Campaigns</span><span class="spcs-eco-sub">User Outreach</span></div></div>
  </div>
</div>

<!-- ════ 06 FINDINGS ════ -->
<div class="spcs-sep"></div>
<div class="spcs-findings-wrap spcs-in">
  <div class="spcs-act"><span class="spcs-act-n">06</span> · WHAT USERS TOLD US</div>
  <h2 class="spcs-h" style="color:white;">Four themes. Every single session.</h2>
  <p class="spcs-p dark" style="margin-bottom:20px;">Through interviews and usability sessions, these patterns were consistent regardless of who we spoke to.</p>
  <div class="spcs-findings-grid">
    <div class="spcs-finding-card spcs-in spcs-in-d1"><div class="spcs-finding-n">01</div><div class="spcs-finding-t">Asking for money back felt uncomfortable</div><div class="spcs-finding-p">The discomfort of the reminder was worse than the money lost — users let it go, and resentment quietly built instead.</div></div>
    <div class="spcs-finding-card spcs-in spcs-in-d2"><div class="spcs-finding-n">02</div><div class="spcs-finding-t">"Expensing" apps rarely led to actual transfers</div><div class="spcs-finding-p">Adding expenses was easy. The final step — actually paying — required someone to break the social tension. It rarely happened.</div></div>
    <div class="spcs-finding-card spcs-in spcs-in-d1"><div class="spcs-finding-n">03</div><div class="spcs-finding-t">Payment flows needed to feel social</div><div class="spcs-finding-p">Users wanted payment to feel like part of the group conversation — private, flexible, immediate. Not a formal financial transaction.</div></div>
    <div class="spcs-finding-card spcs-in spcs-in-d2"><div class="spcs-finding-n">04</div><div class="spcs-finding-t">Tracking wasn't enough — they wanted settlement</div><div class="spcs-finding-p">Seeing who owes what didn't reduce the friction of collecting it. Users wanted the money to move automatically. One step, not a process.</div></div>
  </div>
</div>

<!-- ════ PERSONA ════ -->
<div class="spcs-sep-light"></div>
<div class="spcs-in" style="background:#fff;padding:48px;">
  <div class="spcs-act light"><span style="color:#4F7E83;font-weight:700;">07</span> · USER PERSONA</div>
  <h2 class="spcs-h" style="color:#09090B;margin-bottom:28px;">Who we were really designing for.</h2>
  <div style="display:grid;grid-template-columns:0.85fr 1.4fr;gap:16px;">
    <!-- identity -->
    <div style="background:linear-gradient(160deg,#EDF4F4,#F1F7F7);border:1px solid #D3E3E3;border-radius:16px;padding:28px;display:flex;flex-direction:column;">
      <div style="width:80px;height:80px;border-radius:50%;background:#4F7E83;display:flex;align-items:center;justify-content:center;font-size:30px;font-weight:800;color:#fff;margin-bottom:16px;">R</div>
      <p style="font-size:20px;font-weight:700;color:#09090B;margin:0 0 2px;">Rohan Mehta</p>
      <p style="font-size:13px;color:#3C5F62;margin:0 0 20px;">24 · Bengaluru · Shares a 3BHK with 3 friends</p>
      <div style="display:flex;flex-direction:column;gap:11px;font-size:12px;color:#52525B;border-top:1px solid #D3E3E3;padding-top:18px;">
        <div style="display:flex;justify-content:space-between;"><span style="color:#94A3B8;">Role</span><span>SDE at a startup</span></div>
        <div style="display:flex;justify-content:space-between;"><span style="color:#94A3B8;">Splits with</span><span>Flatmates + trips</span></div>
        <div style="display:flex;justify-content:space-between;"><span style="color:#94A3B8;">Pays via</span><span>UPI, daily</span></div>
      </div>
      <div style="margin-top:auto;padding-top:20px;">
        <p style="font-family:var(--fd);font-style:italic;font-size:15px;line-height:1.5;color:#3C5F62;margin:0;">"I'd rather eat the ₹400 than text my friend to pay me back. Again."</p>
      </div>
    </div>
    <!-- dimensions 2x2 -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div style="border:1px solid #E4E4E7;border-radius:12px;padding:20px 22px;">
        <p style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#4F7E83;margin:0 0 12px;">Goals</p>
        <div style="display:flex;flex-direction:column;gap:8px;font-size:12.5px;color:#3B3B3B;line-height:1.45;">
          <div style="display:flex;gap:8px;"><span style="color:#4F7E83;flex-shrink:0;">→</span>Settle up without the awkward reminder</div>
          <div style="display:flex;gap:8px;"><span style="color:#4F7E83;flex-shrink:0;">→</span>Keep group money fair without doing the math</div>
          <div style="display:flex;gap:8px;"><span style="color:#4F7E83;flex-shrink:0;">→</span>Pay in the same flow he already lives in</div>
        </div>
      </div>
      <div style="border:1px solid #E4E4E7;border-radius:12px;padding:20px 22px;">
        <p style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#4F7E83;margin:0 0 12px;">Frustrations</p>
        <div style="display:flex;flex-direction:column;gap:8px;font-size:12.5px;color:#3B3B3B;line-height:1.45;">
          <div style="display:flex;gap:8px;"><span style="color:#4F7E83;flex-shrink:0;">•</span>Chasing flatmates for small amounts</div>
          <div style="display:flex;gap:8px;"><span style="color:#4F7E83;flex-shrink:0;">•</span>Expense apps that track but never settle</div>
          <div style="display:flex;gap:8px;"><span style="color:#4F7E83;flex-shrink:0;">•</span>Quiet resentment when debts pile up</div>
        </div>
      </div>
      <div style="border:1px solid #E4E4E7;border-radius:12px;padding:20px 22px;">
        <p style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#4F7E83;margin:0 0 12px;">Behaviours</p>
        <div style="display:flex;flex-direction:column;gap:8px;font-size:12.5px;color:#3B3B3B;line-height:1.45;">
          <div style="display:flex;gap:8px;"><span style="color:#4F7E83;flex-shrink:0;">•</span>Pays for the group, settles later (or never)</div>
          <div style="display:flex;gap:8px;"><span style="color:#4F7E83;flex-shrink:0;">•</span>Lives in UPI apps and group chats</div>
          <div style="display:flex;gap:8px;"><span style="color:#4F7E83;flex-shrink:0;">•</span>Avoids confrontation over money</div>
        </div>
      </div>
      <div style="border:1px solid #E4E4E7;border-radius:12px;padding:20px 22px;">
        <p style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#4F7E83;margin:0 0 12px;">Needs from Shelfpay</p>
        <div style="display:flex;flex-direction:column;gap:8px;font-size:12.5px;color:#3B3B3B;line-height:1.45;">
          <div style="display:flex;gap:8px;"><span style="color:#4F7E83;flex-shrink:0;">✓</span>Money that moves automatically</div>
          <div style="display:flex;gap:8px;"><span style="color:#4F7E83;flex-shrink:0;">✓</span>Settling that feels social, not formal</div>
          <div style="display:flex;gap:8px;"><span style="color:#4F7E83;flex-shrink:0;">✓</span>Zero reminders, zero awkwardness</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ════ 07 BEFORE ════ -->
<div class="spcs-sep-light"></div>
<div class="spcs-before-wrap spcs-in">
  <div class="spcs-act light"><span class="spcs-act-n-light">08</span> · THE PRODUCT BEFORE I STEPPED IN</div>
  <div class="spcs-before-layout">
    <div>
      <h2 class="spcs-h" style="color:#09090B;font-size:clamp(18px,2vw,24px);">Core functionality existed.<br>The experience was fragmented.</h2>
      <p class="spcs-p light">Groups, splits, balance tracking — all there. But no hierarchy. Inconsistent patterns. Visual language that changed screen to screen. No design system.</p>
      <p class="spcs-p light" style="font-style:italic;color:#A1A1AA;font-size:13px;">"In usability sessions, I noticed hesitation before every primary action. That pause is expensive in fintech."</p>
    </div>
    <div class="spcs-before-imgs">
      <img src="https://framerusercontent.com/images/al64RsP2wdOIl6J2yuvJOj97NE.png" alt="Before">
      <img src="https://framerusercontent.com/images/tzRjqrdGfCoOELIz9nyZ5ICC0DY.png" alt="Before">
      <img src="https://framerusercontent.com/images/PBhBxYc8UFxRQ7YDbVdUF0UFKw.png" alt="Before">
      <img src="https://framerusercontent.com/images/9iMskJ7w2EoytrYiy3qedQEZSw.png" alt="Before">
    </div>
  </div>
</div>
<div class="spcs-issues-row">
  <div class="spcs-issues-inner">
    <div class="spcs-issue-chip">Flows required too much cognitive effort</div>
    <div class="spcs-issue-chip">Important actions weren't visually prioritized</div>
    <div class="spcs-issue-chip">States weren't clearly differentiated</div>
    <div class="spcs-issue-chip">No system-level coherence</div>
    <div class="spcs-issue-chip">Patterns relearned on every screen</div>
    <div class="spcs-issue-chip">Hesitation before every primary action</div>
    <div class="spcs-issue-chip">Flows required too much cognitive effort</div>
    <div class="spcs-issue-chip">Important actions weren't visually prioritized</div>
    <div class="spcs-issue-chip">States weren't clearly differentiated</div>
    <div class="spcs-issue-chip">No system-level coherence</div>
    <div class="spcs-issue-chip">Patterns relearned on every screen</div>
    <div class="spcs-issue-chip">Hesitation before every primary action</div>
  </div>
</div>

<!-- ════ 08 DECISIONS ════ -->
<div class="spcs-sep"></div>
<div class="spcs-dec-wrap spcs-in">
  <div class="spcs-act"><span class="spcs-act-n">09</span> · WHAT I CHANGED FIRST</div>
  <h2 class="spcs-h" style="color:white;">Three decisions that shaped everything.</h2>
  <div class="spcs-decision">
    <div class="spcs-dec-b"><span class="spcs-dec-tag">Instead of</span><div class="spcs-dec-t">Designing screens independently</div><div class="spcs-dec-p">Building each screen without a shared foundation and patching inconsistencies after.</div></div>
    <div class="spcs-dec-a"><span class="spcs-dec-tag">I chose</span><div class="spcs-dec-t">Design system before any screen</div><div class="spcs-dec-p">Color tokens, typography, spacing, interaction states — all defined first. Visual consistency is a trust signal in fintech. Every screen felt like the same product from day one.</div></div>
  </div>
  <div class="spcs-decision">
    <div class="spcs-dec-b"><span class="spcs-dec-tag">Instead of</span><div class="spcs-dec-t">Covering every screen at once</div><div class="spcs-dec-p">Sprinting to design all 100+ screens to hit scope coverage quickly.</div></div>
    <div class="spcs-dec-a"><span class="spcs-dec-tag">I chose</span><div class="spcs-dec-t">Core flows first — validated by prototypes</div><div class="spcs-dec-p">Group creation, wallet funding, expense split, real-time adjustment. 15+ prototypes. Prototype 11 became the product. Killing 10 first is how you know 11 is right.</div></div>
  </div>
  <div class="spcs-decision">
    <div class="spcs-dec-b"><span class="spcs-dec-tag">Instead of</span><div class="spcs-dec-t">Just designing the app</div><div class="spcs-dec-p">Scoping work to mobile UI and handing off files to engineering.</div></div>
    <div class="spcs-dec-a"><span class="spcs-dec-tag">I chose</span><div class="spcs-dec-t">Owning the full product surface</div><div class="spcs-dec-p">Brand, system, onboarding, marketing, product — one coherent thing. A product that looks like itself at every touchpoint builds trust faster than one that switches visual language between the ad and the app.</div></div>
  </div>
</div>

<!-- ════ 09 FINAL ════ -->
<div class="spcs-sep-light"></div>
<div class="spcs-final-wrap spcs-in">
  <div class="spcs-act light"><span class="spcs-act-n-light">10</span> · THE SHIPPED PRODUCT</div>
  <h2 class="spcs-h" style="color:#09090B;">100+ screens. 6 months. One designer.</h2>
  <div class="spcs-final-row">
    <img src="https://framerusercontent.com/images/oSgSEWpWTOIFh4IWhaogVDRVKwg.png" alt="Home">
    <img src="https://framerusercontent.com/images/8AMjYN0EYLpQP2cHCAxXz46E.png" alt="Payment">
    <img src="https://framerusercontent.com/images/Sw46VOU5BY56rGtwqLNT7szeXO0.png" alt="Transactions">
    <img src="https://framerusercontent.com/images/owImp11rOYI6a7ZcUlHtBRxvuM.png" alt="Wallet">
    <img src="https://framerusercontent.com/images/xCJvF9WFcELIgI3XthTjRANra0.png" alt="OTP">
  </div>
  <div class="spcs-callouts">
    <div><div class="spcs-callout-t">Home & Wallet</div><div class="spcs-callout-p">Opens on balance and group access — what a user needs the moment they open the app. Primary action always visible without scrolling.</div></div>
    <div><div class="spcs-callout-t">Split & Pay</div><div class="spcs-callout-p">Split equally, by amount, or by share — all within the same screen as confirmation. No context switches.</div></div>
    <div><div class="spcs-callout-t">Transaction History</div><div class="spcs-callout-p">Every transaction shows initiator, share, and settlement status. No ambiguity. No reason to chase anyone.</div></div>
  </div>
</div>

<!-- ════ 10 REFLECTION + 11 OUTCOME ════ -->
<div class="spcs-sep"></div>
<div class="spcs-outcome-layout spcs-in">
  <div class="spcs-refl-col">
    <div class="spcs-act"><span class="spcs-act-n">11</span> · REFLECTION</div>
    <h2 class="spcs-h" style="color:white;margin-bottom:24px;">What I learned doing this.</h2>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n">01</div><div class="spcs-lesson-t">Map before you build</div><div class="spcs-lesson-p">Taking a week to map the full product space felt slow. It saved weeks. Every screen was faster to design because the system was already defined.</div></div>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n">02</div><div class="spcs-lesson-t">In fintech, perception is the product</div><div class="spcs-lesson-p">Users don't analyze whether the interface is well-designed. They feel whether it's trustworthy. That feeling is built through every micro-decision, simultaneously.</div></div>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n">03</div><div class="spcs-lesson-t">Kill prototypes fast</div><div class="spcs-lesson-p">Prototype 11 became the product. The other 10 weren't waste — they were how we knew 11 was right. Test assumptions cheaply. Kill them faster than you build them.</div></div>
  </div>
  <div class="spcs-out-col">
    <div class="spcs-act"><span class="spcs-act-n">12</span> · OUTCOME</div>
    <h2 class="spcs-h" style="color:white;margin-bottom:24px;">0 to 5,000 users.<br>Six months.</h2>
    <div class="spcs-outcome-stats">
      <div class="spcs-outcome-stat"><div class="spcs-outcome-n">80%</div><div class="spcs-outcome-l">Day-1 retention at launch</div></div>
      <div class="spcs-outcome-stat"><div class="spcs-outcome-n">60%</div><div class="spcs-outcome-l">Lift in payment completion rate</div></div>
      <div class="spcs-outcome-stat"><div class="spcs-outcome-n">4.7/5</div><div class="spcs-outcome-l">User satisfaction score</div></div>
      <div class="spcs-outcome-stat"><div class="spcs-outcome-n">100+</div><div class="spcs-outcome-l">Screens designed across the full product</div></div>
    </div>
  </div>
</div>

<!-- ════ MORE PROJECTS ════ -->
<div class="spcs-sep-light"></div>
<div class="spcs-more spcs-in">
  <div style="font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#A1A1AA;margin-bottom:8px;">More Work</div>
  <div class="spcs-more-h">Other projects</div>
  <div class="spcs-more-grid">
    ${Object.entries(CS_DATA).filter(([k])=>k!=='shelfpay').map(([k,p])=>`<div class="spcs-more-card" onclick="openCS('${k}')">
      <div class="spcs-more-dom"><span class="spcs-more-pip" style="background:${p.pip};"></span>${p.domain}</div>
      <div class="spcs-more-co">${p.co}</div>
      <div class="spcs-more-desc">${p.headline.slice(0,90)}...</div>
      <div class="spcs-more-lnk">View case study →</div>
    </div>`).join('')}
  </div>
</div>

</div></div>`;

    // Scroll animations via IntersectionObserver
    document.querySelector('.main').scrollTop=0;
    setTimeout(()=>{
      const main=document.querySelector('.main');
      main.scrollTop=0;
      const obs=new IntersectionObserver((entries)=>{
        entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('spcs-shown');}});
      },{root:main,threshold:0.06});
      document.querySelectorAll('.spcs-in').forEach(el=>obs.observe(el));
    },60);

    } else if(id==='venton'){
    el.innerHTML=`<div class="spcs">

<!-- HERO -->
<div class="spcs-hero">
  <div class="spcs-hero-l" style="background:#fff;">
    <span class="spcs-domain" style="color:#6B5B95;">Mental Health · Personal Project</span>
    <h1 class="spcs-title" style="color:#09090B;">Vent-On</h1>
    <p class="spcs-meta" style="color:#71717A;">Product Designer · 2023</p>
    <p class="spcs-tagline" style="color:#3D3D3D;">A witty, Gen-Z mental health companion for tracking emotions and habits — but with personality.</p>
    <div class="spcs-kpis">
      <div class="spcs-kpi"><div class="spcs-kpi-v" style="color:#6B5B95;">25+</div><div class="spcs-kpi-l">Survey responses</div></div>
      <div class="spcs-kpi"><div class="spcs-kpi-v" style="color:#6B5B95;">6</div><div class="spcs-kpi-l">User interviews</div></div>
      <div class="spcs-kpi"><div class="spcs-kpi-v" style="color:#6B5B95;">8</div><div class="spcs-kpi-l">Hi-fi screens</div></div>
      <div class="spcs-kpi"><div class="spcs-kpi-v" style="color:#6B5B95;">3</div><div class="spcs-kpi-l">Core user flows</div></div>
    </div>
  </div>
  <div class="spcs-hero-r" style="background:#fff;"></div>
</div>

<div class="spcs-body">

<!-- 01 + 02 BRIEF + PROBLEM -->
<div class="spcs-sep"></div>
<div class="spcs-brief spcs-in">
  <div class="spcs-brief-l">
    <div class="spcs-act"><span class="spcs-act-n" style="color:#93C5FD;">01</span> · THE BRIEF</div>
    <h2 class="spcs-h" style="color:white;">A personal project about making emotional tools feel human.</h2>
    <p class="spcs-p dark">Vent-On is a Gen-Z mental health companion designed to help users track emotions, recognise patterns, and build habits. But the core idea wasn't the features — it was the tone.</p>
    <p class="spcs-p dark">First and only designer. Owned product design, userflow, design system, brand language, and hi-fi prototyping end to end.</p>
  </div>
  <div class="spcs-brief-r">
    <div class="spcs-act"><span class="spcs-act-n" style="color:#93C5FD;">02</span> · THE PROBLEM</div>
    <h2 class="spcs-h" style="color:white;">Most mental health apps don't feel human.</h2>
    <p class="spcs-p dark">Clean, minimal, well-structured — yet the experience felt sterile. The tone was clinical, interfaces were rigid, interactions resembled filling out a report more than having a conversation.</p>
      </div>
</div>

<!-- 03 RESEARCH -->
<div class="spcs-sep-light"></div>
<div class="spcs-in" style="background:#fff;padding:28px 48px 0;">
  <div class="spcs-act light"><span style="color:#6B5B95;font-weight:700;">03</span> · RESEARCH</div>
  <h2 class="spcs-h" style="color:#09090B;">People aren't avoiding support. They're avoiding how it feels.</h2>
  <p class="spcs-p light">I ran a survey asking people about their relationship with mental health apps. The responses weren't surprising — but they were telling.</p>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:16px 0 20px;">
    <div style="background:#EEF2FF;border:1px solid #C7D2FE;border-radius:10px;padding:18px 20px;font-size:14px;color:#3730A3;font-weight:500;line-height:1.5;">Struggle with anxiety, overwhelm, or inconsistent routines</div>
    <div style="background:#EEF2FF;border:1px solid #C7D2FE;border-radius:10px;padding:18px 20px;font-size:14px;color:#3730A3;font-weight:500;line-height:1.5;">Have tried mental health apps but stopped returning</div>
    <div style="background:#EEF2FF;border:1px solid #C7D2FE;border-radius:10px;padding:18px 20px;font-size:14px;color:#3730A3;font-weight:500;line-height:1.5;">Drop off — not from lack of need, but because the app didn't feel relatable enough</div>
  </div>
</div>
<div class="vton-crowd spcs-in" style="margin:0;border-radius:0;">
  <img src="assets/img1.jpeg" alt="User research context">
  <div class="vton-crowd-overlay"></div>
  <div class="vton-quote vton-q1"><div class="vton-quote-pip"></div><span>"A lot of times I feel lonely but the apps don't help."</span></div>
  <div class="vton-quote vton-q2"><div class="vton-quote-pip"></div><span>"The tone of these apps is so depressing!"</span></div>
  <div class="vton-quote vton-q3"><div class="vton-quote-pip"></div><span>"Are we sure the copywriters are not depressed?"</span></div>
</div>

<!-- 04 AFFINITY MAPPING -->
<div class="spcs-sep"></div>
<div class="spcs-in" style="background:#09090B;padding:28px 48px 48px;">
  <div class="spcs-act"><span class="spcs-act-n" style="color:#93C5FD;">04</span> · AFFINITY MAPPING</div>
  <h2 class="spcs-h" style="color:white;">The questions became clearer before the answers did.</h2>
  <p class="spcs-p dark" style="max-width:640px;margin-bottom:24px;">After surveys and interviews, I translated recurring concerns into "How Might We" questions. They naturally grouped around two emotional territories.</p>
  <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin-bottom:6px;">
    <div style="grid-column:span 3;font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.25);padding-bottom:6px;border-bottom:1px solid #1f1f1f;">Isolation</div>
    <div style="grid-column:span 3;font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.25);padding-bottom:6px;border-bottom:1px solid #1f1f1f;">Alleviating</div>
  </div>
  <div style="display:grid;grid-template-columns:repeat(6,1fr);gap:6px;">
    <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:14px 12px;font-size:12px;color:rgba(255,255,255,.6);line-height:1.5;">How might we help users feel less isolated using mindfulness?</div>
    <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:14px 12px;font-size:12px;color:rgba(255,255,255,.6);line-height:1.5;">How might we prevent social isolation in their lives?</div>
    <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:14px 12px;font-size:12px;color:rgba(255,255,255,.6);line-height:1.5;">How might we motivate them to get out of their isolation?</div>
    <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:14px 12px;font-size:12px;color:rgba(255,255,255,.6);line-height:1.5;">How might we alleviate their anxiety with social interaction?</div>
    <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:14px 12px;font-size:12px;color:rgba(255,255,255,.6);line-height:1.5;">How might we help users take their mind off the problem?</div>
    <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:14px 12px;font-size:12px;color:rgba(255,255,255,.6);line-height:1.5;">How might we help them train their mind to dedramatise problems?</div>
  </div>
</div>

<!-- 05 SORTING IDEAS & PRIORITISING -->
<div class="spcs-sep"></div>
<div class="spcs-in" style="background:#09090B;padding:48px;">
  <div class="spcs-act"><span class="spcs-act-n" style="color:#93C5FD;">05</span> · SORTING IDEAS &amp; PRIORITISING</div>
  <h2 class="spcs-h" style="color:white;margin-bottom:16px;">From a pile of ideas to a deliberate scope.</h2>
  <p class="spcs-p dark" style="max-width:740px;margin-bottom:36px;">Every interview surfaced a feature someone wanted. Left unchecked, that becomes another bloated wellness app. I clustered the ideas into four themes, then ran them through <span style="color:#93C5FD;">MoSCoW</span> &mdash; with one rule fixed in advance: <strong style="color:white;">personality is a Must-have, never a nice-to-have.</strong></p>

  <p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.35);margin:0 0 12px;">Four themes the ideas fell into</p>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:40px;">
    <div style="background:#111;border:1px solid #1f1f1f;border-radius:12px;padding:18px 18px 20px;"><span style="display:inline-block;width:9px;height:9px;border-radius:3px;background:#93C5FD;margin-bottom:12px;"></span><p style="font-size:13px;font-weight:700;color:#fff;margin:0 0 5px;">Tracking</p><p style="font-size:11.5px;color:rgba(255,255,255,.45);line-height:1.5;margin:0;">Mood, emotions and habits captured without it feeling like homework.</p></div>
    <div style="background:#111;border:1px solid #1f1f1f;border-radius:12px;padding:18px 18px 20px;"><span style="display:inline-block;width:9px;height:9px;border-radius:3px;background:#A78BFA;margin-bottom:12px;"></span><p style="font-size:13px;font-weight:700;color:#fff;margin:0 0 5px;">Reflection</p><p style="font-size:11.5px;color:rgba(255,255,255,.45);line-height:1.5;margin:0;">Looking back at patterns gently, as a check-in rather than a report.</p></div>
    <div style="background:#111;border:1px solid #1f1f1f;border-radius:12px;padding:18px 18px 20px;"><span style="display:inline-block;width:9px;height:9px;border-radius:3px;background:#FFCD29;margin-bottom:12px;"></span><p style="font-size:13px;font-weight:700;color:#fff;margin:0 0 5px;">Engagement</p><p style="font-size:11.5px;color:rgba(255,255,255,.45);line-height:1.5;margin:0;">Light, relatable moments that make someone want to return tomorrow.</p></div>
    <div style="background:#111;border:1px solid #1f1f1f;border-radius:12px;padding:18px 18px 20px;"><span style="display:inline-block;width:9px;height:9px;border-radius:3px;background:#FF6037;margin-bottom:12px;"></span><p style="font-size:13px;font-weight:700;color:#fff;margin:0 0 5px;">Personality</p><p style="font-size:11.5px;color:rgba(255,255,255,.45);line-height:1.5;margin:0;">The voice and tone running through all of it &mdash; the non-negotiable.</p></div>
  </div>

  <p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:rgba(255,255,255,.35);margin:0 0 12px;">MoSCoW prioritisation</p>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;">
    <div style="border-top:2px solid #93C5FD;background:rgba(255,255,255,.015);border-radius:0 0 12px 12px;padding:16px 14px;display:flex;flex-direction:column;gap:8px;"><div style="margin-bottom:4px;"><div style="display:flex;align-items:center;gap:8px;margin-bottom:3px;"><span style="font-size:10px;font-weight:800;letter-spacing:.12em;color:#93C5FD;">M</span><span style="font-size:13px;font-weight:700;color:#fff;">Must have</span></div><p style="font-size:10.5px;color:rgba(255,255,255,.4);margin:0;line-height:1.4;">Ships in v1, no debate</p></div><div style="background:#15203a;border:1px solid #2d4a7a;border-radius:8px;padding:11px 13px;font-size:12px;font-weight:600;color:#BFDBFE;line-height:1.35;">Personality &amp; tone system</div><div style="background:#15203a;border:1px solid #2d4a7a;border-radius:8px;padding:11px 13px;font-size:12px;font-weight:600;color:#BFDBFE;line-height:1.35;">Daily mood check-in</div><div style="background:#15203a;border:1px solid #2d4a7a;border-radius:8px;padding:11px 13px;font-size:12px;font-weight:600;color:#BFDBFE;line-height:1.35;">Emotion &amp; habit tracking</div><div style="background:#15203a;border:1px solid #2d4a7a;border-radius:8px;padding:11px 13px;font-size:12px;font-weight:600;color:#BFDBFE;line-height:1.35;">Reflection loop</div></div>
    <div style="border-top:2px solid #A78BFA;background:rgba(255,255,255,.015);border-radius:0 0 12px 12px;padding:16px 14px;display:flex;flex-direction:column;gap:8px;"><div style="margin-bottom:4px;"><div style="display:flex;align-items:center;gap:8px;margin-bottom:3px;"><span style="font-size:10px;font-weight:800;letter-spacing:.12em;color:#A78BFA;">S</span><span style="font-size:13px;font-weight:700;color:#fff;">Should have</span></div><p style="font-size:10.5px;color:rgba(255,255,255,.4);margin:0;line-height:1.4;">Strong value, fits the loop</p></div><div style="background:#141414;border:1px solid #2a2a2a;border-radius:8px;padding:11px 13px;font-size:12px;color:rgba(255,255,255,.78);line-height:1.35;">Activity / module library</div><div style="background:#141414;border:1px solid #2a2a2a;border-radius:8px;padding:11px 13px;font-size:12px;color:rgba(255,255,255,.78);line-height:1.35;">Habit streaks</div><div style="background:#141414;border:1px solid #2a2a2a;border-radius:8px;padding:11px 13px;font-size:12px;color:rgba(255,255,255,.78);line-height:1.35;">Unload zone (venting)</div></div>
    <div style="border-top:2px solid #71717A;background:rgba(255,255,255,.015);border-radius:0 0 12px 12px;padding:16px 14px;display:flex;flex-direction:column;gap:8px;"><div style="margin-bottom:4px;"><div style="display:flex;align-items:center;gap:8px;margin-bottom:3px;"><span style="font-size:10px;font-weight:800;letter-spacing:.12em;color:#71717A;">C</span><span style="font-size:13px;font-weight:700;color:#fff;">Could have</span></div><p style="font-size:10.5px;color:rgba(255,255,255,.4);margin:0;line-height:1.4;">Nice, if time allows</p></div><div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:11px 13px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.35;">Journaling</div><div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:11px 13px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.35;">Grounding exercises</div><div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:11px 13px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.35;">Mini-games (tic-tac-toe)</div><div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:11px 13px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.35;">&ldquo;Call a friend&rdquo; nudge</div></div>
    <div style="border-top:2px solid #52525B;background:rgba(255,255,255,.015);border-radius:0 0 12px 12px;padding:16px 14px;display:flex;flex-direction:column;gap:8px;"><div style="margin-bottom:4px;"><div style="display:flex;align-items:center;gap:8px;margin-bottom:3px;"><span style="font-size:10px;font-weight:800;letter-spacing:.12em;color:#52525B;">W</span><span style="font-size:13px;font-weight:700;color:#fff;">Won't have (v1)</span></div><p style="font-size:10.5px;color:rgba(255,255,255,.4);margin:0;line-height:1.4;">Out of scope, on purpose</p></div><div style="background:#0d0d0d;border:1px dashed #262626;border-radius:8px;padding:11px 13px;font-size:12px;color:rgba(255,255,255,.32);line-height:1.35;text-decoration:line-through;text-decoration-color:rgba(255,255,255,.2);">Anonymous stranger chat</div><div style="background:#0d0d0d;border:1px dashed #262626;border-radius:8px;padding:11px 13px;font-size:12px;color:rgba(255,255,255,.32);line-height:1.35;text-decoration:line-through;text-decoration-color:rgba(255,255,255,.2);">Full resource directory</div><div style="background:#0d0d0d;border:1px dashed #262626;border-radius:8px;padding:11px 13px;font-size:12px;color:rgba(255,255,255,.32);line-height:1.35;text-decoration:line-through;text-decoration-color:rgba(255,255,255,.2);">Social feed</div></div>
  </div>

  <div style="border-top:1px solid #222;margin-top:36px;padding-top:22px;">
    <p style="font-size:13px;color:rgba(255,255,255,.6);line-height:1.7;margin:0;max-width:760px;">The list stayed short on purpose &mdash; <strong style="color:#fff;">three core flows</strong> done with care beat fifteen done without. MoSCoW is how I kept personality from being diluted by feature creep.</p>
  </div>
</div>

<!-- 06 THE CONCEPT -->
<div class="spcs-sep-light"></div>
<div class="spcs-in" style="background:#fff;padding:48px;">
  <div class="spcs-act light"><span style="color:#6B5B95;font-weight:700;">06</span> · THE CONCEPT</div>
  <div style="display:grid;grid-template-columns:1fr 0.92fr;gap:56px;align-items:start;margin-top:8px;">
    <div style="position:sticky;top:20px;">
      <h2 class="spcs-h" style="color:#09090B;margin-bottom:16px;">What if your mental health app had a personality?</h2>
      <p class="spcs-p light" style="margin-bottom:20px;">A Gen-Z-friendly companion that helps users track emotions and habits &mdash; but with character. Not comedic, not trivial. Just <em>approachable</em>. The features other apps have too; the <strong>tone</strong> is what makes someone stay.</p>
      <div style="background:#EEF2FF;border:1px solid #C7D2FE;border-radius:12px;padding:18px 22px;">
        <p style="font-size:14px;color:#1e3a8a;line-height:1.7;margin:0;">It reframes reflection from <em>performance</em> to <em>check-in</em> &mdash; logging emotions, spotting patterns, building habits, in a way that feels lighter and more human.<br><br><strong>Tone became the differentiator.</strong></p>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:12px;">
      <p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#A1A1AA;margin:0 0 2px;">The three shifts that define it</p>
      <div style="border:1px solid #E4E4E7;border-radius:14px;padding:20px 22px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;"><span style="font-size:13px;font-weight:600;color:#C4C4CC;text-decoration:line-through;">Clinical</span><span style="color:#6B5B95;font-size:14px;">&rarr;</span><span style="font-size:15px;font-weight:800;color:#09090B;letter-spacing:-.01em;">Approachable</span></div><p style="font-size:13px;color:#71717A;line-height:1.6;margin:0;">Warm, expressive and human where other apps feel sterile and institutional.</p></div>
      <div style="border:1px solid #E4E4E7;border-radius:14px;padding:20px 22px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;"><span style="font-size:13px;font-weight:600;color:#C4C4CC;text-decoration:line-through;">Instructional</span><span style="color:#6B5B95;font-size:14px;">&rarr;</span><span style="font-size:15px;font-weight:800;color:#09090B;letter-spacing:-.01em;">Conversational</span></div><p style="font-size:13px;color:#71717A;line-height:1.6;margin:0;">It talks with you rather than at you &mdash; closer to a check-in than a form.</p></div>
      <div style="border:1px solid #E4E4E7;border-radius:14px;padding:20px 22px;"><div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;"><span style="font-size:13px;font-weight:600;color:#C4C4CC;text-decoration:line-through;">Performance</span><span style="color:#6B5B95;font-size:14px;">&rarr;</span><span style="font-size:15px;font-weight:800;color:#09090B;letter-spacing:-.01em;">Check-in</span></div><p style="font-size:13px;color:#71717A;line-height:1.6;margin:0;">No streaks to defend or scores to chase. Low-stakes, judgment-free, every time.</p></div>
    </div>
  </div>
</div>

<!-- 07 MOODBOARDING -->
<div class="spcs-sep"></div>
<div class="spcs-in" style="background:#09090B;padding:28px 48px 48px;">
  <div class="spcs-act"><span class="spcs-act-n" style="color:#93C5FD;">07</span> · MOODBOARDING</div>
  <h2 class="spcs-h" style="color:white;">Designing the emotional layer first.</h2>
  <p class="spcs-p dark" style="margin-bottom:20px;">Since the app targets people who typically avoid self-help apps for being too corny, I built it in the style of Gen-Z — reassuring, modern, and gentle. <strong style="color:#93C5FD;">Neobrutalism:</strong> solid borders, cutouts, bold type, expressive illustrations.</p>
  <img src="assets/img2.png" alt="Moodboard" style="width:100%;border-radius:10px;display:block;">
</div>

<!-- 08 DESIGN SYSTEM -->
<div class="spcs-sep-light"></div>
<div class="spcs-in" style="background:#fff;padding:48px;">
  <div class="spcs-act light"><span style="color:#6B5B95;font-weight:700;">08</span> · DESIGN SYSTEM</div>
  <h2 class="spcs-h" style="color:#09090B;margin-bottom:14px;">A system built for warmth.</h2>
  <p class="spcs-p light" style="max-width:680px;margin-bottom:32px;">Built before a single screen &mdash; a friendly sans-serif, a palette that stays far from clinical blues and greys, and a neobrutalist component language that feels like a friend, not a form.</p>

  <!-- Row 1: colour + type -->
  <div style="display:grid;grid-template-columns:1.5fr 1fr;gap:20px;margin-bottom:20px;">
    <div style="border:1px solid #E4E4E7;border-radius:14px;padding:22px;">
      <p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#A1A1AA;margin:0 0 16px;">Colour System</p>
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;">
        <div><div style="height:72px;background:#FFFAEC;border:1px solid #E4E4E7;border-radius:10px;"></div><p style="font-size:11px;font-weight:700;color:#09090B;margin:8px 0 1px;">Base</p><p style="font-size:10px;color:#A1A1AA;margin:0;font-family:ui-monospace,monospace;">#FFFAEC</p></div>
        <div><div style="height:72px;background:#6B5B95;border-radius:10px;"></div><p style="font-size:11px;font-weight:700;color:#09090B;margin:8px 0 1px;">Primary</p><p style="font-size:10px;color:#A1A1AA;margin:0;font-family:ui-monospace,monospace;">#6B5B95</p></div>
        <div><div style="height:72px;background:#FFCD29;border-radius:10px;"></div><p style="font-size:11px;font-weight:700;color:#09090B;margin:8px 0 1px;">Energy</p><p style="font-size:10px;color:#A1A1AA;margin:0;font-family:ui-monospace,monospace;">#FFCD29</p></div>
        <div><div style="height:72px;background:#FF6037;border-radius:10px;"></div><p style="font-size:11px;font-weight:700;color:#09090B;margin:8px 0 1px;">Accent</p><p style="font-size:10px;color:#A1A1AA;margin:0;font-family:ui-monospace,monospace;">#FF6037</p></div>
      </div>
      <p style="font-size:12px;color:#71717A;line-height:1.6;margin:16px 0 0;">A warm cream base instead of clinical white. Purple carries trust; yellow and coral carry the personality.</p>
    </div>
    <div style="border:1px solid #E4E4E7;border-radius:14px;padding:22px;">
      <p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#A1A1AA;margin:0 0 14px;">Typography &mdash; Poppins</p>
      <p style="font-size:30px;font-weight:700;color:#09090B;letter-spacing:-.02em;line-height:1.05;margin:0 0 2px;">Feeling okay?</p>
      <p style="font-size:10px;color:#A1A1AA;margin:0 0 14px;">Display &middot; 700</p>
      <p style="font-size:17px;font-weight:600;color:#3D3D3D;margin:0 0 2px;">Let&rsquo;s check in.</p>
      <p style="font-size:10px;color:#A1A1AA;margin:0 0 14px;">Heading &middot; 600</p>
      <p style="font-size:13px;font-weight:400;color:#52525B;margin:0 0 2px;line-height:1.5;">Aa Bb Cc &mdash; the quick check-in.</p>
      <p style="font-size:10px;color:#A1A1AA;margin:0;">Body &middot; 400</p>
    </div>
  </div>

  <!-- Row 2: components + logo/tokens -->
  <div style="display:grid;grid-template-columns:1.5fr 1fr;gap:20px;">
    <div style="border:1px solid #E4E4E7;border-radius:14px;padding:22px;background:#FFFAEC;">
      <p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#9a8f7a;margin:0 0 18px;">Components &mdash; Neobrutalism</p>
      <div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">
        <button style="background:#FFCD29;border:2px solid #09090B;box-shadow:3px 3px 0 #09090B;border-radius:12px;padding:12px 22px;font-size:14px;font-weight:700;color:#09090B;cursor:default;">Start check-in</button>
        <span style="background:#fff;border:2px solid #09090B;box-shadow:3px 3px 0 #09090B;border-radius:100px;padding:9px 16px;font-size:13px;font-weight:600;color:#09090B;">&#128578; Good</span>
        <span style="background:#FF6037;border:2px solid #09090B;box-shadow:3px 3px 0 #09090B;border-radius:100px;padding:9px 16px;font-size:13px;font-weight:600;color:#fff;">&#128533; Meh</span>
      </div>
      <div style="background:#fff;border:2px solid #09090B;box-shadow:3px 3px 0 #09090B;border-radius:16px;padding:18px 20px;margin-top:20px;max-width:340px;">
        <p style="font-size:13px;font-weight:700;color:#09090B;margin:0 0 4px;">How are we feeling today?</p>
        <p style="font-size:12px;color:#71717A;line-height:1.5;margin:0;">No right answers. No judgment. Just tap whatever&rsquo;s closest.</p>
      </div>
    </div>
    <div style="border:1px solid #E4E4E7;border-radius:14px;padding:22px;display:flex;flex-direction:column;">
      <p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#A1A1AA;margin:0 0 12px;">Logo</p>
      <img src="assets/img3.svg" alt="VentOn logo" style="height:34px;display:block;margin-bottom:22px;align-self:flex-start;">
      <p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#A1A1AA;margin:0 0 12px;">Tokens</p>
      <div style="display:flex;flex-direction:column;gap:8px;font-size:12px;color:#52525B;">
        <div style="display:flex;justify-content:space-between;border-bottom:1px solid #F4F4F5;padding-bottom:7px;"><span>Border</span><span style="font-family:ui-monospace,monospace;color:#09090B;">2px solid</span></div>
        <div style="display:flex;justify-content:space-between;border-bottom:1px solid #F4F4F5;padding-bottom:7px;"><span>Shadow</span><span style="font-family:ui-monospace,monospace;color:#09090B;">3px 3px 0</span></div>
        <div style="display:flex;justify-content:space-between;"><span>Radius</span><span style="font-family:ui-monospace,monospace;color:#09090B;">12&ndash;16px</span></div>
      </div>
    </div>
  </div>
</div>

<!-- 09 USERFLOW -->
<div class="spcs-sep-light" style="background:#F4F4F5;"></div>
<div class="spcs-in" style="background:#F4F4F5;padding:48px;">
  <div class="spcs-act light"><span style="color:#6B5B95;font-weight:700;">09</span> · USERFLOW</div>
  <div style="max-width:640px;margin-bottom:36px;">
    <h2 class="spcs-h" style="color:#09090B;margin-bottom:16px;">Three flows, one journey.</h2>
    <p class="spcs-p light" style="margin:0;">Onboarding happens once. After that, the daily check-in and reflection form a loop the user returns to &mdash; the part designed to become a habit, not a chore.</p>
  </div>

  <div style="display:flex;align-items:stretch;gap:0;">
    <div style="flex:1;display:flex;flex-direction:column;gap:10px;"><div style="background:#fff;border:1.5px solid #6B5B95;border-radius:10px;padding:13px 14px;margin-bottom:10px;"><div style="display:flex;align-items:center;gap:9px;margin-bottom:3px;"><span style="width:22px;height:22px;border-radius:50%;background:#6B5B95;color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">1</span><span style="font-size:13px;font-weight:700;color:#09090B;">Onboarding</span></div><p style="font-size:11px;color:#71717A;margin:0;line-height:1.4;">First open, set up once</p></div><div style="background:#fff;border:1px solid #E4E4E7;border-radius:8px;padding:10px 13px;font-size:12px;color:#52525B;line-height:1.35;">Splash screen</div><div style="background:#fff;border:1px solid #E4E4E7;border-radius:8px;padding:10px 13px;font-size:12px;color:#52525B;line-height:1.35;">Consent &amp; privacy</div><div style="background:#fff;border:1px solid #E4E4E7;border-radius:8px;padding:10px 13px;font-size:12px;color:#52525B;line-height:1.35;">Questionnaire</div><div style="background:#fff;border:1px solid #E4E4E7;border-radius:8px;padding:10px 13px;font-size:12px;color:#52525B;line-height:1.35;">Personality setup</div></div>
    <div style="width:30px;flex-shrink:0;display:flex;align-items:flex-start;justify-content:center;padding-top:22px;color:#A1A1AA;font-size:18px;">&rarr;</div>
    <div style="flex:1;display:flex;flex-direction:column;gap:10px;"><div style="background:#fff;border:1.5px solid #FF6037;border-radius:10px;padding:13px 14px;margin-bottom:10px;"><div style="display:flex;align-items:center;gap:9px;margin-bottom:3px;"><span style="width:22px;height:22px;border-radius:50%;background:#FF6037;color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">2</span><span style="font-size:13px;font-weight:700;color:#09090B;">Daily check-in</span></div><p style="font-size:11px;color:#71717A;margin:0;line-height:1.4;">The returning ritual</p></div><div style="background:#fff;border:1px solid #E4E4E7;border-radius:8px;padding:10px 13px;font-size:12px;color:#52525B;line-height:1.35;">Pick today&rsquo;s mood</div><div style="background:#fff;border:1px solid #E4E4E7;border-radius:8px;padding:10px 13px;font-size:12px;color:#52525B;line-height:1.35;">Module matched to mood</div><div style="background:#fff;border:1px solid #E4E4E7;border-radius:8px;padding:10px 13px;font-size:12px;color:#52525B;line-height:1.35;">Do the activity</div><div style="background:#fff;border:1px solid #E4E4E7;border-radius:8px;padding:10px 13px;font-size:12px;color:#52525B;line-height:1.35;">Track it</div></div>
    <div style="width:30px;flex-shrink:0;display:flex;align-items:flex-start;justify-content:center;padding-top:22px;color:#A1A1AA;font-size:18px;">&rarr;</div>
    <div style="flex:1;display:flex;flex-direction:column;gap:10px;"><div style="background:#fff;border:1.5px solid #FFCD29;border-radius:10px;padding:13px 14px;margin-bottom:10px;"><div style="display:flex;align-items:center;gap:9px;margin-bottom:3px;"><span style="width:22px;height:22px;border-radius:50%;background:#FFCD29;color:#fff;font-size:11px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0;">3</span><span style="font-size:13px;font-weight:700;color:#09090B;">Reflection</span></div><p style="font-size:11px;color:#71717A;margin:0;line-height:1.4;">Close the loop</p></div><div style="background:#fff;border:1px solid #E4E4E7;border-radius:8px;padding:10px 13px;font-size:12px;color:#52525B;line-height:1.35;">Rate the session</div><div style="background:#fff;border:1px solid #E4E4E7;border-radius:8px;padding:10px 13px;font-size:12px;color:#52525B;line-height:1.35;">Pattern insight</div><div style="background:#fff;border:1px solid #E4E4E7;border-radius:8px;padding:10px 13px;font-size:12px;color:#52525B;line-height:1.35;">Gentle nudge back</div></div>
  </div>

  <div style="display:flex;align-items:center;gap:10px;margin-top:18px;justify-content:flex-end;">
    <span style="font-size:18px;color:#6B5B95;">&#8634;</span>
    <span style="font-size:12px;color:#71717A;">Flows 2 &amp; 3 repeat daily &mdash; reflection feeds straight back into the next check-in.</span>
  </div>
</div>

<!-- 10 HI-FIDELITY SCREENS (wireframes removed) -->
<div class="spcs-sep"></div>
<div class="spcs-in" style="background:#09090B;padding:28px 48px 48px;">
  <div class="spcs-act"><span class="spcs-act-n" style="color:#93C5FD;">10</span> · HI-FIDELITY SCREENS</div>
  <h2 class="spcs-h" style="color:white;">The final product.</h2>
  <div class="vton-screens-scroll">
    <img src="https://framerusercontent.com/images/ONxi8LoBa7GZ8781UiKmpVGZns.png" alt="">
    <img src="https://framerusercontent.com/images/0jOwTMyJQxKF6PyTt4mgtChLY.png" alt="">
    <img src="https://framerusercontent.com/images/HvpNUerTeAMDDfQeiSt52BAZ2AE.png" alt="">
    <img src="https://framerusercontent.com/images/knXkeIbcu8ZXvFA7sWFOoJtXuTs.png" alt="">
    <img src="https://framerusercontent.com/images/D4x7klr8pqwcY6bc6d2T21waWH8.png" alt="">
    <img src="https://framerusercontent.com/images/vxRi5IUCm1j7jLMdcc6akxSznzM.png" alt="">
    <img src="https://framerusercontent.com/images/gwpVSxhOBNUum0pEF3P0pYvG9A.png" alt="">
    <img src="https://framerusercontent.com/images/xgXT97RGMvNYjSyNglER0i7WjV8.png" alt="">
  </div>
</div>

<!-- 11 DESIGN DECISIONS -->
<div class="spcs-sep-light"></div>
<div class="spcs-in" style="background:#fff;padding:28px 48px 48px;">
  <div class="spcs-act light"><span style="color:#6B5B95;font-weight:700;">11</span> · DESIGN DECISIONS</div>
  <h2 class="spcs-h" style="color:#09090B;">The choices that defined it.</h2>
  <div style="margin-top:16px;">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;padding:20px 0;border-bottom:1px solid #E4E4E7;align-items:start;">
      <div style="padding-right:32px;border-right:1px solid #E4E4E7;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#A1A1AA;display:block;margin-bottom:8px;">Instead of</span>
        <p style="font-size:15px;font-weight:700;color:#D1D5DB;text-decoration:line-through;margin:0 0 6px;">Clinical, minimal UI</p>
        <p style="font-size:13px;color:#9CA3AF;line-height:1.6;margin:0;">The visual language used by every major mental health app — clean grids, muted tones, serious typography.</p>
      </div>
      <div style="padding-left:32px;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#6B5B95;display:block;margin-bottom:8px;">I chose</span>
        <p style="font-size:15px;font-weight:700;color:#09090B;margin:0 0 6px;">Neobrutalism</p>
        <p style="font-size:13px;color:#71717A;line-height:1.6;margin:0;">Bold borders, warm cream backgrounds, expressive illustrations. A visual system that feels like a friend, not a therapist's office.</p>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;padding:20px 0;border-bottom:1px solid #E4E4E7;align-items:start;">
      <div style="padding-right:32px;border-right:1px solid #E4E4E7;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#A1A1AA;display:block;margin-bottom:8px;">Instead of</span>
        <p style="font-size:15px;font-weight:700;color:#D1D5DB;text-decoration:line-through;margin:0 0 6px;">Reflection as performance</p>
        <p style="font-size:13px;color:#9CA3AF;line-height:1.6;margin:0;">Emotion-tracking as a task — streaks, scores, progress metrics.</p>
      </div>
      <div style="padding-left:32px;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#6B5B95;display:block;margin-bottom:8px;">I chose</span>
        <p style="font-size:15px;font-weight:700;color:#09090B;margin:0 0 6px;">Reflection as check-in</p>
        <p style="font-size:13px;color:#71717A;line-height:1.6;margin:0;">Low-stakes conversation. "How are you feeling today?" with meme-worthy image options. No right answers. No judgment.</p>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:0;padding:20px 0;align-items:start;">
      <div style="padding-right:32px;border-right:1px solid #E4E4E7;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#A1A1AA;display:block;margin-bottom:8px;">Instead of</span>
        <p style="font-size:15px;font-weight:700;color:#D1D5DB;text-decoration:line-through;margin:0 0 6px;">Feature coverage first</p>
        <p style="font-size:13px;color:#9CA3AF;line-height:1.6;margin:0;">Packing in every wellness feature before deciding what the product should feel like.</p>
      </div>
      <div style="padding-left:32px;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#6B5B95;display:block;margin-bottom:8px;">I chose</span>
        <p style="font-size:15px;font-weight:700;color:#09090B;margin:0 0 6px;">Personality first, features second</p>
        <p style="font-size:13px;color:#71717A;line-height:1.6;margin:0;">MoSCoW ensured tone was a must-have. Three core flows done with care beat fifteen flows done with none.</p>
      </div>
    </div>
  </div>
</div>

<!-- 12 REFLECTION -->
<div class="spcs-sep"></div>
<div class="spcs-in" style="background:#09090B;padding:28px 48px 56px;">
  <div class="spcs-act"><span class="spcs-act-n" style="color:#93C5FD;">12</span> · REFLECTION</div>
  <h2 class="spcs-h" style="color:white;max-width:500px;">What this taught me.</h2>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:24px;">
    <div class="spcs-lesson-v"><div class="spcs-lesson-n" style="color:#93C5FD;">01</div><div class="spcs-lesson-t">Tone is a feature</div><div class="spcs-lesson-p">I used to think voice and personality were the last 5% of a product. Vent-On taught me they're the first decision. Everything else follows.</div></div>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n" style="color:#93C5FD;">02</div><div class="spcs-lesson-t">Start with the emotional layer</div><div class="spcs-lesson-p">Moodboarding before wireframing changed how I approach any consumer product. Getting the feeling right before the layout saved weeks of rework.</div></div>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n" style="color:#93C5FD;">03</div><div class="spcs-lesson-t">Neobrutalism is a decision, not a trend</div><div class="spcs-lesson-p">Choosing a visual language because it communicates something — not because it's in style — is the difference between a designed system and a styled one.</div></div>
  </div>
</div>

<!-- MORE PROJECTS -->
<div class="spcs-sep-light"></div>
<div class="spcs-more spcs-in">
  <div style="font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#A1A1AA;margin-bottom:6px;">More Work</div>
  <div class="spcs-more-h">Other projects</div>
  <div class="spcs-more-grid">
    ${Object.entries(CS_DATA).filter(([k])=>k!=='venton').map(([k,p])=>`<div class="spcs-more-card" onclick="openCS('${k}')">
      <div class="spcs-more-dom"><span class="spcs-more-pip" style="background:${p.pip};"></span>${p.domain}</div>
      <div class="spcs-more-co">${p.co}</div>
      <div class="spcs-more-desc">${p.headline.slice(0,90)}...</div>
      <div class="spcs-more-lnk">View case study →</div>
    </div>`).join('')}
  </div>
</div>

</div></div>`;

    setTimeout(()=>{
      const main=document.querySelector('.main');
      const cs=document.getElementById('page-casestudy');
      main.scrollTop=0;cs.scrollTop=0;
      const obs=new IntersectionObserver((entries)=>{
        entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('spcs-shown');}});
      },{root:main,threshold:0.06});
      document.querySelectorAll('.spcs-in').forEach(el=>obs.observe(el));
    },60);

  } else if(id==='hilabs'){
    el.innerHTML=`<div class="spcs">

<!-- HERO -->
<div class="spcs-hero">
  <div class="spcs-hero-l" style="background:#fff;">
    <span class="spcs-domain" style="color:#059669;">Health-tech · Enterprise SaaS</span>
    <h1 class="spcs-title" style="color:#09090B;">HarmonyIQ</h1>
    <p class="spcs-meta" style="color:#71717A;">Product Designer I · HiLabs · Jun 2023 – Apr 2024</p>
    <p class="spcs-tagline" style="color:#3D3D3D;">AI-powered contract intelligence for US health plans — turning a weeks-long negotiation process into something a contract manager could actually trust.</p>
    <div class="spcs-kpis">
      <div class="spcs-kpi"><div class="spcs-kpi-v" style="color:#059669;">10K+</div><div class="spcs-kpi-l">Healthcare providers</div></div>
      <div class="spcs-kpi"><div class="spcs-kpi-v" style="color:#059669;">30+</div><div class="spcs-kpi-l">User interviews</div></div>
      <div class="spcs-kpi"><div class="spcs-kpi-v" style="color:#059669;">5</div><div class="spcs-kpi-l">Contract stages unified</div></div>
      <div class="spcs-kpi"><div class="spcs-kpi-v" style="color:#059669;">AA</div><div class="spcs-kpi-l">WCAG 2.1 throughout</div></div>
    </div>
  </div>
  <div class="spcs-hero-r" style="background:#fff;"></div>
</div>

<div class="spcs-body">

<!-- 01 + 02 -->
<div class="spcs-sep"></div>
<div class="spcs-brief spcs-in">
  <div class="spcs-brief-l">
    <div class="spcs-act"><span class="spcs-act-n" style="color:#6EE7B7;">01</span> · THE BRIEF</div>
    <h2 class="spcs-h" style="color:white;">My first month was almost entirely interviews.</h2>
    <p class="spcs-p dark">Healthcare provider contract management is dense. Rates, compliance, network adequacy, renewal cycles — all interconnected, all high-stakes. I joined as PD1 on a team building an AI intelligence layer on top of this.</p>
    <p class="spcs-p dark">Before I could design anything useful, I needed to understand what contract managers actually did with their days — not what the brief said they did. Thirty-plus interviews later, the real problem came into focus.</p>
    <p class="spcs-p dark">My scope: own user research, ground every design decision in clinical workflow reality, and make sure every screen held up to WCAG 2.1 AA — because a healthcare tool that isn't accessible isn't a healthcare tool.</p>
  </div>
  <div class="spcs-brief-r">
    <div class="spcs-act"><span class="spcs-act-n" style="color:#6EE7B7;">02</span> · WHAT THE RESEARCH FOUND</div>
    <h2 class="spcs-h" style="color:white;">Every stage of the contract lifecycle had its own way of breaking.</h2>
    <p class="spcs-p dark" style="margin-bottom:16px;">The problems weren't abstract. They came up in the same forms across every interview, across every market.</p>
    <div style="display:flex;flex-direction:column;gap:8px;">
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:12px 14px;font-size:12px;color:rgba(255,255,255,.6);line-height:1.5;"><strong style="color:#6EE7B7;display:block;margin-bottom:3px;">Proposing blind</strong>Rates were set with no visibility into what competing payers were offering for the same providers.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:12px 14px;font-size:12px;color:rgba(255,255,255,.6);line-height:1.5;"><strong style="color:#6EE7B7;display:block;margin-bottom:3px;">The wrong tools for the job</strong>Word for proposals. Excel for tracking. Email for iteration. No version history. No audit trail.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:12px 14px;font-size:12px;color:rgba(255,255,255,.6);line-height:1.5;"><strong style="color:#6EE7B7;display:block;margin-bottom:3px;">Scattered data, manual assembly</strong>Claims history, member trends, and quality scores lived in three separate systems. Pulling them together took days.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:12px 14px;font-size:12px;color:rgba(255,255,255,.6);line-height:1.5;"><strong style="color:#6EE7B7;display:block;margin-bottom:3px;">Uncaught billing errors</strong>When contract terms and actual claims weren't aligned, providers got reimbursed incorrectly. Nobody had an easy way to catch it.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:12px 14px;font-size:12px;color:rgba(255,255,255,.6);line-height:1.5;"><strong style="color:#6EE7B7;display:block;margin-bottom:3px;">Approval chains with no record</strong>Stakeholders chased sign-offs over email. No flow, no timestamps, no accountability.</div>
    </div>
  </div>
</div>

<!-- 03 ARCHITECTURE -->
<div class="spcs-sep-light"></div>
<div class="spcs-in" style="background:#fff;padding:28px 48px 48px;">
  <div class="spcs-act light"><span style="color:#059669;font-weight:700;">03</span> · ARCHITECTURE</div>
  <h2 class="spcs-h" style="color:#09090B;">The system map came before any screen did.</h2>
  <p class="spcs-p light" style="max-width:700px;margin-bottom:20px;">Once the interviews were synthesised, we mapped the complete contract lifecycle end to end. That diagram became our shared language — with the team and with stakeholders — for the entire project. Three distinct personas emerged from it, each with non-overlapping needs.</p>
  <img src="https://www.stacycarvalhodesigns.com/assets/projects/harmonyiq/user-flow.png"
       alt="HarmonyIQ system architecture and user flow"
       style="width:100%;border-radius:10px;display:block;border:1px solid #E4E4E7;margin-bottom:24px;">
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
    <div style="border:1px solid #E4E4E7;border-radius:10px;padding:18px 20px;">
      <p style="font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#059669;margin:0 0 8px;">Contract Manager</p>
      <p style="font-size:14px;font-weight:700;color:#09090B;margin:0 0 6px;">I need to walk in informed.</p>
      <p style="font-size:13px;color:#71717A;line-height:1.5;margin:0;">Benchmark data, AI-recommended strategy, and a complete picture of the provider — before a single word of negotiation.</p>
    </div>
    <div style="border:1px solid #E4E4E7;border-radius:10px;padding:18px 20px;">
      <p style="font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#059669;margin:0 0 8px;">Compliance Lead</p>
      <p style="font-size:14px;font-weight:700;color:#09090B;margin:0 0 6px;">I need to prove every decision.</p>
      <p style="font-size:13px;color:#71717A;line-height:1.5;margin:0;">Full version history, timestamped approvals, traceable edits. If it happened, it has to be findable.</p>
    </div>
    <div style="border:1px solid #E4E4E7;border-radius:10px;padding:18px 20px;">
      <p style="font-size:11px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:#059669;margin:0 0 8px;">Provider Relations</p>
      <p style="font-size:14px;font-weight:700;color:#09090B;margin:0 0 6px;">I need status without chasing.</p>
      <p style="font-size:13px;color:#71717A;line-height:1.5;margin:0;">Where is this contract, who has it, what's blocking it — in one view, updated in real time.</p>
    </div>
  </div>
</div>

<!-- 04 THE DESIGN -->
<div class="spcs-sep"></div>
<div class="spcs-in" style="background:#09090B;padding:28px 48px 48px;">
  <div class="spcs-act"><span class="spcs-act-n" style="color:#6EE7B7;">04</span> · THE WORK</div>
  <h2 class="spcs-h" style="color:white;">AI embedded at every stage — not bolted on at the end.</h2>
  <p class="spcs-p dark" style="max-width:700px;margin-bottom:32px;">Five screens for five stages. The guiding constraint throughout: the contract manager should always know what the right next action is, and why. WCAG 2.1 AA on every component, every state.</p>

  <div style="margin-bottom:40px;">
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:12px;">
      <div style="width:22px;height:22px;background:rgba(110,231,183,.12);border:1px solid rgba(110,231,183,.3);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#6EE7B7;flex-shrink:0;">01</div>
      <p style="font-size:12px;font-weight:600;color:#6EE7B7;letter-spacing:.08em;text-transform:uppercase;margin:0;">Provider 360</p>
    </div>
    <p class="spcs-p dark" style="margin-bottom:12px;max-width:700px;">The entry point for every negotiation. Before any proposal starts, the contract manager sees the provider's complete picture — AI-flagged alerts, where the contract currently sits in its lifecycle, the financial relationship, and the full interaction history. No more going in blind.</p>
    <img src="https://www.stacycarvalhodesigns.com/assets/projects/harmonyiq/provider-360.png"
         alt="Provider 360 dashboard" style="width:100%;border-radius:10px;display:block;border:1px solid #222;">
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px;">
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:12px 14px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.8);display:block;margin-bottom:2px;">Proactive AI Alerts</strong>What needs attention this week — surfaced by the AI before the manager asks.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:12px 14px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.8);display:block;margin-bottom:2px;">Contract Journey</strong>The current stage in the lifecycle, visible at a glance for every provider.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:12px 14px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.8);display:block;margin-bottom:2px;">Interaction History</strong>Escalations, calls, member feedback — in context where they're actually useful.</div>
    </div>
  </div>

  <div style="margin-bottom:40px;">
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:12px;">
      <div style="width:22px;height:22px;background:rgba(110,231,183,.12);border:1px solid rgba(110,231,183,.3);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#6EE7B7;flex-shrink:0;">02</div>
      <p style="font-size:12px;font-weight:600;color:#6EE7B7;letter-spacing:.08em;text-transform:uppercase;margin:0;">Initiate Proposal</p>
    </div>
    <p class="spcs-p dark" style="margin-bottom:12px;max-width:700px;">Built around how contract managers actually draft — not how a PM imagined they did. A structured proposal editor with embedded rate tables, sitting next to an AI panel that surfaces a recommended strategy, surfaces known friction with this provider, and shows competitive benchmark data in real time.</p>
    <div style="border-radius:10px;overflow:hidden;line-height:0;"><video autoplay loop muted playsinline style="aspect-ratio:16/9;width:100%;display:block;margin:0;">
      <source src="assets/video1.mp4" type="video/mp4">
    </video></div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px;">
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:12px 14px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.8);display:block;margin-bottom:2px;">Strategy Recommendation</strong>AI suggests a rate with its reasoning. Accept, reject, or come in with your own number.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:12px 14px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.8);display:block;margin-bottom:2px;">Provider History Surfaced</strong>Past billing disputes, escalations, known issues — visible before the proposal is sent.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:12px 14px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.8);display:block;margin-bottom:2px;">Rates in the Document</strong>Proposed reimbursement figures sit inside the proposal itself — not in a separate tab.</div>
    </div>
  </div>

  <div style="margin-bottom:40px;">
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:12px;">
      <div style="width:22px;height:22px;background:rgba(110,231,183,.12);border:1px solid rgba(110,231,183,.3);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#6EE7B7;flex-shrink:0;">03</div>
      <p style="font-size:12px;font-weight:600;color:#6EE7B7;letter-spacing:.08em;text-transform:uppercase;margin:0;">Model Pricing</p>
    </div>
    <p class="spcs-p dark" style="margin-bottom:12px;max-width:700px;">Pricing decisions don't happen in a vacuum. This screen lets contract managers run up to three scenarios in parallel — baseline against two variants — each one showing projected reimbursement and real-time risk positioning relative to the contracting strategy.</p>
    <div style="border-radius:10px;overflow:hidden;line-height:0;"><video autoplay loop muted playsinline style="aspect-ratio:16/9;width:100%;display:block;margin:0;">
      <source src="https://www.stacycarvalhodesigns.com/assets/projects/harmonyiq/model-pricing.mp4" type="video/mp4">
    </video></div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px;">
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:12px 14px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.8);display:block;margin-bottom:2px;">Three Scenarios at Once</strong>Baseline vs variant 1 vs variant 2, with variance from baseline shown for each.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:12px 14px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.8);display:block;margin-bottom:2px;">Competitive Benchmarking</strong>Elevance, UHC, Aetna, Cigna — where does this proposal sit against peer payers.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:12px 14px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.8);display:block;margin-bottom:2px;">Live Risk Slider</strong>Pick a scenario, watch the risk position update. Every decision has a visible consequence.</div>
    </div>
  </div>

  <div>
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:12px;">
      <div style="width:22px;height:22px;background:rgba(110,231,183,.12);border:1px solid rgba(110,231,183,.3);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;color:#6EE7B7;flex-shrink:0;">04</div>
      <p style="font-size:12px;font-weight:600;color:#6EE7B7;letter-spacing:.08em;text-transform:uppercase;margin:0;">Finalise, Draft & Sign</p>
    </div>
    <p class="spcs-p dark" style="margin-bottom:12px;max-width:700px;">After a scenario is selected, the AI recalculates the overall risk position and auto-populates the contract with NPI data it has verified against public sources. The result: a fully drafted, reviewable contract ready for provider signature — with a complete edit history from day one.</p>
    <div style="border-radius:10px;overflow:hidden;line-height:0;"><video autoplay loop muted playsinline style="aspect-ratio:16/9;width:100%;display:block;margin:0;">
      <source src="https://www.stacycarvalhodesigns.com/assets/projects/harmonyiq/finalize-draft-sign.mp4" type="video/mp4">
    </video></div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px;">
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:12px 14px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.8);display:block;margin-bottom:2px;">Risk Recalculation</strong>Every change is re-evaluated before the contract moves forward.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:12px 14px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.8);display:block;margin-bottom:2px;">AI-Verified NPI Data</strong>Provider details auto-populated from verified public sources. Twelve fields filled; eight flagged for human review.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:12px 14px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.8);display:block;margin-bottom:2px;">Full Audit Trail</strong>Every version, every edit, every signature timestamped. A process that used to take weeks, closed in one session.</div>
    </div>
  </div>
</div>

<!-- 05 DESIGN DECISIONS -->
<div class="spcs-sep-light"></div>
<div class="spcs-in" style="background:#fff;padding:28px 48px 48px;">
  <div class="spcs-act light"><span style="color:#059669;font-weight:700;">05</span> · DESIGN DECISIONS</div>
  <h2 class="spcs-h" style="color:#09090B;">Where the real thinking happened.</h2>
  <div style="margin-top:16px;">
    <div style="display:grid;grid-template-columns:1fr 1fr;padding:20px 0;border-bottom:1px solid #E4E4E7;align-items:start;">
      <div style="padding-right:32px;border-right:1px solid #E4E4E7;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#A1A1AA;display:block;margin-bottom:8px;">Instead of</span>
        <p style="font-size:15px;font-weight:700;color:#D1D5DB;text-decoration:line-through;margin:0 0 6px;">A single AI recommendation card</p>
        <p style="font-size:13px;color:#9CA3AF;line-height:1.6;margin:0;">"Recommended rate: $X." Accept or ignore.</p>
      </div>
      <div style="padding-left:32px;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#059669;display:block;margin-bottom:8px;">We used</span>
        <p style="font-size:15px;font-weight:700;color:#09090B;margin:0 0 6px;">A positioning slider that shows consequences</p>
        <p style="font-size:13px;color:#71717A;line-height:1.6;margin:0;">Moving the slider makes the downstream risk visible. Every proposal becomes a strategic decision, not a field to fill.</p>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;padding:20px 0;border-bottom:1px solid #E4E4E7;align-items:start;">
      <div style="padding-right:32px;border-right:1px solid #E4E4E7;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#A1A1AA;display:block;margin-bottom:8px;">Instead of</span>
        <p style="font-size:15px;font-weight:700;color:#D1D5DB;text-decoration:line-through;margin:0 0 6px;">Keeping provider friction history out of the flow</p>
        <p style="font-size:13px;color:#9CA3AF;line-height:1.6;margin:0;">A clean slate per proposal. Past disputes are the past.</p>
      </div>
      <div style="padding-left:32px;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#059669;display:block;margin-bottom:8px;">We used</span>
        <p style="font-size:15px;font-weight:700;color:#09090B;margin:0 0 6px;">Friction history as a feature, not a footnote</p>
        <p style="font-size:13px;color:#71717A;line-height:1.6;margin:0;">Knowing a provider has a billing dispute history changes how you walk into a renewal. That context is too valuable to hide.</p>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;padding:20px 0;border-bottom:1px solid #E4E4E7;align-items:start;">
      <div style="padding-right:32px;border-right:1px solid #E4E4E7;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#A1A1AA;display:block;margin-bottom:8px;">Instead of</span>
        <p style="font-size:15px;font-weight:700;color:#D1D5DB;text-decoration:line-through;margin:0 0 6px;">An "AI Insights" tab you opt into</p>
        <p style="font-size:13px;color:#9CA3AF;line-height:1.6;margin:0;">AI lives in one place. You go there when you want it.</p>
      </div>
      <div style="padding-left:32px;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#059669;display:block;margin-bottom:8px;">We used</span>
        <p style="font-size:15px;font-weight:700;color:#09090B;margin:0 0 6px;">AI embedded at every decision point</p>
        <p style="font-size:13px;color:#71717A;line-height:1.6;margin:0;">In the proposal editor, inside pricing simulation, within the draft. Always present, never a detour.</p>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;padding:20px 0;align-items:start;">
      <div style="padding-right:32px;border-right:1px solid #E4E4E7;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#A1A1AA;display:block;margin-bottom:8px;">Instead of</span>
        <p style="font-size:15px;font-weight:700;color:#D1D5DB;text-decoration:line-through;margin:0 0 6px;">Full AI automation</p>
        <p style="font-size:13px;color:#9CA3AF;line-height:1.6;margin:0;">Let the AI fill everything. Move faster. Trust it.</p>
      </div>
      <div style="padding-left:32px;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#059669;display:block;margin-bottom:8px;">We used</span>
        <p style="font-size:15px;font-weight:700;color:#09090B;margin:0 0 6px;">AI fills, human reviews</p>
        <p style="font-size:13px;color:#71717A;line-height:1.6;margin:0;">12 fields filled from verified sources. 8 fields flagged for human confirmation. Trust is built through transparency, not magic.</p>
      </div>
    </div>
  </div>
</div>

<!-- 06 + 07 OUTCOME + REFLECTION -->
<div class="spcs-sep"></div>
<div class="spcs-outcome-layout spcs-in">
  <div class="spcs-refl-col">
    <div class="spcs-act"><span class="spcs-act-n" style="color:#6EE7B7;">07</span> · REFLECTION</div>
    <h2 class="spcs-h" style="color:white;margin-bottom:24px;">What this built in me.</h2>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n" style="color:#6EE7B7;">01</div><div class="spcs-lesson-t">Research is design</div><div class="spcs-lesson-p">The 30+ interviews weren't prep work before the real design started. They were the design. The architecture, the AI touchpoints, the persona logic — all of it came directly from what people said in those sessions.</div></div>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n" style="color:#6EE7B7;">02</div><div class="spcs-lesson-t">Accessibility is not a checklist item</div><div class="spcs-lesson-p">Building WCAG 2.1 AA into the component library from day one — rather than auditing at the end — meant we never had to retrofit. The compliance lead persona made this non-negotiable: an inaccessible audit trail defeats the point.</div></div>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n" style="color:#6EE7B7;">03</div><div class="spcs-lesson-t">Show the AI's reasoning</div><div class="spcs-lesson-p">Healthcare professionals don't accept black-box outputs. Every recommendation needed to show its logic. Users who could see why the AI suggested something trusted it significantly more than users who just saw the output.</div></div>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n" style="color:#6EE7B7;">04</div><div class="spcs-lesson-t">Upstream decisions have long shadows</div><div class="spcs-lesson-p">The system architecture built in the first two weeks set the ceiling for everything designed afterward. Getting that right — or wrong — compounds with every screen.</div></div>
  </div>
  <div class="spcs-out-col">
    <div class="spcs-act"><span class="spcs-act-n" style="color:#6EE7B7;">06</span> · OUTCOME</div>
    <h2 class="spcs-h" style="color:white;margin-bottom:24px;">What we shipped.</h2>
    <div class="spcs-outcome-stats">
      <div class="spcs-outcome-stat"><div class="spcs-outcome-n" style="color:#6EE7B7;">5</div><div class="spcs-outcome-l">Contract stages brought into one platform</div></div>
      <div class="spcs-outcome-stat"><div class="spcs-outcome-n" style="color:#6EE7B7;">10K+</div><div class="spcs-outcome-l">Providers across the US healthcare market</div></div>
      <div class="spcs-outcome-stat"><div class="spcs-outcome-n" style="color:#6EE7B7;">30+</div><div class="spcs-outcome-l">Interviews driving every design decision</div></div>
      <div class="spcs-outcome-stat"><div class="spcs-outcome-n" style="color:#6EE7B7;">AA</div><div class="spcs-outcome-l">WCAG 2.1 compliance across the full platform</div></div>
    </div>
  </div>
</div>

<!-- MORE PROJECTS -->
<div class="spcs-sep-light"></div>
<div class="spcs-more spcs-in">
  <div style="font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#A1A1AA;margin-bottom:6px;">More Work</div>
  <div class="spcs-more-h">Other projects</div>
  <div class="spcs-more-grid">
    ${Object.entries(CS_DATA).filter(([k])=>k!=='hilabs').map(([k,p])=>`<div class="spcs-more-card" onclick="openCS('${k}')">
      <div class="spcs-more-dom"><span class="spcs-more-pip" style="background:${p.pip};"></span>${p.domain}</div>
      <div class="spcs-more-co">${p.co}</div>
      <div class="spcs-more-desc">${p.headline.slice(0,90)}...</div>
      <div class="spcs-more-lnk">View case study →</div>
    </div>`).join('')}
  </div>
</div>

</div></div>`;

    setTimeout(()=>{
      const main=document.querySelector('.main');
      main.scrollTop=0;
      const obs=new IntersectionObserver((entries)=>{
        entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('spcs-shown');}});
      },{root:main,threshold:0.06});
      document.querySelectorAll('.spcs-in').forEach(el=>obs.observe(el));
    },60);


  } else if(id==='quartic'){
    el.innerHTML=`<div class="spcs">

<!-- HERO -->
<div class="spcs-hero">
  <div class="spcs-hero-l" style="background:#fff;">
    <span class="spcs-domain" style="color:#2563EB;">Enterprise AI · Manufacturing</span>
    <h1 class="spcs-title" style="color:#09090B;">Quartic.ai MVDA</h1>
    <p class="spcs-meta" style="color:#71717A;">Product Designer I → II · May 2024 – Present</p>
    <p class="spcs-tagline" style="color:#3D3D3D;">Rebuilt a multivariate data analysis workbench for manufacturing engineers — from a rigid, table-heavy tool into a flexible, visualisation-first platform for 50K+ users across Fortune 500 plants.</p>
    <div class="spcs-kpis">
      <div class="spcs-kpi"><div class="spcs-kpi-v" style="color:#2563EB;">50K+</div><div class="spcs-kpi-l">Users across plants</div></div>
      <div class="spcs-kpi"><div class="spcs-kpi-v" style="color:#2563EB;">$2M+</div><div class="spcs-kpi-l">In deals influenced</div></div>
      <div class="spcs-kpi"><div class="spcs-kpi-v" style="color:#2563EB;">40%</div><div class="spcs-kpi-l">Faster design-to-dev</div></div>
      <div class="spcs-kpi"><div class="spcs-kpi-v" style="color:#2563EB;">15+</div><div class="spcs-kpi-l">Product modules</div></div>
    </div>
  </div>
  <div class="spcs-hero-r" style="background:#fff;"></div>
</div>

<div class="spcs-body">

<!-- 01 + 02 BRIEF + CONTEXT -->
<div class="spcs-sep"></div>
<div class="spcs-brief spcs-in">
  <div class="spcs-brief-l">
    <div class="spcs-act"><span class="spcs-act-n" style="color:#93C5FD;">01</span> · THE PRODUCT</div>
    <h2 class="spcs-h" style="color:white;">Manufacturing plants generate enormous amounts of sensor data. Most of it goes unused.</h2>
    <p class="spcs-p dark">Quartic.ai is a decision-intelligence platform that puts that data to work. Sensors on equipment capture hundreds of features at every step of production — temperature, pressure, pH, wavelength readings. MVDA (Multivariate Data Analysis) is the module that lets engineers make sense of it.</p>
    <p class="spcs-p dark">The workflow: build statistical models from historical batch data, then run live batches against those models in real time. If a batch starts deviating from the trained norm, the model surfaces it — so engineers can intervene before a faulty batch reaches the end of the line.</p>
  </div>
  <div class="spcs-brief-r">
    <div class="spcs-act"><span class="spcs-act-n" style="color:#93C5FD;">02</span> · WHAT I WALKED INTO</div>
    <h2 class="spcs-h" style="color:white;">The product existed. It was genuinely broken.</h2>
    <p class="spcs-p dark">The existing MVDA was usable in the way a spreadsheet is usable — technically functional, but deeply misaligned with how manufacturing engineers actually think and work. Everything was in tables. The workflow was linear and unforgiving. Navigation required users to hold a mental model of decisions made three steps back.</p>
    <div style="display:flex;flex-direction:column;gap:7px;margin-top:16px;">
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:11px 14px;font-size:12px;color:rgba(255,255,255,.6);line-height:1.5;"><strong style="color:#93C5FD;display:block;margin-bottom:2px;">Tables everywhere</strong>Engineers were trying to spot patterns and outliers in data — tables are the worst tool for that.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:11px 14px;font-size:12px;color:rgba(255,255,255,.6);line-height:1.5;"><strong style="color:#93C5FD;display:block;margin-bottom:2px;">Rigid linear workflow</strong>Made one choice early on? Wrong. You're starting over. The flow didn't let users move backwards or skip steps.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:11px 14px;font-size:12px;color:rgba(255,255,255,.6);line-height:1.5;"><strong style="color:#93C5FD;display:block;margin-bottom:2px;">No scalability</strong>Large projects with many models and datasets became unmanageable. The project management layer barely existed.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:11px 14px;font-size:12px;color:rgba(255,255,255,.6);line-height:1.5;"><strong style="color:#93C5FD;display:block;margin-bottom:2px;">Design inconsistency</strong>MVDA didn't follow Quartic's design language. Every module felt like a different product.</div>
    </div>
  </div>
</div>

<!-- 03 THE USERS -->
<div class="spcs-sep-light"></div>
<div class="spcs-in" style="background:#fff;padding:48px;">
  <div class="spcs-act light"><span style="color:#2563EB;font-weight:700;">03</span> · THE USERS</div>
  <h2 class="spcs-h" style="color:#09090B;margin-bottom:16px;">Two very different people using the same tool.</h2>
  <p class="spcs-p light" style="max-width:700px;margin-bottom:32px;">Research surfaced two personas with near-opposite needs. Designing for both without alienating either was the central tension of the whole project — one builds the models, the other lives with their output.</p>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">

    <!-- Persona A: Model Builder -->
    <div style="border:1.5px solid #BFDBFE;border-radius:14px;background:#EFF6FF;overflow:hidden;">
      <div style="padding:22px 24px;border-bottom:1px solid #DBEAFE;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <div style="width:38px;height:38px;border-radius:10px;background:#2563EB;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
          </div>
          <div>
            <p style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#2563EB;margin:0;">Data Analyst → Model Builder</p>
            <p style="font-size:15px;font-weight:700;color:#09090B;margin:2px 0 0;">Needs control, precision and depth.</p>
          </div>
        </div>
        <p style="font-family:var(--fd);font-style:italic;font-size:14px;line-height:1.5;color:#1E40AF;margin:0;">"Give me every knob. I know exactly what I'm tuning and why."</p>
      </div>
      <div style="padding:20px 24px;display:grid;grid-template-columns:1fr;gap:16px;">
        <div>
          <p style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#2563EB;margin:0 0 8px;">Goals</p>
          <div style="display:flex;flex-direction:column;gap:6px;font-size:13px;color:#3B3B3B;line-height:1.45;">
            <div style="display:flex;gap:8px;"><span style="color:#2563EB;flex-shrink:0;">→</span>Configure exactly which batches, features and data types feed each dataset</div>
            <div style="display:flex;gap:8px;"><span style="color:#2563EB;flex-shrink:0;">→</span>Run transformations, handle outliers, tune model parameters</div>
          </div>
        </div>
        <div>
          <p style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#2563EB;margin:0 0 8px;">Behaviour</p>
          <div style="display:flex;flex-direction:column;gap:6px;font-size:13px;color:#3B3B3B;line-height:1.45;">
            <div style="display:flex;gap:8px;"><span style="color:#2563EB;flex-shrink:0;">•</span>Prefers interactive visualisation over raw tables</div>
            <div style="display:flex;gap:8px;"><span style="color:#2563EB;flex-shrink:0;">•</span>Uses the product daily and deeply — power-user expectations</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Persona B: Monitor -->
    <div style="border:1.5px solid #E4E4E7;border-radius:14px;background:#FAFAFA;overflow:hidden;">
      <div style="padding:22px 24px;border-bottom:1px solid #EFEFEF;">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px;">
          <div style="width:38px;height:38px;border-radius:10px;background:#52525B;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          </div>
          <div>
            <p style="font-size:11px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#71717A;margin:0;">Process Engineer → Monitor</p>
            <p style="font-size:15px;font-weight:700;color:#09090B;margin:2px 0 0;">Needs signal, not noise.</p>
          </div>
        </div>
        <p style="font-family:var(--fd);font-style:italic;font-size:14px;line-height:1.5;color:#52525B;margin:0;">"Just tell me if something's wrong with the line right now."</p>
      </div>
      <div style="padding:20px 24px;display:grid;grid-template-columns:1fr;gap:16px;">
        <div>
          <p style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#71717A;margin:0 0 8px;">Goals</p>
          <div style="display:flex;flex-direction:column;gap:6px;font-size:13px;color:#3B3B3B;line-height:1.45;">
            <div style="display:flex;gap:8px;"><span style="color:#71717A;flex-shrink:0;">→</span>Know instantly if a live batch is deviating</div>
            <div style="display:flex;gap:8px;"><span style="color:#71717A;flex-shrink:0;">→</span>See high-level summaries and anomaly alerts at a glance</div>
          </div>
        </div>
        <div>
          <p style="font-size:10px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#71717A;margin:0 0 8px;">Behaviour</p>
          <div style="display:flex;flex-direction:column;gap:6px;font-size:13px;color:#3B3B3B;line-height:1.45;">
            <div style="display:flex;gap:8px;"><span style="color:#71717A;flex-shrink:0;">•</span>Doesn't want to configure anything — just see current state</div>
            <div style="display:flex;gap:8px;"><span style="color:#71717A;flex-shrink:0;">•</span>Visual storytelling over statistics</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<!-- 04 MY SCOPE -->
<div class="spcs-sep"></div>
<div class="spcs-in" style="background:#09090B;padding:48px;">
  <div class="spcs-act"><span class="spcs-act-n" style="color:#93C5FD;">04</span> · MY SCOPE</div>
  <div style="display:grid;grid-template-columns:0.8fr 1.2fr;gap:48px;align-items:start;margin-top:8px;">
    <div style="position:sticky;top:20px;">
      <h2 class="spcs-h" style="color:white;margin-bottom:16px;">What I owned end to end.</h2>
      <p class="spcs-p dark" style="margin:0;">Four areas, one accountable designer — from the research artefacts through to the components engineers built against.</p>
    </div>
    <div style="display:flex;flex-direction:column;gap:0;border:1px solid #1f1f1f;border-radius:14px;overflow:hidden;">
      <div style="display:flex;gap:18px;padding:22px 24px;border-bottom:1px solid #1f1f1f;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:9px;background:rgba(147,197,253,.12);border:1px solid rgba(147,197,253,.25);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="M16 13H8M16 17H8M10 9H8"/></svg>
        </div>
        <div><p style="font-size:14px;font-weight:700;color:white;margin:0 0 4px;">Design Documentation</p><p style="font-size:13px;color:rgba(255,255,255,.5);line-height:1.55;margin:0;">Full UX spec — personas, journeys, functional requirements, flow additions, content and error states for every screen.</p></div>
      </div>
      <div style="display:flex;gap:18px;padding:22px 24px;border-bottom:1px solid #1f1f1f;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:9px;background:rgba(147,197,253,.12);border:1px solid rgba(147,197,253,.25);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>
        </div>
        <div><p style="font-size:14px;font-weight:700;color:white;margin:0 0 4px;">Design System</p><p style="font-size:13px;color:rgba(255,255,255,.5);line-height:1.55;margin:0;">Adapted an open-source component library to Quartic's branding and domain. Cut design-to-dev handoff time by <strong style="color:#93C5FD;">40%</strong> across 15+ modules.</p></div>
      </div>
      <div style="display:flex;gap:18px;padding:22px 24px;border-bottom:1px solid #1f1f1f;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:9px;background:rgba(147,197,253,.12);border:1px solid rgba(147,197,253,.25);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r="2.5"/><circle cx="6.5" cy="11.5" r="2.5"/><circle cx="17.5" cy="14.5" r="2.5"/><path d="M12 22a10 10 0 1 1 10-10"/></svg>
        </div>
        <div><p style="font-size:14px;font-weight:700;color:white;margin:0 0 4px;">Hi-fi Frames</p><p style="font-size:13px;color:rgba(255,255,255,.5);line-height:1.55;margin:0;">End-to-end hi-fidelity designs for the full MVDA redesign — dataset wizard, model analysis dashboards, live monitoring views.</p></div>
      </div>
      <div style="display:flex;gap:18px;padding:22px 24px;align-items:flex-start;">
        <div style="width:36px;height:36px;border-radius:9px;background:rgba(147,197,253,.12);border:1px solid rgba(147,197,253,.25);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m8 18-6-6 6-6"/><path d="m16 6 6 6-6 6"/></svg>
        </div>
        <div><p style="font-size:14px;font-weight:700;color:white;margin:0 0 4px;">Engineering Collaboration</p><p style="font-size:13px;color:rgba(255,255,255,.5);line-height:1.55;margin:0;">Partnered directly with ML engineers to translate PCA/PLS outputs into interfaces engineers could interpret without a statistics degree.</p></div>
      </div>
    </div>
  </div>
</div>

<!-- 05 THE WORK: ADD DATASET -->
<div class="spcs-sep-light"></div>
<div class="spcs-in" style="background:#fff;padding:28px 48px 48px;">
  <div class="spcs-act light"><span style="color:#2563EB;font-weight:700;">05</span> · THE WORK — DATASET CREATION</div>
  <h2 class="spcs-h" style="color:#09090B;">Getting the right data in was half the problem.</h2>
  <p class="spcs-p light" style="max-width:700px;margin-bottom:20px;">Before a model can be built, engineers create a dataset — selecting which product, recipes, batches, and feature types to include. The old flow was a confusing single form. The redesign is a 6-step wizard handling three data types (time series, discrete, spectral) with free navigation between completed steps and contextual validation at every stage.</p>
  <div style="border-radius:10px;overflow:hidden;margin-bottom:16px;line-height:0;"><video autoplay loop muted playsinline style="width:100%;display:block;margin:0;">
    <source src="assets/video2.mp4" type="video/mp4">
  </video></div>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-bottom:48px;">
    <div style="background:#F4F4F5;border-radius:8px;padding:12px 14px;font-size:12px;color:#52525B;line-height:1.5;"><strong style="color:#09090B;display:block;margin-bottom:2px;">Product & Recipe → Batches</strong>Configure which product and recipe to pull from, then select up to 100 batches. Handles multi-recipe combinations with inline validation for conflicting assets or missing aliases.</div>
    <div style="background:#F4F4F5;border-radius:8px;padding:12px 14px;font-size:12px;color:#52525B;line-height:1.5;"><strong style="color:#09090B;display:block;margin-bottom:2px;">Features — 3 types</strong>Time series (sensor readings over time), discrete (single-point values), and spectral (wavelength data) each have their own step with smart empty states and minimum-selection guards.</div>
    <div style="background:#F4F4F5;border-radius:8px;padding:12px 14px;font-size:12px;color:#52525B;line-height:1.5;"><strong style="color:#09090B;display:block;margin-bottom:2px;">Review & Confirm</strong>Summarises all selections before data import. Warns at the review step if no datasets will be created — before any processing is triggered.</div>
  </div>
<div class="spcs-sep"></div>
</div>
<div class="spcs-sep"></div>
<div class="spcs-in" style="background:#09090B;padding:48px;">
  <div class="spcs-act"><span class="spcs-act-n" style="color:#93C5FD;">06</span> · THE WORK — ANALYSIS & MONITORING</div>
  <h2 class="spcs-h" style="color:white;margin-bottom:16px;">Two model types. Two very different jobs to be done.</h2>
  <p class="spcs-p dark" style="max-width:720px;margin-bottom:20px;">Same platform, two fundamentally different mental models. Naming "PCA" and "PLS" as <strong style="color:#93C5FD;">Analysis</strong> and <strong style="color:#93C5FD;">Production</strong> models was itself a design decision — making purpose clear without requiring a statistics background.</p>

  <!-- contrast strip -->
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:36px;">
    <div style="border:1px solid #1f2a3a;background:linear-gradient(160deg,#0d1420,#0a0e15);border-radius:12px;padding:18px 20px;display:flex;gap:14px;align-items:center;">
      <div style="width:40px;height:40px;border-radius:10px;background:rgba(147,197,253,.12);border:1px solid rgba(147,197,253,.25);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v5h5"/><path d="M3.05 13A9 9 0 1 0 6 5.3L3 8"/></svg>
      </div>
      <div>
        <p style="font-size:13px;font-weight:700;color:white;margin:0 0 2px;">Analysis Model</p>
        <p style="font-size:12px;color:#93C5FD;margin:0;">Looking backward — comparing historical batches</p>
      </div>
    </div>
    <div style="border:1px solid #1f2a3a;background:linear-gradient(160deg,#0d1420,#0a0e15);border-radius:12px;padding:18px 20px;display:flex;gap:14px;align-items:center;">
      <div style="width:40px;height:40px;border-radius:10px;background:rgba(147,197,253,.12);border:1px solid rgba(147,197,253,.25);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#93C5FD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 3v5h-5"/><path d="M20.95 13A9 9 0 1 1 18 5.3L21 8"/></svg>
      </div>
      <div>
        <p style="font-size:13px;font-weight:700;color:white;margin:0 0 2px;">Production Model</p>
        <p style="font-size:12px;color:#93C5FD;margin:0;">Looking forward — flagging live deviations</p>
      </div>
    </div>
  </div>

  <!-- Analysis Model block -->
  <div style="margin-bottom:36px;">
    <div style="display:flex;gap:10px;align-items:baseline;margin-bottom:14px;">
      <span style="font-family:var(--fd);font-style:italic;font-size:13px;color:#93C5FD;">01</span>
      <div>
        <p style="font-size:15px;font-weight:700;color:white;margin:0 0 2px;">Analysis Model · Group Comparison</p>
        <p style="font-size:12px;color:rgba(255,255,255,.4);margin:0;">Retrospective batch analysis</p>
      </div>
    </div>
    <p class="spcs-p dark" style="margin-bottom:14px;max-width:760px;">A table-heavy report became a two-panel workbench. Left: a multi-feature projection scatter (PC1 vs PC2) where engineers group batches visually — good against bad — to understand what separates them, then select which batches form the training set. Right: feature contribution and single-feature trend panels explain what's driving any difference.</p>
    <div style="border-radius:12px;overflow:hidden;margin-bottom:10px;line-height:0;"><video autoplay loop muted playsinline style="width:100%;display:block;margin:0;"><source src="assets/video3.mp4" type="video/mp4"></video></div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:8px;">
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:13px 15px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.85);display:block;margin-bottom:3px;">Multi-feature Projection</strong>Interactive scatter. Select batches, assign to groups, watch clustering emerge.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:13px 15px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.85);display:block;margin-bottom:3px;">Feature Contribution</strong>Bars ranked by variance explained. Click one to see its trend below.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:13px 15px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.85);display:block;margin-bottom:3px;">Single Feature Trend</strong>Group A vs B mean and ±3σ confidence bands over time.</div>
    </div>
  </div>

  <!-- divider -->
  <div style="height:1px;background:#1f1f1f;margin-bottom:36px;"></div>

  <!-- Production Model block -->
  <div>
    <div style="display:flex;gap:10px;align-items:baseline;margin-bottom:14px;">
      <span style="font-family:var(--fd);font-style:italic;font-size:13px;color:#93C5FD;">02</span>
      <div>
        <p style="font-size:15px;font-weight:700;color:white;margin:0 0 2px;">Production Model · Live Monitoring</p>
        <p style="font-size:12px;color:rgba(255,255,255,.4);margin:0;">Real-time batch ingestion</p>
      </div>
    </div>
    <p class="spcs-p dark" style="margin-bottom:14px;max-width:760px;">Production models ingest live batches in real time. The monitoring view shows every batch's score trajectory as it runs — letting engineers catch a deviation forming before the batch ends. Loading-comparison heatmaps and Hotelling T² charts give the deeper diagnostic views for when something goes wrong.</p>
    <img src="assets/img4.jpeg" alt="Production model monitoring screens" style="width:100%;border-radius:12px;display:block;border:1px solid #222;margin-bottom:10px;">
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;">
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:13px 15px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.85);display:block;margin-bottom:3px;">Model List</strong>All models with status — Active, Paused, Monitoring Paused — at a glance.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:13px 15px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.85);display:block;margin-bottom:3px;">Scores Line Plot</strong>Every live batch overlaid. Divergence from norm is immediately visible.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:13px 15px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.85);display:block;margin-bottom:3px;">Loading Comparison</strong>Heatmap of which variables load most on each principal component.</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:13px 15px;font-size:12px;color:rgba(255,255,255,.5);line-height:1.5;"><strong style="color:rgba(255,255,255,.85);display:block;margin-bottom:3px;">Hotelling T²</strong>Statistical control chart per batch. Crosses the limit → needs attention.</div>
    </div>
  </div>
</div>

<!-- 07 DESIGN DECISIONS -->
<div class="spcs-sep-light"></div>
<div class="spcs-in" style="background:#fff;padding:28px 48px 48px;">
  <div class="spcs-act light"><span style="color:#2563EB;font-weight:700;">07</span> · DESIGN DECISIONS</div>
  <h2 class="spcs-h" style="color:#09090B;">The tradeoffs that mattered.</h2>
  <div style="margin-top:16px;">
    <div style="display:grid;grid-template-columns:1fr 1fr;padding:20px 0;border-bottom:1px solid #E4E4E7;align-items:start;">
      <div style="padding-right:32px;border-right:1px solid #E4E4E7;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#A1A1AA;display:block;margin-bottom:8px;">Instead of</span>
        <p style="font-size:15px;font-weight:700;color:#D1D5DB;text-decoration:line-through;margin:0 0 6px;">Tables of batch data</p>
        <p style="font-size:13px;color:#9CA3AF;line-height:1.6;margin:0;">Rows and columns of numbers for engineers trying to understand batch behaviour across hundreds of variables.</p>
      </div>
      <div style="padding-left:32px;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#2563EB;display:block;margin-bottom:8px;">We used</span>
        <p style="font-size:15px;font-weight:700;color:#09090B;margin:0 0 6px;">Interactive scatter plots + band charts</p>
        <p style="font-size:13px;color:#71717A;line-height:1.6;margin:0;">Patterns and outliers that were invisible in tables become immediately obvious when 100 batches are plotted as points in a 2D projection. Clicking a point drills into that batch's feature behaviour.</p>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;padding:20px 0;border-bottom:1px solid #E4E4E7;align-items:start;">
      <div style="padding-right:32px;border-right:1px solid #E4E4E7;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#A1A1AA;display:block;margin-bottom:8px;">Instead of</span>
        <p style="font-size:15px;font-weight:700;color:#D1D5DB;text-decoration:line-through;margin:0 0 6px;">A linear, unforgiving wizard</p>
        <p style="font-size:13px;color:#9CA3AF;line-height:1.6;margin:0;">Start over if you realised you picked the wrong recipe in step 1 after completing step 5.</p>
      </div>
      <div style="padding-left:32px;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#2563EB;display:block;margin-bottom:8px;">We used</span>
        <p style="font-size:15px;font-weight:700;color:#09090B;margin:0 0 6px;">Free navigation between completed steps</p>
        <p style="font-size:13px;color:#71717A;line-height:1.6;margin:0;">Any completed step is tappable from the sidebar. Go back, change a selection, and the downstream steps update their validation state accordingly — without resetting everything else.</p>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;padding:20px 0;border-bottom:1px solid #E4E4E7;align-items:start;">
      <div style="padding-right:32px;border-right:1px solid #E4E4E7;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#A1A1AA;display:block;margin-bottom:8px;">Instead of</span>
        <p style="font-size:15px;font-weight:700;color:#D1D5DB;text-decoration:line-through;margin:0 0 6px;">Errors revealed at submission</p>
        <p style="font-size:13px;color:#9CA3AF;line-height:1.6;margin:0;">The old flow would fail at the end when required configurations were missing, with no indication of where or why.</p>
      </div>
      <div style="padding-left:32px;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#2563EB;display:block;margin-bottom:8px;">We used</span>
        <p style="font-size:15px;font-weight:700;color:#09090B;margin:0 0 6px;">Contextual validation at every step</p>
        <p style="font-size:13px;color:#71717A;line-height:1.6;margin:0;">Alias missing? Shown inline at the feature it affects. Recipes have no common batches? Told in step 1, not at the review screen. Engineers always know exactly what needs fixing and where.</p>
      </div>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;padding:20px 0;align-items:start;">
      <div style="padding-right:32px;border-right:1px solid #E4E4E7;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#A1A1AA;display:block;margin-bottom:8px;">Instead of</span>
        <p style="font-size:15px;font-weight:700;color:#D1D5DB;text-decoration:line-through;margin:0 0 6px;">AI outputs as black boxes</p>
        <p style="font-size:13px;color:#9CA3AF;line-height:1.6;margin:0;">A model says "batch 43 is anomalous." Why? Unknown.</p>
      </div>
      <div style="padding-left:32px;">
        <span style="font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#2563EB;display:block;margin-bottom:8px;">We used</span>
        <p style="font-size:15px;font-weight:700;color:#09090B;margin:0 0 6px;">Explainability built into the analysis</p>
        <p style="font-size:13px;color:#71717A;line-height:1.6;margin:0;">Feature contribution charts show which variables drove the anomaly. Loading comparisons explain the model's own structure. Engineers don't need a statistics degree — they need enough context to act.</p>
      </div>
    </div>
  </div>
</div>

<!-- 08 OUTCOME + REFLECTION -->
<div class="spcs-sep"></div>
<div class="spcs-outcome-layout spcs-in">
  <div class="spcs-refl-col">
    <div class="spcs-act"><span class="spcs-act-n" style="color:#93C5FD;">08</span> · REFLECTION</div>
    <h2 class="spcs-h" style="color:white;margin-bottom:24px;">What this built in me.</h2>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n" style="color:#93C5FD;">01</div><div class="spcs-lesson-t">Domain fluency is a design skill</div><div class="spcs-lesson-p">I could not design MVDA without understanding what PCA actually does, why latent variables matter, and what a process engineer sees when they look at a Hotelling T² chart. The investment in domain knowledge paid back in every single design decision.</div></div>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n" style="color:#93C5FD;">02</div><div class="spcs-lesson-t">A component library is a product too</div><div class="spcs-lesson-p">Adapting an open-source library for Quartic's needs meant making thousands of small decisions about tokens, states, and behaviour. Getting that right — and documented — is what made the 40% handoff reduction possible.</div></div>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n" style="color:#93C5FD;">03</div><div class="spcs-lesson-t">Visualisation is the UX, not decoration</div><div class="spcs-lesson-p">The entire value of MVDA depends on engineers being able to read a scatter plot and understand what it's telling them about their production line. The chart design wasn't a visual layer on top of the product — it was the product.</div></div>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n" style="color:#93C5FD;">04</div><div class="spcs-lesson-t">Documentation creates alignment</div><div class="spcs-lesson-p">The UX spec I wrote before designing anything became the single source of truth for the team — engineering, product, and stakeholders. Decisions stopped being revisited because they were written down.</div></div>
  </div>
  <div class="spcs-out-col">
    <div class="spcs-act"><span class="spcs-act-n" style="color:#93C5FD;">09</span> · OUTCOME</div>
    <h2 class="spcs-h" style="color:white;margin-bottom:24px;">What shipped.</h2>
    <div class="spcs-outcome-stats">
      <div class="spcs-outcome-stat"><div class="spcs-outcome-n" style="color:#93C5FD;">50K+</div><div class="spcs-outcome-l">Users across Fortune 500 manufacturing plants</div></div>
      <div class="spcs-outcome-stat"><div class="spcs-outcome-n" style="color:#93C5FD;">$2M+</div><div class="spcs-outcome-l">In closed deals this work contributed to</div></div>
      <div class="spcs-outcome-stat"><div class="spcs-outcome-n" style="color:#93C5FD;">40%</div><div class="spcs-outcome-l">Reduction in design-to-dev handoff time</div></div>
      <div class="spcs-outcome-stat"><div class="spcs-outcome-n" style="color:#93C5FD;">PD II</div><div class="spcs-outcome-l">Promoted April 2025 — one of two designers retained post-acquisition</div></div>
    </div>
  </div>
</div>

<!-- MORE PROJECTS -->
<div class="spcs-sep-light"></div>
<div class="spcs-more spcs-in">
  <div style="font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#A1A1AA;margin-bottom:6px;">More Work</div>
  <div class="spcs-more-h">Other projects</div>
  <div class="spcs-more-grid">
    ${Object.entries(CS_DATA).filter(([k])=>k!=='quartic').map(([k,p])=>`<div class="spcs-more-card" onclick="openCS('${k}')">
      <div class="spcs-more-dom"><span class="spcs-more-pip" style="background:${p.pip};"></span>${p.domain}</div>
      <div class="spcs-more-co">${p.co}</div>
      <div class="spcs-more-desc">${p.headline.slice(0,90)}...</div>
      <div class="spcs-more-lnk">View case study →</div>
    </div>`).join('')}
  </div>
</div>

</div></div>`;

    setTimeout(()=>{
      const main=document.querySelector('.main');
      main.scrollTop=0;
      const obs=new IntersectionObserver((entries)=>{
        entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('spcs-shown');}});
      },{root:main,threshold:0.06});
      document.querySelectorAll('.spcs-in').forEach(el=>obs.observe(el));
    },60);

  } else if(id==='redrop'){
    el.innerHTML=`<div class="spcs">

<!-- HERO -->
<div class="spcs-hero">
  <div class="spcs-hero-l">
    <span class="spcs-domain" style="color:#E11D48;">Health-tech · Personal Project</span>
    <h1 class="spcs-title">Redrop</h1>
    <p class="spcs-meta">Product Design · 2023</p>
    <p class="spcs-tagline">A dedicated app that helps women understand and manage PCOS — turning scattered information, infrequent doctor visits, and hard-to-sustain routines into one place that educates, guides, and assists.</p>
    <div class="spcs-kpis">
      <div class="spcs-kpi"><div class="spcs-kpi-v" style="color:#E11D48;">6</div><div class="spcs-kpi-l">User interviews</div></div>
      <div class="spcs-kpi"><div class="spcs-kpi-v" style="color:#E11D48;">25</div><div class="spcs-kpi-l">Survey responses</div></div>
      <div class="spcs-kpi"><div class="spcs-kpi-v" style="color:#E11D48;">3</div><div class="spcs-kpi-l">User groups served</div></div>
      <div class="spcs-kpi"><div class="spcs-kpi-v" style="color:#E11D48;">1M+</div><div class="spcs-kpi-l">PCOS cases / yr in India</div></div>
    </div>
  </div>
  <div class="spcs-hero-r" style="background:#FFF1F2;display:flex;align-items:center;justify-content:center;">
    <img src="https://framerusercontent.com/images/u3mEdbguqGnQeHXGUOAjJCzunM.png" alt="Redrop app screens" style="height:100%;width:auto;object-fit:contain;display:block;">
  </div>
</div>

<div class="spcs-body">

<!-- 01 THE PROBLEM -->
<div class="spcs-sep"></div>
<div class="spcs-in" style="background:#09090B;padding:48px;">
  <div class="spcs-act"><span class="spcs-act-n" style="color:#FDA4AF;">01</span> · THE PROBLEM</div>
  <div style="display:grid;grid-template-columns:1fr 0.9fr;gap:56px;align-items:center;margin-top:8px;">
    <div>
      <h2 class="spcs-h" style="color:white;margin-bottom:20px;">Managing PCOS shouldn't feel this overwhelming.</h2>
      <p class="spcs-p dark" style="margin-bottom:18px;">Polycystic Ovary Syndrome is one of the most common hormonal disorders among women of reproductive age — bringing irregular cycles, excess androgen, acne, weight fluctuations, and long-term health risks.</p>
      <p class="spcs-p dark" style="margin-bottom:24px;">Despite how common it is, managing it feels fragmented. Information is scattered. Doctor visits are infrequent. Lifestyle changes are hard to sustain. Most women navigate it alone.</p>
      <div style="display:flex;align-items:baseline;gap:14px;border-top:1px solid #222;padding-top:24px;">
        <div style="font-size:44px;font-weight:800;letter-spacing:-.04em;color:#FDA4AF;line-height:1;">1M+</div>
        <div style="font-size:13px;color:rgba(255,255,255,.5);line-height:1.5;">new PCOS cases recorded in India<br>every single year</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;justify-content:center;background:#111;border-radius:16px;padding:40px;">
      <img src="https://framerusercontent.com/images/dRz0OaEDgEyRSze5sFAGLfQNEE.svg" alt="Illustration" style="width:100%;max-width:280px;display:block;">
    </div>
  </div>
</div>

<!-- 02 DESIGN PROCESS -->
<div class="spcs-sep-light"></div>
<div class="spcs-in" style="background:#fff;padding:48px;">
  <div class="spcs-act light"><span style="color:#E11D48;font-weight:700;">02</span> · DESIGN PROCESS</div>
  <div style="display:grid;grid-template-columns:1fr 1.1fr;gap:56px;align-items:start;margin-top:8px;">
    <div style="position:sticky;top:20px;">
      <h2 class="spcs-h" style="color:#09090B;margin-bottom:16px;">Designing with users, not on assumptions.</h2>
      <p class="spcs-p light" style="margin-bottom:20px;">Redrop followed a User-Centered Design approach — an iterative process keeping real needs central at every stage. Before building a single feature, I needed to know exactly who this was for.</p>
      <div style="background:#FFF1F2;border-left:3px solid #E11D48;border-radius:0 8px 8px 0;padding:14px 18px;">
        <p style="font-size:13px;color:#9F1239;line-height:1.6;margin:0;font-weight:500;">The scope widened beyond tracking — the product had to educate, guide, and assist, not just monitor.</p>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:10px;">
      <p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#A1A1AA;margin:0 0 2px;">Three groups to serve</p>
      <div style="display:flex;gap:16px;align-items:flex-start;border:1px solid #E4E4E7;border-radius:12px;padding:20px 22px;">
        <div style="font-size:28px;font-weight:800;color:#FDA4AF;line-height:1;flex-shrink:0;">01</div>
        <div><p style="font-size:14px;font-weight:600;color:#09090B;margin:0 0 3px;">The newly worried</p><p style="font-size:13px;color:#71717A;line-height:1.5;margin:0;">Women and girls who suspect they may have PCOS and don't know where to start.</p></div>
      </div>
      <div style="display:flex;gap:16px;align-items:flex-start;border:1px solid #E4E4E7;border-radius:12px;padding:20px 22px;">
        <div style="font-size:28px;font-weight:800;color:#FB7185;line-height:1;flex-shrink:0;">02</div>
        <div><p style="font-size:14px;font-weight:600;color:#09090B;margin:0 0 3px;">The diagnosed</p><p style="font-size:13px;color:#71717A;line-height:1.5;margin:0;">Those already managing PCOS day to day, juggling treatment and lifestyle.</p></div>
      </div>
      <div style="display:flex;gap:16px;align-items:flex-start;border:1px solid #E4E4E7;border-radius:12px;padding:20px 22px;">
        <div style="font-size:28px;font-weight:800;color:#E11D48;line-height:1;flex-shrink:0;">03</div>
        <div><p style="font-size:14px;font-weight:600;color:#09090B;margin:0 0 3px;">The supporters</p><p style="font-size:13px;color:#71717A;line-height:1.5;margin:0;">Partners, friends and family helping someone with PCOS through it.</p></div>
      </div>
    </div>
  </div>
</div>

<!-- 03 QUALITATIVE RESEARCH -->
<div class="spcs-sep"></div>
<div class="spcs-in" style="background:#09090B;padding:48px;">
  <div class="spcs-act"><span class="spcs-act-n" style="color:#FDA4AF;">03</span> · QUALITATIVE RESEARCH</div>
  <h2 class="spcs-h" style="color:white;margin-bottom:16px;">Listening before designing.</h2>
  <p class="spcs-p dark" style="max-width:720px;margin-bottom:32px;">I ran 6 in-depth interviews to understand lived experiences with PCOS — chasing <span style="color:#FDA4AF;">depth over volume</span>. The conversations surfaced three patterns again and again: inconsistent follow-ups, confusion around treatment, and difficulty sustaining lifestyle change.</p>
  <div style="display:grid;grid-template-columns:1.3fr 1fr;gap:40px;align-items:center;">
    <div style="display:flex;flex-direction:column;gap:8px;">
      <p style="font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:#FDA4AF;margin:0 0 6px;">What I asked</p>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:14px 18px;font-size:13px;color:rgba(255,255,255,.7);">How long have you been diagnosed with PCOD / PCOS?</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:14px 18px;font-size:13px;color:rgba(255,255,255,.7);">What kind of treatment do you prefer, and why?</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:14px 18px;font-size:13px;color:rgba(255,255,255,.7);">How often do you actually visit your doctor?</div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:8px;padding:14px 18px;font-size:13px;color:rgba(255,255,255,.7);">What does your daily management routine look like?</div>
    </div>
    <div style="border-left:2px solid #E11D48;padding-left:24px;">
      <p style="font-family:var(--fd);font-style:italic;font-size:22px;line-height:1.4;color:white;margin:0 0 12px;">"I get told what to do, but never why — so the moment it gets hard, I just stop."</p>
      <p style="font-size:12px;color:rgba(255,255,255,.4);margin:0;">— recurring sentiment across interviews</p>
    </div>
  </div>
</div>

<!-- 04 QUANTITATIVE RESEARCH -->
<div class="spcs-sep-light"></div>
<div class="spcs-in" style="background:#fff;padding:48px;">
  <div class="spcs-act light"><span style="color:#E11D48;font-weight:700;">04</span> · QUANTITATIVE RESEARCH</div>
  <h2 class="spcs-h" style="color:#09090B;margin-bottom:16px;">Validating the patterns at scale.</h2>
  <p class="spcs-p light" style="max-width:720px;margin-bottom:32px;">To check whether the interview patterns held more broadly, I ran a Google Forms survey. 25 people responded on demographics, trust in digital health, and behaviour.</p>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-bottom:28px;">
    <div style="border:1px solid #E4E4E7;border-radius:12px;padding:22px;">
      <p style="font-size:12px;font-weight:600;color:#09090B;margin:0 0 18px;">Age of respondents</p>
      <div style="margin-bottom:12px;"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px;"><span style="color:#52525B;">18–25</span><strong style="color:#09090B;">55%</strong></div><div style="height:6px;background:#F4F4F5;border-radius:100px;overflow:hidden;"><div style="height:100%;width:55%;background:#E11D48;border-radius:100px;"></div></div></div><div style="margin-bottom:12px;"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px;"><span style="color:#52525B;">25–30</span><strong style="color:#09090B;">25%</strong></div><div style="height:6px;background:#F4F4F5;border-radius:100px;overflow:hidden;"><div style="height:100%;width:25%;background:#E11D48;border-radius:100px;"></div></div></div><div style="margin-bottom:12px;"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px;"><span style="color:#52525B;">30 above</span><strong style="color:#09090B;">20%</strong></div><div style="height:6px;background:#F4F4F5;border-radius:100px;overflow:hidden;"><div style="height:100%;width:20%;background:#E11D48;border-radius:100px;"></div></div></div>
    </div>
    <div style="border:1px solid #E4E4E7;border-radius:12px;padding:22px;">
      <p style="font-size:12px;font-weight:600;color:#09090B;margin:0 0 18px;">Open to online appointments?</p>
      <div style="margin-bottom:12px;"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px;"><span style="color:#52525B;">Yes</span><strong style="color:#09090B;">62%</strong></div><div style="height:6px;background:#F4F4F5;border-radius:100px;overflow:hidden;"><div style="height:100%;width:62%;background:#E11D48;border-radius:100px;"></div></div></div><div style="margin-bottom:12px;"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px;"><span style="color:#52525B;">No</span><strong style="color:#09090B;">31%</strong></div><div style="height:6px;background:#F4F4F5;border-radius:100px;overflow:hidden;"><div style="height:100%;width:31%;background:#E11D48;border-radius:100px;"></div></div></div><div style="margin-bottom:12px;"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px;"><span style="color:#52525B;">Maybe</span><strong style="color:#09090B;">7%</strong></div><div style="height:6px;background:#F4F4F5;border-radius:100px;overflow:hidden;"><div style="height:100%;width:7%;background:#E11D48;border-radius:100px;"></div></div></div>
    </div>
    <div style="border:1px solid #E4E4E7;border-radius:12px;padding:22px;">
      <p style="font-size:12px;font-weight:600;color:#09090B;margin:0 0 18px;">Trust an app with medical data?</p>
      <div style="margin-bottom:12px;"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px;"><span style="color:#52525B;">Scored 0–4</span><strong style="color:#09090B;">10%</strong></div><div style="height:6px;background:#F4F4F5;border-radius:100px;overflow:hidden;"><div style="height:100%;width:10%;background:#E11D48;border-radius:100px;"></div></div></div><div style="margin-bottom:12px;"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px;"><span style="color:#52525B;">Scored 4–7</span><strong style="color:#09090B;">50%</strong></div><div style="height:6px;background:#F4F4F5;border-radius:100px;overflow:hidden;"><div style="height:100%;width:50%;background:#E11D48;border-radius:100px;"></div></div></div><div style="margin-bottom:12px;"><div style="display:flex;justify-content:space-between;font-size:12px;margin-bottom:5px;"><span style="color:#52525B;">Above 7</span><strong style="color:#09090B;">40%</strong></div><div style="height:6px;background:#F4F4F5;border-radius:100px;overflow:hidden;"><div style="height:100%;width:40%;background:#E11D48;border-radius:100px;"></div></div></div>
    </div>
  </div>
  <div style="background:#FFF1F2;border:1px solid #FECDD3;border-radius:12px;padding:20px 24px;">
    <p style="font-size:15px;color:#9F1239;line-height:1.6;margin:0;font-weight:500;">The takeaway: users are willing to go digital — but trust has to be designed intentionally, not assumed.</p>
  </div>
</div>

<!-- 05 USER PERSONA -->
<div class="spcs-sep"></div>
<div class="spcs-in" style="background:#09090B;padding:48px;">
  <div class="spcs-act"><span class="spcs-act-n" style="color:#FDA4AF;">05</span> · USER PERSONA</div>
  <h2 class="spcs-h" style="color:white;margin-bottom:28px;">Putting a face to the data.</h2>
  <div style="display:grid;grid-template-columns:0.85fr 1.4fr;gap:16px;">
    <!-- identity -->
    <div style="background:linear-gradient(160deg,#1a1015,#111);border:1px solid #2a1a20;border-radius:16px;padding:28px;display:flex;flex-direction:column;">
      <img src="https://framerusercontent.com/images/tHtymTJQUX6gNMu1gOtNB4gYE.png" alt="Aishani" style="width:80px;height:80px;border-radius:50%;object-fit:cover;border:2px solid #E11D48;margin-bottom:16px;">
      <p style="font-size:20px;font-weight:700;color:white;margin:0 0 2px;">Aishani Pachauri</p>
      <p style="font-size:13px;color:#FDA4AF;margin:0 0 20px;">20 · she/her · Delhi, India</p>
      <div style="display:flex;flex-direction:column;gap:11px;font-size:12px;color:rgba(255,255,255,.6);border-top:1px solid #2a1a20;padding-top:18px;">
        <div style="display:flex;justify-content:space-between;"><span style="color:rgba(255,255,255,.35);">Occupation</span><span>Undergraduate</span></div>
        <div style="display:flex;justify-content:space-between;"><span style="color:rgba(255,255,255,.35);">Diagnosis</span><span>PCOS, 1 year ago</span></div>
        <div style="display:flex;justify-content:space-between;"><span style="color:rgba(255,255,255,.35);">Tech comfort</span><span>High</span></div>
      </div>
      <div style="margin-top:auto;padding-top:20px;">
        <p style="font-family:var(--fd);font-style:italic;font-size:15px;line-height:1.5;color:rgba(255,255,255,.85);margin:0;">"I want to feel in control of my body — not lectured by it."</p>
      </div>
    </div>
    <!-- dimensions 2x2 -->
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:12px;padding:20px 22px;">
        <p style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#FDA4AF;margin:0 0 12px;">Goals</p>
        <div style="display:flex;flex-direction:column;gap:8px;font-size:12.5px;color:rgba(255,255,255,.6);line-height:1.45;">
          <div style="display:flex;gap:8px;"><span style="color:#E11D48;flex-shrink:0;">&rarr;</span>Understand her symptoms without spiralling</div>
          <div style="display:flex;gap:8px;"><span style="color:#E11D48;flex-shrink:0;">&rarr;</span>Stay consistent with a simple routine</div>
          <div style="display:flex;gap:8px;"><span style="color:#E11D48;flex-shrink:0;">&rarr;</span>Reach a doctor without the friction</div>
        </div>
      </div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:12px;padding:20px 22px;">
        <p style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#FDA4AF;margin:0 0 12px;">Frustrations</p>
        <div style="display:flex;flex-direction:column;gap:8px;font-size:12.5px;color:rgba(255,255,255,.6);line-height:1.45;">
          <div style="display:flex;gap:8px;"><span style="color:#E11D48;flex-shrink:0;">&bull;</span>Eating restrictions on sweets</div>
          <div style="display:flex;gap:8px;"><span style="color:#E11D48;flex-shrink:0;">&bull;</span>Breakouts and acne</div>
          <div style="display:flex;gap:8px;"><span style="color:#E11D48;flex-shrink:0;">&bull;</span>Struggling to exercise regularly</div>
        </div>
      </div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:12px;padding:20px 22px;">
        <p style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#FDA4AF;margin:0 0 12px;">Behaviours</p>
        <div style="display:flex;flex-direction:column;gap:8px;font-size:12.5px;color:rgba(255,255,255,.6);line-height:1.45;">
          <div style="display:flex;gap:8px;"><span style="color:#E11D48;flex-shrink:0;">&bull;</span>Googles symptoms, ends up anxious</div>
          <div style="display:flex;gap:8px;"><span style="color:#E11D48;flex-shrink:0;">&bull;</span>Skips follow-ups when she feels fine</div>
          <div style="display:flex;gap:8px;"><span style="color:#E11D48;flex-shrink:0;">&bull;</span>Lives on her phone</div>
        </div>
      </div>
      <div style="background:#111;border:1px solid #1f1f1f;border-radius:12px;padding:20px 22px;">
        <p style="font-size:11px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:#FDA4AF;margin:0 0 12px;">Needs from Redrop</p>
        <div style="display:flex;flex-direction:column;gap:8px;font-size:12.5px;color:rgba(255,255,255,.6);line-height:1.45;">
          <div style="display:flex;gap:8px;"><span style="color:#E11D48;flex-shrink:0;">&check;</span>Plain-language explanations</div>
          <div style="display:flex;gap:8px;"><span style="color:#E11D48;flex-shrink:0;">&check;</span>Gentle reminders, not nagging</div>
          <div style="display:flex;gap:8px;"><span style="color:#E11D48;flex-shrink:0;">&check;</span>A trustworthy place for her data</div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- 06 FROM INSIGHTS TO IDEAS -->
<div class="spcs-sep-light"></div>
<div class="spcs-in" style="background:#fff;padding:48px;">
  <div class="spcs-act light"><span style="color:#E11D48;font-weight:700;">06</span> · FROM INSIGHTS TO IDEAS</div>
  <h2 class="spcs-h" style="color:#09090B;margin-bottom:16px;">Turning research into feature directions.</h2>
  <p class="spcs-p light" style="max-width:720px;margin-bottom:24px;">Each insight pointed to something the product could do. I translated them into concrete directions to design against.</p>
  <div style="display:flex;flex-wrap:wrap;gap:8px;">
    <span style="font-size:13px;color:#9F1239;background:#FFF1F2;border:1px solid #FECDD3;border-radius:100px;padding:8px 16px;">Awareness about PCOS</span>
    <span style="font-size:13px;color:#9F1239;background:#FFF1F2;border:1px solid #FECDD3;border-radius:100px;padding:8px 16px;">Menstrual cycle tracker</span>
    <span style="font-size:13px;color:#9F1239;background:#FFF1F2;border:1px solid #FECDD3;border-radius:100px;padding:8px 16px;">Cycle analysis</span>
    <span style="font-size:13px;color:#9F1239;background:#FFF1F2;border:1px solid #FECDD3;border-radius:100px;padding:8px 16px;">Pill reminders</span>
    <span style="font-size:13px;color:#9F1239;background:#FFF1F2;border:1px solid #FECDD3;border-radius:100px;padding:8px 16px;">Questions to ask in consultations</span>
    <span style="font-size:13px;color:#9F1239;background:#FFF1F2;border:1px solid #FECDD3;border-radius:100px;padding:8px 16px;">Articles & educational content</span>
    <span style="font-size:13px;color:#9F1239;background:#FFF1F2;border:1px solid #FECDD3;border-radius:100px;padding:8px 16px;">Free home sample collection</span>
    <span style="font-size:13px;color:#9F1239;background:#FFF1F2;border:1px solid #FECDD3;border-radius:100px;padding:8px 16px;">Online appointment booking</span>
    <span style="font-size:13px;color:#9F1239;background:#FFF1F2;border:1px solid #FECDD3;border-radius:100px;padding:8px 16px;">Online pharmacy integration</span>
  </div>
</div>

<!-- 07 USER FLOW -->
<div class="spcs-sep"></div>
<div class="spcs-in" style="background:#09090B;padding:48px;">
  <div class="spcs-act"><span class="spcs-act-n" style="color:#FDA4AF;">07</span> · USER FLOW</div>
  <div style="max-width:620px;margin-bottom:40px;">
    <h2 class="spcs-h" style="color:white;margin-bottom:16px;">Structuring the ecosystem.</h2>
    <p class="spcs-p dark" style="margin:0;">The flow mapped how someone moves through the app — keeping medical support and lifestyle tracking in one connected ecosystem instead of fragmented tools the user has to stitch together.</p>
  </div>

  <!-- Native flow tree -->
  <div style="display:flex;flex-direction:column;align-items:center;">
    <!-- root -->
    <div style="background:#E11D48;color:#fff;font-size:13px;font-weight:700;padding:10px 28px;border-radius:8px;box-shadow:0 4px 16px rgba(225,29,72,.3);">Redrop</div>
    <!-- vertical stem -->
    <div style="width:1px;height:28px;background:#3a2228;"></div>
    <!-- branches -->
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:14px;width:100%;">
      <!-- Book Appointment -->
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="background:#1a1015;border:1px solid #E11D48;border-radius:8px;padding:11px 14px;font-size:12px;font-weight:600;color:#FDA4AF;text-align:center;">Book Appointment</div>
        <div style="background:#141414;border:1px solid #222;border-radius:7px;padding:10px 13px;font-size:12px;color:rgba(255,255,255,.65);">List of Doctors</div>
        <div style="background:#141414;border:1px solid #222;border-radius:7px;padding:10px 13px;font-size:12px;color:rgba(255,255,255,.65);">About the Doctor</div>
        <div style="background:#141414;border:1px solid #222;border-radius:7px;padding:10px 13px;font-size:12px;color:rgba(255,255,255,.65);">Slot booking</div>
        <div style="background:#141414;border:1px solid #222;border-radius:7px;padding:10px 13px;font-size:12px;color:rgba(255,255,255,.65);">Booking Confirmation</div>
      </div>
      <!-- Online Pharmacy -->
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="background:#1a1015;border:1px solid #E11D48;border-radius:8px;padding:11px 14px;font-size:12px;font-weight:600;color:#FDA4AF;text-align:center;">Online Pharmacy</div>
        <div style="background:#141414;border:1px solid #222;border-radius:7px;padding:10px 13px;font-size:12px;color:rgba(255,255,255,.65);">Categories</div>
        <div style="background:#141414;border:1px solid #222;border-radius:7px;padding:10px 13px;font-size:12px;color:rgba(255,255,255,.65);">List of medicines</div>
        <div style="background:#141414;border:1px solid #222;border-radius:7px;padding:10px 13px;font-size:12px;color:rgba(255,255,255,.65);">Filters</div>
        <div style="background:#141414;border:1px solid #222;border-radius:7px;padding:10px 13px;font-size:12px;color:rgba(255,255,255,.65);">Cart</div>
      </div>
      <!-- Lab Tests -->
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="background:#1a1015;border:1px solid #E11D48;border-radius:8px;padding:11px 14px;font-size:12px;font-weight:600;color:#FDA4AF;text-align:center;">Lab Tests</div>
        <div style="background:#141414;border:1px solid #222;border-radius:7px;padding:10px 13px;font-size:12px;color:rgba(255,255,255,.65);">Categories</div>
        <div style="background:#141414;border:1px solid #222;border-radius:7px;padding:10px 13px;font-size:12px;color:rgba(255,255,255,.65);">Common tests</div>
      </div>
      <!-- PCOS Tracker -->
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="background:#1a1015;border:1px solid #E11D48;border-radius:8px;padding:11px 14px;font-size:12px;font-weight:600;color:#FDA4AF;text-align:center;">PCOS Tracker</div>
        <div style="background:#141414;border:1px solid #222;border-radius:7px;padding:10px 13px;font-size:12px;color:rgba(255,255,255,.65);">Tracker</div>
        <div style="background:#141414;border:1px solid #222;border-radius:7px;padding:10px 13px;font-size:12px;color:rgba(255,255,255,.65);">Analytics</div>
      </div>
      <!-- Profile -->
      <div style="display:flex;flex-direction:column;gap:10px;">
        <div style="background:#1a1015;border:1px solid #E11D48;border-radius:8px;padding:11px 14px;font-size:12px;font-weight:600;color:#FDA4AF;text-align:center;">Profile</div>
      </div>
    </div>
  </div>
</div>

<!-- 08 WIREFRAMES -->
<div class="spcs-sep-light"></div>
<div class="spcs-in" style="background:#fff;padding:28px 48px 48px;">
  <div class="spcs-act light"><span style="color:#E11D48;font-weight:700;">08</span> · WIREFRAMES</div>
  <h2 class="spcs-h" style="color:#09090B;">Giving the structure a body.</h2>
  <p class="spcs-p light" style="max-width:700px;margin-bottom:20px;">With the structure and flow in place, I moved from lo-fi sketches to mid-fi wireframes — something concrete enough to test the navigation and core flows with users before committing to visual design.</p>
  <div style="display:flex;gap:12px;">
    <img src="assets/redrop_wire1.webp" alt="Redrop wireframe 1" loading="lazy" style="flex:1;min-width:0;height:auto;display:block;border-radius:12px;border:1px solid #E4E4E7;">
    <img src="assets/redrop_wire2.webp" alt="Redrop wireframe 2" loading="lazy" style="flex:1;min-width:0;height:auto;display:block;border-radius:12px;border:1px solid #E4E4E7;">
    <img src="assets/redrop_wire3.webp" alt="Redrop wireframe 3" loading="lazy" style="flex:1;min-width:0;height:auto;display:block;border-radius:12px;border:1px solid #E4E4E7;">
    <img src="assets/redrop_wire4.webp" alt="Redrop wireframe 4" loading="lazy" style="flex:1;min-width:0;height:auto;display:block;border-radius:12px;border:1px solid #E4E4E7;">
  </div>
</div>


<!-- 09 HI-FI -->
<div class="spcs-sep"></div>
<div class="spcs-in" style="background:#09090B;padding:28px 48px 48px;">
  <div class="spcs-act"><span class="spcs-act-n" style="color:#FDA4AF;">09</span> · HI-FIDELITY</div>
  <h2 class="spcs-h" style="color:white;">The shipped design.</h2>
  <p class="spcs-p dark" style="max-width:700px;margin-bottom:24px;">The final screens brought the system together — onboarding, a cycle tracker, symptom logging, doctor discovery, and appointment booking — in one warm, approachable interface designed to make a clinical topic feel manageable, not medical.</p>
  <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:14px;">
    <img src="assets/redrop_ship1.webp" alt="Redrop shipped screen 1" loading="lazy" style="width:100%;height:auto;display:block;border-radius:14px;border:1px solid rgba(255,255,255,.06);box-shadow:0 10px 26px rgba(0,0,0,.4);">
    <img src="assets/redrop_ship2.webp" alt="Redrop shipped screen 2" loading="lazy" style="width:100%;height:auto;display:block;border-radius:14px;border:1px solid rgba(255,255,255,.06);box-shadow:0 10px 26px rgba(0,0,0,.4);">
    <img src="assets/redrop_ship3.webp" alt="Redrop shipped screen 3" loading="lazy" style="width:100%;height:auto;display:block;border-radius:14px;border:1px solid rgba(255,255,255,.06);box-shadow:0 10px 26px rgba(0,0,0,.4);">
    <img src="assets/redrop_ship4.webp" alt="Redrop shipped screen 4" loading="lazy" style="width:100%;height:auto;display:block;border-radius:14px;border:1px solid rgba(255,255,255,.06);box-shadow:0 10px 26px rgba(0,0,0,.4);">
    <img src="assets/redrop_ship5.webp" alt="Redrop shipped screen 5" loading="lazy" style="width:100%;height:auto;display:block;border-radius:14px;border:1px solid rgba(255,255,255,.06);box-shadow:0 10px 26px rgba(0,0,0,.4);">
    <img src="assets/redrop_ship6.webp" alt="Redrop shipped screen 6" loading="lazy" style="width:100%;height:auto;display:block;border-radius:14px;border:1px solid rgba(255,255,255,.06);box-shadow:0 10px 26px rgba(0,0,0,.4);">
    <img src="assets/redrop_ship7.webp" alt="Redrop shipped screen 7" loading="lazy" style="width:100%;height:auto;display:block;border-radius:14px;border:1px solid rgba(255,255,255,.06);box-shadow:0 10px 26px rgba(0,0,0,.4);">
    <img src="assets/redrop_ship8.webp" alt="Redrop shipped screen 8" loading="lazy" style="width:100%;height:auto;display:block;border-radius:14px;border:1px solid rgba(255,255,255,.06);box-shadow:0 10px 26px rgba(0,0,0,.4);">
  </div>
</div>

<!-- 10 OUTCOME + REFLECTION -->
<div class="spcs-sep"></div>
<div class="spcs-outcome-layout spcs-in">
  <div class="spcs-refl-col">
    <div class="spcs-act"><span class="spcs-act-n" style="color:#FDA4AF;">10</span> · REFLECTION</div>
    <h2 class="spcs-h" style="color:white;margin-bottom:24px;">What I took away.</h2>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n" style="color:#FDA4AF;">01</div><div class="spcs-lesson-t">Trust is a design problem</div><div class="spcs-lesson-p">Half of surveyed users were hesitant to trust an app with medical data. That wasn't a reason to drop features — it was a brief to design transparency, control, and reassurance into every sensitive flow.</div></div>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n" style="color:#FDA4AF;">02</div><div class="spcs-lesson-t">Scope beyond the obvious</div><div class="spcs-lesson-p">Designing for carers and the newly-suspecting — not just the diagnosed — reframed Redrop from a tracker into an ecosystem that educates and guides.</div></div>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n" style="color:#FDA4AF;">03</div><div class="spcs-lesson-t">Depth over volume works</div><div class="spcs-lesson-p">Six honest interviews surfaced more usable insight than the survey alone could. The qualitative depth is what made the persona and flows feel real.</div></div>
  </div>
  <div class="spcs-out-col">
    <div class="spcs-act"><span class="spcs-act-n" style="color:#FDA4AF;">11</span> · OUTCOME</div>
    <h2 class="spcs-h" style="color:white;margin-bottom:24px;">The results.</h2>
    <div class="spcs-outcome-stats">
      <div class="spcs-outcome-stat"><div class="spcs-outcome-n" style="color:#FDA4AF;">3</div><div class="spcs-outcome-l">distinct user groups served in one ecosystem</div></div>
      <div class="spcs-outcome-stat"><div class="spcs-outcome-n" style="color:#FDA4AF;">9</div><div class="spcs-outcome-l">research-backed feature directions defined</div></div>
      <div class="spcs-outcome-stat"><div class="spcs-outcome-n" style="color:#FDA4AF;">100%</div><div class="spcs-outcome-l">flows grounded in qual + quant research</div></div>
    </div>
  </div>
</div>

<!-- MORE PROJECTS -->
<div class="spcs-sep-light"></div>
<div class="spcs-more spcs-in">
  <div style="font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#A1A1AA;margin-bottom:8px;">More Work</div>
  <div class="spcs-more-h">Other projects</div>
  <div class="spcs-more-grid">
    ${Object.entries(CS_DATA).filter(([k])=>k!=='redrop').map(([k,p])=>`<div class="spcs-more-card" onclick="openCS('${k}')">
      <div class="spcs-more-dom"><span class="spcs-more-pip" style="background:${p.pip};"></span>${p.domain}</div>
      <div class="spcs-more-co">${p.co}</div>
      <div class="spcs-more-desc">${p.headline}</div>
      <div class="spcs-more-lnk">View case study →</div>
    </div>`).join('')}
  </div>
</div>

</div>
</div>`;

    setTimeout(()=>{
      const main=document.querySelector('.main');
      const cs=document.getElementById('page-casestudy');
      main.scrollTop=0;cs.scrollTop=0;
      const obs=new IntersectionObserver((entries)=>{
        entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('spcs-shown');}});
      },{root:main,threshold:0.06});
      document.querySelectorAll('.spcs-in').forEach(el=>obs.observe(el));
    },60);

  } else {
    const acc=d.pip;
    const accL={'#2563EB':'#93C5FD','#059669':'#6EE7B7','#D97706':'#FCD34D','#7C3AED':'#A78BFA','#6B5B95':'#A89BC9','#E11D48':'#FDA4AF'}[acc]||acc;
    const accBg={'#2563EB':'rgba(37,99,235,.08)','#059669':'rgba(5,150,105,.08)','#D97706':'rgba(217,119,6,.08)','#7C3AED':'rgba(124,58,237,.08)','#6B5B95':'rgba(8,145,178,.08)','#E11D48':'rgba(225,29,72,.08)'}[acc]||'rgba(0,0,0,.05)';
    const accBorder={'#2563EB':'rgba(37,99,235,.25)','#059669':'rgba(5,150,105,.25)','#D97706':'rgba(217,119,6,.25)','#7C3AED':'rgba(124,58,237,.25)','#6B5B95':'rgba(8,145,178,.25)','#E11D48':'rgba(225,29,72,.25)'}[acc]||'rgba(0,0,0,.15)';

    el.innerHTML=`<div class="spcs">

<div class="spcs-hero">
  <div class="spcs-hero-l">
    <span class="spcs-domain" style="color:${acc};">${d.domain}</span>
    <h1 class="spcs-title" style="color:#09090B;">${d.co}</h1>
    <p class="spcs-meta">${d.role} · ${d.period}</p>
    <p class="spcs-tagline">${d.headline}</p>
    <div class="spcs-kpis">
      ${d.results.slice(0,4).map(r=>`<div class="spcs-kpi"><div class="spcs-kpi-v" style="color:${acc};">${r.split(' ')[0]}</div><div class="spcs-kpi-l">${r.split(' ').slice(1).join(' ')}</div></div>`).join('')}
    </div>
  </div>
  <div class="spcs-hero-r" style="background:#fff;"></div>
</div>

<!-- 01 + 02 -->
<div class="spcs-sep"></div>
<div class="spcs-brief spcs-in">
  <div class="spcs-brief-l">
    <div class="spcs-act"><span class="spcs-act-n" style="color:${accL};">01</span> · THE BRIEF</div>
    <h2 class="spcs-h" style="color:white;">The context.</h2>
    <p class="spcs-p dark">${d.context}</p>
  </div>
  <div class="spcs-brief-r">
    <div class="spcs-act"><span class="spcs-act-n" style="color:${accL};">02</span> · THE PROBLEM</div>
    <h2 class="spcs-h" style="color:white;">${d.problem.split('.')[0]}.</h2>
    <p class="spcs-p dark">${d.problem}</p>
  </div>
</div>

<!-- 03 THE APPROACH -->
<div class="spcs-sep-light"></div>
<div class="spcs-in" style="background:#fff;padding:28px 48px 56px;">
  <div class="spcs-act light"><span style="color:${acc};font-weight:700;">03</span> · THE APPROACH</div>
  <h2 class="spcs-h" style="color:#09090B;">How I worked through it.</h2>
  <div style="display:flex;flex-direction:column;gap:0;margin-top:20px;border:1px solid #E4E4E7;border-radius:12px;overflow:hidden;">
    ${d.approach.map((a,i)=>`<div style="display:flex;gap:20px;padding:20px 24px;border-bottom:1px solid #E4E4E7;align-items:flex-start;" class="spcs-in spcs-in-d${Math.min(i+1,3)}">
      <div style="font-size:11px;font-weight:700;color:${acc};letter-spacing:.1em;flex-shrink:0;min-width:24px;margin-top:2px;">0${i+1}</div>
      <div style="font-size:14px;color:#09090B;line-height:1.7;">${a}</div>
    </div>`).join('')}
  </div>
</div>

<!-- 04 SCREENS PLACEHOLDER -->
<div class="spcs-sep-light"></div>
<div class="spcs-in" style="background:#fff;padding:28px 48px 56px;">
  <div class="spcs-act light"><span style="color:${acc};font-weight:700;">04</span> · THE SCREENS</div>
  <h2 class="spcs-h" style="color:#09090B;">What it looked like.</h2>
  <div style="display:flex;gap:8px;margin:20px 0;">
    ${[1,2,3,4].map(i=>`<div style="flex:1;height:320px;background:#F4F4F5;border:2px dashed #E4E4E7;border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#A1A1AA;font-size:12px;gap:6px;">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none"><rect x="2" y="3" width="16" height="14" rx="2" stroke="#D4D4D8" stroke-width="1.5"/><circle cx="10" cy="10" r="3" stroke="#D4D4D8" stroke-width="1.5"/></svg>
      Screen ${i}
    </div>`).join('')}
  </div>
  <p style="font-size:12px;color:#A1A1AA;text-align:center;">← Drop your screens here</p>
</div>

<!-- 05 OUTCOME + REFLECTION -->
<div class="spcs-sep"></div>
<div class="spcs-outcome-layout spcs-in">
  <div class="spcs-refl-col">
    <div class="spcs-act"><span class="spcs-act-n" style="color:${accL};">05</span> · REFLECTION</div>
    <h2 class="spcs-h" style="color:white;margin-bottom:24px;">What I took away.</h2>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n" style="color:${accL};">01</div><div class="spcs-lesson-t">Coming soon</div><div class="spcs-lesson-p">Reflection on this project will be added with the full case study content.</div></div>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n" style="color:${accL};">02</div><div class="spcs-lesson-t">Coming soon</div><div class="spcs-lesson-p">Second key learning from this engagement.</div></div>
    <div class="spcs-lesson-v"><div class="spcs-lesson-n" style="color:${accL};">03</div><div class="spcs-lesson-t">Coming soon</div><div class="spcs-lesson-p">Third key learning from this engagement.</div></div>
  </div>
  <div class="spcs-out-col">
    <div class="spcs-act"><span class="spcs-act-n" style="color:${accL};">06</span> · OUTCOME</div>
    <h2 class="spcs-h" style="color:white;margin-bottom:24px;">The results.</h2>
    <div class="spcs-outcome-stats">
      ${d.results.map(r=>`<div class="spcs-outcome-stat"><div class="spcs-outcome-n" style="color:${accL};">${r.split(' ')[0]}</div><div class="spcs-outcome-l">${r.split(' ').slice(1).join(' ')}</div></div>`).join('')}
    </div>
  </div>
</div>

<!-- MORE PROJECTS -->
<div class="spcs-sep-light"></div>
<div class="spcs-more spcs-in">
  <div style="font-size:10px;font-weight:600;letter-spacing:.12em;text-transform:uppercase;color:#A1A1AA;margin-bottom:8px;">More Work</div>
  <div class="spcs-more-h">Other projects</div>
  <div class="spcs-more-grid">
    ${Object.entries(CS_DATA).filter(([k])=>k!==id).map(([k,p])=>`<div class="spcs-more-card" onclick="openCS('${k}')">
      <div class="spcs-more-dom"><span class="spcs-more-pip" style="background:${p.pip};"></span>${p.domain}</div>
      <div class="spcs-more-co">${p.co}</div>
      <div class="spcs-more-desc">${p.headline}</div>
      <div class="spcs-more-lnk">View case study →</div>
    </div>`).join('')}
  </div>
</div>

</div>`;

    setTimeout(()=>{
      const main=document.querySelector('.main');
      const cs=document.getElementById('page-casestudy');
      main.scrollTop=0;cs.scrollTop=0;
      const obs=new IntersectionObserver((entries)=>{
        entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('spcs-shown');}});
      },{root:main,threshold:0.06});
      document.querySelectorAll('.spcs-in').forEach(el=>obs.observe(el));
    },60);
  }

  document.querySelectorAll('.page').forEach(x=>x.classList.remove('active'));
  document.querySelectorAll('.ni').forEach(x=>x.classList.remove('on'));
  const _m=document.querySelector('.main');
  _m.style.overflowY='hidden';
  _m.scrollTop=0;window.scrollTo(0,0);
  document.getElementById('page-casestudy').classList.add('active');
  _m.scrollTop=0;window.scrollTo(0,0);document.documentElement.scrollTop=0;document.body.scrollTop=0;
  // Step 2: restore overflow after two frames (layout settled), keep intent-lock as backup
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    _m.scrollTop=0;window.scrollTo(0,0);document.documentElement.scrollTop=0;
    _m.style.overflowY='';
    let _locked=true;
    const _unlock=()=>{
      if(!_locked)return;
      _locked=false;
      _m.removeEventListener('scroll',_resetFn);
      _m.removeEventListener('wheel',_unlock);
      _m.removeEventListener('touchmove',_unlock);
      clearTimeout(_lockTimer);
    };
    const _resetFn=()=>{ if(_locked)_m.scrollTop=0; };
    const _lockTimer=setTimeout(_unlock,2000);
    _m.addEventListener('scroll',_resetFn);
    _m.addEventListener('wheel',_unlock,{passive:true});
    _m.addEventListener('touchmove',_unlock,{passive:true});
  }));
}

/* ── WORK FILTER + EXPAND ── */
document.querySelectorAll('.ftab').forEach(t=>{t.addEventListener('click',()=>{document.querySelectorAll('.ftab').forEach(x=>x.classList.remove('on'));t.classList.add('on');const f=t.dataset.f;document.querySelectorAll('.wkx-card').forEach(r=>{r.style.display=(f==='all'||r.dataset.d===f)?'':'none';});});});
function expandR(row){const o=row.classList.contains('open');document.querySelectorAll('.prow.open').forEach(r=>{r.classList.remove('open');r.querySelector('.pr-exp').textContent='Details ↓';});if(!o){row.classList.add('open');row.querySelector('.pr-exp').textContent='Less ↑';}}

/* ── DESIGN DNA ── */
const skills=['Visual Craft','Research','Systems Thinking','Enterprise AI','0→1 Building','Interaction Design'];
const years=[2020,2021,2022,2023,2024,2025,2026];
const matrix=[[2,3,4,4,4,5,5],[1,2,3,4,5,5,5],[1,2,3,4,5,5,5],[0,0,1,2,4,5,5],[0,0,4,5,3,3,3],[2,3,3,4,4,5,5]];
const cols=['#F4F4F5','#D4D4D8','#A1A1AA','#71717A','#3F3F46','#09090B'];
const lbls=['None','Early','Growing','Proficient','Strong','Dominant'];
function buildDNA(){const c=document.getElementById('dna');if(!c)return;let h=`<div style="display:flex;gap:3px;margin-bottom:4px;padding-left:144px;">`;years.forEach(y=>h+=`<div style="width:34px;text-align:center;font-size:10px;font-weight:600;color:var(--ink3);">${y}</div>`);h+=`</div>`;skills.forEach((sk,si)=>{h+=`<div class="dna-row"><div class="dna-sk">${sk}</div><div style="display:flex;gap:3px;">`;years.forEach((_,yi)=>{const v=matrix[si][yi];h+=`<div class="d-cell" style="background:${cols[v]};"><div class="d-tip">${sk} · ${years[yi]}<br>${lbls[v]}</div></div>`;});h+=`</div></div>`;});c.innerHTML=h;}
buildDNA();
