(function () {
  require('../src');

  describe('api.basic test', () => {
    test('nx.find as array.find', function () {
      const users = [
        { user: 'barney', age: 36, active: true },
        { user: 'fred', age: 40, active: false },
        { user: 'pebbles', age: 1, active: true }
      ];

      const result = nx.find(users, function (chr) {
        return chr.age < 40;
      });

      expect(result).toEqual({ user: 'barney', age: 36, active: true });
    });

    test('nx.find by path with default', function () {
      const users = [
        { user: 'barney', age: 36, active: true },
        { user: 'fred', age: 40, active: false },
        { user: 'pebbles', age: 1, active: true }
      ];

      const result1 = nx.find(
        users,
        function (chr) {
          return chr.age < 2;
        },
        'user'
      );

      const result2 = nx.find(
        users,
        function (chr) {
          return chr.age < 0;
        },
        'user',
        'anonymous'
      );

      expect(result1).toBe('pebbles');
      expect(result2).toBe('anonymous');
    });
  });
})();
