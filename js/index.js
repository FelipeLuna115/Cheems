const img = document.getElementById('cheems-img'), shopTextS = document.getElementById('shop-text');
const generalCounter = document.getElementById('general-count'), maxCounter = document.getElementById('max-count'), thisCounter = document.getElementById('this-count');
const pointsS = document.getElementById('pts-count'), dogeCoinsS = document.getElementById('dg-count');
const BC1 = document.getElementById('BuyCheems1'), BC2 = document.getElementById('BuyCheems2'), BC3 = document.getElementById('BuyCheems3');
const BC4 = document.getElementById('BuyCheems4'), BC5 = document.getElementById('BuyCheems5'), BC6 = document.getElementById('BuyCheems6');
const BC7 = document.getElementById('BuyCheems7'), BC8 = document.getElementById('BuyCheems8'), BC9 = document.getElementById('BuyCheems9');
const ClickCheemsB = document.getElementById('ClickCheems'), dgc = document.getElementById('dgc');
const BS1 = document.getElementById('BS1'), BS2 = document.getElementById('BS2'), BS3 = document.getElementById('BS3');
const BS4 = document.getElementById('BS4'), BS5 = document.getElementById('BS5'), BS6 = document.getElementById('BS6');
const BS7 = document.getElementById('BS7'), BS8 = document.getElementById('BS8'), BS9 = document.getElementById('BS9');
const BS10 = document.getElementById('BS10'), BS11 = document.getElementById('BS11'), BS12 = document.getElementById('BS12');

var DGC = Math.floor(Math.random()*300) + 51, SelSound = 1;
var Selcheems = "normal", totalCount = 0, maxCount = 0, thisCount = 0, points = 0, dogeCoins = 0, STTimer = 0;
var c1 = 'true', c2 = 'false', c3 = 'false', c5 = 'false', c6 = 'false', c7 = 'false', c8 = 'false', c9 = 'false';
var s1 = 'true', s2 = 'false', s3 = 'false', s4 = 'false', s5 = 'false', s6 = 'false', s7 = 'false', s8 = 'false';
var s9 = 'false', s10 = 'false', s11 = 'false', s12 = 'false';
var clickable = false;

// descomentar al compilar
//document.oncontextmenu = function(){return false}
//document.ondragstart = function(){return false}
//document.onselectstart = function(){return false}
//document.onmousedown = function() {return false}

function RemoveSelectedCheems()
{
    BC1.classList.remove('selected-cheems');
    BC2.classList.remove('selected-cheems');
    BC3.classList.remove('selected-cheems');
    BC4.classList.remove('selected-cheems');
    BC5.classList.remove('selected-cheems');
    BC6.classList.remove('selected-cheems');
    BC7.classList.remove('selected-cheems');
    BC8.classList.remove('selected-cheems');
    BC9.classList.remove('selected-cheems');
}
function RemoveSelectedSound()
{
    BS1.classList.remove('selected-cheems');
    BS2.classList.remove('selected-cheems');
    BS3.classList.remove('selected-cheems');
    BS4.classList.remove('selected-cheems');
    BS5.classList.remove('selected-cheems');
    BS6.classList.remove('selected-cheems');
    BS7.classList.remove('selected-cheems');
    BS8.classList.remove('selected-cheems');
    BS9.classList.remove('selected-cheems');
    BS10.classList.remove('selected-cheems');
    BS11.classList.remove('selected-cheems');
    BS12.classList.remove('selected-cheems');
}

