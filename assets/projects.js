var C = require('../assets/company_logos');

module.exports =  {
  bandwagon: {
    desc : 'Invention known at the Bandwagon Bike Trailer. This collapsible bike trailer can transport higher volumes while still storing easily. This project was completed alongside Katrina L. Ruedinger during freshman year at UW Madison.',
    img : 'bandwagon.png',
    link : 'http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=%2Fnetahtml%2FPTO%2Fsrchnum.htm&r=1&f=G&l=50&s1=9321503.PN.&OS=PN/9321503&RS=PN/9321503',
    header : 'US Patent 9321503 B2',
    technologies : []
  },
  resource_map: {
    desc : 'Map of Madison, WI entrepreneurship ecosystem',
    img : 'map.png',
    link : 'http://transcend.engineering/map',
    header : 'Entrepreneurship Map',
    technologies : [C.STRIPE, C.MAPBOX, C.JS, C.JQUERY, C.HTML, C.CSS],
    moon : true
  },
  librarify: {
    desc : 'Create a Node.js library instantly from a REST API',
    img : 'librarify.png',
    link : 'https://www.npmjs.com/package/librarify',
    header : 'Librarify',
    technologies : [C.NODE, C.JS]
  },
  what3words: {
    desc : 'Node client for the what3words API',
    img : 'what3words.png',
    link : 'https://www.npmjs.com/package/what3words',
    header : 'what3words',
    technologies : [C.NODE, C.JS]
  },
  squadbot: {
    desc : 'Bot that helps you meet up with your team in real life.',
    img : 'squadbot.png',
    link: 'http://squadup.io',
    header : 'SquadBot',
    technologies : [C.SLACK, C.NODE, C.MONGO, C.JS]
  },
  automaton: {
    desc : 'Advertising that drives itself, custom site.',
    img : 'automaton.png',
    link: 'http://automatonads.com',
    header : 'Automaton',
    technologies : [C.CSS, C.HTML, C.INKSCAPE, C.JQUERY, C.JS]
  },
  transcend: {
    desc : 'Transcend, UW Madison innovative hub',
    img : 'transcend.png',
    link: 'http://transcend.engineering',
    header : 'Transcend',
    technologies : [C.HTML, C.CSS, C.SASS]
  },
  tm: {
    desc : 'Transcend Madison, by-students-for-students innovation competition',
    img : 'tm.png',
    link: 'http://transcend.engineering/competition',
    header : 'Transcend Madison',
    technologies : []
  },
  fab: {
    desc : 'Floating button; add it to any site as a help tool',
    img : 'fab_square.png',
    link: 'https://github.com/mfix22/floating_help_button',
    header : 'Floating Action Button',
    technologies : [C.HTML, C.CSS, C.JS]
  },
  eventbot: {
    desc : 'Event production Slack slash command tool',
    img : 'eventbot.png',
    link: 'https://github.com/mfix22/event_bot',
    header : 'EventBot',
    technologies : [C.SLACK, C.NODE, C.JS]
  },
  rideshare: {
    desc : 'Custom mobile friendly site for ridesharing promotion',
    img : 'rideshare.png',
    link: 'https://github.com/mfix22/ride_share_promo',
    header : 'Rideshare San Diego',
    technologies : [C.HTML, C.CSS]
  },
  buz: {
    desc : 'Hyperlocal communication. Look up and meet people.',
    img : 'buz_square.png',
    link: 'https://github.com/zshires/buz',
    header : 'Buz',
    technologies : [C.ANDROID, C.INKSCAPE]
  }
}
