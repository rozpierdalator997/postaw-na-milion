// ============================================================
// DANE.JS — tu dodajesz/zmieniasz pytania i kategorie.
// To JEDYNY plik, który zmieniasz robiąc kopię gry dla innego gracza.
// Każda grupa musi mieć MINIMUM 10 pozycji (2 wypadają na rundę x 5 rund).
// media: możesz zostawić null, albo wstawić link do obrazka (.jpg/.png)
// lub filmiku (.mp4)
// ============================================================

const gameData = {

zestaw1: {
    latwe: [
    { kategoria: "Geografia", pytanie: "Jakiego kraju są te kontury?", odpowiedzi: ["Syria", "Polska", "Łotwa", "Uganda"], poprawna: 1, media: "l114" },
    { kategoria: "Piłka nożna", pytanie: "Co to za piłkarz?", odpowiedzi: ["To nie piłkarz tylko jakiś murzyn", "Ousmane Dembele", "Eusébio da Silva Ferreira", "Franco Baresi"], poprawna: 1, media: "l103" },
    { kategoria: "Historia", pytanie: "W którym roku był chrzest Polski?", odpowiedzi: ["966", "996", "1410", "1000"], poprawna: 0, media: "l108" },
    { kategoria: "Filmy animowane", pytanie: "Tygrysica, Małpa, Żmija, Modliszka, jakie zwierzę jeszcze było w Wielkiej Piątce?", odpowiedzi: ["Czapla", "Żuraw", "Bocian", "Paw"], poprawna: 1, media: "l127" },
    { kategoria: "Znane powiedzenia", pytanie: "Kto wypowiedział słynne słowa 'Veni, vidi, vici?'", odpowiedzi: ["Oktawian August", "Neron", "Marek Aureliusz", " Juliusz Cezar"], poprawna: 3, media: "l111" },
    { kategoria: "USA", pytanie: "Jaka jest stolica Stanów Zjednoczonych?", odpowiedzi: ["Waszyngton", "Nowy Jork", "Los Angeles", "Houston"], poprawna: 0, media: "l119" },
    { kategoria: "Artyści", pytanie: "Jak się nazywa ten jegomość?", odpowiedzi: ["Borys Przybylski", "Piotr Połać", "Winicjusz Bartków", "Robert Kazanowski"], poprawna: 1, media: "l105" },
    { kategoria: "Siłownia", pytanie: "Które mięśnie nie pracują podczas robienia poprawnych pompek?", odpowiedzi: ["Triceps", "Klatka piersiowa", "Brzuch", "Żadna odpowiedź nie jest poprawna"], poprawna: 3, media: "l130" },
    { kategoria: "Europa", pytanie: "Ilu mieszkańców ma Europa (kontynent)?", odpowiedzi: ["750 mln", "1 mld", "450 mln", "1,5 mld"], poprawna: 0, media: "l101" },
    { kategoria: "Muzyka", pytanie: "Dokończ tekst piosenki", odpowiedzi: ["Chcesz możemy iść na noże", "Mój kutas piękny jest jak Porsche", "Wchodzę w jej cipę jak w bambosze", "Robię rozpierdol bom jest bossem"], poprawna: 2, media: "l122" }
  ],

  srednie: [
    // UZUPEŁNIJ minimum 10 pozycji — skopiuj wzór z grupy "latwe" i podmień treść
    { kategoria: "Sport", pytanie: "O kim jest ten komentarz?", odpowiedzi: ["Robert Korzeniowski", "Jerzy Pawłowski", "Adam Małysz", "Mateusz Kusznierewicz"], poprawna: 2, media: "s114" },
    { kategoria: "Muzyka", pytanie: "Jaki jest tytuł tego utworu?", odpowiedzi: ["Mickey Rourke", "Fame", "II Duce", "Zabójstwo Liryczne"], poprawna: 0, media: "s103" },
    { kategoria: "Polscy nobliści", pytanie: "Która z tych osób nie dostała nagrody Nobla?", odpowiedzi: ["Bolesław Prus", "Maria Skłodowska-Curie", "Władysław Reymont", "Lech Wałęsa"], poprawna: 0, media: "s122" },
    { kategoria: "Numizmatyka", pytanie: "Kto widnieje na banknocie 500zł?", odpowiedzi: ["Jan III Sobieski", "Bolesław I Chrobry", "Zygmunt I Stary", "Władysław II Jagiełło"], poprawna: 0, media: "s108" },
    { kategoria: "CS:GO", pytanie: "Ile kosztuje AK-47 w CS:GO?", odpowiedzi: ["3150", "2900", "2700", "3300"], poprawna: 2, media: "s127" },
    { kategoria: "Kosmos", pytanie: "Jak się nazywa 6 planeta w odległości od słońca?", odpowiedzi: ["Merkury", "Neptun", "Mars", "Saturn"], poprawna: 3, media: "s111" },
    { kategoria: "Podatki", pytanie: "Który z tych podatków nie jest podatkiem bezpośrednim?", odpowiedzi: ["Podatek od zysków kapitałowych", "Podatek od nieruchomości", "Podatek od gier", "CIT"], poprawna: 2, media: "s119" },
    { kategoria: "Aktorki", pytanie: "Co to za aktorka?", odpowiedzi: ["Sasha Grey", "Riley Reid", "Mia Malkova", "Krissy Lynn"], poprawna: 0, media: "s105" },
    { kategoria: "Gry fabularne", pytanie: "Jak brzmi ta fraszka?", odpowiedzi: ["Lambert, Labmert, ty pało", "Lambert, Lambert, ty cepie", "Lambert, Lambert, ty kurwi synu", "Lambert, Lambert, ty chuju"], poprawna: 3, media: "s130" },
    { kategoria: "Bajki", pytanie: "Co to za bajka?", odpowiedzi: ["Coco", "Trolle", "W głowie się nie mieści", "Sing"], poprawna: 2, media: "s101" },
  ],

  trudne: [
    // UZUPEŁNIJ minimum 10 pozycji
    { kategoria: "Jedzenie", pytanie: "W jakiej skali mierzy się ostrość?", odpowiedzi: ["SHU", "BDI", "MBI", "GSES"], poprawna: 0, media: "t101" },
    { kategoria: "Kobiety", pytanie: "Ile krwi traci kobieta podczas miesiączki?", odpowiedzi: ["1 litr", "30-80 ml", "100-200 ml", "nie traci krwi, jest to tylko czerwona błona śluzowa macicy i śluz"], poprawna: 1, media: "t103" },
    { kategoria: "Karta wędkarska", pytanie: "Jaką należy zachować odległość od budowli i urządzeń hydrotechnicznych podczas amatorskiego połowu ryb?", odpowiedzi: ["100 metrów", "Żadną, o ile nie ma tablicy ostrzegawczej", "30 metrów", "50 metrów"], poprawna: 3, media: "t105" },
    { kategoria: "Filmy", pytanie: "Który film ma najwięcej gwiazdek na filmwebie?", odpowiedzi: ["Ojciec Chrzestny", "Odyseja (Nolana)", "Chłopaki nie płaczą", "Listy do M"], poprawna: 0, media: "t108" },
    { kategoria: "Roślinność", pytanie: "Co to za kwiatek?", odpowiedzi: ["Bratek", "Krokus", "Hiacynt", "Bergenia"], poprawna: 0, media: "t111" },
    { kategoria: "AI", pytanie: "Który z wymienionych modeli AI jest przeznaczony do modulacji i tworzenia realistycznych głosów?", odpowiedzi: ["Claude Opus 5", "OpenAI Sora 2", "Eleven v3", "Perplexity AI"], poprawna: 2, media: "t114" },
    { kategoria: "Straszne gówno", pytanie: "Jak się nazywa ten brainrot?", odpowiedzi: ["boneca ambalabu", "trippi troppi", "tung tung tung sahur", "lirili larila"], poprawna: 2, media: "t119" },
    { kategoria: "Forbes", pytanie: "Jaki trzeba mieć majątek, żeby znaleźć się w top 100 najbogatszych Polaków?", odpowiedzi: ["500 mln zł", "5 mld zł", "1 mld zł", "10 mld zł"], poprawna: 2, media: "t122" },
    { kategoria: "Nauka", pytanie: "Czym zajmuje się heraldyka?", odpowiedzi: ["Badaniem pochodzenia oraz pokrewieństwa rodów", "Analizą autentyczności dawnych dokumentów i podpisów", "Badaniem historii i zasad projektowania herbów", "Badaniem starożytnych i średniowiecznych inskrypcji na materiale twardym"], poprawna: 2, media: "t127" },
    { kategoria: "Chmury", pytanie: "Jak się nazywa ten rodzaj chmury?", odpowiedzi: ["Stratus", "Cirrocumulus", "Altocumulus", "Altostratus"], poprawna: 1, media: "t130" },
  ],

  bardzo_trudne: [
    // UZUPEŁNIJ minimum 10 pozycji
    { kategoria: "Historia", pytanie: "Kto po kolei był prezydentem w okresie międzywojennym w Polsce?", odpowiedzi: ["Gabriel Narutowicz->Stanisław Wojciechowski->Ignacy Mościcki", "Gabriel Narutowicz->Maciej Rataj->Józef Piłsudski", "Stanisław Wojciechowski->Józef Piłsudski->Ignacy Mościcki", "Maciej Rataj->Ignacy Mościcki-> Józef Piłsudski"], poprawna: 0, media: "b101" },
    { kategoria: "Współczesna polityka", pytanie: "Ile czasu Grzegorz Schetyna sprawował urząd prezydenta Polski?", odpowiedzi: ["30 dni", "kilka godzin", "nigdy nie sprawował funkcji prezydenta", "niecały tydzień"], poprawna: 0, media: "b103" },
    { kategoria: "Alcomindz", pytanie: "Co Kietlon kupi suce?", odpowiedzi: ["Wszycho", "Frugo", "Lambo", "Cycki"], poprawna: 1, media: "b105" },
    { kategoria: "Motoryzacja", pytanie: "Co to za część samochodu?", odpowiedzi: ["Zawór ERG", "Czujniki Halla", "Tłumik drgań", "Wysprzęglik"], poprawna: 0, media: "b108" },
    { kategoria: "Daty", pytanie: "W którym roku zakończyła się wojna secesyjna?", odpowiedzi: ["1865", "1868", "1862", "1864"], poprawna: 0, media: "b111" },
    { kategoria: "Geje", pytanie: "Która z tych osób nie jest (zadeklarowanym) gejem?", odpowiedzi: ["Tim Cook", "Elton Jhon", "Andrzej Piaseczny", "Jensen Huang"], poprawna: 3, media: "b114" },
    { kategoria: "Żydzi", pytanie: "Która z tych nazw nie jest odmianą judaizmu?", odpowiedzi: ["Falasza", "Karaimski", "Chasydyzm", "Therawada"], poprawna: 3, media: "b119" },
    { kategoria: "Starocie", pytanie: "Kto z nich nie był z składzie Rich Zone?", odpowiedzi: ["Izak", "Nitro", "Mandzio", "Kolega Ignacy"], poprawna: 3, media: "b122" },
    { kategoria: "Szczawnica", pytanie: "W jakich datach byliśmy w szczawnicy?", odpowiedzi: ["13-20 sierpnia", "14-21 sierpnia", "12-20 sierpnia", "14-22 sierpnia"], poprawna: 0, media: "b127" },
    { kategoria: "Tiktok", pytanie: "Ile około jest aktywnych użytkowników Tiktoka miesięcznie w Europie?", odpowiedzi: ["200 mln", "180 mln", "220 mln", "160 mln"], poprawna: 0, media: "b130" },
  ]
},

    zestaw2: {
    latwe: [
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
  ],

  srednie: [
    // UZUPEŁNIJ minimum 10 pozycji — skopiuj wzór z grupy "latwe" i podmień treść
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
  ],

  trudne: [
    // UZUPEŁNIJ minimum 10 pozycji
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
  ],

  bardzo_trudne: [
    // UZUPEŁNIJ minimum 10 pozycji
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
  ]
},

    zestaw3: {
    latwe: [
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
  ],

  srednie: [
    // UZUPEŁNIJ minimum 10 pozycji — skopiuj wzór z grupy "latwe" i podmień treść
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
  ],

  trudne: [
    // UZUPEŁNIJ minimum 10 pozycji
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
  ],

  bardzo_trudne: [
    // UZUPEŁNIJ minimum 10 pozycji
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: null },
  ]
},
};
