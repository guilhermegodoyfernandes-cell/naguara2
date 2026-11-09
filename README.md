# Na'Guará – Portfólio PWA

Portfólio mobile first sobre arepa, tequeño e chicha. HTML, CSS e JavaScript puros, com manifest.json e service worker (instalável e offline).

## Testar localmente
    python3 -m http.server 8080
Abra http://localhost:8080 (o service worker funciona em localhost).

## Publicar no Render via GitHub
1. Crie um repositório no GitHub e envie estes arquivos:
       git init && git add . && git commit -m "Na'Guará PWA"
       git branch -M main
       git remote add origin https://github.com/SEU_USUARIO/naguara.git
       git push -u origin main
2. No Render: New + > Static Site > conecte o repositório.
3. Build Command: deixe vazio. Publish Directory: `.`
4. Create Static Site. O link https://SEU-APP.onrender.com já pode ser instalado como PWA (HTTPS é automático).
