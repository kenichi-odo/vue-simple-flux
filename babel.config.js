module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: { ie: '11', android: '5' },
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
  ],
}
