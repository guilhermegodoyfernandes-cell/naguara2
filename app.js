if ('serviceWorker' in navigator) {
  addEventListener('load', () => navigator.serviceWorker.register('/sw.js'));
}

const btn = document.getElementById('install');
const hint = document.getElementById('ios-hint');
let promptEvt;

addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  promptEvt = e;
  btn.hidden = false;
});

btn.addEventListener('click', async () => {
  if (!promptEvt) return;
  promptEvt.prompt();
  await promptEvt.userChoice;
  promptEvt = null;
  btn.hidden = true;
});

addEventListener('appinstalled', () => { btn.hidden = true; hint.hidden = true; });

const isIOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
const standalone = matchMedia('(display-mode: standalone)').matches || navigator.standalone;
if (isIOS && !standalone) hint.hidden = false;

// Destaca no menu a seção visível
const links = [...document.querySelectorAll('.tabs a')];
const io = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (en.isIntersecting) {
      links.forEach(a => a.removeAttribute('aria-current'));
      const a = links.find(l => l.hash === '#' + en.target.id);
      if (a) a.setAttribute('aria-current', 'true');
    }
  });
}, { rootMargin: '-45% 0px -50% 0px' });
document.querySelectorAll('main section[id]').forEach(s => io.observe(s));
