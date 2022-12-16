import './index.scss'
// when u map lezem ykun fi a key deyman

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  return (
    <span>
      {strArray.map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {' '}
          {char}
        </span>
      ))}
    </span>
  )
}

export default AnimatedLetters
