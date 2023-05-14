import { Link } from "react-router-dom"

const WrongPath = () => {

  return (
    <div>
      <h2>Sorry, this page isn`t found :( </h2>
      <Link to={'/'}><button>Back to Home page</button></Link>
    </div>
  )
}

export default WrongPath;