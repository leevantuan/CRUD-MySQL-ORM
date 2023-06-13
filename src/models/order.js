'order strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Order.init({
        Status: DataTypes.STRING,
        Address: DataTypes.STRING,
        Phone: DataTypes.STRING,
        Total: DataTypes.STRING,
        ListCart: DataTypes.JSON,
    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};