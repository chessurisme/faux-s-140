export default {
    input: './src/js/app.js',
    
    output: {
      file: '../../dist/js/bundle.js',
      format: 'cjs',
      name: 'form-2-image',
      treeshake: true,
    }
};