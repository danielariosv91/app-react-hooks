export const ShowIncremente = ({increment}) => {
  return (
    <button onClick={() => { increment(5) }}>Incrementar</button>
  )
}
