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
        PORT: 3000
      }
    }
  ]
};
