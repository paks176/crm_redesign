export default function AuthForm() {
    return (
        <form className="auth__form">
            <h1 className="auth__form__title">Вход</h1>
            <div className="auth__form__input">
                <label htmlFor={"email"}>E-mail</label>
                <input className="auth-input" type="email" id="email" placeholder="E-mail" autoComplete="username"/>
            </div>
            <div className="auth__form__input">
                <label htmlFor={"password"}>Пароль</label>
                <input className="auth-input" type="password" id="password" placeholder="Пароль"/>
            </div>
            <div className="auth__form__input">
                <label htmlFor={"authKey"}>Одноразовый код подтверждения выслан на указанный email. Пожалуйста,
                    проверьте
                    почту</label>
                <input className="auth-input" type="text" id="authKey" inputMode="numeric"
                       pattern="[0-9]" placeholder="Код подтверждения"/>
            </div>
            <div className="auth__form__actions">
                <button className="btn" id="submit" type="submit">Вход</button>
                <button className="btn" id="submit" type="submit">Вход</button>
                <a className="link">Регистрация</a>
                <a className="link">Забыли пароль?</a>
            </div>
        </form>
    )
}