'use strict';
const { hashPassword } = require('../tools/password');
const { ADMIN, CUSTOMER, EDITOR, DATETIME_FORMAT } = require('../../constants/index');
const moment = require('moment');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      login: 'admintest',
      password: await hashPassword('1111'),
      role: ADMIN,
      createdAt: moment().format(DATETIME_FORMAT),
      updatedAt: moment().format(DATETIME_FORMAT)
    },
    {
      login: 'customertest',
      password: await hashPassword('2222'),
      role: CUSTOMER,
      createdAt: moment().format(DATETIME_FORMAT),
      updatedAt: moment().format(DATETIME_FORMAT)
    },
    {
      login: 'editortest',
      password: await hashPassword('3333'),
      role: EDITOR,
      createdAt: moment().format(DATETIME_FORMAT),
      updatedAt: moment().format(DATETIME_FORMAT)
    }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', {}, null);
  }
};
