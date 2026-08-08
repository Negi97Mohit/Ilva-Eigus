export type Concert = {
  date: string;
  iso: string;
  city: string;
  programme: string;
  artists: string;
  venue: string;
  link?: string;
};

export const concerts: Concert[] = [
  {
    date: "30 Jan 2027",
    iso: "2027-01-30",
    city: "Spartanburg (SC), USA",
    programme: "The G.O.A.T. — Sibelius Violin Concerto",
    artists: "Ilva Eigus · John Concklin · Spartanburg Philharmonic",
    venue: "Twichell Auditorium",
    link: "https://www.spartanburgphilharmonic.org/events/thegoat",
  },
  {
    date: "10 Dec 2026",
    iso: "2026-12-10",
    city: "Eppan (BZ), Italy",
    programme: "Bach, Stravinsky, Bärtsch",
    artists: "Ilva Eigus · Nik Bärtsch",
    venue: "Ansitz Reinsperg, Appiano",
    link: "https://www.kulturkontakt.it/it/b%C3%A4rtsch",
  },
  {
    date: "09 Dec 2026",
    iso: "2026-12-09",
    city: "Munich, Germany",
    programme: "Bach, Stravinsky, Bärtsch",
    artists: "Ilva Eigus · Nik Bärtsch",
    venue: "Schloss Nymphenburg",
    link: "http://s968974040.online.de/MUSICAE/",
  },
  {
    date: "29 Nov 2026",
    iso: "2026-11-29",
    city: "Zurich, Switzerland",
    programme: "Mendelssohn Double Concerto — Benefizkonzert",
    artists:
      "Ilva Eigus · Alexandra Dovgan · Howard Griffiths · Camerata Schweiz",
    venue: "Tonhalle Zurich",
    link: "https://tonhallezuerich.ch/konzerte/kalender/ms-benefizkonzert-2056720/tz/",
  },
  {
    date: "26 Mar 2026",
    iso: "2026-03-26",
    city: "Windisch, Switzerland",
    programme: "Mozart Concerto No. 5 — Horizonte öffnen",
    artists: "Ilva Eigus · Samuel Lee · Bodensee Philharmonie",
    venue: "Reformierte Kirche",
    link: "https://strettaconcerts.com/#konzerte",
  },
  {
    date: "25 Mar 2026",
    iso: "2026-03-25",
    city: "Konstanz, Germany",
    programme: "Mozart Concerto No. 5 — Horizonte öffnen",
    artists: "Ilva Eigus · Samuel Lee · Bodensee Philharmonie",
    venue: "Konzil",
    link: "https://www.philharmonie-konstanz.de/de/konzerte/horizonte-offnen/444",
  },
  {
    date: "10 Mar 2026",
    iso: "2026-03-10",
    city: "Zurich, Switzerland",
    programme: "Mozart Concerto No. 5",
    artists: "Ilva Eigus · Kevin Griffiths · Empyrean Orchestra",
    venue: "Tonhalle Zurich",
    link: "https://www.tonhalle-orchester.ch/konzerte/kalender/ilva-eigus-interpretiert-mozart-5-violinkonzert-2008543/tz/",
  },
  {
    date: "26 Feb 2026",
    iso: "2026-02-26",
    city: "Zurich, Switzerland",
    programme: "Kultur@FSZ",
    artists: "Ilva Eigus · Dmitry Demyashkin",
    venue: "Aula Freie Schule Zürich",
    link: "https://fsz.ch/kulturfsz/",
  },
  {
    date: "24 Jan 2026",
    iso: "2026-01-24",
    city: "Lucerne, Switzerland",
    programme: "Kammermusik",
    artists: "Ilva Eigus · Alexey Botvinov",
    venue: "Hotel Hammer",
    link: "https://www.hotel-hammer.ch/de/kultur/kulturagenda.html",
  },
  {
    date: "11 Jan 2026",
    iso: "2026-01-11",
    city: "Biel, Switzerland",
    programme: "Bourg Konzerte",
    artists: "Ilva Eigus · Sandro Nebieridze",
    venue: "Église du Pasquart",
    link: "https://bourgkonzerte.ch/eigusnebieridze/",
  },
  {
    date: "03 Jan 2026",
    iso: "2026-01-03",
    city: "Klosters, Switzerland",
    programme: "New Year's Concert",
    artists:
      "Ilva Eigus · Jennifer Högström · Kay Johannsen · Immanuel Richter · Simon Gabriel",
    venue: "Church St. Jacob",
    link: "https://klosters-music.ch/en/event/new-years-concert/",
  },
  {
    date: "16 Nov 2025",
    iso: "2025-11-16",
    city: "Appenzell, Switzerland",
    programme: "Matinée Violine und Klavier",
    artists: "Ilva Eigus · Sandro Nebieridze",
    venue: "Kunsthalle Appenzell",
    link: "https://kunstmuseum-kunsthalle.ch/en/agenda/?e=265",
  },
  {
    date: "28 Oct 2025",
    iso: "2025-10-28",
    city: "Wallisellen, Switzerland",
    programme: "Festtage Wallisellen",
    artists: "Ilva Eigus · Richard Octaviano Kogima",
    venue: "Doktorhaus Wallisellen",
    link: "https://www.musikfesttage.ch/konzert/ilva-eigus-richard-octaviano-kogima-duo-candellight-concert/",
  },
  {
    date: "26 Oct 2025",
    iso: "2025-10-26",
    city: "Zurich, Switzerland",
    programme: "Herbstbott der Gottfried Keller-Gesellschaft",
    artists: "Ilva Eigus, solo violin",
    venue: "Rathaus Zürich",
  },
];

