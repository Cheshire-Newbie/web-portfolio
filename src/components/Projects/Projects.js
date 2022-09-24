import Cat from "./Cat/Cat.vue";

export default {

  components: {
    Cat,
  },
  name: "Projects",
  data: () => ({
    catIsMoving: false,
    cat: null,
    catX: 40,
    catXSpeed: 0,
    catY: 80,
    catYSpeed: 0,
    mouseX: 0,
    mouseY: 0,
    catRotation: 0,
    catRotationSpeed: 0,

  }),

  methods: {

    methodCat() {
      this.cat = document.querySelector(".cat")
      //tutaj okreslam ze srodek obrotu kota jest jego prawy gorny rog, a nie jaak bylo przedtem (czyli levy)
      this.cat.style.transformOrigin = `100 100`;
      this.catIsMoving = !this.catIsMoving;
      if (this.catIsMoving) {
        window.addEventListener("mousemove", this.mouseMoveHandler);
        this.moveCat();
      }
      else {
        window.removeEventListener("mousemove", this.mouseMoveHandler);
        this.cat.style.left = `40px`;
        this.cat.style.top = `80px`;
      }
    },

    mouseMoveHandler(e) {
      // const catElement = document.querySelector(".cat");
      // catElement.style.left = `${e.clientX}px`;
      // catElement.style.top = `${e.clientY}px`;
      // tutaj zmienne mouseX i mouseY sledza ruch myszki
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
    },

    moveCat() {
      // tutaj zmienna xDiff i yDiff okreslaja roznice polozenia(odleglosc) miedzy myszka a obiektem cat
      const xDiff = (this.mouseX - 200) - this.catX;
      const yDiff = this.mouseY - this.catY;
      // jesli odleglosc miedzy kotem a myszka jest wieksza niz 10px, to nadaj mu nowa szybkosc, 
      // w przeciwnym razie ustaw jego szybkosc na 0
      if (Math.abs(xDiff) > 10) {
        this.catXSpeed = (xDiff / 60) * 2;
      }
      else
        this.catXSpeed = 0;
      if (Math.abs(yDiff) > 10) {
        this.catYSpeed = (yDiff / 60) * 2;
      }
      else this.catYSpeed = 0;
      // tutaj do zmiennych catX i catY jest dodawana ich szybkosc (okresla ich nowe polozenia)
      this.catX += this.catXSpeed;
      this.catY += this.catYSpeed;
      // tutaj sprawiam ze cat wisualnie przemieszcza sie do swojego nowego polozenia na ekranie
      this.cat.style.left = `${this.catX}px`;
      this.cat.style.top = `${this.catY}px`;
      //tutaj okreslam kat obrotu (mouse-polozeniekota)
      const radian = Math.atan2(yDiff, xDiff);

      //TUTAJ DZIEJE SIE CHAOS OBROTOWY KOTA, BY OKRESLIC NOWA, SPOWOLNIONA SZYBKOSC, JEGO PREDKOSC, PED I SPOWOLNIENIE KONCOWE
      //tutaj okreslam roznice miedzy katem poczatkowym i a koncowym
      let rotationDiff = radian - this.catRotation;
      //jesli obrot w prawo jest wiekszy niz 180 stopni (w radianach 180 stopni jest rowne pi) to odejmujemy od roznicy katow 360 stopni
      //(to dlatego ze musimy uzyskac wartosc ujemna, by obrocil sie w druga strone)
      //a jesli obrot w lewo jest wiekszy oniz 180 stopni, to musimy dodac do niego 360 (dlatego mamy minusy, bo roznica obrotu jest ujemna)
      if (rotationDiff > Math.PI) {
        rotationDiff -= 2 * Math.PI
      }
      else if (rotationDiff < -Math.PI) {
        rotationDiff += 2 * Math.PI
      }
      //tutaj okreslam przyspieszenie z ktorym sie obraca kot, czyli dziele roznice miedzy katami o 60 
      //(bo tyle jest kratek pokonywanych w ciagu secundy)
      const rotationAcc = (rotationDiff / 60)*4;

      // const rotationAcc = (Math.abs(rotationDiff)/rotationDiff)* Math.PI/120;

      //tutaj do obecnej szybkosci kota dodajemy jego wyliczone przyspieszenie obrotu
      this.catRotationSpeed += rotationAcc;
      //jesli jego szybkosc obrotu jest wieksza niz roznica miedzy poczatkowym a koncowym obrotem
      //to chcemy go wyhamowac, zeby nie przekroczyl tego punktu
      if (Math.abs(this.catRotationSpeed - rotationDiff) > 0) {
        this.catRotationSpeed = this.catRotationSpeed / 2
      }
      //tutaj dodajemy do naszego poczatkowego obrotu wyliczona szybkosc, by okreslic nowa wartosc obrotu
      this.catRotation += this.catRotationSpeed;
      //TUTAJ NASTAL KONIEC CHAOSU

      //tutaj wprawiamy w ruch obrotowy kota (widzac ze robimy w radianach, zamiast deg
      //(czym normalnie okreslalismy stopnie w rotate, dajemy rad dla radianow))
      //catRotation jest zamiennikiem dla radianu, przez wzglad na wczesniejasza czesc funkcji
      this.cat.style.transform = `rotate(${this.catRotation}rad)`;

      if (this.catIsMoving) {
        // tutaj prosimy okno przegladarki by wykonala ta funkcja w ktorej obecnie sie znajdujemy jeszcze raz,
        //  kiedy bedzie miala kolejna klatka animacji dostepna (zazwyczaj 60x na sec)
        window.requestAnimationFrame(this.moveCat);
      }
      else {
        this.cat.style.left = `40px`;
        this.cat.style.top = `80px`;
        this.catX = 40;
        this.catY = 80;
        this.catXSpeed = 0;
        this.catYSpeed = 0;
        this.mouseX = 0;
        this.mouseY = 0;
        this.cat.style.transform = "rotate(0rad)";
      }
    }
  }
};