export function Icon(props) {
  return (
    <a
      href={props.href}
      target="_blank"
      mr={1}
      style={{
        color: 'var(--mint)',
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
      }}
    >
      <ion-icon name={props.name} />
    </a>
  )
}
