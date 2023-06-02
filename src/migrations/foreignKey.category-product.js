'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    queryInterface.addConstraint('Products', {
      fields: ["CategoryId"],
      type: 'foreign key',
      name: 'category-product',
      references: {
        table: 'Categories',
        field: 'id'
      }
    })
  },

  async down(queryInterface, Sequelize) {
    queryInterface.removeConstraint('Products', {
      fields: ["CategoryId"],
      type: 'foreign key',
      name: 'category-product',
      references: {
        table: 'Categories',
        field: 'id'
      }
    })
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
