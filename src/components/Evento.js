import Button from "./evento/Button"

function Evento(){

    function meuEvento(){
        console.log(`Ativando primeiro evento!`)
    }
    function segundoEvneto(){
        console.log(`Ativando segundo evento!`)
    }
    return (
       <div>
        <p>Clique para disparar um evento:</p>
        <Button  event={meuEvento}text="Primeiro Evento" />
        <Button  event={segundoEvneto}text="Segundo Evento" />

        </div>
    )
}
export default Evento