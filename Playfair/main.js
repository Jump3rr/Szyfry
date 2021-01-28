document.querySelector('#szyfruj').addEventListener('click',szyfruj);
document.querySelector('#odszyfruj').addEventListener('click',odszyfruj);
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

function szyfruj() {
    let kluczZnaki = odczytajKlucz();
    let check = 0;
    let znaki = odczytajTekst();

    if((znaki.length%2)==1) {
        if(znaki[znaki.length-1]!='X')
            znaki[znaki.length] = 'X';
        else
            znaki[znaki.length] = 'Z';
    }
    let wynik = [];

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


    let wierszP = [];
    let kolumnaP = [];
    for(let a=0; a<=znaki.length;a++) {
        for(let i=0; i<7; i++) {
            for(let j=0; j<5; j++) {
                if(znaki[a]==tablica[i][j]) {
                    wierszP[a] = i;
                    kolumnaP[a] = j; 
                }
            }
        }
    }

    for(let pierwszy = 0; pierwszy<znaki.length;pierwszy=pierwszy+2) {
        if(wierszP[pierwszy] == wierszP[pierwszy+1] && kolumnaP[pierwszy] == kolumnaP[pierwszy+1]) {
            wierszP[pierwszy+1] = 6;
            kolumnaP[pierwszy+1] = 1;
        }

        if(wierszP[pierwszy] == wierszP[pierwszy+1]) {
            if(kolumnaP[pierwszy] < 4)
                wynik[pierwszy] = tablica[wierszP[pierwszy]][kolumnaP[pierwszy]+1];
            else
                wynik[pierwszy] = tablica[wierszP[pierwszy]][kolumnaP[pierwszy]-4];

            if(kolumnaP[pierwszy+1] < 4)
                wynik[pierwszy+1] = tablica[wierszP[pierwszy+1]][kolumnaP[pierwszy+1]+1];
            else
                wynik[pierwszy+1] = tablica[wierszP[pierwszy+1]][kolumnaP[pierwszy+1]-4];
            
        }
        else if(kolumnaP[pierwszy] == kolumnaP[pierwszy+1]) {
            if(wierszP[pierwszy] < 6)
                wynik[pierwszy] = tablica[wierszP[pierwszy]+1][kolumnaP[pierwszy]];
            else
                wynik[pierwszy] = tablica[wierszP[pierwszy]-6][kolumnaP[pierwszy]];

            if(wierszP[pierwszy+1] < 6)
                wynik[pierwszy+1] = tablica[wierszP[pierwszy+1]+1][kolumnaP[pierwszy+1]];
            else
                wynik[pierwszy+1] = tablica[wierszP[pierwszy+1]-6][kolumnaP[pierwszy+1]];

        }
        else {
            wynik[pierwszy] = tablica[wierszP[pierwszy]][kolumnaP[pierwszy+1]];
            wynik[pierwszy+1] = tablica[wierszP[pierwszy+1]][kolumnaP[pierwszy]];

        }
    }
    console.log(tablica);
    let xx = wynik.join("");
    HTMLTekst.innerHTML = xx;
    HTMLNode.appendChild(HTMLTekst);
    pokazTekst.appendChild(HTMLNode); 

}

function odszyfruj() {
    let kluczZnaki = odczytajKlucz();
    let check = 0;
    let znaki = odczytajTekst();

    if((znaki.length%2)==1) {
        if(znaki[znaki.length-1]!='X')
            znaki[znaki.length] = 'X';
        else
            znaki[znaki.length] = 'Z';
    }
    let wynik = [];

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


    let wierszP = [];
    let kolumnaP = [];
    for(let a=0; a<=znaki.length;a++) {
        for(let i=0; i<7; i++) {
            for(let j=0; j<5; j++) {
                if(znaki[a]==tablica[i][j]) {
                    wierszP[a] = i;
                    kolumnaP[a] = j; 
                }
            }
        }
    }

    for(let pierwszy = 0; pierwszy<znaki.length;pierwszy=pierwszy+2) {

        if(wierszP[pierwszy] == wierszP[pierwszy+1]) {
            if(kolumnaP[pierwszy] > 0)
                wynik[pierwszy] = tablica[wierszP[pierwszy]][kolumnaP[pierwszy]-1];
            else
                wynik[pierwszy] = tablica[wierszP[pierwszy]][kolumnaP[pierwszy]+4];

            if(kolumnaP[pierwszy+1] > 0)
                wynik[pierwszy+1] = tablica[wierszP[pierwszy+1]][kolumnaP[pierwszy+1]-1];
            else
                wynik[pierwszy+1] = tablica[wierszP[pierwszy+1]][kolumnaP[pierwszy+1]+4];
            
        }
        else if(kolumnaP[pierwszy] == kolumnaP[pierwszy+1]) {
            if(wierszP[pierwszy] > 0)
                wynik[pierwszy] = tablica[wierszP[pierwszy]-1][kolumnaP[pierwszy]];
            else
                wynik[pierwszy] = tablica[wierszP[pierwszy]+6][kolumnaP[pierwszy]];

            if(wierszP[pierwszy+1] > 0)
                wynik[pierwszy+1] = tablica[wierszP[pierwszy+1]-1][kolumnaP[pierwszy+1]];
            else
                wynik[pierwszy+1] = tablica[wierszP[pierwszy+1]+6][kolumnaP[pierwszy+1]];

        }
        else {
            wynik[pierwszy] = tablica[wierszP[pierwszy]][kolumnaP[pierwszy+1]];
            wynik[pierwszy+1] = tablica[wierszP[pierwszy+1]][kolumnaP[pierwszy]];

        }
        if(wynik[pierwszy+1]=='X') {
            wynik[pierwszy+1]=wynik[pierwszy];
        }
    }
    let xx = wynik.join("");
    HTMLTekst.innerHTML = xx;
    HTMLNode.appendChild(HTMLTekst);
    pokazTekst.appendChild(HTMLNode); 

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

    var uniqueArray = [];

    for(i=0; i < kluczZnaki.length; i++){
        if(uniqueArray.indexOf(kluczZnaki[i]) === -1) {
            uniqueArray.push(kluczZnaki[i]);
        }
    }

    return uniqueArray;
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
