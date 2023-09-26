const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  'cloud_9t47', // Database name
  'clouduser', // User
  'zFwCCP7EeSytS2qajd33duQsVw3vRmVB', // Password
  {
    host: 'dpg-ck9d0fn0vg2c73d0u080-a', // Host
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
