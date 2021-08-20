import React, {useContext} from 'react';

import { UserContext } from './App';

// importera userContext 


//kl. 10.00 


function Hello() {

    // useContext(UserContext)
    //const hello= useContext(UserContext)
    return (
        <div>

          <UserContext.Consumer>
              {   value=> <div> this the value from comsumer {value}  </div>}
          </UserContext.Consumer>
            
        </div>
    )
}

export default Hello
