// src/episodesData.ts
export interface Episode {
    id: number;
    title: string;
    description: string;
  }
  
export const seasonOneEpisodes: Episode[] = [
    {
      id: 1,
      title: "1. Bevezető",
      description: "A kellemes első találkozás gyorsan gyalázatos fordulatot vesz, amikor Joe, a könyvesboltvezető, beleszeret Beckbe, a végzős hallgatóba."
    },
    {
      id: 2,
      title: "2. New York utolsó kedves embere",
      description: "Miközben Beck próbálja elhárítani konzulense kéretlen közeledését, elviszi Joe-t Peach puccos partijára. Joe megpróbál dűlőre jutni Benjivel."
    },
    {
      id: 3,
      title: "3. Talán",
      description: "Beck egyéjszakás kalandjai váratlanul érik Joe-t, ahogy a rendőrség érdeklődése is. Mindez ráébreszti arra, hogy kezdenie kell valamit a helyzettel."
    },
    {
      id: 4,
      title: "4. A kapitány",
      description: "A Beckkel töltött kínos este után Joe rájön, nemcsak neki vannak titkai. Peach egyre ellenségesebben viselkedik Joe-val."
    },
    {
      id: 5,
      title: "5. Egy ágyban az ellenséggel",
      description: "Egy régi videó miatt Annikát kísérti a múltja. Joe és Peach között robbanásig nő a feszültség, amikor Peach bemutatja Becket egy komoly irodalmi ügynöknek."
    },
    {
      id: 6,
      title: "6. Őrült szerelem",
      description: "Beck Connecticutba tart Peach-csel, akinek továbbra sem világosak a szándékai. Joe küzdelme Beck szívéért régi emlékeket kavar fel és új sebeket ejt."
    },
    {
      id: 7,
      title: "7. Teljesenség",
      description: "A gyászoló Beck pszichológushoz fordul, Joe pedig követi a példáját, bár más okból. Joe terve Beck születésnapjára nem a tervek szerint alakul."
    },
    {
      id: 8,
      title: "8. Megfogtál, bébi",
      description: "Három hónappal szakításuk után Joe és Beck életében is minden rendben van. Ám miután párszor véletlenül ismét összefutnak, Joe új párkapcsolata veszélybe kerül."
    },
    {
      id: 9,
      title: "9. Candace",
      description: "Mi is történt hát pontosan Candace-szel? Beck elhatározza, hogy kideríti, de ehhez Joe módszereihez kell folyamodnia."
    },
    {
      id: 10,
      title: "10. Kékszakáll vára",
      description: "Joe Paco és Beck problémáival küzd, és most még egy magánnyomozó is bekerül a képbe. Ám a végkifejlet egyre közeledik, így vagy úgy."
    }
]