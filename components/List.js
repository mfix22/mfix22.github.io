import React from 'react'

export function List({ children, max }) {
  const items = React.Children.toArray(children)
  const initial = items.slice(0, max)
  const rest = items.slice(max)

  const [more, setMore] = React.useState(!rest.length)

  return (
    <ul>
      {initial}
      {!more ? (
        <li>
          <span onClick={() => setMore(true)} style={{ cursor: 'pointer' }}>
            More…
          </span>
        </li>
      ) : (
        rest
      )}
    </ul>
  )
}
