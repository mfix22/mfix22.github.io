import React from 'react'

const HorizontalIconList = (props) => (
  <ul className='no-padding-no-margin'>
    {props.icons.map(function (listValue) {
      if (listValue.url) {
        return (
          <li key={listValue.key} className='horizontal_list_item'>
            <a target='_blank' className='brand-icon-link' href={listValue.url}>
              <span title={listValue.aria}>
                <i className={listValue.type} />
              </span>
            </a>
          </li>
        )
      }
      return (
        <li
          key={listValue.key}
          className='horizontal_list_item'
        >
          <span title={listValue.aria}>
            <i className={listValue.type} />
          </span>
        </li>
      )
    })}
  </ul>
)

module.exports = HorizontalIconList
