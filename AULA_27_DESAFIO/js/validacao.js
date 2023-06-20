function validacao(){

    let nome = document.getElementById("i_nome");
    let sobrenome = document.getElementById("i_sobrenome");
    let email = document.getElementById("i_email");
    let cep = document.getElementById("i_cep");
    let rua = document.getElementById("i_rua");
    let bairro = document.getElementById("i_bairro");
    let cidade = document.getElementById("i_cidade");
    let estado = document.getElementById("i_estado");
    

    input_style(nome, "#f45656", "#008000");
    input_style(sobrenome, "#f45656", "#008000");
    input_style(email, "#f45656", "#008000");
    input_style(cep, "#f45656", "#008000");
    input_style(rua, "#f45656", "#008000");
    input_style(bairro, "#f45656", "#008000");
    input_style(cidade, "#f45656", "#008000");
    input_style(estado, "#f45656", "#008000");
    
}

function input_style(input, cor_1, cor_2){


    if(!input.checkValidity()){
       return input.style.border = `3px solid ${cor_1}`
    }else{
       return input.style.border = `2px solid ${cor_2}`
    }

    
}