import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { InputGroup, FormControl, Button, Row, Col } from 'react-bootstrap';
import BlueBackground from '../Shared/BlueBackground';
import Link from 'next/link';
interface LoginProps {
  titlePhrase: string;
  buttonPhrase: string;
}

const LoginForm: React.FC<LoginProps> = ({ titlePhrase, buttonPhrase }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const router = useRouter();

  return (

    <form onSubmit={() => {}}>
      <Row>
        <Col lg={{ span: 6, offset: 3 }} md={{ span: 8, offset: 2 }}>
          <BlueBackground>
            <h4>{titlePhrase}</h4>

            <InputGroup className="mt-3">
              <FormControl
                placeholder="Meu e-mail"
                value={email}
                type="email"
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) =>
                    setEmail(evt.target.value)
                }
                required
              />
            </InputGroup>

            <InputGroup className="mt-3">
              <FormControl
                placeholder="Senha"
                value={password}
                type="password"
                onChange={
                  (evt: React.ChangeEvent<HTMLInputElement>) =>
                    setPassword(evt.target.value)
                }
                required
                ref={passwordRef}
              />
            </InputGroup>

            <Button type="submit" className="btn btn-info mt-3 w-100">{buttonPhrase}</Button>

            <br />

            <Link href="/Auth/PasswordRecovery">Esqueci minha senha</Link> <br />
          </BlueBackground>
        </Col>
      </Row>
    </form>
  )
}

export default LoginForm;
