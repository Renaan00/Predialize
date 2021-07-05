const clients = require("../../clients.mock");

exports.getClients = (req, res, next) => {
  try {
    let array = [];
    clients.map(i => {
      let sum = 0;
      let enterprise = i.enterprises;
      enterprise.map((j, index) => {
        sum = sum + parseInt(j.realties);
        if (index - enterprise.length === -1) {
          array.push({
            _id: i._id,
            name: i.name,
            image_src: i.image_src,
            total_enterprises: `${enterprise.length}`,
            total_realties: `${sum}`
          });
        }
      });
    });
    if (array.length === 0) { return res.status(404).send("Nenhum cliente foi encontrado") }
    return res.status(200).send(array);
  } catch (error) {
    if (error) { return res.status(500).send({ error: error }) }
  }
}
exports.getClientName = (req, res, next) => {
  try {
    const name = req.params.name;
    let array = [];
    clients.map(i => {
      if (i.name.toUpperCase().indexOf(name.toUpperCase()) > -1) {
        let sum = 0;
        let enterprise = i.enterprises;
        enterprise.map((j, index) => {
          sum = sum + parseInt(j.realties);
          if (index - enterprise.length == -1) {
            array.push({
              _id: i._id,
              name: i.name,
              image_src: i.image_src,
              total_enterprises: `${enterprise.length}`,
              total_realties: `${sum}`
            });
          }
        });
      }
    });
    if (array.length === 0) { return res.status(404).send("Nenhum usuário foi encontrado") }
    return res.status(200).send(array);
  } catch (error) {
    if (error) { return res.status(500).send({ error: error }) }
  }
}
exports.getClientTotals = (req, res, next) => {
  try {
    const id = req.params.client_id;
    const allEnterprises = [];
    const allRealties = [];
    clients.map(i => {
      if (i._id === id) {
        let enterprise = i.enterprises;
        allEnterprises.push(enterprise.length);
        enterprise.map(j => {
          allRealties.push(parseInt(j.realties));
        });
      }
    });
    const totalEnterprises = allEnterprises.reduce((acc, e) => acc + e);
    const totalRealties = allRealties.reduce((acc, r) => acc + r);
    res.status(200).send([
      {
        total_enterprises: `${totalEnterprises}`,
        total_realties: `${totalRealties}`
      }
    ]);
  } catch (error) {
    if (error) { return res.status(500).send({ error: error }) }
  }
}
exports.getEnterprises = (req, res, next) => {
  try {
    const array = [];
    clients.map(i => {
      let enterprise = i.enterprises;
      enterprise.map(j => {
        array.push({
          _id: j._id,
          name: j.name,
          image_src: j.image_src,
          company_name: i.name,
          realties: j.realties
        });
      });
    });
    if (array.length === 0) { return res.status(404).send("Nenhum empreendimento foi encontrado") }
    return res.status(200).send(array);
  } catch (error) {
    if (error) { return res.status(500).send({ error: error }) }
  }
}
exports.getEnterpriseName = (req, res, next) => {
  try {
    const name = req.params.name;
    const array = [];
    clients.map(i => {
      let enterprise = i.enterprises;
      enterprise.map(j => {
        if (j.name.toUpperCase().indexOf(name.toUpperCase()) > -1) {
          array.push({
            _id: j._id,
            name: j.name,
            image_src: j.image_src,
            company_name: i.name,
            realties: j.realties
          });
        }
      });
    });
    if (array.length === 0) { return res.status(404).send("Nenhum empreendimento foi encontrado") }
    return res.status(200).send(array);
  } catch (error) {
    if (error) { return res.status(500).send({ error: error }) }
  }
}
exports.getEnterpriseClient = (req, res, next) => {
  try {
    const id = req.params.client_id;
    const array = [];
    clients.map(i => {
      if (i._id === id) {
        let enterprise = i.enterprises;
        enterprise.map(j => {
          array.push({
            _id: j._id,
            name: j.name,
            image_src: j.image_src
          });
        });
      }
    });
    if (array.length === 0) { return res.status(404).send("Nenhum empreendimento foi encontrado") }
    return res.status(200).send(array);
  } catch (error) {
    if (error) { return res.status(500).send({ error: error }) }
  }
}
exports.getEnterpriseClientName = (req, res, next) => {
  try {
    const id = req.params.client_id;
    const name = req.params.name;
    const array = [];
    clients.map(i => {
      if (i._id === id) {
        let enterprise = i.enterprises;
        enterprise.map(j => {
          if (j.name.toUpperCase().indexOf(name.toUpperCase()) > -1) {
            array.push({
              _id: j._id,
              name: j.name,
              image_src: j.image_src,
              realties: j.realties
            });
          }
        });
      }
    });
    if (array.length === 0) { return res.status(404).send("Nenhum empreendimento foi encontrado") }
    return res.status(200).send(array);
  } catch (error) {
    if (error) { return res.status(500).send({ error: error }) }
  }
}
exports.getTotals = (req, res, next) => {
  try {
    let totalEnterprises = 0;
    let totalRealties = 0;
    clients.map(i => {
      let enterprise = i.enterprises;
      totalEnterprises = totalEnterprises + enterprise.length;
      enterprise.map(j => {
        totalRealties = totalRealties + (parseInt(j.realties));
      });
    });
    res.status(200).send([
      {
        total_clients: `${clients.length}`,
        total_enterprises: `${totalEnterprises}`,
        total_realties: `${totalRealties}`
      }
    ]);
  } catch (error) {
    if (error) { return res.status(500).send({ error: error }) }
  }
}
exports.getClientId = (req, res, next) => {
  try {
    const id = req.params._id;
    const array = [];
    clients.map(i => {
      if (i._id === id) {
        array.push({
          _id: i._id,
          name: i.name,
          image_src: i.image_src
        });
      }
    });
    if (array.length === 0) { return res.status(404).send("Nenhum usuário foi encontrado") }
    return res.status(200).send(array);
  } catch (error) {
    if (error) { return res.status(500).send({ error: error }) }
  }
}