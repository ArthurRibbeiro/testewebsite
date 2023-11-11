import "./estilos/vitrine.css";

function Vitrine(){
    return(
        <div className=" vitrineContainer">
            <h3 className="tomclaro">BIG NUMBERS</h3>
            <p className="tomescuro">Lorem ipsum dolor sit amet, consectetur</p>
            <div className="vitrine">
                <div>
                    <div className="innervitrine">
                    <span className="tomescuro">130 </span> <span className="tomclaro"> Mil</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div>
                    <div className="innervitrine">
                        <span className="tomclaro">+</span><span className="tomescuro">150</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
                <div>
                    <div className="innervitrine">
                        <span className="tomclaro">+</span><span className="tomescuro">20</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet</p>
                </div>
            </div>
            <button>Button</button>
        </div>
    )
}

export default Vitrine;