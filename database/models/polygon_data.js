module.exports = (sequelize, DataTypes) => {
    const pointData = sequelize.define('polygon_data',
        {
            id: {
                allowNull: false,
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
            },
            name: {
                type: DataTypes.STRING
            },
            geometry: {
                type: DataTypes.GEOMETRY('POLYGON')
            }
        },
        {
            freezeTableName: true,
            underscored: true,
            timestamps: false,
        });
    return pointData;
}