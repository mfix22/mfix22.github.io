var NODE = {
  type : 'devicon-nodejs-plain colored',
  aria : 'Node.js'
}
var MONGO = {
  type : "devicon-mongodb-plain colored",
  aria : 'MongoDB'
}
var JS = {
  type : 'devicon-javascript-plain colored',
  aria : 'Javascript'
}
var SASS = {
  type : 'devicon-sass-original colored',
  aria : 'Sass'
}
var INKSCAPE = {
  type : 'devicon-inkscape-plain colored',
  aria : 'Inkscape'
}
var HTML = {
  type : 'devicon-html5-plain colored',
  aria : 'HTML5'
}
var CSS = {
  type : 'devicon-css3-plain colored',
  aria : 'CSS3'
}
var BOOTSTRAP = {
  type : 'devicon-bootstrap-plain colored',
  aria : 'Bootstrap'
}
var ANDROID = {
  type : 'devicon-android-plain colored',
  aria : 'Android'
}
var JQUERY = {
  type : 'devicon-jquery-plain colored',
  aria : 'JQuery'
}
var STRIPE = {
  type : 'icon-cc-stripe',
  aria : 'Stripe API'
}
var SLACK = {
  type : 'icon-slack',
  aria : 'Slack API'
}

module.exports =  [
  {
    'id' : 'resource_map',
    'desc' : 'Map of Madison, WI entrepreneurship ecosystem',
    'img' : 'map.png',
    'link' : 'https://transcend.engineering/map',
    'header' : 'Entrepreneurship Map',
    'technologies' : [STRIPE, HTML, CSS, JS, JQUERY]
  },
  {
    'id' : 'librarify',
    'desc' : 'Create a Node.js library instantly from a REST API',
    'img' : 'librarify.png',
    'link' : 'https://www.npmjs.com/package/librarify',
    'header' : 'Librarify',
    'technologies' : [NODE, JS]
  },
  {
    'id' : 'what3words',
    'desc' : 'Node client for the what3words API',
    'img' : 'what3words.png',
    'link' : 'https://www.npmjs.com/package/what3words',
    'header' : 'what3words',
    'technologies' : [NODE, JS]
  },
  {
    'id' : 'squadbot',
    'desc' : 'Bot that helps you meet up with your team in real life.',
    'img' : 'squadbot.png',
    'link': 'http://squadup.io',
    'header' : 'SquadBot',
    'technologies' : [SLACK, NODE, MONGO, JS]
  },
  {
    'id' : 'automaton',
    'desc' : 'Advertising that drives itself, custom site.',
    'img' : 'automaton.png',
    'link': 'http://automatonads.com',
    'header' : 'Automaton',
    'technologies' : [CSS, HTML, INKSCAPE, JQUERY, JS]
  },
  {
    'id' : 'transcend',
    'desc' : 'Transcend, UW Madison innovative hub',
    'img' : 'transcend.png',
    'link': 'http://transcend.engineering',
    'header' : 'Transcend',
    'technologies' : [HTML, CSS, SASS]
  },
  {
    'id' : 'tm',
    'desc' : 'Transcend Madison, by-students-for-students innovation competition',
    'img' : 'tm.png',
    'link': 'http://transcend.engineering/competition',
    'header' : 'Transcend Madison',
    'technologies' : []
  },
  {
    'id' : 'fab',
    'desc' : 'Floating button, Add it to any site as a help tool',
    'img' : 'fab_square.png',
    'link': 'https://github.com/mfix22/floating_help_button',
    'header' : 'Floating Action Button',
    'technologies' : [HTML, CSS, JS]
  },
  {
    'id' : 'eventbot',
    'desc' : 'Event production Slack slash command tool',
    'img' : 'eventbot.png',
    'link': 'https://github.com/mfix22/event_bot',
    'header' : 'EventBot',
    'technologies' : [SLACK, NODE, JS]
  },
  {
    'id' : 'rideshare',
    'desc' : 'Custom mobile friendly site for ridesharing promotion',
    'img' : 'rideshare.png',
    'link': 'https://github.com/mfix22/ride_share_promo',
    'header' : 'Rideshare San Diego',
    'technologies' : [HTML, CSS]
  },
  {
    'id' : 'buz',
    'desc' : 'Hyperlocal communication. Look up and meet people.',
    'img' : 'buz_square.png',
    'link': 'https://github.com/zshires/buz',
    'header' : 'Buz',
    'technologies' : [ANDROID, INKSCAPE]
  }
];
