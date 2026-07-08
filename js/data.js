// Auto-gerado a partir de 'Catálogo Bender Story.pdf' (links de cada time inclusos).
// Para regerar: python _pdf_extract/generate_data.py
const CONFIG = {
  brand: "Bender Story",
  designer: "Andriel Designer",
  whatsappUrl: "https://contate.me/bender_story",
  instagramUrl: "https://www.instagram.com/bender_story"
};

const LEAGUES = [
  {
    "key": "brasileirao",
    "title": "Campeonato Brasileiro",
    "short": "Brasileirão",
    "banner": "assets/banners/brasileirao.jpg",
    "teams": [
      {
        "name": "Flamengo",
        "crest": "assets/crests/brasileirao--flamengo.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Palmeiras",
        "crest": "assets/crests/brasileirao--palmeiras.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Fluminense",
        "crest": "assets/crests/brasileirao--fluminense.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Corinthians",
        "crest": "assets/crests/brasileirao--corinthians.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Vasco",
        "crest": "assets/crests/brasileirao--vasco.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Grêmio",
        "crest": "assets/crests/brasileirao--gremio.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Atlético Mineiro",
        "crest": "assets/crests/brasileirao--atletico-mineiro.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Botafogo",
        "crest": "assets/crests/brasileirao--botafogo.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Bahia",
        "crest": "assets/crests/brasileirao--bahia.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Athletico Paranaense",
        "crest": "assets/crests/brasileirao--athletico-paranaense.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Internacional",
        "crest": "assets/crests/brasileirao--internacional.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Fortaleza",
        "crest": "assets/crests/brasileirao--fortaleza.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "São Paulo",
        "crest": "assets/crests/brasileirao--sao-paulo.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Cruzeiro",
        "crest": "assets/crests/brasileirao--cruzeiro.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Bragantino",
        "crest": "assets/crests/brasileirao--bragantino.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Santos",
        "crest": "assets/crests/brasileirao--santos.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Coritiba",
        "crest": "assets/crests/brasileirao--coritiba.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "América Mineiro",
        "crest": "assets/crests/brasileirao--america-mineiro.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Vitória",
        "crest": "assets/crests/brasileirao--vitoria.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Sport",
        "crest": "assets/crests/brasileirao--sport.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Ceará",
        "crest": "assets/crests/brasileirao--ceara.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Remo",
        "crest": "assets/crests/brasileirao--remo.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Avaí",
        "crest": "assets/crests/brasileirao--avai.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      },
      {
        "name": "Paysandu",
        "crest": "assets/crests/brasileirao--paysandu.png",
        "url": "https://drive.google.com/drive/folders/1yXfDFIeabqTtFl9g5Xnb0EVoJbhApgk0"
      }
    ]
  },
  {
    "key": "premier-league",
    "title": "Premier League",
    "short": "Premier",
    "banner": "assets/banners/premier-league.jpg",
    "teams": [
      {
        "name": "Manchester City",
        "crest": "assets/crests/premier-league--manchester-city.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Arsenal",
        "crest": "assets/crests/premier-league--arsenal.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Manchester United",
        "crest": "assets/crests/premier-league--manchester-united.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Newcastle",
        "crest": "assets/crests/premier-league--newcastle.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Liverpool",
        "crest": "assets/crests/premier-league--liverpool.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Brighton",
        "crest": "assets/crests/premier-league--brighton.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Aston Villa",
        "crest": "assets/crests/premier-league--aston-villa.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Tottenham",
        "crest": "assets/crests/premier-league--tottenham.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "West Ham",
        "crest": "assets/crests/premier-league--west-ham.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Chelsea",
        "crest": "assets/crests/premier-league--chelsea.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Wolves",
        "crest": "assets/crests/premier-league--wolves.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Bournemouth",
        "crest": "assets/crests/premier-league--bournemouth.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Fulham",
        "crest": "assets/crests/premier-league--fulham.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Crystal Palace",
        "crest": "assets/crests/premier-league--crystal-palace.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Nottingham",
        "crest": "assets/crests/premier-league--nottingham.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Everton",
        "crest": "assets/crests/premier-league--everton.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      }
    ]
  },
  {
    "key": "la-liga",
    "title": "La Liga",
    "short": "La Liga",
    "banner": "assets/banners/la-liga.jpg",
    "teams": [
      {
        "name": "Real Madrid",
        "crest": "assets/crests/la-liga--real-madrid.png",
        "url": "https://drive.google.com/drive/folders/1noDeKm4EsM01jqxaWFIbAOoWeL_xqfFL"
      },
      {
        "name": "Barcelona",
        "crest": "assets/crests/la-liga--barcelona.png",
        "url": "https://drive.google.com/drive/folders/1noDeKm4EsM01jqxaWFIbAOoWeL_xqfFL"
      },
      {
        "name": "Atlético de Madrid",
        "crest": "assets/crests/la-liga--atletico-de-madrid.png",
        "url": "https://drive.google.com/drive/folders/1noDeKm4EsM01jqxaWFIbAOoWeL_xqfFL"
      },
      {
        "name": "Bilbao",
        "crest": "assets/crests/la-liga--bilbao.png",
        "url": "https://drive.google.com/drive/folders/1noDeKm4EsM01jqxaWFIbAOoWeL_xqfFL"
      },
      {
        "name": "Real Sociedad",
        "crest": "assets/crests/la-liga--real-sociedad.png",
        "url": "https://drive.google.com/drive/folders/1noDeKm4EsM01jqxaWFIbAOoWeL_xqfFL"
      },
      {
        "name": "Betis",
        "crest": "assets/crests/la-liga--betis.png",
        "url": "https://drive.google.com/drive/folders/1noDeKm4EsM01jqxaWFIbAOoWeL_xqfFL"
      },
      {
        "name": "Valencia",
        "crest": "assets/crests/la-liga--valencia.png",
        "url": "https://drive.google.com/drive/folders/1noDeKm4EsM01jqxaWFIbAOoWeL_xqfFL"
      },
      {
        "name": "Rayo Vallecano",
        "crest": "assets/crests/la-liga--rayo-vallecano.png",
        "url": "https://drive.google.com/drive/folders/1noDeKm4EsM01jqxaWFIbAOoWeL_xqfFL"
      },
      {
        "name": "Sevilla",
        "crest": "assets/crests/la-liga--sevilla.png",
        "url": "https://drive.google.com/drive/folders/1noDeKm4EsM01jqxaWFIbAOoWeL_xqfFL"
      },
      {
        "name": "Cádiz",
        "crest": "assets/crests/la-liga--cadiz.png",
        "url": "https://drive.google.com/drive/folders/1noDeKm4EsM01jqxaWFIbAOoWeL_xqfFL"
      },
      {
        "name": "Espanyol",
        "crest": "assets/crests/la-liga--espanyol.png",
        "url": "https://drive.google.com/drive/folders/1noDeKm4EsM01jqxaWFIbAOoWeL_xqfFL"
      },
      {
        "name": "Valladolid",
        "crest": "assets/crests/la-liga--valladolid.png",
        "url": "https://drive.google.com/drive/folders/1noDeKm4EsM01jqxaWFIbAOoWeL_xqfFL"
      },
      {
        "name": "Celta de Vigo",
        "crest": "assets/crests/la-liga--celta-de-vigo.png",
        "url": "https://drive.google.com/drive/folders/1noDeKm4EsM01jqxaWFIbAOoWeL_xqfFL"
      },
      {
        "name": "Girona",
        "crest": "assets/crests/la-liga--girona.png",
        "url": "https://drive.google.com/drive/folders/1noDeKm4EsM01jqxaWFIbAOoWeL_xqfFL"
      },
      {
        "name": "Alavés",
        "crest": "assets/crests/la-liga--alaves.png",
        "url": "https://drive.google.com/drive/folders/1noDeKm4EsM01jqxaWFIbAOoWeL_xqfFL"
      },
      {
        "name": "Granada",
        "crest": "assets/crests/la-liga--granada.png",
        "url": "https://drive.google.com/drive/folders/1noDeKm4EsM01jqxaWFIbAOoWeL_xqfFL"
      }
    ]
  },
  {
    "key": "ligue-1",
    "title": "Ligue 1",
    "short": "Ligue 1",
    "banner": "assets/banners/ligue-1.jpg",
    "teams": [
      {
        "name": "PSG",
        "crest": "assets/crests/ligue-1--psg.png",
        "url": "https://drive.google.com/drive/folders/1STSRL6g5gjwoq7aVVQHDWyzPB69iwil7"
      },
      {
        "name": "Monaco",
        "crest": "assets/crests/ligue-1--monaco.png",
        "url": "https://drive.google.com/drive/folders/1STSRL6g5gjwoq7aVVQHDWyzPB69iwil7"
      },
      {
        "name": "Marseille",
        "crest": "assets/crests/ligue-1--marseille.png",
        "url": "https://drive.google.com/drive/folders/1STSRL6g5gjwoq7aVVQHDWyzPB69iwil7"
      },
      {
        "name": "Lens",
        "crest": "assets/crests/ligue-1--lens.png",
        "url": "https://drive.google.com/drive/folders/1STSRL6g5gjwoq7aVVQHDWyzPB69iwil7"
      },
      {
        "name": "Reims",
        "crest": "assets/crests/ligue-1--reims.png",
        "url": "https://drive.google.com/drive/folders/1STSRL6g5gjwoq7aVVQHDWyzPB69iwil7"
      },
      {
        "name": "Rennais",
        "crest": "assets/crests/ligue-1--rennais.png",
        "url": "https://drive.google.com/drive/folders/1STSRL6g5gjwoq7aVVQHDWyzPB69iwil7"
      },
      {
        "name": "Nantes",
        "crest": "assets/crests/ligue-1--nantes.png",
        "url": "https://drive.google.com/drive/folders/1STSRL6g5gjwoq7aVVQHDWyzPB69iwil7"
      },
      {
        "name": "Lyon",
        "crest": "assets/crests/ligue-1--lyon.png",
        "url": "https://drive.google.com/drive/folders/1STSRL6g5gjwoq7aVVQHDWyzPB69iwil7"
      }
    ]
  },
  {
    "key": "serie-a",
    "title": "Campeonato Italiano",
    "short": "Série A",
    "banner": "assets/banners/serie-a.jpg",
    "teams": [
      {
        "name": "Inter de Milão",
        "crest": "assets/crests/serie-a--inter-de-milao.png",
        "url": "https://drive.google.com/drive/folders/1g8qkTKjv8CHDts3hRp4hfwfu6WA9UhyP"
      },
      {
        "name": "Juventus",
        "crest": "assets/crests/serie-a--juventus.png",
        "url": "https://drive.google.com/drive/folders/1g8qkTKjv8CHDts3hRp4hfwfu6WA9UhyP"
      },
      {
        "name": "AC Milan",
        "crest": "assets/crests/serie-a--ac-milan.png",
        "url": "https://drive.google.com/drive/folders/1g8qkTKjv8CHDts3hRp4hfwfu6WA9UhyP"
      },
      {
        "name": "Fiorentina",
        "crest": "assets/crests/serie-a--fiorentina.png",
        "url": "https://drive.google.com/drive/folders/1g8qkTKjv8CHDts3hRp4hfwfu6WA9UhyP"
      },
      {
        "name": "Bologna",
        "crest": "assets/crests/serie-a--bologna.png",
        "url": "https://drive.google.com/drive/folders/1g8qkTKjv8CHDts3hRp4hfwfu6WA9UhyP"
      },
      {
        "name": "Roma",
        "crest": "assets/crests/serie-a--roma.png",
        "url": "https://drive.google.com/drive/folders/1g8qkTKjv8CHDts3hRp4hfwfu6WA9UhyP"
      },
      {
        "name": "Napoli",
        "crest": "assets/crests/serie-a--napoli.png",
        "url": "https://drive.google.com/drive/folders/1g8qkTKjv8CHDts3hRp4hfwfu6WA9UhyP"
      },
      {
        "name": "Lazio",
        "crest": "assets/crests/serie-a--lazio.png",
        "url": "https://drive.google.com/drive/folders/1g8qkTKjv8CHDts3hRp4hfwfu6WA9UhyP"
      },
      {
        "name": "Empoli",
        "crest": "assets/crests/serie-a--empoli.png",
        "url": "https://drive.google.com/drive/folders/1g8qkTKjv8CHDts3hRp4hfwfu6WA9UhyP"
      },
      {
        "name": "Genoa",
        "crest": "assets/crests/serie-a--genoa.png",
        "url": "https://drive.google.com/drive/folders/1g8qkTKjv8CHDts3hRp4hfwfu6WA9UhyP"
      },
      {
        "name": "Udinese",
        "crest": "assets/crests/serie-a--udinese.png",
        "url": "https://drive.google.com/drive/folders/1g8qkTKjv8CHDts3hRp4hfwfu6WA9UhyP"
      },
      {
        "name": "Cagliari",
        "crest": "assets/crests/serie-a--cagliari.png",
        "url": "https://drive.google.com/drive/folders/1g8qkTKjv8CHDts3hRp4hfwfu6WA9UhyP"
      },
      {
        "name": "Venezia",
        "crest": "assets/crests/serie-a--venezia.png",
        "url": "https://drive.google.com/drive/folders/1g8qkTKjv8CHDts3hRp4hfwfu6WA9UhyP"
      },
      {
        "name": "Parma",
        "crest": "assets/crests/serie-a--parma.png",
        "url": "https://drive.google.com/drive/folders/1g8qkTKjv8CHDts3hRp4hfwfu6WA9UhyP"
      },
      {
        "name": "Bari",
        "crest": "assets/crests/serie-a--bari.png",
        "url": "https://drive.google.com/drive/folders/1g8qkTKjv8CHDts3hRp4hfwfu6WA9UhyP"
      },
      {
        "name": "Palermo",
        "crest": "assets/crests/serie-a--palermo.png",
        "url": "https://drive.google.com/drive/folders/1g8qkTKjv8CHDts3hRp4hfwfu6WA9UhyP"
      }
    ]
  },
  {
    "key": "bundesliga",
    "title": "Bundesliga",
    "short": "Bundesliga",
    "banner": "assets/banners/bundesliga.jpg",
    "teams": [
      {
        "name": "Bayern Munchen",
        "crest": "assets/crests/bundesliga--bayern-munchen.png",
        "url": "https://drive.google.com/drive/folders/1ImzZ-ibV67z_2jS6JrUJysMQ71Tr2TU-"
      },
      {
        "name": "Leverkusen",
        "crest": "assets/crests/bundesliga--leverkusen.png",
        "url": "https://drive.google.com/drive/folders/1ImzZ-ibV67z_2jS6JrUJysMQ71Tr2TU-"
      },
      {
        "name": "Leipzig",
        "crest": "assets/crests/bundesliga--leipzig.png",
        "url": "https://drive.google.com/drive/folders/1ImzZ-ibV67z_2jS6JrUJysMQ71Tr2TU-"
      },
      {
        "name": "Borussia Dortmund",
        "crest": "assets/crests/bundesliga--borussia-dortmund.png",
        "url": "https://drive.google.com/drive/folders/1ImzZ-ibV67z_2jS6JrUJysMQ71Tr2TU-"
      },
      {
        "name": "Frankfurt",
        "crest": "assets/crests/bundesliga--frankfurt.png",
        "url": "https://drive.google.com/drive/folders/1ImzZ-ibV67z_2jS6JrUJysMQ71Tr2TU-"
      },
      {
        "name": "Hoffenheim",
        "crest": "assets/crests/bundesliga--hoffenheim.png",
        "url": "https://drive.google.com/drive/folders/1ImzZ-ibV67z_2jS6JrUJysMQ71Tr2TU-"
      },
      {
        "name": "Wolfsburg",
        "crest": "assets/crests/bundesliga--wolfsburg.png",
        "url": "https://drive.google.com/drive/folders/1ImzZ-ibV67z_2jS6JrUJysMQ71Tr2TU-"
      },
      {
        "name": "Borussia Verein",
        "crest": "assets/crests/bundesliga--borussia-verein.png",
        "url": "https://drive.google.com/drive/folders/1ImzZ-ibV67z_2jS6JrUJysMQ71Tr2TU-"
      }
    ]
  },
  {
    "key": "outras-ligas",
    "title": "Outras Ligas",
    "short": "Outras",
    "banner": "assets/banners/outras-ligas.jpg",
    "teams": [
      {
        "name": "Al Hilal",
        "crest": "assets/crests/outras-ligas--al-hilal.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Al Nassr",
        "crest": "assets/crests/outras-ligas--al-nassr.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Al Ittihad",
        "crest": "assets/crests/outras-ligas--al-ittihad.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Sporting",
        "crest": "assets/crests/outras-ligas--sporting.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Benfica",
        "crest": "assets/crests/outras-ligas--benfica.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Porto",
        "crest": "assets/crests/outras-ligas--porto.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "SC Braga",
        "crest": "assets/crests/outras-ligas--sc-braga.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "River Plate",
        "crest": "assets/crests/outras-ligas--river-plate.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Boca Juniors",
        "crest": "assets/crests/outras-ligas--boca-juniors.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Colo-Colo",
        "crest": "assets/crests/outras-ligas--colo-colo.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Universidade de Chile",
        "crest": "assets/crests/outras-ligas--universidade-de-chile.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Inter de Miami",
        "crest": "assets/crests/outras-ligas--inter-de-miami.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "New England Revolution",
        "crest": "assets/crests/outras-ligas--new-england-revolution.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Orlando City",
        "crest": "assets/crests/outras-ligas--orlando-city.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Atlanta United",
        "crest": "assets/crests/outras-ligas--atlanta-united.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Minnesota United",
        "crest": "assets/crests/outras-ligas--minnesota-united.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      }
    ]
  },
  {
    "key": "selecoes",
    "title": "Seleções",
    "short": "Seleções",
    "banner": "assets/banners/selecoes.jpg",
    "teams": [
      {
        "name": "Brasil",
        "crest": "assets/crests/selecoes--brasil.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Argentina",
        "crest": "assets/crests/selecoes--argentina.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "México",
        "crest": "assets/crests/selecoes--mexico.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Arábia Saudita",
        "crest": "assets/crests/selecoes--arabia-saudita.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Holanda",
        "crest": "assets/crests/selecoes--holanda.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Senegal",
        "crest": "assets/crests/selecoes--senegal.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Equador",
        "crest": "assets/crests/selecoes--equador.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Qatar",
        "crest": "assets/crests/selecoes--qatar.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Inglaterra",
        "crest": "assets/crests/selecoes--inglaterra.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "País de Gales",
        "crest": "assets/crests/selecoes--pais-de-gales.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "França",
        "crest": "assets/crests/selecoes--franca.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Dinamarca",
        "crest": "assets/crests/selecoes--dinamarca.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Japão",
        "crest": "assets/crests/selecoes--japao.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Espanha",
        "crest": "assets/crests/selecoes--espanha.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Alemanha",
        "crest": "assets/crests/selecoes--alemanha.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Costa Rica",
        "crest": "assets/crests/selecoes--costa-rica.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Marrocos",
        "crest": "assets/crests/selecoes--marrocos.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Croácia",
        "crest": "assets/crests/selecoes--croacia.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Bélgica",
        "crest": "assets/crests/selecoes--belgica.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Canadá",
        "crest": "assets/crests/selecoes--canada.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Portugal",
        "crest": "assets/crests/selecoes--portugal.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Coreia do Sul",
        "crest": "assets/crests/selecoes--coreia-do-sul.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Uruguai",
        "crest": "assets/crests/selecoes--uruguai.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Gana",
        "crest": "assets/crests/selecoes--gana.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Estados Unidos",
        "crest": "assets/crests/selecoes--estados-unidos.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Escócia",
        "crest": "assets/crests/selecoes--escocia.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Itália",
        "crest": "assets/crests/selecoes--italia.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Jamaica",
        "crest": "assets/crests/selecoes--jamaica.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Finlândia",
        "crest": "assets/crests/selecoes--finlandia.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Nigéria",
        "crest": "assets/crests/selecoes--nigeria.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Costa do Marfim",
        "crest": "assets/crests/selecoes--costa-do-marfim.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      },
      {
        "name": "Colômbia",
        "crest": "assets/crests/selecoes--colombia.png",
        "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
      }
    ]
  }
];

const PRODUCTS = [
  {
    "name": "Versão Jogador",
    "img": "assets/products/versao-jogador.jpg",
    "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
  },
  {
    "name": "Calções",
    "img": "assets/products/calcoes.jpg",
    "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
  },
  {
    "name": "Corta-Vento",
    "img": "assets/products/corta-vento.jpg",
    "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
  },
  {
    "name": "Kit de Treino",
    "img": "assets/products/kit-de-treino.jpg",
    "url": "https://drive.google.com/drive/folders/1R1uPR5tBmSrjUi2sOfS19rZ2G5thy435"
  }
];
