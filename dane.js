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
    { kategoria: "Sztuka", pytanie: "Kto jest autorem tego obrazu?", odpowiedzi: ["Salvador Dali", "Zdzisław Beksiński", "Caravaggio", "Vincent van Gogh"], poprawna: 3, media: "l204" },
    { kategoria: "Motoryzacja", pytanie: "Jakiej marki jest ten samochód?", odpowiedzi: ["Audi", "Mercedes", "BMW", "BYD"], poprawna: 2, media: "l209" },
    { kategoria: "Góry", pytanie: "Jaki jest najwyższy szczyt w Polsce?", odpowiedzi: ["Rysy", "Śnieżka", "Babia Góra", "Świnica"], poprawna: 0, media: "l210" },
    { kategoria: "Szczawnica", pytanie: "Kto znajduje się na tym zdjęciu?", odpowiedzi: ["Szafri", "Błasiu", "Jacek", "Igi"], poprawna: 2, media: "l212" , mediaOdkryte: "l212o" },
    { kategoria: "Szachy", pytanie: "Jest ruch białych, jaki ruch trzeba wykonać żeby dać mata w 1?", odpowiedzi: ["pion z d7 na d8 i promocja w hetmana", "hetman z e3 bije hetmana z e5", "hetman z e3 na a3", "pion z d7 bije gońca na c8 i promuje się w skoczka"], poprawna: 2, media: "l216" },
    { kategoria: "Grzyby", pytanie: "Co to za grzyb?", odpowiedzi: ["kurka", "koźlarz babka", "muchomor cytrynowy", "opieńka miodowa"], poprawna: 0, media: "l217" },
    { kategoria: "Skład", pytanie: "Czego nie ma w składzie Skyra waniliowego?", odpowiedzi: ["mleko pasteryzowane", "ekstrakt wanilii", "zagęszczony sok z cytryny", "skrobia"], poprawna: 3, media: "l221" },
    { kategoria: "Polska", pytanie: "Jaka jest stolica województwa małopolskiego?", odpowiedzi: ["Kraków", "Katowice", "Kielce", "Rzeszów"], poprawna: 0, media: "l224" },
    { kategoria: "Poker", pytanie: "Który z poniższych układów kart jest najwyższy w hierarchii Texas Hold'em?", odpowiedzi: ["Strit", "Dwie pary", "Kolor", "Ful"], poprawna: 3, media: "l225" },
    { kategoria: "E-Sport", pytanie: "Jak się nazywała legendarna polska drużyna w cs:go, która wygrywała Majory?", odpowiedzi: ["Astralis", "Natus Vincere", "Virtus Pro", "Faze Clan"], poprawna: 2, media: "l228" },
  ],

  srednie: [
    // UZUPEŁNIJ minimum 10 pozycji — skopiuj wzór z grupy "latwe" i podmień treść
    { kategoria: "Miętus", pytanie: "Ile % miał pierwszy miętus?", odpowiedzi: ["38%", "35%", "42%", "40%"], poprawna: 3, media: "s204", mediaOdkryte: "s204o" },
    { kategoria: "Mężczyźni", pytanie: "Ile wynosi średnia europejska długość siura?", odpowiedzi: ["8-9 cm", "13-14,5 cm", "16-18 cm", "około 20 cm"], poprawna: 1, media: "s209" },
    { kategoria: "Matematyka", pytanie: "Jaki jest wzór na deltę?", odpowiedzi: ["b - 4ac", "b² - 4c", "b² - 4ac", "b² - 4a"], poprawna: 2, media: "s210" },
    { kategoria: "Zioło", pytanie: "Która część konopi indyjskiej (marihuany) zawiera najwyższe stężenie kannabinoidów, takich jak THC?", odpowiedzi: ["Korzenie", "Łodyga", "Liście wiatrakowe", "Żywiczne trichomy na kwiatach"], poprawna: 3, media: "s212" },
    { kategoria: "Język angielski", pytanie: "Który z tych zwrotów oznacza 'zdradzić tajemnicę'?", odpowiedzi: ["Give in", "Give away", "Make up", "Make out"], poprawna: 1, media: "s216" },
    { kategoria: "Biologia", pytanie: "Które z tych pytań trzeba zadać, aby otrzymać odpowiedź 'Aorta'?", odpowiedzi: ["Która struktura anatomiczna oddziela prawą część serca od lewej, zapobiegając mieszaniu krwi?", "Które naczynie krwionośne doprowadza odtlenowaną krew bezpośrednio z tkanek do prawego przedsionka?", "Jak nazywa się główny pień chłonny zbierający limfę z dolnej i lewej połowy ciała?", "Uszkodzenie którego naczynia krwionośnego skutkuje u pacjenta objawem objawu de Musseta (rytmicznym drżeniem głowy w takt tętna)?"], poprawna: 3, media: "s217" },
    { kategoria: "Dolny Śląsk", pytanie: "W jakim kierunku świata leży Legnica od Wrocławia?", odpowiedzi: ["Północ", "Północny-wschód", "Południowy-zachód", "Zachód"], poprawna: 3, media: "s221" },
    { kategoria: "Loldle", pytanie: "Jak wybraliście tę kategorię to wiecie o co chodzi", odpowiedzi: ["Zilean", "Ekko", "Bard", "Zaahen"], poprawna: 1, media: "s224", mediaOdkryte: "s224o" },
    { kategoria: "Apple", pytanie: "Jaka jest aktualnie najnowsza seria Iphone'a?", odpowiedzi: ["Iphone 16", "Iphone 17", "Iphone 18", "Iphone Omega"], poprawna: 1, media: "s225" },
    { kategoria: "Między Bogiem a prawdą", pytanie: "Jaka cena jest uczciwa?", odpowiedzi: ["Gratis", "Za darmo", "Darmowo", "Friko"], poprawna: 0, media: "s228" },
  ],

  trudne: [
    // UZUPEŁNIJ minimum 10 pozycji
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
  ],

  bardzo_trudne: [
    // UZUPEŁNIJ minimum 10 pozycji
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
  ]
},

    zestaw3: {
    latwe: [
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
  ],

  srednie: [
    // UZUPEŁNIJ minimum 10 pozycji — skopiuj wzór z grupy "latwe" i podmień treść
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
  ],

  trudne: [
    // UZUPEŁNIJ minimum 10 pozycji
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
  ],

  bardzo_trudne: [
    // UZUPEŁNIJ minimum 10 pozycji
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
    { kategoria: "", pytanie: "", odpowiedzi: ["", "", "", ""], poprawna: 0, media: "" },
  ]
},
};
