'use strict';

// Generated by CoffeeScript 1.10.0
(function () {
  $(function () {
    return $('#toggle-practice-browse').change(function () {
      if (!$(this).prop('checked')) {
        window.location.href = '/cards/public';
        return $(this).bootstrapToggle('off');
      }
    });
  });
}).call(undefined);

//# sourceMappingURL=index.js.map

//# sourceMappingURL=index-compiled.js.map