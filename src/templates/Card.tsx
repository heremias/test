import * as React from 'react'
import { Link } from 'gatsby'

const Card = (props: {
  id: string;
  title: string;
  body: string
}) => {
  return (
    <div>
      <div className='card-text'>
        <Link to={'node/' + props.id}>
          <h2>{props.title}</h2>
        </Link>
        <div dangerouslySetInnerHTML={{__html: props.body}} />
      </div>
    </div>
  )
}

export default Card
