'order strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Orders', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Status: {
                type: Sequelize.STRING
            },
            Address: {
                type: Sequelize.STRING
            },
            Phone: {
                type: Sequelize.STRING
            },
            Total: {
                type: Sequelize.STRING
            },
            ListCart: {
                type: Sequelize.JSON,
            },
            // Size: {
            //     type: Sequelize.INTEGER
            // },
            // Quantity: {
            //     type: Sequelize.INTEGER
            // },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Orders');
    }
};