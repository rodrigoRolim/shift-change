import PrimaryLayout from "../layouts/PrimaryLayout";
import RegularButton from "../components/RegularButton";
import { useState } from 'react'
import './AccountLogin.scss';

function AccountLogin() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const inputUsername = (event) => {
    setUsername(event.target.value)
  }
  const inputPassword = (event) => {
    setPassword(event.target.value)
  }
  const confirmLogin = (event) => {
    event.preventDefault()
    location.href = '/escala'
  }

  return (
   <PrimaryLayout>
      <form className="account-login">
        <div className="fields">
          <label className="username">
            <span className="label">Nome do usuário</span>
            <input className="input" name="username" id="username" value={username} onInput={inputUsername} />
          </label>
          <label className="password">
            <span className="label">Senha</span>
            <input className="input" name="password" id="password" value={password} onInput={inputPassword} />
          </label>
        </div>
        <div className="actions">
          <RegularButton text="confirmar" onClick={confirmLogin} />
        </div>
      </form>
   </PrimaryLayout>
  )
}

export default AccountLogin
