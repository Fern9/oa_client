'use strict';

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.wpy files
  plugins: ['html'],
  settings: {
    'html/html-extensions': ['.html', '.wpy']
  },
  'globals': {
    'wx': true
  },
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    "semi": ["error", "always"],
    'comma-dangle': ["error", "only-multiline"],
    'padded-blocks': 0,
    'one-var': 0,
    'no-return-assign': 0,
    'indent': ['error', 4],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'space-before-function-paren': 0
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi5lc2xpbnRyYy5qcyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwicm9vdCIsInBhcnNlciIsInBhcnNlck9wdGlvbnMiLCJzb3VyY2VUeXBlIiwiZW52IiwiYnJvd3NlciIsImV4dGVuZHMiLCJwbHVnaW5zIiwic2V0dGluZ3MiLCJwcm9jZXNzIiwiTk9ERV9FTlYiXSwibWFwcGluZ3MiOiI7O0FBQUFBLE9BQU9DLE9BQVAsR0FBaUI7QUFDZkMsUUFBTSxJQURTO0FBRWZDLFVBQVEsY0FGTztBQUdmQyxpQkFBZTtBQUNiQyxnQkFBWTtBQURDLEdBSEE7QUFNZkMsT0FBSztBQUNIQyxhQUFTO0FBRE4sR0FOVTtBQVNmO0FBQ0FDLFdBQVMsVUFWTTtBQVdmO0FBQ0FDLFdBQVMsQ0FDUCxNQURPLENBWk07QUFlZkMsWUFBVTtBQUNSLDRCQUF3QixDQUFDLE9BQUQsRUFBVSxNQUFWO0FBRGhCLEdBZks7QUFrQmYsYUFBVztBQUNQLFVBQU07QUFEQyxHQWxCSTtBQXFCZjtBQUNBLFdBQVM7QUFDUDtBQUNBLG9CQUFnQixDQUZUO0FBR1A7QUFDQSw4QkFBMEIsQ0FKbkI7QUFLUCxZQUFRLENBQ0osT0FESSxFQUVKLFFBRkksQ0FMRDtBQVNQLG9CQUFnQixDQUFDLE9BQUQsRUFBVSxnQkFBVixDQVRUO0FBVVAscUJBQWlCLENBVlY7QUFXUCxlQUFXLENBWEo7QUFZUCx3QkFBb0IsQ0FaYjtBQWFQLGNBQVUsQ0FBQyxPQUFELEVBQVUsQ0FBVixDQWJIO0FBY1A7QUFDQSxtQkFBZUMsUUFBUUwsR0FBUixDQUFZTSxRQUFaLEtBQXlCLFlBQXpCLEdBQXdDLENBQXhDLEdBQTRDLENBZnBEO0FBZ0JQLG1DQUErQjtBQWhCeEI7QUF0Qk0sQ0FBakIiLCJmaWxlIjoiLmVzbGludHJjLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG4gIHJvb3Q6IHRydWUsXG4gIHBhcnNlcjogJ2JhYmVsLWVzbGludCcsXG4gIHBhcnNlck9wdGlvbnM6IHtcbiAgICBzb3VyY2VUeXBlOiAnbW9kdWxlJ1xuICB9LFxuICBlbnY6IHtcbiAgICBicm93c2VyOiB0cnVlXG4gIH0sXG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mZXJvc3Mvc3RhbmRhcmQvYmxvYi9tYXN0ZXIvUlVMRVMubWQjamF2YXNjcmlwdC1zdGFuZGFyZC1zdHlsZVxuICBleHRlbmRzOiAnc3RhbmRhcmQnLFxuICAvLyByZXF1aXJlZCB0byBsaW50ICoud3B5IGZpbGVzXG4gIHBsdWdpbnM6IFtcbiAgICAnaHRtbCdcbiAgXSxcbiAgc2V0dGluZ3M6IHtcbiAgICAnaHRtbC9odG1sLWV4dGVuc2lvbnMnOiBbJy5odG1sJywgJy53cHknXVxuICB9LFxuICAnZ2xvYmFscyc6IHtcbiAgICAgICd3eCc6IHRydWVcbiAgfSxcbiAgLy8gYWRkIHlvdXIgY3VzdG9tIHJ1bGVzIGhlcmVcbiAgJ3J1bGVzJzoge1xuICAgIC8vIGFsbG93IHBhcmVuLWxlc3MgYXJyb3cgZnVuY3Rpb25zXG4gICAgJ2Fycm93LXBhcmVucyc6IDAsXG4gICAgLy8gYWxsb3cgYXN5bmMtYXdhaXRcbiAgICAnZ2VuZXJhdG9yLXN0YXItc3BhY2luZyc6IDAsXG4gICAgXCJzZW1pXCI6IFtcbiAgICAgICAgXCJlcnJvclwiLFxuICAgICAgICBcImFsd2F5c1wiXG4gICAgXSxcbiAgICAnY29tbWEtZGFuZ2xlJzogW1wiZXJyb3JcIiwgXCJvbmx5LW11bHRpbGluZVwiXSxcbiAgICAncGFkZGVkLWJsb2Nrcyc6IDAsXG4gICAgJ29uZS12YXInOiAwLFxuICAgICduby1yZXR1cm4tYXNzaWduJzogMCxcbiAgICAnaW5kZW50JzogWydlcnJvcicsIDRdLFxuICAgIC8vIGFsbG93IGRlYnVnZ2VyIGR1cmluZyBkZXZlbG9wbWVudFxuICAgICduby1kZWJ1Z2dlcic6IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgPyAyIDogMCxcbiAgICAnc3BhY2UtYmVmb3JlLWZ1bmN0aW9uLXBhcmVuJzogMFxuICB9XG59XG4iXX0=