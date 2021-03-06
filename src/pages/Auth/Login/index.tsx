import LoginForm from '../../../components/LoginForm';
import SignUpForm from '../../../components/SignUpForm';
import MainComponent from '../../../components/Storefront/MainComponent';

const Login: React.FC = () => {
  return (
    <MainComponent>
      <div className="p-4 text-center">
        <h2>Entrar</h2>

        <LoginForm titlePhrase="Acessar minha conta" buttonPhrase="ACESSAR" />

        <SignUpForm titlePhrase="Criar nova conta" buttonPhrase="CRIAR" />

      </div>
    </MainComponent>
  )
}

export default Login;
