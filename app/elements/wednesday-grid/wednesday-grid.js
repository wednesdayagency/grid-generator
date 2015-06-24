'use strict';

(function() {
  Polymer({
    is: 'wednesday-grid',
    // properties: {
    //   class: {
    //     type: String,
    //     value: ''
    //   }
    // },
    ready: function() {
      var classList = Polymer.dom(this).node.classList;

      // console.log('class', this.class);

      // console.log('classList', classList);

      // classList.forEach(function(className) {
      //   console.log('className', className);
      // });

      this.items = Array.prototype.slice.call(classList);
    },

    toggleGridVisibility: function() {
      console.log('toggleGridVisibility grid');
      var grid = document.getElementById('grid');
      grid.style.display = (grid.style.display !== 'none' ? 'none' : '');
    },

    toggleLabelVisibility: function() {
      console.log('toggleLabelVisibility grid');
      var wednesdayCell = document.querySelectorAll('wednesday-cell');
      for (var i = 0; i < wednesdayCell.length; i++) {
        wednesdayCell[i].toggleLabelVisibility();
      }
    }

  });
})();