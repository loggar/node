module.exports = {
  apps: [
    {
      name: "job-schedulers",
      script: "./job-schedulers/src/job-schedules.js",
      watch: false,
      env: {
        PORT: 29110,
        NODE_ENV: "development"
      },
      env_production: {
        PORT: 29110,
        NODE_ENV: "production"
      }
    },
    {
      name: "class-enroll-status",
      script: "./class-enroll-status/.dist/main.server-bundle.js",
      watch: false,
      env: {
        PORT: 28110,
        NODE_ENV: "development"
      },
      env_production: {
        PORT: 28110,
        NODE_ENV: "production"
      }
    }
  ]
};
