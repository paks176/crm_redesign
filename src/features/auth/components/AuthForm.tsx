import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Button } from '@mantine/core'

export default function AuthForm() {
    const form = useForm({
        mode: 'uncontrolled',
        initialValues: { email: '', password: '' },
        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Неверный e-mail'),
            password: (value) => (value.length < 2 ? '' : null),
        },
    })

    const submitEnter = () => {
        const formValues = form.getValues()
        console.log(formValues)
    }

    return (
        <form className="auth-form">
            <h1 className="auth-form__title">Вход</h1>

            <TextInput
                label="Email"
                placeholder="Email"
                key={form.key('email')}
                {...form.getInputProps('email')}
                autoComplete="username"
            />

            <PasswordInput
                label="Пароль"
                placeholder="Введите пароль"
                key={form.key('password')}
                {...form.getInputProps('password')}
            />

            <Button
                variant="filled"
                onClick={ submitEnter }
            >
                Войти
            </Button>

            <a href={'#'} className="link">Регистрация</a>
            <a href={'#'} className="link">Забыли пароль?</a>
        </form>
    )
}