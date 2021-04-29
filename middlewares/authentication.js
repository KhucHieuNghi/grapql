const config = require(`${__base}/config`);
const passport = require('passport');
const passportJWT = require('passport-jwt');

const { ExtractJwt } = passportJWT;
const JwtStrategy = passportJWT.Strategy;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromExtractors([ExtractJwt.fromAuthHeaderAsBearerToken(), ExtractJwt.fromHeader('Authorization'), ExtractJwt.fromUrlQueryParameter('access_token'), ExtractJwt.fromBodyField('access_token')]),
  secretOrKey: config.tokenSecretKey,
  passReqToCallback: true,
  expire: 5184000,
  refreshExpire: 604800,
};

const strategy = new JwtStrategy(jwtOptions, ((req, jwtPayload, next) => {
  const token = jwtOptions.jwtFromRequest(req);
  const user = jwtPayload;
  if (user && !user.rf) {
    next(null, { token, ...user });
  } else {
    next(null);
  }
}));

passport.use(strategy);

module.exports = (app) => {
  app.use(passport.initialize());
  app.use((req, res, next) => {
    const internalUrl = req.originalUrl.split('/')[1] === 'internal';

    if (internalUrl) {
      return next();
    }

    return passport.authenticate('jwt', {
      session: false,
      failWithError: true
    })(req, res, next);
  });
};
