const Manager = require('../lib/manager.js');

describe('Manager', () => {
  describe('Initialization', () => {
    it('should create a new Manager object with name, id, email, and office number properties', () => {
      const name = 'Leonardo';
      const id = '002';
      const email = 'leonardoUwU@gmail.com';
      const officeNumber = '123';

      const manager = new Manager(name, id, email, officeNumber);

      expect(manager.name).toBe(name);
      expect(manager.id).toBe(id);
      expect(manager.email).toBe(email);
      expect(manager.officeNumber).toBe(officeNumber);
      expect(manager.role).toBe('Manager');
    });
  });

  describe('Methods', () => {
    it('should return the correct office number when getOfficeNumber is called', () => {
      const manager = new Manager('Leonardo', '002', 'leonardoUwU@gmail.com', '123');

      const result = manager.getOfficeNumber();

      expect(result).toBe('Office Number: 123');
    });

    it('should return the correct role when getRole is called', () => {
      const manager = new Manager('Leonardo', '002', 'leonardoUwU@gmail.com', '123');

      const result = manager.getRole();

      expect(result).toBe('Role: Manager');
    });
  });
});
