'product strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            Name: {
                type: Sequelize.STRING
            },
            Price: {
                type: Sequelize.INTEGER
            },
            Detail: {
                type: Sequelize.STRING
            },
            Image: {
                type: Sequelize.STRING
            },
            Sale: {
                type: Sequelize.BOOLEAN
            },
            New: {
                type: Sequelize.BOOLEAN
            },
            Category: {
                type: Sequelize.STRING
            },
            ListImgID: {
                type: Sequelize.INTEGER
            },
            Quantity: {
                type: Sequelize.INTEGER
            },
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
        await queryInterface.dropTable('Products');
    }
};