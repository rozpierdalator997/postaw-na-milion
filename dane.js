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
    { kategoria: "Muzyka", pytanie: "Dokończ tekst piosenki", odpowiedzi: ["Chcesz możemy iść na noże", "Mój kutas piękny jest jak Porsche", "Wchodzę w jej cipę jak w bambosze", "Robię rozpierdol bom jest bossem"], poprawna: 2, media: "zdj1" }
  ],

  srednie: [
    // UZUPEŁNIJ minimum 10 pozycji — skopiuj wzór z grupy "latwe" i podmień treść
    { kategoria: "Przykład 1", pytanie: "Treść pytania średniego 1?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 2", pytanie: "Treść pytania średniego 2?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 3", pytanie: "Treść pytania średniego 3?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 4", pytanie: "Treść pytania średniego 4?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 5", pytanie: "Treść pytania średniego 5?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 6", pytanie: "Treść pytania średniego 6?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 7", pytanie: "Treść pytania średniego 7?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 8", pytanie: "Treść pytania średniego 8?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 9", pytanie: "Treść pytania średniego 9?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 10", pytanie: "Treść pytania średniego 10?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null }
  ],

  trudne: [
    // UZUPEŁNIJ minimum 10 pozycji
    { kategoria: "Przykład 1", pytanie: "Treść pytania trudnego 1?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 2", pytanie: "Treść pytania trudnego 2?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 3", pytanie: "Treść pytania trudnego 3?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 4", pytanie: "Treść pytania trudnego 4?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 5", pytanie: "Treść pytania trudnego 5?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 6", pytanie: "Treść pytania trudnego 6?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 7", pytanie: "Treść pytania trudnego 7?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 8", pytanie: "Treść pytania trudnego 8?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 9", pytanie: "Treść pytania trudnego 9?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 10", pytanie: "Treść pytania trudnego 10?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null }
  ],

  bardzo_trudne: [
    // UZUPEŁNIJ minimum 10 pozycji
    { kategoria: "Przykład 1", pytanie: "Treść pytania bardzo trudnego 1?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 2", pytanie: "Treść pytania bardzo trudnego 2?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 3", pytanie: "Treść pytania bardzo trudnego 3?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 4", pytanie: "Treść pytania bardzo trudnego 4?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 5", pytanie: "Treść pytania bardzo trudnego 5?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 6", pytanie: "Treść pytania bardzo trudnego 6?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 7", pytanie: "Treść pytania bardzo trudnego 7?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 8", pytanie: "Treść pytania bardzo trudnego 8?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 9", pytanie: "Treść pytania bardzo trudnego 9?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 10", pytanie: "Treść pytania bardzo trudnego 10?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null }
  ]
},

    zestaw2: {
    latwe: [
    { kategoria: "Historia", pytanie: "Czemu ty się kurwa wylałeś na ścianę do chuja wafla?", odpowiedzi: ["Bo tak", "eureeurru", "Bo ja", "Bo nie"], poprawna: 2, media: "film1" },
    { kategoria: "Sztuka", pytanie: "Co przedstawia ten obraz?", odpowiedzi: ["Żyd ze szlugiem", "Żyd po litrze czystej", "Żydowskie szczęście", "Żydowski kolczyk"], poprawna: 3, media: "zdj3", mediaOdkryte: "zdj3odkryte" },
    { kategoria: "Sport", pytanie: "Ile zawodników jednej drużyny gra na boisku w piłce nożnej?", odpowiedzi: ["9", "10", "11", "12"], poprawna: 2, media: "zdj1" },
    { kategoria: "Kinematografia", pytanie: "Co się stało z Panem Witczakiem?", odpowiedzi: ["Kurrrbleeueue", "Nic", "Jest dobrze w chuj", "Zesrał się"], poprawna: 0, media: "film2" },
    { kategoria: "Muzyka", pytanie: "Jaki jest tytuł tego utworu?", odpowiedzi: ["Mickey Rourke", "Fame", "II Duce", "Zabóstwo Liryczne"], poprawna: 0, media: "Mickey Rourke" },
    { kategoria: "Nauka", pytanie: "Jaki jest chemiczny symbol złota?", odpowiedzi: ["Go", "Gd", "Au", "Ag"], poprawna: 2, media: "zdj1" },
    { kategoria: "Kuchnia", pytanie: "Z jakiego kraju pochodzi pizza?", odpowiedzi: ["Francja", "Hiszpania", "Włochy", "Grecja"], poprawna: 2, media: "zdj2" },
    { kategoria: "Zwierzęta", pytanie: "Jak nazywa się największe zwierzę na świecie?", odpowiedzi: ["Słoń afrykański", "Płetwal błękitny", "Żyrafa", "Rekin wielorybi"], poprawna: 1, media: "zdj1" },
    { kategoria: "Technologia", pytanie: "Jaka firma stworzyła iPhone'a?", odpowiedzi: ["Samsung", "Apple", "Google", "Microsoft"], poprawna: 1, media: "zdj2" },
    { kategoria: "Literatura", pytanie: "Kto napisał 'Pana Tadeusza'?", odpowiedzi: ["Juliusz Słowacki", "Adam Mickiewicz", "Henryk Sienkiewicz", "Cyprian Kamil Norwid"], poprawna: 1, media: "zdj1" }
  ],

  srednie: [
    // UZUPEŁNIJ minimum 10 pozycji — skopiuj wzór z grupy "latwe" i podmień treść
    { kategoria: "Przykład 1", pytanie: "Treść pytania średniego 1?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 2", pytanie: "Treść pytania średniego 2?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 3", pytanie: "Treść pytania średniego 3?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 4", pytanie: "Treść pytania średniego 4?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 5", pytanie: "Treść pytania średniego 5?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 6", pytanie: "Treść pytania średniego 6?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 7", pytanie: "Treść pytania średniego 7?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 8", pytanie: "Treść pytania średniego 8?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 9", pytanie: "Treść pytania średniego 9?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 10", pytanie: "Treść pytania średniego 10?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null }
  ],

  trudne: [
    // UZUPEŁNIJ minimum 10 pozycji
    { kategoria: "Przykład 1", pytanie: "Treść pytania trudnego 1?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 2", pytanie: "Treść pytania trudnego 2?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 3", pytanie: "Treść pytania trudnego 3?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 4", pytanie: "Treść pytania trudnego 4?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 5", pytanie: "Treść pytania trudnego 5?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 6", pytanie: "Treść pytania trudnego 6?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 7", pytanie: "Treść pytania trudnego 7?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 8", pytanie: "Treść pytania trudnego 8?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 9", pytanie: "Treść pytania trudnego 9?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 10", pytanie: "Treść pytania trudnego 10?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null }
  ],

  bardzo_trudne: [
    // UZUPEŁNIJ minimum 10 pozycji
    { kategoria: "Przykład 1", pytanie: "Treść pytania bardzo trudnego 1?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 2", pytanie: "Treść pytania bardzo trudnego 2?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 3", pytanie: "Treść pytania bardzo trudnego 3?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 4", pytanie: "Treść pytania bardzo trudnego 4?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 5", pytanie: "Treść pytania bardzo trudnego 5?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 6", pytanie: "Treść pytania bardzo trudnego 6?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 7", pytanie: "Treść pytania bardzo trudnego 7?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 8", pytanie: "Treść pytania bardzo trudnego 8?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 9", pytanie: "Treść pytania bardzo trudnego 9?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 10", pytanie: "Treść pytania bardzo trudnego 10?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null }
  ]
},

    zestaw3: {
    latwe: [
    { kategoria: "Historia", pytanie: "Czemu ty się kurwa wylałeś na ścianę do chuja wafla?", odpowiedzi: ["Bo tak", "eureeurru", "Bo ja", "Bo nie"], poprawna: 2, media: "film1" },
    { kategoria: "Sztuka", pytanie: "Co przedstawia ten obraz?", odpowiedzi: ["Żyd ze szlugiem", "Żyd po litrze czystej", "Żydowskie szczęście", "Żydowski kolczyk"], poprawna: 3, media: "zdj3", mediaOdkryte: "zdj3odkryte" },
    { kategoria: "Sport", pytanie: "Ile zawodników jednej drużyny gra na boisku w piłce nożnej?", odpowiedzi: ["9", "10", "11", "12"], poprawna: 2, media: "zdj1" },
    { kategoria: "Kinematografia", pytanie: "Co się stało z Panem Witczakiem?", odpowiedzi: ["Kurrrbleeueue", "Nic", "Jest dobrze w chuj", "Zesrał się"], poprawna: 0, media: "film2" },
    { kategoria: "Muzyka", pytanie: "Jaki jest tytuł tego utworu?", odpowiedzi: ["Mickey Rourke", "Fame", "II Duce", "Zabóstwo Liryczne"], poprawna: 0, media: "Mickey Rourke" },
    { kategoria: "Nauka", pytanie: "Jaki jest chemiczny symbol złota?", odpowiedzi: ["Go", "Gd", "Au", "Ag"], poprawna: 2, media: "zdj1" },
    { kategoria: "Kuchnia", pytanie: "Z jakiego kraju pochodzi pizza?", odpowiedzi: ["Francja", "Hiszpania", "Włochy", "Grecja"], poprawna: 2, media: "zdj2" },
    { kategoria: "Zwierzęta", pytanie: "Jak nazywa się największe zwierzę na świecie?", odpowiedzi: ["Słoń afrykański", "Płetwal błękitny", "Żyrafa", "Rekin wielorybi"], poprawna: 1, media: "zdj1" },
    { kategoria: "Technologia", pytanie: "Jaka firma stworzyła iPhone'a?", odpowiedzi: ["Samsung", "Apple", "Google", "Microsoft"], poprawna: 1, media: "zdj2" },
    { kategoria: "Literatura", pytanie: "Kto napisał 'Pana Tadeusza'?", odpowiedzi: ["Juliusz Słowacki", "Adam Mickiewicz", "Henryk Sienkiewicz", "Cyprian Kamil Norwid"], poprawna: 1, media: "zdj1" }
  ],

  srednie: [
    // UZUPEŁNIJ minimum 10 pozycji — skopiuj wzór z grupy "latwe" i podmień treść
    { kategoria: "Przykład 1", pytanie: "Treść pytania średniego 1?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 2", pytanie: "Treść pytania średniego 2?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 3", pytanie: "Treść pytania średniego 3?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 4", pytanie: "Treść pytania średniego 4?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 5", pytanie: "Treść pytania średniego 5?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 6", pytanie: "Treść pytania średniego 6?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 7", pytanie: "Treść pytania średniego 7?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 8", pytanie: "Treść pytania średniego 8?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 9", pytanie: "Treść pytania średniego 9?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 10", pytanie: "Treść pytania średniego 10?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null }
  ],

  trudne: [
    // UZUPEŁNIJ minimum 10 pozycji
    { kategoria: "Przykład 1", pytanie: "Treść pytania trudnego 1?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 2", pytanie: "Treść pytania trudnego 2?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 3", pytanie: "Treść pytania trudnego 3?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 4", pytanie: "Treść pytania trudnego 4?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 5", pytanie: "Treść pytania trudnego 5?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 6", pytanie: "Treść pytania trudnego 6?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 7", pytanie: "Treść pytania trudnego 7?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 8", pytanie: "Treść pytania trudnego 8?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 9", pytanie: "Treść pytania trudnego 9?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 10", pytanie: "Treść pytania trudnego 10?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null }
  ],

  bardzo_trudne: [
    // UZUPEŁNIJ minimum 10 pozycji
    { kategoria: "Przykład 1", pytanie: "Treść pytania bardzo trudnego 1?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 2", pytanie: "Treść pytania bardzo trudnego 2?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 3", pytanie: "Treść pytania bardzo trudnego 3?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 4", pytanie: "Treść pytania bardzo trudnego 4?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 5", pytanie: "Treść pytania bardzo trudnego 5?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 6", pytanie: "Treść pytania bardzo trudnego 6?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 7", pytanie: "Treść pytania bardzo trudnego 7?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 8", pytanie: "Treść pytania bardzo trudnego 8?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 9", pytanie: "Treść pytania bardzo trudnego 9?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null },
    { kategoria: "Przykład 10", pytanie: "Treść pytania bardzo trudnego 10?", odpowiedzi: ["A", "B", "C", "D"], poprawna: 0, media: null }
  ]
},
};
