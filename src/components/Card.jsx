

function Content({cep}){
    if (!cep.cep) return null;
    return(
        <div className='div_containts'>
            <div className='contents'>
              <span >CEP:</span>
              <span >{cep.cep}</span>
            </div>
            <div className='contents'>
              <span >Logradouro:</span>
              <span >{cep.logradouro}</span>
            </div>
            <div className='contents'>
              <span >Bairro:</span>
              <span >{cep.bairro}</span>
            </div>
            <div className='contents'>
              <span >Cidade:</span>
              <span >{cep.localidade}</span>
            </div>
            <div className='contents'>
              <span >Estado:</span>
              <span >{cep.estado}</span>
            </div>
        </div>
    )
}
export default Content