document.querySelector('#szyfruj').addEventListener('click',szyfruj);
const pokazTekst = document.querySelector('#szyfr');
const alfabet = ['A','Ą','B','C','Ć','D','E','Ę','F','G','H','I','J','K','L','Ł','M','N','Ń','O','Ó','P','Q','R','S','Ś','T','U','V','W','X','Y','Z','Ź','Ż'];


function szyfruj() {
    let znaki = [];
    const tekst = (document.getElementById('tekst').value).toUpperCase();
    const klucz = parseInt(document.querySelector('#klucz').value);
    const HTMLNode = document.createElement('section');
    const HTMLTekst = document.createElement('h1');
    let i=0;
    
    tekst.split('')
        .forEach(element => { 
            for(let j=0; j<alfabet.length;j++) {
                if(element==alfabet[j]) {
                    znaki[i] = element;
                    i++;
                }
            }
    });
    for(let i=0; i<znaki.length; i++)
    {
        for(let j=0; j<alfabet.length; j++) {
            if(znaki[i]==alfabet[j]) {
                if(j+klucz>=alfabet.length)
                    znaki[i] = alfabet[(j+klucz)-alfabet.length];
                else if(j+klucz<0)
                    znaki[i] = alfabet[(j+klucz)+alfabet.length];
                else
                    znaki[i] = alfabet[j+klucz];
            break;
            }
        }
    }

    let xx = znaki.join("");
    HTMLTekst.innerHTML = xx;
    HTMLNode.appendChild(HTMLTekst);
    pokazTekst.appendChild(HTMLNode);

}