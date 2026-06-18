# -*- coding: utf-8 -*-
import unicodedata, re, json, os
import fitz

PDF = r'C:\Users\draxs\Downloads\Catálogo Bender Story (1).pdf'

def slug(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii','ignore').decode()
    s = re.sub(r'[^a-zA-Z0-9]+','-',s).strip('-').lower()
    return s

brasil = ["Flamengo","Palmeiras","Fluminense","Corinthians","Vasco","Grêmio","Atlético Mineiro","Botafogo",
          "Bahia","Athletico Paranaense","Internacional","Fortaleza","São Paulo","Cruzeiro","Bragantino","Santos",
          "Coritiba","América Mineiro","Vitória","Sport","Ceará","Remo","Avaí","Paysandu"]
premier = ["Manchester City","Arsenal","Manchester United","Newcastle","Liverpool","Brighton","Aston Villa","Tottenham",
           "West Ham","Chelsea","Wolves","Bournemouth","Fulham","Crystal Palace","Nottingham","Everton"]
laliga = ["Real Madrid","Barcelona","Atlético de Madrid","Bilbao","Real Sociedad","Betis","Valencia","Rayo Vallecano",
          "Sevilla","Cádiz","Espanyol","Valladolid","Celta de Vigo","Girona","Alavés","Granada"]
ligue1 = ["PSG","Monaco","Marseille","Lens","Reims","Rennais","Nantes","Lyon"]
seriea = ["Inter de Milão","Juventus","AC Milan","Fiorentina","Bologna","Roma","Napoli","Lazio",
          "Empoli","Genoa","Udinese","Cagliari","Venezia","Parma","Bari","Palermo"]
bundesliga = ["Bayern Munchen","Leverkusen","Leipzig","Borussia Dortmund","Frankfurt","Hoffenheim","Wolfsburg","Borussia Verein"]
outras = ["Al Hilal","Al Nassr","Al Ittihad","Sporting","Benfica","Porto","SC Braga","River Plate",
          "Boca Juniors","Colo-Colo","Universidade de Chile","Inter de Miami","New England Revolution","Orlando City","Atlanta United","Minnesota United"]
selecoes = ["Brasil","Argentina","México","Arábia Saudita","Holanda","Senegal","Equador","Qatar",
            "Inglaterra","País de Gales","França","Dinamarca","Japão","Espanha","Alemanha","Costa Rica",
            "Marrocos","Croácia","Bélgica","Canadá","Portugal","Coreia do Sul","Uruguai","Gana",
            "Estados Unidos","Escócia","Itália","Jamaica","Finlândia","Nigéria","Costa do Marfim","Colômbia"]

leagues = [
    ("brasileirao",   "Campeonato Brasileiro", "Brasileirão", brasil),
    ("premier-league","Premier League",        "Premier",     premier),
    ("la-liga",       "La Liga",                "La Liga",     laliga),
    ("ligue-1",       "Ligue 1",                "Ligue 1",     ligue1),
    ("serie-a",       "Campeonato Italiano",    "Série A",     seriea),
    ("bundesliga",    "Bundesliga",             "Bundesliga",  bundesliga),
    ("outras-ligas",  "Outras Ligas",           "Outras",      outras),
    ("selecoes",      "Seleções",               "Seleções",    selecoes),
]

product_defs = [
    ("Versão Jogador", "assets/products/versao-jogador.jpg"),
    ("Calções",        "assets/products/calcoes.jpg"),
    ("Corta-Vento",    "assets/products/corta-vento.jpg"),
    ("Kit de Treino",  "assets/products/kit-de-treino.jpg"),
]

# ---------- Extract links from the PDF ----------
doc = fitz.open(PDF)

def row_grouped(page):
    links = [l for l in page.get_links() if l.get('uri')]
    links.sort(key=lambda l: l['from'].y0)
    rows = []; cur = []; prev = None
    for l in links:
        y = l['from'].y0
        if prev is not None and y - prev > 30:
            rows.append(cur); cur = []
        cur.append(l); prev = y
    if cur: rows.append(cur)
    for r in rows:
        r.sort(key=lambda l: l['from'].x0)
    return rows

# Page 2: 136 crest links in reading order
crest_rows = row_grouped(doc[1])
crest_links = [l['uri'] for r in crest_rows for l in r]

flat_names = [n for _, _, _, names in leagues for n in names]
assert len(crest_links) == len(flat_names), f'{len(crest_links)} links != {len(flat_names)} teams'
name_to_url = dict(zip(flat_names, crest_links))

# Page 1: contact links (whatsapp first by y, then instagram)
p1 = [l['uri'] for l in sorted([x for x in doc[0].get_links() if x.get('uri')], key=lambda l: l['from'].y0)]
whatsapp_url = next((u for u in p1 if 'instagram' not in u), p1[0])
instagram_url = next((u for u in p1 if 'instagram' in u), '')
# clean instagram tracking param -> keep handle only
m = re.search(r'instagram\.com/([^/?]+)', instagram_url)
instagram_clean = f'https://www.instagram.com/{m.group(1)}' if m else instagram_url

# Page 3: product links sorted by x
p3 = [l['uri'] for l in sorted([x for x in doc[2].get_links() if x.get('uri')], key=lambda l: l['from'].x0)]

# ---------- Build output ----------
out = []
for key, title, short, names in leagues:
    teams = [{"name": n, "crest": f"assets/crests/{key}--{slug(n)}.png", "url": name_to_url[n]} for n in names]
    out.append({"key": key, "title": title, "short": short,
                "banner": f"assets/banners/{key}.jpg", "teams": teams})

prod = []
for i, (name, img) in enumerate(product_defs):
    prod.append({"name": name, "img": img, "url": p3[i] if i < len(p3) else ""})

js  = "// Auto-gerado a partir de 'Catálogo Bender Story.pdf' (links de cada time inclusos).\n"
js += "// Para regerar: python _pdf_extract/generate_data.py\n"
js += "const CONFIG = {\n"
js += '  brand: "Bender Story",\n'
js += '  designer: "Andriel Designer",\n'
js += f'  whatsappUrl: {json.dumps(whatsapp_url)},\n'
js += f'  instagramUrl: {json.dumps(instagram_clean)}\n'
js += "};\n\n"
js += "const LEAGUES = " + json.dumps(out, ensure_ascii=False, indent=2) + ";\n\n"
js += "const PRODUCTS = " + json.dumps(prod, ensure_ascii=False, indent=2) + ";\n"

dst = r'C:\Users\draxs\Desktop\bender\js'
with open(os.path.join(dst,'data.js'),'w',encoding='utf-8') as f:
    f.write(js)

print(f'OK -> {len(out)} ligas, {len(flat_names)} times com link, {len(prod)} produtos')
print('whatsapp :', whatsapp_url)
print('instagram:', instagram_clean)
print('exemplos:')
for n in ["Flamengo","Corinthians","Real Madrid","Brasil"]:
    print(f'   {n:14s} -> {name_to_url[n]}')
