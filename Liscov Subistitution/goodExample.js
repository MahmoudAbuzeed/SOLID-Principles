class Bird {
  fly(speed) {
    console.log(`Flying at ${speed} km/h`);
  }
}

class Eagle extends Bird {
  dive() {
    console.log("It dives to a few depths");
  }

  fly(speed) {
    console.log(`Soaring through the sky at ${speed}`);
  }
}

class Penguin extends Bird {
  fly(speed) {
    console.log(`Soaring through the sky at ${speed}`);
  }
}

const bird = new Bird();
bird.fly(50); // Flying at 50 km/h

const eagle = new Eagle();
eagle.dive(); // It dives to a few depths
eagle.fly(80); // Soaring through the sky at 80

const penguin = new Penguin();

penguin.fly(100); // Soaring through the sky at 100
