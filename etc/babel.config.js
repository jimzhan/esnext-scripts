module.exports = {
  presets: [
    ['env', {
      targets: {
        node: 'current',
        browsers: {
          development: [
            'last 2 chrome versions',
            'last 2 firefox versions',
            'last 2 edge versions'
          ],
          production: [
            '>1%',
            'last 4 versions',
            'Firefox ESR',
            'not ie < 11'
          ]
        }
      }
    }],
    'stage-1',
    'react'
  ]
}
