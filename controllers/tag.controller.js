const createError = require("http-errors");
const tagsModel = require("../models/tags");
module.exports = {
  
  // function name: create
  // description: create tag by API
  // input: tagName, tagStatus, tagCreateby , tagUpdateBy
  // output: text response
  // CreateBy: Niphitphon Thanatkulkit / CreateDate: 14/1/2021
  // UpdateBy: Niphitphon Thanatkulkit / UpdateDate: 15/1/2021
  create: async (req, res, next) => {

    // define variable json as object
    var jsonData = {};

    // passing data to json variable
    jsonData.tagName = req.body.tagName;
    jsonData.tagStatus = req.body.tagStatus;
    // passing Create and update user id
    jsonData.tagCreateBy = 1;
    jsonData.tagUpdateBy = 1;

    try {
      const doseCreate = await tagsModel.createTag(jsonData);
      res.status(201).send({ doseCreate });
    } catch (error) {
      if (error.isJoi === true) return next(createError.InternalServerError());
      next(error);
    }
  },

  // function name: update_tag
  // desxription: update tag by API from tagId
  // input: tagId
  // output: text response
  // CreateBy: Niphitphon Thanatkulkit / CreateDate: 14/1/2021
  // UpdateBy: Niphitphon Thanatkulkit / UpdateDate: 15/1/2021
  update: async (req, res, next) => {
    try {
      const message = "update_tag: route allowed";
      res.send({ message });
    } catch (error) {
      if (error.isJoi === true) return next(createError.InternalServerError());
      next(error);
    }
  },

  // function name: delete_tag
  // description: delete tag by API from create by id
  // input: tagId
  // output: text response
  // CreateBy: Niphitphon Thanatkulkit / CreateDate: 14/1/2021
  // UpdateBy: Niphitphon Thanatkulkit / UpdateDate: 15/1/2021
  delete: async (req, res, next) => {
    try {
      const message = "delete_tag: route allowed";
      res.send({ message });
    } catch (error) {
      if (error.isJoi === true) return next(createError.InternalServerError());
      next(error);
    }
  },

  // function name: show_all_tag
  // description: show all tag by API
  // input : -
  // output : all tag from create by
  // CreateBy: Niphitphon Thanatkulkit / CreateDate: 14/1/2021
  // UpdateBy: Niphitphon Thanatkulkit / UpdateDate: 15/1/2021
  show_all: async (req, res, next) => {
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
