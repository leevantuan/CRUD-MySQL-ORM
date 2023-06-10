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
        queryInterface.addConstraint('Carts', {
            fields: ["ProductID"],
            type: 'foreign key',
            name: 'cart-product',
            references: {
                table: 'Products',
                field: 'id'
            }
        })
    },

    async down(queryInterface, Sequelize) {
        queryInterface.addConstraint('Carts', {
            fields: ["ProductID"],
            type: 'foreign key',
            name: 'cart-product',
            references: {
                table: 'Products',
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
