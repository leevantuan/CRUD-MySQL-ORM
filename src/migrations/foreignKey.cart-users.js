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
            fields: ["UserID"],
            type: 'foreign key',
            name: 'cart-user',
            references: {
                table: 'Users',
                field: 'id'
            }
        })
    },

    async down(queryInterface, Sequelize) {
        queryInterface.addConstraint('Carts', {
            fields: ["UserID"],
            type: 'foreign key',
            name: 'cart-user',
            references: {
                table: 'Users',
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
