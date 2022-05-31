import './Article.css'
import { useLocation } from 'react-router-dom'

function Article() {

  const location = useLocation()

  console.log(location);
  
  return (
    <div>Article</div>
  )
}

export default Article