# Domfix Hemservice – webbplats

Enkel ensidig webbplats för Domfix Hemservice (städning för hem, kontor och butiker i Alvesta, Växjö och omnejd).

- `index.html` – sidans innehåll
- `css/site.css`, `js/site.js` – stil och skript (inga externa beroenden)
- `fonts/` – Poppins, självhostad (SIL Open Font License)
- `favicon.svg`, `og-image.png` – ikon och delningsbild
- `CNAME` – egen domän: domfix.se (GitHub Pages)

Publiceras med GitHub Pages från grenen `main`.

## Färger
| Namn | Kod | Användning |
|---|---|---|
| Teal | #0F4C5C | Huvudfärg |
| Mörk orange | #D9741E | Accent på ljus bakgrund |
| Ljus orange | #F4A947 | Accent på teal/mörk bakgrund |
| Matt dimma | #D3E2DF | Ljus bakgrund |

## Säkerhet
- Strikt Content-Security-Policy: bara egna filer får laddas, inga inline-skript eller -stilar.
- Inga externa tjänster eller spårning (typsnitt ligger lokalt, ingen data skickas till Google).
- Inga formulär och ingen databas – inget som kan läcka kunddata.
- HTTPS tvingas via GitHub Pages.
- `/.well-known/security.txt` anger kontakt för säkerhetsfrågor.
