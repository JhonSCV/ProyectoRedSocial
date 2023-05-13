/* eslint-disable react/prop-types */
import { useSelector } from 'react-redux'

export const PrivateRoutes = ({children}) => {
    const payload = useSelector(state => state);
    const authStatus = payload.auth.status
    let logged = false
    console.log(authStatus);

    if (authStatus == "Logged.") {logged = true}

    return logged ? children : <> <span className='text-neutral-100'> Error 403 </span> </>
}
