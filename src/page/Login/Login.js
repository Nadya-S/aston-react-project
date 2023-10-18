import { Auth } from "@supabase/auth-ui-react"
import supabase from "../../supabaseClient"
import { ThemeSupa } from '@supabase/auth-ui-shared'
import './Login.css'


export const Login = () => {

    return (
        <div className="conteiner">
            <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }}/>
        </div>
    )
}