function LoadAll()
{
    Selcheems = localStorage.getItem('SelCheems');
    SelSound = localStorage.getItem('SelSound');
    totalCount = parseInt(localStorage.getItem('TotalCounter')) + 1 - 1;
    maxCount = parseInt(localStorage.getItem('MaxCounter')) + 1 - 1;
    points = parseInt(localStorage.getItem('Points')) + 1 - 1;
    dogeCoins = parseInt(localStorage.getItem('DogeCoins')) + 1 - 1;
    clickable = localStorage.getItem('clickable');
    if (isNaN(totalCount))
    {
        totalCount = 0;
        let totalCountP = JSON.stringify(totalCount);
        localStorage.setItem('TotalCounter', totalCountP);
    }

    if (isNaN(maxCount))
    {
        maxCount = 0;
        let maxCountP = JSON.stringify(maxCount);
        localStorage.setItem('MaxCounter', maxCountP);
    }

    if (isNaN(points))
    {
        points = 0;
        let pointsP = JSON.stringify(points);
        localStorage.setItem('Points', pointsP);
    }

    if (isNaN(dogeCoins))
    {
        dogeCoins = 0;
        let dogeCoinsP = JSON.stringify(dogeCoins);
        localStorage.setItem('DogeCoins', dogeCoinsP);
    }
    if (Selcheems == '[object Undefined]' || Selcheems == null)
    {
        Selcheems = "normal";
        let SelCheemsP = JSON.stringify(Selcheems);
        localStorage.setItem('SelCheems', SelCheemsP);
    } else {
        Selcheems = Selcheems.replace('"','');
        Selcheems = Selcheems.replace('"','');
    }
    if (SelSound == '[object Undefined]' || SelSound == null)
    {
        SelSound = 1;
        let SelSoundP = JSON.stringify(SelSound);
        localStorage.setItem('SelSound', SelSoundP);
    } else {
        SelSound = SelSound.replace('"','');
        SelSound = SelSound.replace('"','');
    }
    if (clickable == '[object Undefined]' || clickable == null)
    {
        clickable = true;
        let clickableP = JSON.stringify(clickable);
        localStorage.setItem('clickable', clickableP);
    } else {
        clickable = clickable.replace('"','');
        clickable = clickable.replace('"','');
    }
    PrintChanges();
}

function LoadShop()
{
    Selcheems = localStorage.getItem('SelCheems');
    Selcheems = Selcheems.replace('"','');
    Selcheems = Selcheems.replace('"','');
    SelSound = localStorage.getItem('SelSound');
    SelSound = SelSound.replace('"','');
    SelSound = SelSound.replace('"','');
    points = parseInt(localStorage.getItem('Points')) + 1 - 1;
    dogeCoins = parseInt(localStorage.getItem('DogeCoins')) + 1 - 1;
    dgc.innerHTML = 'El cambio del DogeCoin está a: ' + String(DGC) + ' pts.'
    CheckPurchases();
    PrintChangesS();
}

function ResetToZero()
{
    maxCount = 0;
    totalCount = 0;
    thisCount = 0;
    points = 0;
    dogeCoins = 0;
    Selcheems = "normal";
    let a = JSON.stringify(false);
    localStorage.setItem('c2', a);
    localStorage.setItem('c3', a);
    localStorage.setItem('c4', a);
    localStorage.setItem('c5', a);
    localStorage.setItem('c6', a);
    localStorage.setItem('c7', a);
    localStorage.setItem('c8', a);
    localStorage.setItem('c9', a);
    localStorage.setItem('SelCheems', 'normal');
    let maxCountP = JSON.stringify(maxCount);
    localStorage.setItem('MaxCounter', maxCountP);
    let pointsP = JSON.stringify(points);
    localStorage.setItem('Points', pointsP);
    let totalCountP = JSON.stringify(totalCount);
    localStorage.setItem('TotalCounter', totalCountP);
    let dogeCoinsP = JSON.stringify(dogeCoins);
    localStorage.setItem('DogeCoins', dogeCoinsP);
    let SelCheemsP = JSON.stringify(Selcheems);
    localStorage.setItem('SelCheems', SelCheemsP);
    let clickableP = JSON.stringify("true");
    localStorage.setItem('SelCheems', clickableP);
    LoadShop();
    LoadAll();
}


function SaveCountChanges()
{
    let sum = 1;
    thisCount += sum;
    if (maxCount < thisCount)
    {
        maxCount = thisCount;
        let maxCountP = JSON.stringify(maxCount);
        localStorage.setItem('MaxCounter', maxCountP);
    }
    totalCount += sum;
    let totalCountP = JSON.stringify(totalCount);
    localStorage.setItem('TotalCounter', totalCountP);
    points += sum;
    let pointsP = JSON.stringify(points);
    localStorage.setItem('Points', pointsP);
}

function PrintChanges()
{
    pointsS.innerHTML = points + ' pts.';
    dogeCoinsS.innerHTML = '<img src="img/dogecoin-min.png">' + dogeCoins;
    generalCounter.innerHTML = 'Toques totales: ' + totalCount;
    maxCounter.innerHTML = 'HighScore de toques: ' + maxCount;
    thisCounter.innerHTML = 'Toques de esta sesión: ' + thisCount;
}

