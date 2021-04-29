module.exports = {
  postgresSQL: {
    host: '10.148.0.47',
    port: 5432,
    database: 'user_profile',
    username: 'user_profile',
    password: 'Vexere!2019',
    dialect: 'postgres'
  },
  baseUrl: 'localhost:8100',
  vxrUrl: 'https://uat-api.vexere.net/v3/',
  kafka: {
    enabled: true,
    broker: '10.148.0.20:31090,10.148.0.20:31091,10.148.0.20:31092'
  },
  authInfo: {
    grant_type: 'client_credentials',
    client_id: '1355d8d0-35a4-11e5-84d3-cfa1193d2b50',
    client_secret: '4918ee64-42c9-45af-9f5d-8309fe611d03'
  },
  tokenUrl: 'https://uat-api.vexere.net/v1/oauth/token',
  redisSocialProof: 'redis://10.2.0.71:6388',
  allowed_nums_rating: 1,
  percent_rating: 0.1,
};
