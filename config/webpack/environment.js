const { environment } = require('@rails/webpacker')

const webpack = require('webpack')

environment.plugins.prepend('Provide',
    new webpack.ProvidePligin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default']
    })
)
  
module.exports = environment