function PrintChangesS()
{
    pointsS.innerHTML = points + ' pts.';
    dogeCoinsS.innerHTML = '<img src="img/dogecoin-min.png">' + dogeCoins;
}

function ClickCheems()
{
    if (clickable == "true") {
        PlaySound(SelSound);
        img.classList.add('full-size');
        img.setAttribute('src', 'img/hit/'+Selcheems+'.png');
        SaveCountChanges();
        PrintChanges();
    }
}

function BuyDogeCoins()
{
    PlaySound(SelSound);
    if (points >= DGC)
    {
        points -= DGC;
        dogeCoins += 1;
        let pointsP = JSON.stringify(points);
        let dogeCoinsP = JSON.stringify(dogeCoins);
        localStorage.setItem('Points', pointsP);
        localStorage.setItem('DogeCoins', dogeCoinsP);
        shopTextS.innerHTML = 'Compraste 1 DogeCoin';
        setTimeout(() => {
            shopTextS.innerHTML = 'Tienda';
        }, (STTimer+=3000));
        LoadShop();
    } else {
        shopTextS.innerHTML = '¡NECESITAS ' + String(DGC - points) + ' pts. MÁS!';
        setTimeout(() => {
            shopTextS.innerHTML = 'Tienda';
        }, (STTimer+=3000));
    }
}

function BuyCheems(a)
{
    
    PlaySound(SelSound);
    switch (a)
    {
        case "normal":
            BuyAnyCheems(0, a, c1, 1);
        break;
        case "little":
            BuyAnyCheems(1, a, c2, 2);
        break;
        case "adult":
            BuyAnyCheems(2, a, c3, 3);
        break;
        case "kid":
            BuyAnyCheems(3, a, c4, 4);
        break;
        case "mamado":
            BuyAnyCheems(5, a, c5, 5);
        break;
        case "pixelart":
            BuyAnyCheems(12, a, c6, 6);
        break;
        case "elegant":
            BuyAnyCheems(13, a, c7, 7);
        break;
        case "3d":
            BuyAnyCheems(7, a, c8, 8);
        break;
        case "black":
            BuyAnyCheems(10, a, c9, 9);
        break;
    }
    LoadShop();
}

function BuySound(a)
{
    switch (a)
    {
        case 1:
            BuyAnySound(s1, 1, '"Hit"', 0);
        break;
        case 2:
            BuyAnySound(s2, 2, '"Hurt Minecraft"', 7);
        break;
        case 3:
            BuyAnySound(s3, 3, '"Hurt Roblox"', 6);
        break;
        case 4:
            BuyAnySound(s4, 4, '"Level Up Minecraft"', 8);
        break;
        case 5:
            BuyAnySound(s5, 5, '"Discord"', 8);
        break;
        case 6:
            BuyAnySound(s6, 6, '"Hello FNAF"', 6);
        break;
        case 7:
            BuyAnySound(s7, 7, '"Hit Minecraft"', 4);
        break;
        case 8:
            BuyAnySound(s8, 8, '"NO"', 11);
        break;
        case 9:
            BuyAnySound(s9, 9, '"Duck"', 3);
        break;
        case 10:
            BuyAnySound(s10, 10, '"Toy"', 3);
        break;
        case 11:
            BuyAnySound(s11, 11, '"Splat"', 3);
        break;
        case 12:
            BuyAnySound(s12, 12, '"Error Windows"', 5);
        break;
    }
    setTimeout(() => {
        PlaySound(SelSound);
    }, 50);
    LoadShop();
}

