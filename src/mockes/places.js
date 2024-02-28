import cacho1 from "../assets/cacho1.png";
import cacho2 from "../assets/cacho2.png";
import cacho3 from "../assets/cacho3.png";
import cacho4 from "../assets/cacho4.png";
import cacho5 from "../assets/cacho5.png";
import cacho6 from "../assets/cacho6.jpg";
import cacho7 from "../assets/cacho7.jpg";
import cacho8 from "../assets/cacho8.jpg";
import cacho9 from "../assets/cacho9.jpg";
import cacho10 from "../assets/cacho10.jpg";
import praia1 from "../assets/praia1.jpg";
import praia2 from "../assets/praia2.jpg";
import praia3 from "../assets/praia3.jpg";
import praia4 from "../assets/praia4.jpg";
import praia5 from "../assets/praia5.jpg";
import trilha1 from "../assets/trilha1.jpg";
import trilha2 from "../assets/trilha2.jpg";
import trilhaBike1 from "../assets/trilhaBike1.jpg";
import trilhaBike2 from "../assets/trilhaBike2.jpg";
import trilhaBike3 from "../assets/trilhaBike3.jpg";
import trilha3 from "../assets/trilha3.jpg";
import trilha4 from "../assets/trilha4.jpg";
import trilha5 from "../assets/trilha5.jpg";
import barco1 from "../assets/barco1.jpg";
import barco2 from "../assets/barco2.jpg";
import barco3 from "../assets/barco3.jpg";
import barco4 from "../assets/barco4.jpg";
import catimbau1 from "../assets/catimbau1.jpg";
import catimbau2 from "../assets/catimbau2.jpg";
import catimbau3 from "../assets/catimbau3.jpg";
import catimbau4 from "../assets/catimbau4.jpg";

