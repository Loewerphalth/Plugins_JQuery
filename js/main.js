<<<<<<< HEAD
// Corrigir as máscaras
$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
});

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
});

$('#cep').mask('00000-000', {
    placeholder: '01234-567'
});

// Corrigir a validação
=======
$('#telefone').mask('(00) 00000-0000', {
    placeholder: '(DDD) 12345-6789'
})

$('#cpf').mask('000.000.000-00', {
    placeholder: '123.456.789-00'
})

$('#cep').mask('00000-000', {
    placeholder: '012345-678'
})

>>>>>>> 59cad0c0857126c0b6cee3a78e42dc2fd2a69e84
$('form').validate({
    rules: {
        nome: {
            required: true
        },
        email: {
            required: true,
            email: true
        },
        telefone: {
            required: true
        },
        endereco: {
            required: true
        },
        cep: {
            required: true
        },
        cpf: {
            required: true
<<<<<<< HEAD
        }
=======
        },
>>>>>>> 59cad0c0857126c0b6cee3a78e42dc2fd2a69e84
    },
    submitHandler: function (form) {
        alert("Sua requisição foi enviada para análise, parabéns pela aquisição!");
        form.reset();
    },
    invalidHandler: function (form, validator) {
        alert("Por favor, preencha os campos para prosseguir com a compra!");
    }
<<<<<<< HEAD
});
=======
})
>>>>>>> 59cad0c0857126c0b6cee3a78e42dc2fd2a69e84
