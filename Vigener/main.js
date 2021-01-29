document.querySelector('#szyfruj').addEventListener('click',szyfruj);
const pokazTekst = document.querySelector('#szyfr');
const alfabet = ['A','Ą','B','C','Ć','D','E','Ę','F','G','H','I','J','K','L','Ł','M','N','Ń','O','Ó','P','Q','R','S','Ś','T','U','V','W','X','Y','Z','Ź','Ż'];
document.querySelector('#odszyfruj').addEventListener('click',odszyfruj);
const HTMLNode = document.createElement('section');
const HTMLTekst = document.createElement('h1');

function szyfruj(kluczZnaki) {
    if(typeof(kluczZnaki)!=='string')
        kluczZnaki = odczytajKlucz();
    else
        kluczZnaki=odczytajKlucz(kluczZnaki);

    let znaki = odczytajTekst();
    let zaszyfrowany = [];
    let a=0;
    let b=0;
    for(let i=0; i<znaki.length; i++) {
        for(let j=0; j<alfabet.length; j++) {
            if(zaszyfrowany[i]==undefined) {
                if(kluczZnaki[a]==alfabet[j]) {
                    for(let k=0; k<znaki.length; k++) {
                        if(zaszyfrowany[i]==undefined) {
                            for(let m=0; m<alfabet.length; m++) {
                                if(znaki[b]==alfabet[m]) {
                                if(j+m>=alfabet.length)
                                    zaszyfrowany[i] = alfabet[(j+m)-alfabet.length];
                                else if(j+m<0)
                                    zaszyfrowany[i] = alfabet[(j+m)+alfabet.length];
                                else
                                    zaszyfrowany[i] = alfabet[j+m];
                                break;
                                }
                            }
                        }
                    }
                }
            }
        }
        a++;
        b++;
        if(a>=kluczZnaki.length)
            a=0; 
    }

    let xx = zaszyfrowany.join("");
    HTMLTekst.innerHTML = xx;
    HTMLNode.appendChild(HTMLTekst);
    pokazTekst.appendChild(HTMLNode); 
}

function odszyfruj() {
    let kluczZnaki = odczytajKlucz();
    let znaki = odczytajTekst();
    let zaszyfrowany = [];
    let a=0;
    let b=0;
    for(let i=0; i<kluczZnaki.length; i++) {
        for(let j=0; j<alfabet.length; j++) {
            if(zaszyfrowany[i]==undefined) {
                if(kluczZnaki[a]==alfabet[j]) {
                    for(let k=0; k<znaki.length; k++) {
                        if(zaszyfrowany[i]==undefined) {
                            for(let m=0; m<alfabet.length; m++) {
                                if(znaki[b]==alfabet[m]) {
                                if(j+m>=alfabet.length)
                                    zaszyfrowany[i] = alfabet[(alfabet.length-j)%alfabet.length];
                                else if(j+m<0)
                                    zaszyfrowany[i] = alfabet[(alfabet.length-j)%alfabet.length];
                                else
                                    zaszyfrowany[i] = alfabet[(alfabet.length-j)%alfabet.length];
                                break;
                                }
                            }
                        }
                    }
                }
            }
        }
        a++;
        b++;
        if(a>=kluczZnaki.length)
            a=0; 
            
    let odwroconyKlucz = zaszyfrowany.join("");
    HTMLTekst.innerHTML = odwroconyKlucz;
    szyfruj(odwroconyKlucz);
    }
    
}

function odczytajKlucz(klucz = (document.getElementById('klucz').value).toUpperCase()) {
    let kluczZnaki = [];
    let i=0;
    klucz.split('')
        .forEach(element => { 
            for(let j=0; j<alfabet.length;j++) {
                if(element==alfabet[j]) {
                    kluczZnaki[i] = element;
                    i++;
                }
            }
        });

    return kluczZnaki;
}
function odczytajTekst() {
    const tekst = (document.getElementById('tekst').value).toUpperCase();
    let znaki = [];

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
    return znaki;
}

