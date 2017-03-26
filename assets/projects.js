const {
  STRIPE,
  MAPBOX,
  JS,
  JQUERY,
  HTML,
  NODE,
  SLACK,
  MONGO,
  CSS,
  INKSCAPE,
  SASS,
  ANDROID,
  REACT,
  ATOM
} = require('../assets/company_logos')

module.exports = {
  nature: {
    desc: 'Atom theme inspired by nature, built with Javascript and React in mind.',
    img: 'nature-syntax.png',
    link: 'https://atom.io/themes/nature-syntax',
    header: 'Nature Theme',
    technologies: [ATOM, SASS],
    value: 1
  },
  alchemy: {
    desc: 'Drag-and-drop file converter for your menubar, built with Electron.',
    img: 'alchemy.png',
    link: 'https://dawnlabs.github.io/alchemy/',
    header: 'Alchemy',
    technologies: [REACT, JS],
    value: 5
  },
  squad: {
    desc: 'The most intuitive, simple, calendar for teams',
    img: 'squad.png',
    link: 'https://github.com/SquadCalendar/squad',
    header: 'Squad',
    technologies: [REACT, JS],
    value: 5
  },
  emily: {
    desc: 'Emily Hansel\'s Portfolio Website - Dancer & Choreographer',
    img: 'emily.png',
    link: 'http://emilyhansel.me',
    header: 'Portfolio Sites',
    technologies: [],
    value: 2
  },
  bandwagon: {
    desc: 'Invention known at the Bandwagon Bike Trailer. This collapsible bike trailer can transport higher volumes while still storing easily. This project was completed alongside Katrina L. Ruedinger during freshman year at UW Madison.',
    img: 'bandwagon.png',
    link: 'http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9321503.PN.&OS=PN/9321503&RS=PN/9321503',
    header: 'US Patent 9321503 B2',
    technologies: [],
    value: 9
  },
  resource_map: {
    desc: 'Map of Madison, WI entrepreneurship ecosystem',
    img: 'map.png',
    link: 'http://transcend.engineering/map',
    header: 'Entrepreneurship Map',
    technologies: [STRIPE, MAPBOX, JS, JQUERY, HTML, CSS],
    moon: true,
    value: 5
  },
  librarify: {
    desc: 'Create a Node.js library instantly from a REST API',
    img: 'librarify.png',
    link: 'https://www.npmjs.com/package/librarify',
    header: 'Librarify',
    technologies: [NODE, JS],
    value: 9
  },
  what3words: {
    desc: 'Node client for the what3words API',
    img: 'what3words.png',
    link: 'https://www.npmjs.com/package/what3words',
    header: 'what3words',
    technologies: [NODE, JS],
    value: 9
  },
  squadbot: {
    desc: 'Bot that helps you meet up with your team in real life.',
    img: 'squadbot.png',
    link: 'http://bot.squadup.io',
    header: 'SquadBot',
    technologies: [SLACK, NODE, MONGO, JS],
    value: 8
  },
  automaton: {
    desc: 'Advertising that drives itself, custom site.',
    img: 'automaton.png',
    link: 'https://github.com/mfix22/automaton-site',
    header: 'Automaton',
    technologies: [CSS, HTML, INKSCAPE, JQUERY, JS],
    value: 2
  },
  transcend: {
    desc: 'Transcend, UW Madison innovative hub',
    img: 'transcend.png',
    link: 'http://transcend.engineering',
    header: 'Transcend',
    technologies: [HTML, CSS, SASS],
    value: 5
  },
  tm: {
    desc: 'Transcend Madison, by-students-for-students innovation competition',
    img: 'tm.png',
    link: 'http://transcend.engineering/competition',
    header: 'Transcend Madison',
    technologies: [],
    value: 5
  },
  fab: {
    desc: 'Floating button; add it to any site as a help tool',
    img: 'fab_square.png',
    link: 'https://github.com/mfix22/floating_help_button',
    header: 'Floating Action Button',
    technologies: [HTML, CSS, JS],
    value: 4
  },
  eventbot: {
    desc: 'Event production Slack slash command tool',
    img: 'eventbot.png',
    link: 'https://github.com/mfix22/event_bot',
    header: 'EventBot',
    technologies: [SLACK, NODE, JS],
    value: 9
  },
  rideshare: {
    desc: 'Custom mobile friendly site for ridesharing promotion',
    img: 'rideshare.png',
    link: 'https://github.com/mfix22/ride_share_promo',
    header: 'Rideshare San Diego',
    technologies: [HTML, CSS],
    value: 2
  },
  buz: {
    desc: 'Hyperlocal communication. Look up and meet people.',
    img: 'buz_square.png',
    link: 'https://github.com/zshires/buz',
    header: 'Buz',
    technologies: [ANDROID, INKSCAPE],
    value: 9
  }
}
