
const display = document.querySelector("#display"); // ) querySelector retorna o primeiro elemento dentro do documento.

const buttons = document.querySelectorAll ("button"); // Retorna uma lista de elementos dentro do documento.


buttons.forEach((btn) => {
    btn.addEventListener ("click", () => {
        if (btn.id === "=") {
            display.value = eval(display.value);
        } else if (btn.id === "ac") {
            display.value = ""
        } else if (btn.id === "de") {
            display.value = display.value.slice (0, -1);
        }else {
            display.value += btn.id 

        }
    } )
})

//=== (Valor e Tipo igual) - é usado para a comparação entre duas variáveis, mas isso irá verificar o tipo estrito, o que significa que ele irá verificar o tipo de dados e comparar dois valores.

//O método slice() percorre a string ou o array para selecionar a faixa de valores determinada por parâmetro. A primeira posição de uma string ou array é a posição de número 0.

//O operador de atribuição encurtado += pode ser utilizado para concatenar strings.