export type Video = {
  id: string;
  title: string;
  detail: string;
};

export const videos: Video[] = [
  {
    id: "c-HjJgleDtI",
    title: "Bruch — Violin Concerto No. 1 in G minor",
    detail: "Bodensee Philharmonie Konstanz",
  },
  {
    id: "9IlY9DaWdhk",
    title: "Mozart — Violin Concerto No. 3, I. Allegro",
    detail: "Grumiaux Competition 2024, Finals",
  },
  {
    id: "CXecfCIqwfo",
    title: "Brahms — Violin Sonata in D minor, Op. 108",
    detail: "with Dmitry Demyashkin",
  },
  {
    id: "gx2PFuU36ew",
    title: "Schnittke — Suite in the Old Style",
    detail: "with Alexey Botvinov",
  },
  {
    id: "OHPqJNUOxHs",
    title: "Ysaÿe — Sonata for Solo Violin Op. 27 No. 4 “Fritz Kreisler”",
    detail: "Solo",
  },
  {
    id: "ZpM-B2_PuCs",
    title: "Prokofiev — Violin Sonata No. 2 in D major, Op. 94bis",
    detail: "with Alexandra Dovgan",
  },
];

export type PressItem = {
  date: string;
  outlet: string;
  headline: string;
  link: string;
};

export const press: PressItem[] = [
  {
    date: "15 June 2026",
    outlet: "COTE Magazine Zurich",
    headline: "Von Klang und Interpretation",
    link: "https://www.ilvaeigus.com/_files/ugd/91e900_724a8e7734684943b654b9e7816a3e8d.pdf",
  },
  {
    date: "03 June 2025",
    outlet: "Pforzheimer Zeitung",
    headline: "Leuchtend klare Geigenklänge",
    link: "https://www.ilvaeigus.com/_files/ugd/91e900_de5e163ec48246b994536a8a14df2d17.pdf",
  },
  {
    date: "02 June 2025",
    outlet: "Blick",
    headline: "Die Jungstargeigerin",
    link: "https://www.ilvaeigus.com/_files/ugd/91e900_7cec0e9a6dde4bcca7878351642a73ab.pdf",
  },
  {
    date: "18 Oct 2023",
    outlet: "SRF Gesichter & Geschichten",
    headline: "Heimspiel: Ilva Eigus in der Zürcher Tonhalle",
    link: "https://youtu.be/75pNM7gIFwY",
  },
  {
    date: "15 Oct 2023",
    outlet: "Sonntagsblick",
    headline: "Das Schweizer Wunderkind am Geigenhimmel",
    link: "https://www.ilvaeigus.com/_files/ugd/91e900_7f800c41291f4d9c9b9bb3353b983f40.pdf",
  },
  {
    date: "02 Oct 2023",
    outlet: "Backnanger Kreiszeitung",
    headline: "Mit viel Romantik in die neue Spielzeit",
    link: "https://www.ilvaeigus.com/_files/ugd/91e900_8ab3f369964740788b57d7364069fb25.pdf",
  },
  {
    date: "03 Jan 2023",
    outlet: "Liechtensteiner Vaterland",
    headline: "Zündende Gala der Musikakademie",
    link: "https://www.ilvaeigus.com/_files/ugd/91e900_e5dd185522914317aba4698e5254e2fb.pdf",
  },
  {
    date: "01 July 2022",
    outlet: "Zolliker Zumiker Bote",
    headline: "Mal romantisch, mal feurig",
    link: "https://www.ilvaeigus.com/_files/ugd/91e900_a1b2976b9b69459cab0cf243fa08359d.pdf",
  },
  {
    date: "01 Jan 2022",
    outlet: "LSM.LV",
    headline: "I would like to see a sustained sense of freedom return",
    link: "https://rus.lsm.lv/statja/kultura/kultura/skripachka-ilva-eygus--hochetsja-chtobi-vernulos-ustoychivoe-oschuschenie-svobodi.a436997/",
  },
  {
    date: "06 Jan 2021",
    outlet: "SRF 10vor10",
    headline: "Gold am Nussknacker-Wettbewerb in Moskau",
    link: "https://www.youtube.com/watch?v=CPIfRl2JPY0",
  },
  {
    date: "28 Dec 2020",
    outlet: "Blick",
    headline: "Das Mädchen mit den Bestnoten",
    link: "https://www.ilvaeigus.com/_files/ugd/51e7fa_f05977b0864b47f48513c81290af5dd0.pdf",
  },
  {
    date: "13 Feb 2020",
    outlet: "Züriberg-Zeitung",
    headline: "Zwei junge Klassik-Virtuosinnen spielen auf",
    link: "https://www.ilvaeigus.com/_files/ugd/51e7fa_7b9f0595685b443a9549602f7bc43cd5.pdf",
  },
  {
    date: "26 Oct 2017",
    outlet: "Limmat-Welle",
    headline: "Das Wunderkind der Violine",
    link: "https://www.ilvaeigus.com/_files/ugd/51e7fa_afdd4582980a442dab17c12b23721faf.pdf",
  },
];

