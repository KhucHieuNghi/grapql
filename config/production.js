module.exports = {
  // postgresSQL: {
  //   host: '10.148.0.47',
  //   port: 5432,
  //   database: 'user_profile',
  //   username: 'user_profile',
  //   password: 'Vexere!2019',
  //   dialect: 'postgres'
  // },
  baseUrl: 'user-profile-service.vexere.com',
  vxrUrl: 'https://api.vexere.com/v3/',
  notifierUrl: 'http://production-notifier:1337',
  kafka: {
    enabled: true,
    broker: '10.148.0.199:31090,10.148.0.200:31091,10.148.0.37:31092'
  },
  authInfo: {
    grant_type: 'client_credentials',
    client_id: '5b409069-dbe0-4eb6-9e2b-6c1015ad295b',
    client_secret: '51d33848-603e-4c4a-92b2-7d65683aef09'
  },
  tokenUrl: 'https://api.vexere.com/v1/oauth/token',
  redisSocialProof: 'redis://10.126.58.35:6379',
  allowed_nums_rating: 10,
  percent_rating: 0.5,
};
