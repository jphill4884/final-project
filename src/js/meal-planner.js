const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: [],
    
    get appetizers() {
      return this._appetizers;
    },
    set appetizers(appetizerIn) {
      this._appetizers = appetizersIn;
    },
    get mains() {
      return this._mains;
    },
    set mains(mainIn) {
      this._mains = mainsIn;
    },
    get desserts() {
      return this._desserts;
    },
    set desserts(dessertIn) {
      this._desserts = dessertsIn;
    },
  },
  
    get courses() {
      return {
        appetizers: this._courses.appetizers,
        mains: this._courses.mains,
        desserts: this._courses.desserts,
      };
    },
  
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice,
      };
  
      this._courses[courseName].push(dish);
    },
  
   getRandomDishFromCourse (courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    
    generateRandomMeal() {
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      
      return `Your meal is ${appetizer.name}, ${main.name} and ${dessert.name}. The price is $${totalPrice.toFixed(2)}.`;
    },
  };
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('appetizers', 'Falafels', 5.00);
  menu.addDishToCourse('appetizers', 'Momos', 6.00);
  
  menu.addDishToCourse('mains', 'Grilled Chicken', 11.50);
  menu.addDishToCourse('mains', 'Koshari', 9.75);
  menu.addDishToCourse('mains', 'Chana Masala', 10.25);
  
  menu.addDishToCourse('desserts', 'Cheesecake', 3.75);
  menu.addDishToCourse('desserts', 'Milk Custard', 4.50);
  menu.addDishToCourse('desserts', 'Rice Pudding', 3.25);
  
  let meal = menu.generateRandomMeal();
  
  console.log(meal);