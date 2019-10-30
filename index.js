function response(statusCode, body) {
  return {
    statusCode,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
  };
}

async function handler() {
  return response(200, { status: 'ok' });
}

module.exports = {
  handler
}
