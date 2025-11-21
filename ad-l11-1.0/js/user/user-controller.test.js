const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });


  // add() usuario NO existente
test('add(): agrega usuario aunque esté duplicado', () => {
    const userController = new UserController();
    const user = new User(1, "Samary", "samary@test.com");

    userController.add(user);
    userController.add(user); 

    expect(userController.getUsers().length).toBe(2);
});



// remove() usuario NO existente
test('remove(): intenta eliminar usuario que no está en la lista', () => {
    const userController = new UserController();

    const user1 = new User(1, "Samary", "samary@test.com");
    const userNoExiste = new User(99, "Jorge", "jorge@test.com");

    userController.add(user1);
    userController.remove(userNoExiste);

    expect(userController.getUsers()).toContain(user1);
    expect(userController.getUsers()).not.toContain(userNoExiste);
});

// findByEmail() encuentra usuario
test('findByEmail(): encuentra usuario por email', () => {
    const userController = new UserController();
    const user = new User(2, "Pedro", "pedro@test.com");

    userController.add(user);

    const result = userController.findByEmail("pedro@test.com");
    expect(result).toBe(user);
});

// findByEmail() no encuentra
test('findByEmail(): retorna undefined si no existe el email', () => {
    const userController = new UserController();
    const user = new User(3, "Laura", "laura@test.com");

    userController.add(user);

    const result = userController.findByEmail("otro@test.com");
    expect(result).toBeUndefined();
});

// findById() encuentra usuario
test('findById(): encuentra usuario por id', () => {
    const userController = new UserController();
    const user = new User(4, "Mario", "mario@test.com");

    userController.add(user);

    const result = userController.findById(4);
    expect(result).toBe(user);
});

// findById() no existe 
test('findById(): retorna undefined si no existe id', () => {
    const userController = new UserController();
    const user = new User(5, "Natalia", "natalia@test.com");

    userController.add(user);

    const result = userController.findById(999);
    expect(result).toBeUndefined();
});

