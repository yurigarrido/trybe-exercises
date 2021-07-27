import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  render() {
    return (
    <div>
      <section className="container">
      <form className="form-style">
        <fieldset>
          <label htmlFor="nome">
            Nome 
            <input className="input-form" type="text" maxLength="40" id="nome" required/>
          </label>
          <br />
          <br />
          <label htmlFor="email">
            Email:
            <input className="input-form" type="text" maxLength="50" id="email" required/>
          </label>
          <br />
          <br />
          <label htmlFor="cpf">
            CPF:
            <input className="input-form" type="text" maxLength="11" id="cpf" required/>
          </label>
          <br />
          <br />
          <label htmlFor="endereco">
            Endereço:
            <textarea className="input-form" maxLength="200" id="endereco" required/>
          </label>
          <br />
          <br />
          <label htmlFor="cidade">
            Cidade:
            <input className="input-form" type="text" maxLength="28" id="cidade" required/>
          </label>
        </fieldset>
        <fieldset>
          <label htmlFor="curriculo"> Resumo do currículo :
            <textarea className="input-form" id="curriculo" required maxLength="100" cols="30"rows="10">
            </textarea>
              <br />
              <br />
          </label>
          <label htmlFor="cargo"> Descrição do cargo :
            <textarea className="input-form" id="cargo" required maxLength="500" cols="30" rows="10">
            </textarea>
            <br />
          </label>
        <label className="label-radio" htmlFor="radio">
          <h1>Onde você mora?</h1>
          <input type="radio" name="radio"/> Casa
          <input type="radio" name="radio"/> Apartamento
        </label>
        <label className="label-radio" htmlFor="selec">
          <select name="selec" id="1">Estados</select>
        </label>
        </fieldset>
        <br />
        <br />
        <div className="container-buttons">
          <button>Envia</button>
          <button>Limpar</button>
        </div>
      </form>
      </section>
    </div>
    )
  }
}

export default Form;