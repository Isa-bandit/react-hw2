import User from "../../components/user/User"
import Subtitle from "../../components/subtitle/Subtitle"

function UsersPage() {
    return(
      <ul>
        <Subtitle/>
      <User name="Anna" lastname="Ivanova" age={24}/>
      <User name="John" lastname="Johns" age={34}/>
      <User name="Mike" lastname="Tyson" age={67}/>
      <User name="Robert"lastname="Paul" age={45}/>
      <User name="Elena" lastname="Victorovnna" age={66}/>
      </ul>
      )
  }

  export default UsersPage