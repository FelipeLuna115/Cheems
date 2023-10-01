var sound = new Audio();

function PlaySound(a)
{
    let Random;
    switch (a)
    {
        case '1':
            sound = new Audio('sound/hit.ogg');
        break;
        case '2':
            sound = new Audio('sound/hurt-minecraft.ogg');
        break;
        case '3':
            sound = new Audio('sound/hurt-roblox.ogg');
        break;
        case '4':
            Random = Math.floor(Math.random()*5)+1;
            if (Random == 4)
            {
                sound = new Audio('sound/levelup2.ogg');
            } else {
                sound = new Audio('sound/levelup1.ogg');
            }
        break;
        case '5':
            Random = Math.floor(Math.random()*3)+1;
            if (Random == 1)
            {
                sound = new Audio('sound/discord-connect.ogg');
            } else if (Random == 2) {
                sound = new Audio('sound/discord-disconnect.ogg');
            } else if (Random == 3) {
                sound = new Audio('sound/discord-msg.ogg');
            }
        break;
        case '6':
            sound = new Audio('sound/hello.ogg')
        break;
        case '7':
            sound = new Audio('sound/hit-minecraft.ogg')
        break;
        case '8':
            sound = new Audio('sound/no.ogg')
        break;
        case '9':
            sound = new Audio('sound/pato.ogg')
        break;
        case '10':
            sound = new Audio('sound/peluche.ogg')
        break;
        case '11':
            sound = new Audio('sound/splat.ogg')
        break;
        case '12':
            sound = new Audio('sound/windows-error.ogg')
        break;
    }
    sound.play();
}