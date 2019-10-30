const { handler } = require('.');

test('handler', async () => {
  expect(await handler()).toEqual(
    { statusCode: 200,
      headers: {'Content-Type': 'application/json'},
      body: '{"status":"ok"}' }
  );
})