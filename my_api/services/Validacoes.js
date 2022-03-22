class Validacoes{
    /**
     * Método que valida se o nome possuí um número mínimo de caracteres.
     * @param {string} nome 
     * @returns boolean;
     */
    static validaNome(nome){
        if(nome.length >= 3){
            return true
        } else {
            console.log({erro: "nome ou sobrenome inválido"})
            return false
        }
    }
    /**
     * 
     * @param {string} sobrenome 
     * @returns {boolean}
     */
    static validaSobrenome(sobrenome){
        return this.validaNome(sobrenome)
    }
    /**
     * 
     * @param {string} email 
     * @returns boolean
     */
    static validaEmail(email){
        const reg = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i
        if(reg.test(email)){
            return true
        } else {
            console.log({erro: "e-mail inválido"})
            return false
        }
    }
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