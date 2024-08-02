function Person() {
    this.age = 0;
  
    setInterval(function growUp() {
      this.age++;
      console.log(this.age); // `this` refers to the global object (or undefined in strict mode)
    }, 1000);
  }
  
  const p = new Person();
  