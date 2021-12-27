import React, { useState } from "react";
import { FC } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TModal } from "../../types/TModal";

library.add(fas);

const Modal: FC<TModal> = ({ open, setOpen, title }) => {
  const [seePassword, setSeePassword] = useState(false);
  const [seeConfirmPassword, setSeeConfirmPassword] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });
  const [cadastro, setCadastro] = useState({
    nickname: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });

  const signIn = () => {
    if (!(login.email === "" || login.password === "")) {
      try {
        console.log("login: ", login);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const signUp = () => {
    if (
      !(
        cadastro.nickname === "" ||
        cadastro.email === "" ||
        cadastro.confirmEmail === "" ||
        cadastro.password === "" ||
        cadastro.confirmPassword === ""
      )
    ) {
      try {
        console.log("cadastro: ", cadastro);
      } catch (err) {
        console.log(err);
      }
    }
  };
  const handleChangeLogin = (e: any) => {
    e.preventDefault();
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleChangeCadastro = (e: any) => {
    e.preventDefault();
    setCadastro({ ...cadastro, [e.target.name]: e.target.value });
  };

  if (title === "login") {
    return (
      <div className="modalBG">
        <div className="modal">
          <form className="modalCenter">
            <div className="modalTitle">
              <p>{title.toUpperCase()}</p>
              <FontAwesomeIcon
                onClick={() => setOpen(!open)}
                className="click"
                icon="times"
                size="lg"
              />
            </div>
            <div className="input">
              <p>Email ou Nome de usuário:</p>
              <input
                name="email"
                onChange={handleChangeLogin}
                type="text"
                required
              />
              <p>Senha:</p>
              <div className="inputPassword">
                <div className="divInputPassword">
                  <input
                    name="password"
                    onChange={handleChangeLogin}
                    type={!seePassword ? "password" : "text"}
                    className="password"
                    required
                  />
                  <div
                    className="passwordButton"
                    onClick={() => setSeePassword(!seePassword)}
                  >
                    {!seePassword ? (
                      <FontAwesomeIcon color="#000" icon="eye-slash" />
                    ) : (
                      <FontAwesomeIcon color="#000" icon="eye" />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="buttonsModal">
              <button
                type="button"
                className="cadastrar"
                onClick={() => setOpen(!open)}
              >
                Voltar
              </button>
              <button onClick={() => signIn()} type="submit" className="entrar">
                Entrar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
  if (title === "cadastrar") {
    return (
      <div className="modalBG">
        <div className="modal">
          <form className="modalCenter">
            <div className="modalTitle">
              <p>{title.toUpperCase()}</p>
              <FontAwesomeIcon
                onClick={() => setOpen(!open)}
                className="click"
                icon="times"
                size="lg"
              />
            </div>
            <div className="input">
              <div className="form">
                <div>
                  <p>Nickname:</p>
                  <input
                    name="nickname"
                    onChange={handleChangeCadastro}
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="form">
                <div>
                  <p>Email:</p>
                  <input
                    name="email"
                    onChange={handleChangeCadastro}
                    type="text"
                    required
                  />
                </div>
                <div>
                  <p>Confirmar email:</p>
                  <input
                    name="confirmEmail"
                    onChange={handleChangeCadastro}
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="form">
                <div>
                  <p>Senha:</p>
                  <div className="inputPassword">
                    <div className="divInputPassword">
                      <input
                        name="password"
                        onChange={handleChangeCadastro}
                        type={!seePassword ? "password" : "text"}
                        className="password"
                        required
                      />
                      <div
                        className="passwordButton"
                        onClick={() => setSeePassword(!seePassword)}
                      >
                        {!seePassword ? (
                          <FontAwesomeIcon color="#000" icon="eye-slash" />
                        ) : (
                          <FontAwesomeIcon color="#000" icon="eye" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <p>Confirmar senha:</p>
                  <div className="inputPassword">
                    <div className="divInputPassword">
                      <input
                        name="confirmPassword"
                        onChange={handleChangeCadastro}
                        type={!seeConfirmPassword ? "password" : "text"}
                        className="password"
                        required
                      />
                      <div
                        className="passwordButton"
                        onClick={() =>
                          setSeeConfirmPassword(!seeConfirmPassword)
                        }
                      >
                        {!seeConfirmPassword ? (
                          <FontAwesomeIcon color="#000" icon="eye-slash" />
                        ) : (
                          <FontAwesomeIcon color="#000" icon="eye" />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear" />
            <div className="buttons">
              <button
                type="button"
                className="cadastrar"
                onClick={() => setOpen(!open)}
              >
                Voltar
              </button>
              <button onClick={signUp} type="submit" className="entrar">
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default Modal;
