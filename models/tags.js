const knex = require("./../helpers/init_knex");
const createError = require("http-errors");

module.exports = {

  // function name: createtag
  // description: create tag model API
  // input: tagName, tagStatus, tagCreateBy, tagUpdateBy
  // output: tagId
  // CreateBy: Niphitphon Thanatkulkit / CreateDate: 15/1/2021
  // UpdateBy: Niphitphon Thanatkulkit / UpdateDate: 15/1/2121

  createTag: async (data) => {
    return new Promise((resolve, reject) => {
      try {
        const doseCreateTag = knex
          .insert(
            [
              {
                tagName: data.tagName,
                tagStatus: data.tagStatus,
                tagCreateBy: data.tagCreateBy,
                tagUpdateBy: data.tagUpdateBy,
              },
            ],
            ["tagId"]
          )
          .into("tags");
        resolve(doseCreateTag);
      } catch (error) {
        console.log(error.message);
        reject(createError.InternalServerError());
      }
    });
  },

  //   createTableUsers: async () => {
  //     return new Promise((resolve, reject) => {
  //       try {
  //         const doseCreatetableUsers = knex.schema.createTable(
  //           "users",
  //           (table) => {
  //             table.increments("id");
  //             table.string("username");
  //             table.string("email");
  //             table.string("password");
  //           }
  //         );
  //         resolve(doseCreatetableUsers);
  //       } catch (error) {
  //         console.log(error.message);
  //         reject(createError.InternalServerError());
  //       }
  //     });
  //   },
};
