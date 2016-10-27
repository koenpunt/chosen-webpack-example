window.$ = window.jQuery = require('jquery')
require('chosen-js')
require('chosen-js/chosen.css')

$(function() {
  $('.chosen-select').chosen({width: '150px'})
})
