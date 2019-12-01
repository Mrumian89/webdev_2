function Osoba(imieP, nazwiskoP) {
    this.imie = imieP;
    this.nazwisko= nazwiskoP;

    this.przedstawSie = function () {
        console.log('Nazwywam się ' + this.imie + ' ' + this.nazwisko)

    }

}

let osoba = new Osoba('Jan', 'Kowalski');
osoba.przedstawSie();

let osoba2 = new Osoba('Anna', 'Kowalska                                                                                            ;;;;');
osoba2.przedstawSie();