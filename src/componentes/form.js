import "./estilos/form.css"

function Form(){
    return(
        <div className="formSpace">
            <div className="formTextArea">
                <p id="formTextTitle">Formulário</p>
                <h1>Lorem ipsum dolor sit amet, consectetur adip scing elit, labore et magna aliqua</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat </p>
            </div>
            <div className="formContainer">

                <div id="formdesc">Faça uma demonstração</div>
                <div className="combo">
                    <label>Nome</label>
                    <input placeholder="Nome completo" />
                </div>
                <div className="combo">
                    <label>E-mail</label>
                    <input placeholder="Seu e-mail" />
                </div>
                <div className="combo">
                    <label>Telefone + DDD</label>
                    <input placeholder="(99) 99999-9999" />
                </div>
                <div className="combo">
                    <label>Empresa</label>
                    <input placeholder="Nome da empresa" />
                </div>
                <div className="combo">
                    <label>Faturamento anual</label>
                    <input type="" />
                </div>

                <button>Solicitar demonstração</button>
            </div>
        </div>
    )

}

export default Form;