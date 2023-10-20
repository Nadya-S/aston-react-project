import Button from '@mui/material/Button'
import { useNavigate } from "react-router-dom"
import supabase from '../../supabaseClient'

const Signout = () => {
    const navigate = useNavigate()

    const signOut = () => {
        supabase.auth.signOut()
        navigate('/')
    }

    return (
        <>
            <Button onClick={signOut} variant="outlined">Выйти</Button>
        </>
    )
}

export default Signout