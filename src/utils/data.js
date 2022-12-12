import IMAGES from "../images/index.js";
import * as pdfs from "./downloads";

export const constructionCards = [
  {
    heading: "Lightweight Backfill Aggregate",
    image: IMAGES.backfill,
    alt: "Image of Lightweight Backfill Aggregate",
  },
  {
    heading: "Lightweight Concrete Aggregate",
    image: IMAGES.concrete,
    alt: "Image of Lightweight Concrete Aggregate",
  },
  {
    heading: "Lightweight Precast Aggregate",
    image: IMAGES.precast,
    alt: "Image of Lightweight Precast Aggregate",
  },
];

export const ecoCards = [
  {
    heading: "Laminated packaging recycling",
    image: IMAGES.laminatedrecycle,
    alt: "Image of rolls of lanimated plastic packaging",
    paragraph:
      "PE+PP+PET+BOPP, ABS, and more, can all be processed into a high quality blend",
  },
  {
    heading: "Mixed plastics recycling",
    image: IMAGES.mixrecycle,
    alt: "Image of  mixed plastics recycling",
    paragraph:
      "Mixed labels, caps, bottles, wrappers, can be recycled with no sorting",
  },
  {
    heading: "Repro pellets for recycling",
    image: IMAGES.pelletrecycle,
    alt: "Image of platic pellets to be combined with pure resins",
    paragraph:
      "Homogenized composite plastic pellets to be used combined with pure resins",
  },
];

export const productCards = [
  {
    caption: "100% RECYCLED",
    heading: "Regular & Mini Smart Gravel",
    paragraph: "Backfill, drainage, hydroponics, and more",
    linkText: "Info brochure",
    image: IMAGES.gravel,
    alt: "Image of Regular Smart Gravel used for backfill, drainage, hydroponics",
    pdf: pdfs.regularMiniBrochure,
  },
  {
    caption: "100% RECYCLED",
    heading: "Micro Mini Smart Gravel",
    paragraph: "Building and precast concrete",
    linkText: "Info brochure",
    image: IMAGES.microgravel,
    alt: "Image of Micro Smart Gravel used for building and precast concrete",
    pdf: pdfs.microminiDataSheet,
  },
  {
    caption: "100% RECYCLED",
    heading: "Composite plastic pellet",
    paragraph: "Extrusion and injection molding",
    linkText: "Info brochure",
    image: IMAGES.pellet,
    alt: "Image of composite plastic pellest used fro injection molding",
    pdf: pdfs.reproPelletSDS,
  },
];
