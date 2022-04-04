import PropTypes from 'prop-types'
import React from 'react'
function Profile(props) {
    console.log(props)
  return (
    <div className='profile'>
         <p style={{fontFamily:'monospace', color:'blue', textAlign:'center'}}>{props.fullName}</p>
         <p style={{fontFamily:'monospace', color:'blue', textAlign:'center'}}>{props.bio}</p>
         <p style={{fontFamily:'monospace', color:'blue' , textAlign:'center'}}>{props.profession}</p>
         <span>{props.children}</span>
          <button style={{background:'red', cursor:'pointer', width:'50px'}} onClick={props.handleName}>alert</button>
        </div>

  )
  
}
Profile.defaultProps={
    fullName:'username',
    bio:'description',
    profession:'profession',
    children:'image'
}
Profile.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string ,
    profession : PropTypes.string ,
}

export default Profile