// @ts-check
const Cheerio = require("cheerio");

const outputFile = "gural-seramik.html";

const pages = [
    "https://guralseramik.com/concrete/beton",
    "https://guralseramik.com/concrete/biblo",
    "https://guralseramik.com/concrete/capella",
    "https://guralseramik.com/concrete/cemento",
    "https://guralseramik.com/concrete/concrete",
    "https://guralseramik.com/concrete/essential",
    "https://guralseramik.com/concrete/eves",
    "https://guralseramik.com/concrete/krea",
    "https://guralseramik.com/concrete/kruk-stone",
    "https://guralseramik.com/concrete/lapis",
    "https://guralseramik.com/concrete/mozaik",
    "https://guralseramik.com/concrete/piedra",
    "https://guralseramik.com/concrete/terrazzo",
    "https://guralseramik.com/concrete/travertino",
    "https://guralseramik.com/concrete/victor",
    "https://guralseramik.com/concrete/volcano",
    ...[
    "https://guralseramik.com/natural-stone/eban",
    "https://guralseramik.com/natural-stone/elisa",
    "https://guralseramik.com/natural-stone/glory",
    "https://guralseramik.com/natural-stone/lal",
    "https://guralseramik.com/natural-stone/loa",
    "https://guralseramik.com/natural-stone/miranda",
    "https://guralseramik.com/natural-stone/misha",
    "https://guralseramik.com/natural-stone/nice",
    "https://guralseramik.com/natural-stone/nice-dekafon",
    "https://guralseramik.com/natural-stone/olvido",
    "https://guralseramik.com/natural-stone/olvido-silver",
    "https://guralseramik.com/natural-stone/optal",
    "https://guralseramik.com/natural-stone/pendan",
    "https://guralseramik.com/natural-stone/rich",
    "https://guralseramik.com/natural-stone/royal",
    "https://guralseramik.com/natural-stone/smeralda"
    ],
    ...[
    "https://guralseramik.com/dekor/flora",
    "https://guralseramik.com/dekor/magnolia",
    "https://guralseramik.com/dekor/mistero",
    "https://guralseramik.com/dekor/oregon",
    "https://guralseramik.com/dekor/seattle"
    ],
    ...[
    "https://guralseramik.com/marble/alaska",
    "https://guralseramik.com/marble/aleats",
    "https://guralseramik.com/marble/amozonite",
    "https://guralseramik.com/marble/andromeda",
    "https://guralseramik.com/marble/aqua",
    "https://guralseramik.com/marble/arrel",
    "https://guralseramik.com/marble/arya",
    "https://guralseramik.com/marble/atlas",
    "https://guralseramik.com/marble/bianco",
    "https://guralseramik.com/marble/black-sea",
    "https://guralseramik.com/marble/black-silver",
    "https://guralseramik.com/marble/calacatta-grigio",
    "https://guralseramik.com/marble/calacatta-blue-veins",
    "https://guralseramik.com/marble/calacatta-mia",
    "https://guralseramik.com/marble/ceres",
    "https://guralseramik.com/marble/clementine",
    "https://guralseramik.com/marble/cosmo",
    "https://guralseramik.com/marble/elegant",
    "https://guralseramik.com/marble/elegant-vizon",
    "https://guralseramik.com/marble/eris",
    "https://guralseramik.com/marble/everet",
    "https://guralseramik.com/marble/frey",
    "https://guralseramik.com/marble/glazed",
    "https://guralseramik.com/marble/granada",
    "https://guralseramik.com/marble/grenelle",
    "https://guralseramik.com/marble/julia",
    "https://guralseramik.com/marble/larkin",
    "https://guralseramik.com/marble/line",
    "https://guralseramik.com/marble/marmo-venato",
    "https://guralseramik.com/marble/mega",
    "https://guralseramik.com/marble/melin",
    "https://guralseramik.com/marble/merit",
    "https://guralseramik.com/marble/milge",
    "https://guralseramik.com/marble/mira",
    "https://guralseramik.com/marble/mirage",
    "https://guralseramik.com/marble/ocean",
    "https://guralseramik.com/marble/onice-levigato",
    "https://guralseramik.com/marble/onyx",
    "https://guralseramik.com/marble/salda",
    "https://guralseramik.com/marble/storia",
    "https://guralseramik.com/marble/tellurio",
    "https://guralseramik.com/marble/venus",
    "https://guralseramik.com/marble/vivienne",
    "https://guralseramik.com/marble/white-silver"
    ],
    ...[
    "https://guralseramik.com/wood/abaco",
    "https://guralseramik.com/wood/alba",
    "https://guralseramik.com/wood/fruver",
    "https://guralseramik.com/wood/komi",
    "https://guralseramik.com/wood/natural-wood",
    "https://guralseramik.com/wood/norma",
    "https://guralseramik.com/wood/west-wood"
    ]
];

Promise.all(pages.map(async (page) => {
    console.log(`Fetching ${page}`);
    const response = await fetch(page);
    const html = await response.text();
    const $ = Cheerio.load(html);
    return $(".collection-product-list").toArray().map(el => $(el).html()).join("");
})).then((htmls) => {
    require("fs").writeFileSync(outputFile, htmls.join(""));
});