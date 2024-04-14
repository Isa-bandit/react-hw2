
function User({name,lastname,age}) {
    return(
      <li>
        {name} {lastname} 
        - через 10 лет вам будет {age + 10}
        </li>
    )
  }
  
  
export default User  