export const supporters = [
  {
    name: "Stradivari Stiftung Habisreutinger",
    href: "https://www.stradivari-stiftung.ch/instrument-omobono-stradivari",
  },
  { name: "Pirastro", href: "https://www.pirastro.com/" },
  { name: "Dolfinos", href: "https://dolfinos.com/" },
  { name: "Fondation ART-THERAPIE", href: "https://art-therapie.ch/" },
];

export type DownloadItem = {
  type: "pdf" | "image" | "audio";
  label: string;
  description: string;
  href: string;
  meta: string;
};

export const downloadsList: DownloadItem[] = [
  {
    type: "pdf",
    label: "Biography",
    description: "Full English biography, updated 2026.",
    href: "/downloads/ilva-eigus-biography.pdf",
    meta: "PDF",
  },
  {
    type: "image",
    label: "Press photos",
    description: "High-resolution portraits and performance photos.",
    href: "/downloads/ilva-eigus-press-photos.zip",
    meta: "ZIP",
  },
  {
    type: "pdf",
    label: "Repertoire",
    description: "Concerto and recital repertoire list.",
    href: "/downloads/ilva-eigus-repertoire.pdf",
    meta: "PDF",
  },
  {
    type: "pdf",
    label: "Technical rider",
    description: "Stage plan and technical requirements.",
    href: "/downloads/ilva-eigus-rider.pdf",
    meta: "PDF",
  },
];

export const bioParagraphs = [
  "Swiss-Latvian violinist Ilva Eigus was born in 2007. She received her first violin lesson at the age of three from Liana Tretiakova and continued to study with her at the Zakhar Bron School of Music in Zurich until summer 2023. Since 2023, Ilva has been mentored by Professor Marc Bouchkov, first as a pre-college student at the Royal Conservatory of Liège, Belgium and, from 2026, at the Folkwang University of the Arts in Essen, Germany. Ilva is an honoured recipient of scholarships from the Verbier Festival Academy, the Seiji Ozawa Academy, IMS Prussia Cove in the UK, the Liechtenstein Music Academy, the Villa Musica Chamber Music Excellence Programme and Music in the Mountains Violin Academy, USA, among others.",
  "Ilva's exceptional talent was recognised early on, and she has been taught by the renowned violin professor Zakhar Bron since the age of seven. She has gained further musical inspiration from Gerhard Schulz, Vadim Gluzman, Ingolf Turban, Priya Mitchell, Janine Jansen, Augustin Dumay, Suyoen Kim, Sadao Harada, Marie Chilemme, Nobuko Imai and Sergey Krylov.",
  "Ilva made her orchestral debut at the age of eight with the Kabalevsky Violin Concerto. Since then, she has played as a soloist with the Tonhalle-Orchester Zürich, the Zurich Chamber Orchestra, Musikkollegium Winterthur, Moscow Philharmonic, Novosibirsk Philharmonic, Prague Royal Philharmonic, Bodensee Philharmonie Konstanz and Empyrean Orchestra, among others. Ilva was invited to perform in venues such as Tonhalle Zurich, Victoria Hall in Geneva, Mozarteum Salzburg, Tchaikovsky Concert Hall, the Bolshoi Theatre and the House of Music in Moscow, Château de Chillon in Montreux and Palazzo Vecchio in Florence, and at festivals such as the Verbier Festival, Gstaad Menuhin Festival, Trans-Siberian Art Festival, Festival de Musique de Menton, Septembre Musical in Montreux-Vevey, Enjoy Jazz Festival Mannheim, Zaubersee Festival Lucerne and Odessa Classics. She is eager to explore contemporary music, having premiered works by Richard Dubugnon, Samy Moussa, Daniel Schnyder and Nik Bärtsch.",
  "Ilva is a multiple first prize winner of the Swiss Youth Music Competition and winner of numerous awards at international competitions, including 1st prize at the International Nutcracker Competition (2020), the Rotary Prize at the Verbier Festival (2023), the Swiss Charity Award (2023), 1st prize at the Arthur Grumiaux Violin Competition in Brussels (2024) and 1st prize at the Grunewald Competition in Berlin (2024). In 2025 she was nominated by Echo Arts Munich as Pirastro Young Artist.",
  "In 2023, Ilva became an ambassador for the Fondation ART-THERAPIE, which aims to promote art therapy programmes for young people in Switzerland.",
  "Ilva plays an Omobono Stradivari from 1707, on generous loan from the Stradivari Stiftung Habisreutinger-Huggler-Coray. She is also supported by the Vicenda Women in Performance Initiative.",
  "Ilva's playing is characterised by precise intonation, depth and artistic maturity. In her free time, she enjoys reading, photography and sports.",
];