const data = [
  {
    id: 1,
    imageUrl: [cacho1, cacho2, cacho3, cacho4, cacho5],
    title: "Cachoeira Paraíso",
    subtitle: "Bonito",
    startDate: "2 Agosto",
    endDate: "4 Agosto",
    difficulty: "Difícil",
    price: "R$ 70 por pessoa",
    link: "www.google.com",
    tag: "cachoeirabonito",
    description:
      "A Cachoeira Barra Azul oferece um refúgio de tranquilidade e beleza natural, com uma piscina na parte de baixo e uma vista espetacular na parte de cima. É um local perfeito para relaxar na natureza. É aconselhável levar lanches e bebidas. Com suas formações rochosas e mata circundante, a cachoeira oferece um espaço encantador para relaxar à beira d’água, adequado até para famílias com crianças.",
    whatsappNumber: 22,
    location: "-23.550520,-46.633308",
    YWF: [" Trilha | 1 Cachoeira | 1 Mirante"],
    promoterName: "João Marcos",
    promoterPhone: "5581998786543",
    promoterEmail: "joaomarcos123@gmail.com",
  },
  // {
  //   id: 2,
  //   imageUrl: [cacho1, cacho2, cacho3, cacho4, cacho5],
  //   title: "Montanha Aventura",
  //   subtitle: "Bonito",
  //   startDate: "5 Agosto",
  //   endDate: "7 Agosto",
  //   difficulty: "Moderado",
  //   price: "R$ 50 por pessoa",
  //   link: "www.google.com",
  //   tag: "cachoeiraBonito",
  //   description:
  //     "Cachoeira Barra Azul oferece uma experiência única, características como piscinas naturais, formações rochosas interessantes e uma atmosfera cercada pela natureza exuberante típica da região. Visitantes muitas vezes desfrutam de atividades como trilhas, mergulho em águas cristalinas e momentos relaxantes à beira dágua.",
  //   whatsappNumber: 22,
  //   location: "-8.467253176284302, -35.723335771858686",
  //   YWF: [" Trilha | 1 Cachoeira | 1 Mirante"],
  //   promoterName: "João Pedro",
  //   promoterPhone: "5581998765432",
  //   promoterEmail: "joaopedro123@gmail.com",
  // },
  {
    id: 3,
    imageUrl: [praia1, praia2, praia3, praia4, praia5],
    title: "Praia dos Carneiros",
    subtitle: "Tamandaré",
    startDate: "10 Agosto",
    endDate: "12 Agosto",
    difficulty: "Fácil",
    price: "R$ 40 por pessoa",
    link: "www.google.com",
    tag: "praiadoscarneiros",
    description:
      "A Praia dos Carneiros é um paraíso tropical que cativa visitantes com sua extensão de areias douradas e mar calmo e claro. As águas mornas do oceano Atlântico banham a costa, proporcionando um ambiente propício para momentos relaxantes e atividades aquáticas. A praia é famosa por sua beleza natural intocada, com coqueiros que contornam a areia, criando uma atmosfera serena e tropical.",
    whatsappNumber: 22,
    location: "--8.705177342281708, -35.07591016013741",
    YWF: [" Trilha | 1 praia | 1 Mirante"],
    promoterName: "João Rafael",
    promoterPhone: "5581998786543",
    promoterEmail: "joaorafael123@gmail.com",
  },
  // {
  //   id: 4,
  //   imageUrl: [trilha1, trilha2, trilha3, trilha4, trilha5],
  //   title: "Trilha em Noronha",
  //   subtitle: "Fernando de Noronha",
  //   startDate: "15 Agosto",
  //   endDate: "18 Agosto",
  //   difficulty: "Difícil",
  //   price: "R$ 100 por pessoa",
  //   link: "www.google.com",
  //   tag: "trilhanoronha",
  //   description:
  //     "A trilha do Capim Açu é a mais longa do Parque Nacional Marinho de Fernando e Noronha e a que exige maior preparo físico do visitante.",
  //   whatsappNumber: 22,
  //   location: "-3.844967932752861, -32.42380240119687",
  //   YWF: [" Trilha | 1 Praia | 1 Mirante"],
  //   promoterName: "João Rodrigo",
  //   promoterPhone: "5581998786543",
  //   promoterEmail: "joaorodrigo123@gmail.com",
  // },
  // {
  //   id: 5,
  //   imageUrl: [trilhaBike1, trilhaBike2, trilhaBike3],
  //   title: "Trilha Bike Urbana",
  //   subtitle: "Recife",
  //   startDate: "20 Agosto",
  //   endDate: "22 Agosto",
  //   difficulty: "Difícil",
  //   price: "R$ 60 por pessoa",
  //   link: "www.google.com",
  //   tag: "trilhabikerecifegravata",
  //   description:
  //     "A trilha de bicicleta de Recife para Gravatá proporciona uma experiência única, permitindo aos ciclistas explorar as belezas naturais, culturais e históricas do interior de Pernambuco.",
  //   whatsappNumber: 22,
  //   location: "-8.195958380507195, -35.567846801316755",
  //   YWF: [" Pista | 1 Mirante"],
  //   promoterName: "João Eduardo",
  //   promoterPhone: "5581998786543",
  //   promoterEmail: "joaoeduardo123@gmail.com",
  // },
  // {
  //   id: 6,
  //   imageUrl: [trilha1, trilha2, trilha3, trilha4, trilha5],
  //   title: "Trilha Mirante",
  //   subtitle: "Fernando de Noronha",
  //   startDate: "25 Agosto",
  //   endDate: "28 Agosto",
  //   difficulty: "Médio",
  //   price: "R$ 45 por pessoa",
  //   link: "www.google.com",
  //   tag: "trilhanoronha",
  //   description:
  //     "A Trilha Golfinho é uma experiência envolvente localizada em uma região costeira, oferecendo aos participantes vistas panorâmicas do oceano. Ao longo do percurso à beira-mar, os trilheiros têm a chance de apreciar falésias, praias isoladas e, especialmente, avistar golfinhos em seu habitat natural. O som relaxante das ondas, a brisa marítima e a oportunidade de encontrar vida marinha tornam essa trilha inesquecível para os amantes da natureza.",
  //   whatsappNumber: 22,
  //   location: "-3.8531890925582415, -32.39959814858371",
  //   YWF: [" Trilha | 1 Praia | 1 Mirante"],
  //   promoterName: "João Marcos",
  //   promoterPhone: "5581998786543",
  //   promoterEmail: "joaomarcos123@gmail.com",
  // },
  {
    id: 7,
    imageUrl: [barco1, barco2, barco3, barco4],
    title: "Passeio de Barco",
    subtitle: "Fernando de Noronha",
    startDate: "1 Setembro",
    endDate: "3 Setembro",
    difficulty: "Fácil",
    price: "R$ 75 por pessoa",
    link: "www.google.com",
    tag: "passeiobarconoronha",
    description:
      "Venha vivenciar a navegação das embarcações milenares do Triângulo Polinésio. A proposta da expedição é aventura e contemplação no cenário paradisíaco da Ilha de Fernando de Noronha.",
    whatsappNumber: 22,
    location: "-3.829210488334373, -32.41298773513567",
    YWF: [" Trilha | 1 Mergulho | 1 Banco de Areia"],
    promoterName: "João Fábio",
    promoterPhone: "5581998786543",
    promoterEmail: "joaofabio123@gmail.com",
  },
  {
    id: 8,
    imageUrl: [catimbau1, catimbau2, catimbau3, catimbau4],
    title: "Passeio Catimbau",
    subtitle: "Catimbau",
    startDate: "7 Setembro",
    endDate: "10 Setembro",
    difficulty: "Difícil",
    price: "R$ 75 por pessoa",
    link: "www.google.com",
    tag: "valecatimbau",
    description:
      "O Parque Nacional do Catimbau, também conhecido como Vale do Catimbau, é um parque nacional brasileiro do estado de Pernambuco. Criado em 22 de agosto de 2002, abrange os municípios de Buíque, Ibimirim, Sertânia e Tupanatinga, entre o Agreste e o Sertão pernambucano.",
    whatsappNumber: 22,
    location: "-8.596757172303077, -37.286127709871465",
    YWF: [" Trilha | 2 Mirantes | 1 Trilha"],
    promoterName: "João Igor",
    promoterPhone: "5581998786543",
    promoterEmail: "joaoigor123@gmail.com",
  },
  {
    id: 1,
    imageUrl: [cacho1, cacho2, cacho3, cacho4, cacho5],
    title: "Cachoeira Paraíso",
    subtitle: "Bonito",
    startDate: "2 Agosto",
    endDate: "4 Agosto",
    difficulty: "Difícil",
    price: "R$ 70 por pessoa",
    link: "www.google.com",
    tag: "cachoeirabonito",
    description:
      "A Cachoeira Barra Azul oferece um refúgio de tranquilidade e beleza natural, com uma piscina na parte de baixo e uma vista espetacular na parte de cima. É um local perfeito para relaxar na natureza. É aconselhável levar lanches e bebidas. Com suas formações rochosas e mata circundante, a cachoeira oferece um espaço encantador para relaxar à beira d’água, adequado até para famílias com crianças.",
    whatsappNumber: 22,
    location: "-23.550520,-46.633308",
    YWF: [" Trilha | 1 Cachoeira | 1 Mirante"],
    promoterName: "João Marcos",
    promoterPhone: "5581998786543",
    promoterEmail: "joaomarcos123@gmail.com",
  },
  {
    id: 7,
    imageUrl: [barco1, barco2, barco3, barco4],
    title: "Passeio de Barco",
    subtitle: "Fernando de Noronha",
    startDate: "1 Setembro",
    endDate: "3 Setembro",
    difficulty: "Fácil",
    price: "R$ 75 por pessoa",
    link: "www.google.com",
    tag: "passeiobarconoronha",
    description:
      "Venha vivenciar a navegação das embarcações milenares do Triângulo Polinésio. A proposta da expedição é aventura e contemplação no cenário paradisíaco da Ilha de Fernando de Noronha.",
    whatsappNumber: 22,
    location: "-3.829210488334373, -32.41298773513567",
    YWF: [" Trilha | 1 Mergulho | 1 Banco de Areia"],
    promoterName: "João Fábio",
    promoterPhone: "5581998786543",
    promoterEmail: "joaofabio123@gmail.com",
  },
  {
    id: 8,
    imageUrl: [catimbau1, catimbau2, catimbau3, catimbau4],
    title: "Passeio Catimbau",
    subtitle: "Catimbau",
    startDate: "7 Setembro",
    endDate: "10 Setembro",
    difficulty: "Difícil",
    price: "R$ 75 por pessoa",
    link: "www.google.com",
    tag: "valecatimbau",
    description:
      "O Parque Nacional do Catimbau, também conhecido como Vale do Catimbau, é um parque nacional brasileiro do estado de Pernambuco. Criado em 22 de agosto de 2002, abrange os municípios de Buíque, Ibimirim, Sertânia e Tupanatinga, entre o Agreste e o Sertão pernambucano.",
    whatsappNumber: 22,
    location: "-8.596757172303077, -37.286127709871465",
    YWF: [" Trilha | 2 Mirantes | 1 Trilha"],
    promoterName: "João Igor",
    promoterPhone: "5581998786543",
    promoterEmail: "joaoigor123@gmail.com",
  },
];

export default data;
