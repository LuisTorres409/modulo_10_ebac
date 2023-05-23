$(document).ready(function (){
    
    $('#cpf').mask('000.000.000-00')
    $('#telefone').mask('(00) 00000-0000')
    $('#cep').mask('00000-000')

    function limparCampos() {
        var inputs = $(':input');
        inputs.val(''); // Define o valor dos campos de input como vazio
    }

    $('form').validate({
        rules:{
            nome:{
                required: true
            }, 
            email:{
                required: true,
                email: true
            },
            cpf:{
                required:true
            },
            telefone:{
                required: true
            },
            endereco: {
                required: true
            },
            cep: {
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira seu nome',
            email: 'Por favor, insira seu e-mail',
            cpf: 'Por favor, insira seu CPF',
            telefone: 'Por favor, insira seu telefone',
            endereco: 'Por favor, insira seu endereço',
            cep: 'Por favor, insira seu CEP'
        },
        submitHandler: function(form){
            console.log(form)
            limparCampos()
            alert('Cadastro realizado com sucesso')

        },
        invalidHandler: function(evento,validador) {
            let camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos){
            alert(`Existem ${camposIncorretos} campos incorretos`)
            }
        }
    })
    })