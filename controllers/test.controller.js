const createError = require("http-errors");

module.exports = {
  hello: async (req, res, next) => {
    try {
      const message = "hello from test service";
      res.send({ message });
    } catch (error) {
      if (error.isJoi === true) return next(createError.InternalServerError());
      next(error);
    }
  },

  // create_tag
  // create tag by API
  // input : tagName, tagStatus, tagCreateDate, tagUpdateDate, tagCreateby , tagUpdateBy
  // output : text response
  // Create by : 1/14/2021 Niphitphon Thanatkulkit
  // Last Edit : 1/14/2021 Niphitphon Thanatkulkit
  create_tag: async (req, res, next) => {
    var jsonData = {};
    jsonData.tagName = req.body.tagName;
    jsonData.tagStatus = req.body.tagStatus;

    jsonData.tagCreateBy = 1;
    jsonData.tagUpdateBy = 1;

    try {
      let sql = `INSERT INTO tags(tagName, tagStatus, tagCreateBy, tagUpdateBy) VALUES ("${req.body.tagName}","${req.body.tagStatus}",${jsonData.tagCreateBy},${jsonData.tagUpdateBy})`;
      db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
          data: data,
          fields: fields,
          status: 200,
          message: jsonData,
        });
      });
    } catch (error) {
      if (error.isJoi === true) return next(createError.InternalServerError());
      next(error);
    }
  },

  // update_tag
  // update tag by API from tagId
  // input : tagId
  // output : text response
  // Create by : 1/14/2021 Niphitphon Thanatkulkit
  // Last Edit : 1/14/2021 Niphitphon Thanatkulkit
  update_tag: async (req, res, next) => {
    try {
      const message = "update_tag: route allowed";
      res.send({ message });
    } catch (error) {
      if (error.isJoi === true) return next(createError.InternalServerError());
      next(error);
    }
  },

  // delete_tag
  // delete tag by API from create by id
  // input : tagId
  // output : text response
  // Create by : 1/14/2021 Niphitphon Thanatkulkit
  // Last Edit : 1/14/2021 Niphitphon Thanatkulkit
  delete_tag: async (req, res, next) => {
    try {
      const message = "delete_tag: route allowed";
      res.send({ message });
    } catch (error) {
      if (error.isJoi === true) return next(createError.InternalServerError());
      next(error);
    }
  },

  // show_all_tag
  // show all tag by API
  // input : -
  // output : all tag from create by
  // Create by : 1/14/2021 Niphitphon Thanatkulkit
  // Last Edit : 1/14/2021 Niphitphon Thanatkulkit
  show_all_tag: async (req, res, next) => {
    let sql = `SELECT * FROM tags`;
    try {
      db.query(sql, function (err, data, fields) {
        if (err) throw err;
        res.json({
          status: 200,
          data,
          message: "User lists retrieved successfully",
        });
      });
    } catch (error) {
      if (error.isJoi === true) return next(createError.InternalServerError());
      next(error);
    }
  },
};
