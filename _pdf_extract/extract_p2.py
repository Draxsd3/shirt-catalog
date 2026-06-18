# -*- coding: utf-8 -*-
import os, unicodedata, re
from PIL import Image

SRC = r'C:\Users\draxs\Desktop\bender\_pdf_extract\page_2.png'
ROOT = r'C:\Users\draxs\Desktop\bender\assets'
CRESTS = os.path.join(ROOT, 'crests')
BANNERS = os.path.join(ROOT, 'banners')
os.makedirs(CRESTS, exist_ok=True)
os.makedirs(BANNERS, exist_ok=True)

def slug(s):
    s = unicodedata.normalize('NFKD', s).encode('ascii', 'ignore').decode()
    s = re.sub(r'[^a-zA-Z0-9]+', '-', s).strip('-').lower()
    return s

img = Image.open(SRC).convert('RGB')

COLS = [77, 204, 331, 461, 585, 713, 840, 967]
HALF = 54  # 108px square

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

sections = [
    ('brasileirao',   [704,856,1008],             brasil),
    ('premier-league',[1657,1808],                premier),
    ('la-liga',       [2454,2609],                laliga),
    ('ligue-1',       [3231],                      ligue1),
    ('serie-a',       [3856,4007],                seriea),
    ('bundesliga',    [4636],                      bundesliga),
    ('outras-ligas',  [5281,5435],                outras),
    ('selecoes',      [6080,6232,6387,6540],       selecoes),
]

banners = {
    'brasileirao':   (210, 560),
    'premier-league':(1210,1510),
    'la-liga':       (2005,2305),
    'ligue-1':       (2785,3085),
    'serie-a':       (3420,3710),
    'bundesliga':    (4188,4490),
    'outras-ligas':  (4835,5135),
    'selecoes':      (5632,5935),
}

manifest = {}
for skey, rows, names in sections:
    idx = 0
    items = []
    for ry in rows:
        for cx in COLS:
            if idx >= len(names):
                break
            name = names[idx]; idx += 1
            box = (cx-HALF, ry-HALF, cx+HALF, ry+HALF)
            crop = img.crop(box)
            fn = f'{skey}--{slug(name)}.png'
            crop.save(os.path.join(CRESTS, fn))
            items.append({'name': name, 'crest': f'assets/crests/{fn}'})
    manifest[skey] = items
    print(f'{skey}: {len(items)} crests')

for skey,(y0,y1) in banners.items():
    crop = img.crop((0, y0, 1037, y1))
    crop.save(os.path.join(BANNERS, f'{skey}.jpg'), quality=88)
print('banners done')

# build contact sheet of all crests for verification
allf = sorted(os.listdir(CRESTS))
cols=10; cw=108; rows=(len(allf)+cols-1)//cols
sheet=Image.new('RGB',(cols*cw, rows*cw),(20,20,20))
for i,f in enumerate(allf):
    c=Image.open(os.path.join(CRESTS,f))
    sheet.paste(c,((i%cols)*cw,(i//cols)*cw))
sheet.save(r'C:\Users\draxs\Desktop\bender\_pdf_extract\contact_sheet.png')
print('total crests', len(allf), 'contact sheet saved')