function CheckPurchases()
{
    c2 = localStorage.getItem('c2');
    c3 = localStorage.getItem('c3');
    c4 = localStorage.getItem('c4');
    c5 = localStorage.getItem('c5');
    c6 = localStorage.getItem('c6');
    c7 = localStorage.getItem('c7');
    c8 = localStorage.getItem('c8');
    c9 = localStorage.getItem('c9');
    s1 = localStorage.getItem('s1');
    s2 = localStorage.getItem('s2');
    s3 = localStorage.getItem('s3');
    s4 = localStorage.getItem('s4');
    s5 = localStorage.getItem('s5');
    s6 = localStorage.getItem('s6');
    s7 = localStorage.getItem('s7');
    s8 = localStorage.getItem('s8');
    s9 = localStorage.getItem('s9');
    s10 = localStorage.getItem('s10');
    s11 = localStorage.getItem('s11');
    s12 = localStorage.getItem('s12');
    let a = JSON.stringify(false);
    let b = JSON.stringify(true);

    if (c1 == '[object Undefined]' || c1 == null)
    {
        localStorage.setItem('c1', b);
        c1 = localStorage.getItem('c1');
    }
    if (c2 == '[object Undefined]' || c2 == null)
    {
        localStorage.setItem('c2', a);
        c2 = localStorage.getItem('c2');
    }
    if (c3 == '[object Undefined]' || c3 == null)
    {
        localStorage.setItem('c3', a);
        c3 = localStorage.getItem('c3');
    }
    if (c4 == '[object Undefined]' || c4 == null)
    {
        localStorage.setItem('c4', a);
        c4 = localStorage.getItem('c4');
    }
    if (c5 == '[object Undefined]' || c5 == null)
    {
        localStorage.setItem('c5', a);
        c5 = localStorage.getItem('c5');
    }
    if (c6 == '[object Undefined]' || c6 == null)
    {
        localStorage.setItem('c6', a);
        c6 = localStorage.getItem('c6');
    }
    if (c7 == '[object Undefined]' || c7 == null)
    {
        localStorage.setItem('c7', a);
        c7 = localStorage.getItem('c7');
    }
    if (c8 == '[object Undefined]' || c8 == null)
    {
        localStorage.setItem('c8', a);
        c8 = localStorage.getItem('c8');
    }
    if (c9 == '[object Undefined]' || c9 == null)
    {
        localStorage.setItem('c9', a);
        c9 = localStorage.getItem('c9');
    }
    if (s1 == '[object Undefined]' || s1 == null)
    {
        localStorage.setItem('s1', b);
        s1 = localStorage.getItem('s1');
    }
    if (s2 == '[object Undefined]' || s2 == null)
    {
        localStorage.setItem('s2', a);
        s2 = localStorage.getItem('s2');
    }
    if (s3 == '[object Undefined]' || s3 == null)
    {
        localStorage.setItem('s3', a);
        s3 = localStorage.getItem('s3');
    }
    if (s4 == '[object Undefined]' || s4 == null)
    {
        localStorage.setItem('s4', a);
        s4 = localStorage.getItem('s4');
    }
    if (s5 == '[object Undefined]' || s5 == null)
    {
        localStorage.setItem('s5', a);
        s5 = localStorage.getItem('s5');
    }
    if (s6 == '[object Undefined]' || s6 == null)
    {
        localStorage.setItem('s6', a);
        s6 = localStorage.getItem('s6');
    }
    if (s7 == '[object Undefined]' || s7 == null)
    {
        localStorage.setItem('s7', a);
        s7 = localStorage.getItem('s7');
    }
    if (s8 == '[object Undefined]' || s8 == null)
    {
        localStorage.setItem('s8', a);
        s8 = localStorage.getItem('s8');
    }
    if (s9 == '[object Undefined]' || s9 == null)
    {
        localStorage.setItem('s9', a);
        s9 = localStorage.getItem('s9');
    }
    if (s10 == '[object Undefined]' || s10 == null)
    {
        localStorage.setItem('s10', a);
        s10 = localStorage.getItem('s10');
    }
    if (s11 == '[object Undefined]' || s11 == null)
    {
        localStorage.setItem('s11', a);
        s11 = localStorage.getItem('s11');
    }
    if (s12 == '[object Undefined]' || s12 == null)
    {
        localStorage.setItem('s12', a);
        s12 = localStorage.getItem('s12');
    }
    CheckSound();
    CheckSelected();
}

