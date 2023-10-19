import Button from '@mui/material/Button'
import { supabase } from "@supabase/auth-ui-shared"
import { useNavigate } from "react-router-dom"

export const Signout = () => {

    const navigate = useNavigate()

    const signOut = () => {
        supabase.auth.signOut()
        navigate('/')
    }

    return (
        <>
            <Button variant="outlined">Выйти</Button>
        </>
    )
}