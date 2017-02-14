import React from 'react'

const MiloCard = ({ img, header, desc, link }) => (
  <div className='col-md-4 col-sm-6 col-xs-12'>
    <div>
      <div className='grid'>
        <figure className='effect-milo'>
          <img className='card' src={'img/' + img} />
          <figcaption>
            <h2>{header}</h2>
            <p>{desc}</p>
            <a target='_blank' href={link} />
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
)

module.exports = MiloCard