function CheckSelected()
{
    if (c1 == 'false')
    {
        BC1.setAttribute('src', 'img/unlocked-cheems.png');
    } else {
        BC1.setAttribute('src', 'img/cheems/normal.png');
    }
    if (c2 == 'false')
    {
        BC2.setAttribute('src', 'img/unlocked-cheems.png');
    } else {
        BC2.setAttribute('src', 'img/cheems/little.png');
    }
    if (c3 == 'false')
    {
        BC3.setAttribute('src', 'img/unlocked-cheems.png');
    } else {
        BC3.setAttribute('src', 'img/cheems/adult.png');
    }
    if (c4 == 'false')
    {
        BC4.setAttribute('src', 'img/unlocked-cheems.png');
    } else {
        BC4.setAttribute('src', 'img/cheems/kid.png');
    }
    if (c5 == 'false')
    {
        BC5.setAttribute('src', 'img/unlocked-cheems.png');
    } else {
        BC5.setAttribute('src', 'img/cheems/mamado.png');
    }
    if (c6 == 'false')
    {
        BC6.setAttribute('src', 'img/unlocked-cheems.png');
    } else {
        BC6.setAttribute('src', 'img/cheems/pixelart.png');
    }
    if (c7 == 'false')
    {
        BC7.setAttribute('src', 'img/unlocked-cheems.png');
    } else {
        BC7.setAttribute('src', 'img/cheems/elegant.png');
    }
    if (c8 == 'false')
    {
        BC8.setAttribute('src', 'img/unlocked-cheems.png');
    } else {
        BC8.setAttribute('src', 'img/cheems/3d.png');
    }
    if (c9 == 'false')
    {
        BC9.setAttribute('src', 'img/unlocked-cheems.png');
    } else {
        BC9.setAttribute('src', 'img/cheems/black.png');
    }

    RemoveSelectedCheems();
    switch (Selcheems)
    {
        case 'normal':
            BC1.classList.add('selected-cheems');
        break;
        case 'little':
            BC2.classList.add('selected-cheems');
        break;
        case 'adult':
            BC3.classList.add('selected-cheems');
        break;
        case 'kid':
            BC4.classList.add('selected-cheems');
        break;
        case 'mamado':
            BC5.classList.add('selected-cheems');
        break;
        case 'pixelart':
            BC6.classList.add('selected-cheems');
        break;
        case 'elegant':
            BC7.classList.add('selected-cheems');
        break;
        case '3d':
            BC8.classList.add('selected-cheems');
        break;
        case 'black':
            BC9.classList.add('selected-cheems');
        break;
    }
}

function CheckSound()
{
    if (s1 == 'false')
    {
        BS1.setAttribute('src', 'img/volumen-silenciado.svg');
    } else {
        BS1.setAttribute('src', 'img/volumen.svg');
    }
    if (s2 == 'false')
    {
        BS2.setAttribute('src', 'img/volumen-silenciado.svg');
    } else {
        BS2.setAttribute('src', 'img/volumen.svg');
    }
    if (s3 == 'false')
    {
        BS3.setAttribute('src', 'img/volumen-silenciado.svg');
    } else {
        BS3.setAttribute('src', 'img/volumen.svg');
    }
    if (s4 == 'false')
    {
        BS4.setAttribute('src', 'img/volumen-silenciado.svg');
    } else {
        BS4.setAttribute('src', 'img/volumen.svg');
    }
    if (s5 == 'false')
    {
        BS5.setAttribute('src', 'img/volumen-silenciado.svg');
    } else {
        BS5.setAttribute('src', 'img/volumen.svg');
    }
    if (s6 == 'false')
    {
        BS6.setAttribute('src', 'img/volumen-silenciado.svg');
    } else {
        BS6.setAttribute('src', 'img/volumen.svg');
    }
    if (s7 == 'false')
    {
        BS7.setAttribute('src', 'img/volumen-silenciado.svg');
    } else {
        BS7.setAttribute('src', 'img/volumen.svg');
    }
    if (s8 == 'false')
    {
        BS8.setAttribute('src', 'img/volumen-silenciado.svg');
    } else {
        BS8.setAttribute('src', 'img/volumen.svg');
    }
    if (s9 == 'false')
    {
        BS9.setAttribute('src', 'img/volumen-silenciado.svg');
    } else {
        BS9.setAttribute('src', 'img/volumen.svg');
    }
    if (s10 == 'false')
    {
        BS10.setAttribute('src', 'img/volumen-silenciado.svg');
    } else {
        BS10.setAttribute('src', 'img/volumen.svg');
    }
    if (s11 == 'false')
    {
        BS11.setAttribute('src', 'img/volumen-silenciado.svg');
    } else {
        BS11.setAttribute('src', 'img/volumen.svg');
    }
    if (s12 == 'false')
    {
        BS12.setAttribute('src', 'img/volumen-silenciado.svg');
    } else {
        BS12.setAttribute('src', 'img/volumen.svg');
    }
    
    RemoveSelectedSound();
    switch (SelSound)
    {
        case '1':
            BS1.classList.add('selected-cheems');
        break;
        case '2':
            BS2.classList.add('selected-cheems');
        break;
        case '3':
            BS3.classList.add('selected-cheems');
        break;
        case '4':
            BS4.classList.add('selected-cheems');
        break;
        case '5':
            BS5.classList.add('selected-cheems');
        break;
        case '6':
            BS6.classList.add('selected-cheems');
        break;
        case '7':
            BS7.classList.add('selected-cheems');
        break;
        case '8':
            BS8.classList.add('selected-cheems');
        break;
        case '9':
            BS9.classList.add('selected-cheems');
        break;
        case '10':
            BS10.classList.add('selected-cheems');
        break;
        case '11':
            BS11.classList.add('selected-cheems');
        break;
        case '12':
            BS12.classList.add('selected-cheems');
        break;
    }
}

