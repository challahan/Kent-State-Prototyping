
      $(function() {
  $('a[href*=#]:not([href=#panel2-1],[href=#panel2-2],[href=#panel2-3],[href=#panel2-4],[href=#panel1],[href=#panel2],[href=#panel3], ,[href=#panel4],[href=#panel5],[href=#panel1a],[href=#panel2a],[href=#panel3a],[href=#panel4a],[href=#panel5a])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});