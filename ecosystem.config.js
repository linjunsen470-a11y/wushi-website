module.exports = {
  apps: [
    {
      name: 'wushi-website',
      cwd: './current',
      script: 'server.js',
      exec_mode: 'cluster',
      instances: 1,
      max_memory_restart: '1G',
      node_args: '--max-old-space-size=1024',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
        RESEND_API_KEY: 'TOKEN_RESEND_API_KEY',
        LEAD_TO_EMAIL: 'TOKEN_LEAD_TO_EMAIL'
      }
    }
  ]
};
