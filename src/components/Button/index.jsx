export const Button = ({ handleClick, icon }) => {
  return (
    <button onClick={handleClick}>
      <img src={icon} />
    </button>
  )
}
