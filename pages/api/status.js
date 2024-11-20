function status(request, response) {
  response
    .status(200)
    .json({ Casamento: "2027", Envolvidos: "Josué e Thalita" });
}

export default status;
