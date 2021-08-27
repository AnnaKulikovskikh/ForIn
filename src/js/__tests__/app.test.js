import orderByProps from '../app';

const obj = {
  name: 'swordsman',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('sorting', () => {
  const result = orderByProps(obj, ['name', 'level']);
  const expected = [
    { key: 'name', value: 'swordsman' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(result).toEqual(expected);
});
