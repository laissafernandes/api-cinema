class Validacoes{
    
    
    static validaBody(body, length){
        if(
            Object.values(body).length == length &&
            this.validaEmail(body.email) &&
            this.validaNome(body.nome) &&
            this.validaSobrenome(body.sobrenome)
            ){
            return true
        } else {
            return false
        }
    }
}


export default Validacoes