document.querySelector('#szyfruj').addEventListener('click',szyfruj);
const pokazTekst = document.querySelector('#szyfr');
const alfabet = ['A','Ą','B','C','Ć','D','E','Ę','F','G','H','I','J','K','L','Ł','M','N','Ń','O','Ó','P','Q','R','S','Ś','T','U','V','W','X','Y','Z','Ź','Ż'];
//const alfabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
const HTMLNode = document.createElement('section');
const HTMLTekst = document.createElement('h1');
const tablica = [
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', ''],
    ['', '', '', '', '']
];
console.log(tablica);

function szyfruj() {
    let kluczZnaki = odczytajKlucz();
    let check = 0;
    for(let i=0; i<kluczZnaki.length;i++) {
        for(let j=0; j<7; j++) {
            for(let k=0; k<5; k++) {
                if(kluczZnaki[i]!=tablica[j][k])
                    check++;
            }
        }
        if(check==35) {
            zamien(i);
            check=0;
        }
        else
            check=0;
    }

    for(let i=0; i<alfabet.length;i++) {
        for(let j=0; j<7; j++) {
            for(let k=0; k<5; k++) {
                if(alfabet[i]!=tablica[j][k])
                    check++;
            }
        }
        if(check==35) {
            zamienAlfabet(i);
            check=0;
        }
        else
            check=0;
    }


}
function zamien(i) {
    let kluczZnaki = odczytajKlucz();
    for(let j=0; j<7; j++) {
        for(let k=0; k<5; k++) {
            if(tablica[j][k]=='') {
                tablica[j][k] = kluczZnaki[i];
                return;
            }
            if(tablica[j][k]==kluczZnaki[i])
                break;
    }
    }
    console.log(tablica);
}
function zamienAlfabet(i) {
    for(let j=0; j<7; j++) {
        for(let k=0; k<5; k++) {
            if(tablica[j][k]=='') {
                tablica[j][k] = alfabet[i];
                return;
            }
            if(tablica[j][k]==alfabet[i])
                break;
    }
    }
    console.log(tablica);
}

function odczytajKlucz() {
    let klucz = document.getElementById('klucz').value.toUpperCase()
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