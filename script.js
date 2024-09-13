const avanca=document.querySelectorAll('.btn-proximo');
avanca.forEach(button=>{
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso='passo-'+this.getAttribute('data-proximo');
        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');
    })
})

document.querySelectorAll('.btn-proximo').forEach(button => {
    button.addEventListener('click', () => {
        const nextId = button.getAttribute('data-proximo');
        document.querySelectorAll('.passo').forEach(passo => passo.classList.remove('ativo'));
        document.getElementById(`passo-${nextId}`).classList.add('ativo');

        // Alterar o fundo para medieval se o próximo passo for 4 ou posterior
        if (nextId >= '4') {
            document.body.classList.add('medieval-background');
        } else {
            document.body.classList.remove('medieval-background');
        }
    });
});
