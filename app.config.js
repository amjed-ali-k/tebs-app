import "dotenv/config";

export default {
  expo: {
    extra: {
      sentryDsn: process.env.SENTRY_DSN,
    },
  },
};
