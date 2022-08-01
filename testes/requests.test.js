const axios = require("axios");

test("Alive retortar true", async () => {
  var resposta = await axios.get("http://localhost");
  expect(resposta.data).toEqual({ alive: true });
});

test("Falta name", async () => {
  try {
    var resposta = await axios.post("http://localhost/donation", {
      name: "AROOZ",
    });
    expect(resposta.data).toEqual({ success: true });
  } catch (error) {
    expect(error.response.data).toEqual({
      error: true,
      errorMessage: "Todos os campos obrigatórios devem ser informados",
      requiredFields: [
        "email",
        "phone",
        "city",
        "state",
        "streetAddress",
        "number",
        "complement",
        "neighborhood",
        "deviceCount",
        "devices",
      ],
    });
  }
});
