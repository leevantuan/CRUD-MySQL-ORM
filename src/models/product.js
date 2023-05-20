'product strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Product extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Product.init({
        Name: DataTypes.STRING,
        Price: DataTypes.INTEGER,
        Detail: DataTypes.STRING,
        Image: DataTypes.STRING,
        Sale: DataTypes.BOOLEAN,
        New: DataTypes.BOOLEAN,
        Category: DataTypes.STRING,
        ListImgID: DataTypes.INTEGER,
        Quantity: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};