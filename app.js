(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---- тексты на трёх языках (ru – в разметке) ---- */
  const T = {
    hy: {
      nav_games: 'Խաղեր', nav_why: 'Առավելություններ', nav_int: 'Ինտեգրում', nav_about: 'Մեր մասին', nav_contact: 'Կապ',
      hero_kick: 'Խաղային պրովայդեր · Երևան', hero_h1: 'Խաղեր, որոնք պահում են խաղացողներին',
      hero_lede: 'Մշակում ենք HTML5 խաղեր լիցենզավորված օպերատորների համար՝ սլոթեր, սեղանի և ակնթարթային խաղեր։ Մեկ API ինտեգրում՝ և ամբողջ կատալոգը ձեր հարթակում է։',
      hero_cta: 'Դառնալ գործընկեր →', hero_cta2: 'Դիտել խաղերը',
      cert1: 'Հավաստագրված ՊԹԳ', cert2: 'HTML5 · mobile first', cert3: '20+ արժույթ', rtp: 'կատալոգի միջին RTP',
      k1: 'խաղ կատալոգում', k2u: 'շաբ.', k2: 'ինտեգրման համար', k3: 'գործընկեր օպերատոր', k4: 'հարթակի անխափան աշխատանք',
      g_kick: 'Պորտֆոլիո', g_h: 'Մեր խաղերը', g_p: 'Յուրաքանչյուր խաղ անցնում է անկախ հավաստագրում և աշխատում է ցանկացած էկրանին՝ հին սմարթֆոնից մինչև 4K մոնիտոր։',
      w_kick: 'Առավելություններ', w_h: 'Ինչու են օպերատորները ընտրում մեզ',
      f1h: 'Ճկուն կարգավորումներ', f1p: 'RTP-ի մի քանի պրոֆիլ, խաղադրույքների սահմանաչափեր և արժույթներ՝ յուրաքանչյուր հարթակի և իրավասության համար։',
      f2h: 'Բջջային՝ առաջին պիքսելից', f2p: 'Խաղերը մինչև 5 ՄԲ են, արագ բեռնվում են բջջային ցանցերում և աշխատում են երկու դիրքում։',
      f3h: 'Հավաստագրում', f3p: 'Պատահական թվերի գեներատորը և խաղերի մաթեմատիկան ստուգված են անկախ լաբորատորիայի կողմից։',
      f4h: 'Պահման գործիքներ', f4p: 'Մրցաշարեր, անվճար պտույտներ և արշավներ՝ կարգավորվում են օպերատորի վահանակից։',
      f5h: 'Իրական ժամանակի վերլուծություն', f5p: 'Վահանակ՝ շրջանառության, պահման և խաղերի ժողովրդականության տվյալներով։',
      f6h: 'Տեղայնացում', f6p: 'Խաղերի ինտերֆեյսը 18 լեզվով, այդ թվում՝ հայերեն, ռուսերեն և անգլերեն։',
      i_kick: 'Ինտեգրում', i_h: 'Պայմանագրից մինչև գործարկում՝ 2 շաբաթ', i_p: 'Մեկ API ամբողջ կատալոգի համար։ Նոր խաղերը ավտոմատ հայտնվում են ձեզ մոտ։',
      s1h: 'Պայմանագիր և հասանելիություն', s1p: 'Ստորագրում ենք համաձայնագիրը, տրամադրում փորձարկման միջավայր և փաստաթղթեր։',
      s2h: 'API միացում', s2p: 'Ձեր ծրագրավորողները միացնում են մեկ API՝ դրամապանակ, սեսիաներ, ռաունդների պատմություն։',
      s3h: 'Փորձարկում', s3p: 'Ստուգում ենք բոլոր սցենարները ձեզ հետ միասին։', s4h: 'Գործարկում', s4p: 'Միացնում ենք խաղերը ձեր հարթակում և ուղեկցում 24/7։',
      a1: 'հիմնադրման տարի', a2: 'մասնագետ թիմում', a3: 'երկիր', a4: 'գործընկերների աջակցություն',
      ab_kick: 'Ընկերության մասին', ab_h: 'Երևանյան ստուդիա՝ լիարժեք ցիկլի թիմով',
      ab_p1: 'Մաթեմատիկոսները, նկարիչները, անիմատորները և ծրագրավորողները աշխատում են մեկ գրասենյակում։ Յուրաքանչյուր խաղ մենք ինքներս ենք հորինում, նկարում, ծրագրավորում և հավաստագրում։',
      ab_p2: 'Աշխատում ենք միայն լիցենզավորված օպերատորների հետ և պահպանում ենք յուրաքանչյուր իրավասության պահանջները։',
      lic2: 'Հավաստագրված ՊԹԳ', lic3: 'Պատասխանատու խաղ',
      c_kick: 'Գործընկերություն', c_h: 'Քննարկենք ինտեգրումը', c_p: 'Թողեք հայտ՝ գործընկերների մենեջերը կպատասխանի մեկ աշխատանքային օրվա ընթացքում։',
      c_addr_t: 'Հասցե', c_addr: 'Երևան, Օրինակելի փ., 1', c_tel_t: 'Հեռախոս',
      fl_name: 'Անուն', fl_company: 'Ընկերություն', fl_country: 'Երկիր / իրավասություն', fl_msg: 'Հաղորդագրություն', fl_msg_ph: 'Ինչ խաղեր են հետաքրքրում, երթևեկության ծավալ, ժամկետներ',
      fl_send: 'Ուղարկել հայտը', fl_ok: 'Շնորհակալություն։ Սա դեմո կայք է՝ հայտը չի ուղարկվել։',
      age: '18+։ Կայքի տեղեկատվությունը նախատեսված է օպերատորների համար (B2B) և մոլախաղերի գովազդ չէ։', foot: 'Դեմո կայք՝ անվանումը, թվերը և կոնտակտները պայմանական են'
    },
    en: {
      nav_games: 'Games', nav_why: 'Why us', nav_int: 'Integration', nav_about: 'About', nav_contact: 'Contact',
      hero_kick: 'Game provider · Yerevan', hero_h1: 'Games that keep players coming back',
      hero_lede: 'We build HTML5 games for licensed operators: slots, table and instant games. One API integration – and the whole catalogue is on your platform.',
      hero_cta: 'Become a partner →', hero_cta2: 'See the games',
      cert1: 'Certified RNG', cert2: 'HTML5 · mobile first', cert3: '20+ currencies', rtp: 'average catalogue RTP',
      k1: 'games in catalogue', k2u: 'wks', k2: 'to integrate', k3: 'operator partners', k4: 'platform uptime',
      g_kick: 'Portfolio', g_h: 'Our games', g_p: 'Every game is independently certified and runs on any screen – from an old smartphone to a 4K monitor.',
      w_kick: 'Why us', w_h: 'Why operators choose us',
      f1h: 'Flexible configuration', f1p: 'Multiple RTP profiles, bet limits and currencies – set up per platform and jurisdiction.',
      f2h: 'Mobile from the first pixel', f2p: 'Games under 5 MB load fast on mobile networks and work in portrait and landscape.',
      f3h: 'Certification', f3p: 'RNG and game maths are verified by an independent lab. Reports on request.',
      f4h: 'Retention tools', f4p: 'Tournaments, free spins and campaigns are configured by the operator from the back office.',
      f5h: 'Real-time analytics', f5p: 'Dashboard with turnover, retention and game popularity. Data export to your BI.',
      f6h: 'Localisation', f6p: 'Game UI in 18 languages, including Armenian, Russian and English. New language within a week.',
      i_kick: 'Integration', i_h: 'From contract to launch in 2 weeks', i_p: 'One API for the whole catalogue. New games appear on your side automatically.',
      s1h: 'Contract and access', s1p: 'We sign the agreement and give you access to the staging environment and docs.',
      s2h: 'API connection', s2p: 'Your developers connect one API: wallet, sessions, round history.',
      s3h: 'Testing', s3p: 'We verify every scenario together with you on staging.', s4h: 'Launch', s4p: 'We switch the games on at your platform and support you 24/7.',
      a1: 'founded', a2: 'people in the team', a3: 'countries', a4: 'partner support',
      ab_kick: 'About us', ab_h: 'A Yerevan studio with a full-cycle team',
      ab_p1: 'Mathematicians, artists, animators and developers work in one office. We design, draw, code and certify every game ourselves.',
      ab_p2: 'We work only with licensed operators and follow the requirements of every jurisdiction.',
      lic2: 'Certified RNG', lic3: 'Responsible gaming',
      c_kick: 'Partnership', c_h: 'Let’s talk integration', c_p: 'Leave a request – our partner manager will reply within one business day and send demo access to all games.',
      c_addr_t: 'Address', c_addr: 'Yerevan, 1 Example St.', c_tel_t: 'Phone',
      fl_name: 'Name', fl_company: 'Company', fl_country: 'Country / jurisdiction', fl_msg: 'Message', fl_msg_ph: 'Games of interest, traffic volume, launch dates',
      fl_send: 'Send request', fl_ok: 'Thank you! This is a demo site – the request was not sent.',
      age: '18+. Information on this site is intended for operators (B2B) and is not gambling advertising.', foot: 'Demo site: name, figures and contacts are placeholders'
    }
  };
  const GAMES = [
    { e: '🍇', c: 'g1', n: 'Ararat Harvest', t: { ru: 'Слот', hy: 'Սլոթ', en: 'Slot' }, r: '96.4%' },
    { e: '🦅', c: 'g2', n: 'Eagle of Van', t: { ru: 'Слот', hy: 'Սլոթ', en: 'Slot' }, r: '96.7%' },
    { e: '💎', c: 'g3', n: 'Emerald Lines', t: { ru: 'Слот', hy: 'Սլոթ', en: 'Slot' }, r: '96.1%' },
    { e: '🃏', c: 'g4', n: 'Royal Blackjack', t: { ru: 'Настольная', hy: 'Սեղանի', en: 'Table' }, r: '99.5%' },
    { e: '🚀', c: 'g5', n: 'Sky Crash', t: { ru: 'Мгновенная', hy: 'Ակնթարթային', en: 'Instant' }, r: '97.0%' },
    { e: '🏺', c: 'g6', n: 'Pomegranate Gold', t: { ru: 'Слот', hy: 'Սլոթ', en: 'Slot' }, r: '96.5%' },
    { e: '🎡', c: 'g7', n: 'Lucky Wheel', t: { ru: 'Мгновенная', hy: 'Ակնթարթային', en: 'Instant' }, r: '96.9%' },
    { e: '🎲', c: 'g8', n: 'Dice Masters', t: { ru: 'Настольная', hy: 'Սեղանի', en: 'Table' }, r: '98.6%' }
  ];

  /* исходные русские тексты берём из разметки */
  const RU = {};
  $$('[data-i]').forEach(el => RU[el.dataset.i] = el.textContent);
  $$('[data-ph]').forEach(el => RU[el.dataset.ph] = el.placeholder);
  T.ru = RU;

  function renderGames(l) {
    $('#gamelist').innerHTML = GAMES.map(g => `<article class="game"><div class="game__art ${g.c}" aria-hidden="true">${g.e}</div>
      <div class="game__body"><h3>${g.n}</h3><div class="game__meta"><span>${g.t[l]}</span><span>RTP ${g.r}</span><span>HTML5</span></div></div></article>`).join('');
  }
  function setLang(l) {
    if (!T[l]) l = 'ru';
    document.documentElement.lang = l;
    $$('[data-i]').forEach(el => { const v = T[l][el.dataset.i]; if (v != null) el.textContent = v; });
    $$('[data-ph]').forEach(el => { const v = T[l][el.dataset.ph]; if (v != null) el.placeholder = v; });
    $$('.lang button').forEach(b => b.setAttribute('aria-pressed', b.dataset.l === l));
    renderGames(l);
    try { localStorage.setItem('lang', l); } catch (e) {}
  }
  $$('.lang button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.l)));
  let start = new URLSearchParams(location.search).get('lang');
  if (!start) { try { start = localStorage.getItem('lang'); } catch (e) {} }
  if (!start) { const n = (navigator.language || '').slice(0, 2); start = n === 'hy' ? 'hy' : n === 'ru' ? 'ru' : n ? 'en' : 'ru'; }
  setLang(start);

  /* меню */
  const hdr = $('.hdr');
  $('.burger').addEventListener('click', () => { const o = hdr.classList.toggle('open'); $('.burger').setAttribute('aria-expanded', o); });
  $$('.nav a').forEach(a => a.addEventListener('click', () => hdr.classList.remove('open')));

  /* форма */
  $('#form').addEventListener('submit', e => { e.preventDefault(); $('#form .ok').hidden = false; $('#form button[type=submit]').disabled = true; });

  /* появление блоков */
  if ('IntersectionObserver' in window && !reduced) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -40px 0px' });
    $$('.rv').forEach(el => io.observe(el));
  } else $$('.rv').forEach(el => el.classList.add('in'));

  /* барабаны на первом экране */
  const SYM = ['🍇', '💎', '🦅', '🏺', '⭐', '🍒', '7️⃣'];
  const strips = $$('.reel__strip');
  function cell() { return strips[0].parentElement.clientHeight / 3; }
  strips.forEach((s, i) => { s.innerHTML = Array.from({ length: 30 }, (_, k) => `<span>${SYM[(k * (i + 2) + i) % SYM.length]}</span>`).join(''); });
  function layout() { const c = cell(); document.documentElement.style.setProperty('--cell', c + 'px'); }
  layout(); addEventListener('resize', layout);
  let pos = [3, 7, 11];
  function place(anim) {
    const c = cell();
    strips.forEach((s, i) => { s.style.transition = anim ? `transform ${1.1 + i * .35}s cubic-bezier(.15,.8,.2,1)` : 'none'; s.style.transform = `translateY(${-(pos[i] - 1) * c}px)`; });
  }
  place(false);
  if (!reduced) setInterval(() => { pos = pos.map(p => (p + 7 + Math.floor(Math.random() * 6)) % 24 + 2); place(true); }, 3200);
})();
