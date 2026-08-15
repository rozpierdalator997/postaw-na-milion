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
