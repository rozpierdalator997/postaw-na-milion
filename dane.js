// ============================================================
// DANE.JS — tu dodajesz/zmieniasz pytania i kategorie.
// To JEDYNY plik, który zmieniasz robiąc kopię gry dla innego gracza.
// Każda grupa musi mieć MINIMUM 10 pozycji (2 wypadają na rundę x 5 rund).
// media: możesz zostawić null, albo wstawić link do obrazka (.jpg/.png)
// lub filmiku (.mp4)
// ============================================================

const gameData = {
latwe: [
    { kategoria: "Historia", pytanie: "W którym roku wybuchła II wojna światowa?", odpowiedzi: ["1935", "1939", "1941", "1945"], poprawna: 1, media: null },
    { kategoria: "Geografia", pytanie: "Jaka jest stolica Australii?", odpowiedzi: ["Sydney", "Melbourne", "Canberra", "Perth"], poprawna: 2, media: null },
    { kategoria: "Sport", pytanie: "Ile zawodników jednej drużyny gra na boisku w piłce nożnej?", odpowiedzi: ["9", "10", "11", "12"], poprawna: 2, media: null },
    { kategoria: "Film", pytanie: "Kto reżyserował 'Incepcję'?", odpowiedzi: ["Steven Spielberg", "Christopher Nolan", "James Cameron", "Ridley Scott"], poprawna: 1, media: null },
    { kategoria: "Muzyka", pytanie: "Ile strun ma standardowa gitara?", odpowiedzi: ["4", "5", "6", "7"], poprawna: 2, media: null },
    { kategoria: "Nauka", pytanie: "Jaki jest chemiczny symbol złota?", odpowiedzi: ["Go", "Gd", "Au", "Ag"], poprawna: 2, media: null },
    { kategoria: "Kuchnia", pytanie: "Z jakiego kraju pochodzi pizza?", odpowiedzi: ["Francja", "Hiszpania", "Włochy", "Grecja"], poprawna: 2, media: null },
    { kategoria: "Zwierzęta", pytanie: "Jak nazywa się największe zwierzę na świecie?", odpowiedzi: ["Słoń afrykański", "Płetwal błękitny", "Żyrafa", "Rekin wielorybi"], poprawna: 1, media: null },
    { kategoria: "Technologia", pytanie: "Jaka firma stworzyła iPhone'a?", odpowiedzi: ["Samsung", "Apple", "Google", "Microsoft"], poprawna: 1, media: null },
    { kategoria: "Literatura", pytanie: "Kto napisał 'Pana Tadeusza'?", odpowiedzi: ["Juliusz Słowacki", "Adam Mickiewicz", "Henryk Sienkiewicz", "Cyprian Kamil Norwid"], poprawna: 1, media: null }
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
};
