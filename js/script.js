window.addEventListener("DOMContentLoaded", (event) => {

    let player = [];
    document.getElementById('add').addEventListener('click', event => {
        event.preventDefault();
        var name = document.getElementById('name').value
        player.push(name)

        document.querySelector('.content').innerHTML= player

        var num = player.length;

        var random= Math.round(math.random*num);

        if(num < 3){
            document.querySelector('.winner').innerHTML= 'Vous devez être 3 particpants minimum'
        }else{
            var winner = player[random];
            document.querySelector('.winner').innerHTML=  winner
        }
    })

    
}); 