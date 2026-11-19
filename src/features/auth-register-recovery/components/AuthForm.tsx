import { useForm } from '@mantine/form';
import { TextInput, PasswordInput, Button, Flex } from '@mantine/core'
import { Link } from '@tanstack/react-router'

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
            <h3 className="auth-form__title">Вход</h3>

            <Flex
                direction="column"
                gap="md"
                align="center"
            >
                <TextInput
                    label="Email"
                    placeholder="Email"
                    key={form.key('email')}
                    {...form.getInputProps('email')}
                    autoComplete="username"
                    w={ '100%' }
                />

                <PasswordInput
                    label="Пароль"
                    placeholder="Введите пароль"
                    key={form.key('password')}
                    {...form.getInputProps('password')}
                    w={ '100%' }
                />

                <Button
                    variant="filled"
                    onClick={ submitEnter }
                    w={ '100%' }
                >
                    Войти
                </Button>

                <Flex
                    direction="column"
                    gap="md"
                    align="center"
                    mt={ "30px" }
                >
                    <Link disabled={ true } to="/auth">Вход</Link>
                    <Link to="/register">Регистрация</Link>
                    <Link to="/recovery">Забыли пароль?</Link>
                </Flex>
            </Flex>
        </form>
    )
}