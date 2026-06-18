# Bender Story — Catálogo Web

Versão web responsiva do catálogo **Bender Story** (camisas de time + outros), no mesmo estilo visual do PDF original: fundo escuro, destaque em ciano, tipografia pesada, banners por liga e grade de escudos.

## 🔗 Links e configuração (`js/data.js`)

Os links de **cada time**, os produtos e os contatos foram extraídos automaticamente do PDF:

- **Clicar num escudo** → abre o **álbum de fotos daquele time no Google Photos** (as camisas disponíveis).
- **Clicar num produto** → abre o álbum de fotos do produto.
- Botões de **WhatsApp** → `https://contate.me/bender_story`.
- Botões de **Instagram** → `https://www.instagram.com/bender_story`.

Tudo fica no `CONFIG` e no campo `url` de cada time/produto:

```js
const CONFIG = {
  brand: "Bender Story",
  designer: "Andriel Designer",
  whatsappUrl: "https://contate.me/bender_story",
  instagramUrl: "https://www.instagram.com/bender_story"
};
```

Para **trocar** o álbum de um time, edite o `url` dele. Se um time ficar sem `url`, o clique cai no WhatsApp da loja (fallback).

## ▶️ Como rodar

É um site estático (HTML/CSS/JS puro, sem build). Basta servir a pasta:

```bash
# Python
python -m http.server 5599
# depois abra http://localhost:5599
```

Ou simplesmente abra o `index.html` no navegador (alguns navegadores exigem servir via HTTP para carregar as imagens — prefira o comando acima). Para publicar, suba a pasta inteira em qualquer hospedagem estática (GitHub Pages, Netlify, Vercel, etc.).

## 🗂️ Estrutura

```
bender/
├── index.html              # página
├── css/styles.css          # estilo (cores, layout, responsivo)
├── js/
│   ├── data.js             # CONFIG + ligas/times + produtos (editável)
│   └── app.js              # monta o catálogo, busca, navegação, links
├── assets/
│   ├── img/                # logo.png, hero.jpg
│   ├── banners/            # banner de cada liga + "outros-produtos"
│   ├── crests/             # 136 escudos (extraídos do catálogo)
│   └── products/           # 4 fotos de produtos
└── _pdf_extract/           # scripts Python usados para extrair os assets do PDF
```

## ✏️ Editar / adicionar times

Tudo vem de `js/data.js`. Cada liga tem um array `teams`:

```js
{ "name": "Flamengo", "crest": "assets/crests/brasileirao--flamengo.png", "url": "https://photos.app.goo.gl/..." }
```

Para adicionar um time, coloque a imagem do escudo em `assets/crests/`, o link do álbum em `url` e acrescente o objeto na liga correspondente. Para criar uma nova liga, adicione um item em `LEAGUES` com `key`, `title`, `short`, `banner` e `teams` — a navegação e a seção são geradas automaticamente.

> 💡 Os links foram gerados a partir do PDF por `_pdf_extract/generate_data.py`. Se você atualizar o PDF (com novos links/times), rode `python _pdf_extract/generate_data.py` para regerar o `data.js`.

## ✨ Recursos

- 100% responsivo (3 colunas no celular → até 10 no desktop)
- Busca instantânea por time/seleção (ignora acentos)
- Navegação por liga com destaque do que está na tela
- **Clique no escudo → abre o álbum de fotos do time no Google Photos**
- Botão flutuante de WhatsApp, animações suaves, modo "reduzir movimento" respeitado

---

> Os escudos, banners, logo, fotos **e os links de cada time** foram extraídos do arquivo **Catálogo Bender Story.pdf**.
> Design original: **Andriel Designer**.
