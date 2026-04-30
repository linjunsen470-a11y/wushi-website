module.exports = {
  apps: [
    {
      name: 'wushi-website',
      cwd: './current',
      script: 'server.js',
      exec_mode: 'cluster',
      instances: 2,
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        RESEND_API_KEY: 'TOKEN_RESEND_API_KEY',
        LEAD_TO_EMAIL: 'TOKEN_LEAD_TO_EMAIL'
      }
    }
  ]
};