function BuyAnySound(sound, nSound, string, cost)
{
    let fv = JSON.stringify(true);
    if (sound == 'true')
            {
                SelSound = nSound;
                SSP = JSON.stringify(SelSound);
                localStorage.setItem('SelSound', SSP);
                shopTextS.innerHTML = 'Sonido ' + string + ' Seleccionado';
                setTimeout(() => {
                    shopTextS.innerHTML = 'Tienda';
                }, (STTimer+=3000));
            } else {
                if (dogeCoins >= cost)
                {
                    dogeCoins -= cost;
                    let dogeCoinsP = JSON.stringify(dogeCoins);
                    localStorage.setItem('DogeCoins', dogeCoinsP);
                    localStorage.setItem('s'+String(nSound), fv);
                    sound = localStorage.getItem('s'+String(nSound));
                    SelSound = nSound;
                    let SSP = JSON.stringify(SelSound);
                    localStorage.setItem('SelSound', SSP);
                    shopTextS.innerHTML = 'Sonido ' + string + ' Comprado';
                    setTimeout(() => {
                        shopTextS.innerHTML = 'Tienda';
                    }, (STTimer+=3000));
                } else {
                    shopTextS.innerHTML = '¡Necesitas ' + String(cost - dogeCoins) + ' DogeCoins Más!';
                    setTimeout(() => {
                        shopTextS.innerHTML = 'Tienda';
                    }, (STTimer+=3000));
                }
            }
}

function BuyAnyCheems(cost, nCheems, cheems, num)
{
    let b = JSON.stringify(true);
    if (cheems == 'true')
            {
                Selcheems = nCheems;
                let SelCheemsP = JSON.stringify(Selcheems);
                localStorage.setItem('SelCheems', SelCheemsP);
                shopTextS.innerHTML = 'Cheems ' + nCheems + ' Seleccionado';
                setTimeout(() => {
                    shopTextS.innerHTML = 'Tienda';
                }, (STTimer+=3000));
            } else {
                if (dogeCoins >= cost)
                {
                    dogeCoins -= cost;
                    let dogeCoinsP = JSON.stringify(dogeCoins);
                    localStorage.setItem('DogeCoins', dogeCoinsP);
                    localStorage.setItem('c'+String(num), b);
                    cheems = localStorage.getItem('c'+String(num));
                    Selcheems = nCheems;
                    let SelCheemsP = JSON.stringify(Selcheems);
                    localStorage.setItem('SelCheems', SelCheemsP);
                    shopTextS.innerHTML = 'Cheems ' + nCheems + ' Comprado';
                    setTimeout(() => {
                        shopTextS.innerHTML = 'Tienda';
                    }, (STTimer+=3000));
                } else {
                    shopTextS.innerHTML = '¡Necesitas ' + String(cost - dogeCoins) + ' DogeCoins Más!';
                    setTimeout(() => {
                        shopTextS.innerHTML = 'Tienda';
                    }, (STTimer+=3000));
                }
            }
}

function NoClick() {
    return
}