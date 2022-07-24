const axios = require("axios");

test("Alive retortar true", async () => {
  var resposta = await axios.get("http://localhost");
  expect(resposta.data).toEqual({ alive: true });
});
