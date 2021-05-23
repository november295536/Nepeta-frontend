module.exports = {
  apps: [
    {
      name: 'Nepeta',
      exec_mode: 'cluster',
      instances: 'max', // Or a number of instances
      script: './node_modules/nuxt/bin/nuxt.js',
      args: 'start',
      env_production: {
        buildMode: 'production',
      },
    },
  ],
}
