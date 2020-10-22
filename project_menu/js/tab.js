    // #product a – селектор, выбирающий элементы a, представляющие собой вкладки (при клике на которые нужно отображать соответствующий блок)
    $(function () {
      var t = function () {
        var now = new Date();
        var m = now.getMinutes();
        var s = now.getSeconds();
        var ms = now.getMilliseconds()
        if (m < 10) m = '0' + m;
        if (s < 10) s = '0' + s;
        if (ms < 100) ms = '0' + ms;
        if (ms < 10) ms = '00' + ms;
        return m + ':' + s + ' <sub>' + ms + '</sub>';
      };
      $('[data-toggle="tab"]').on('show.bs.tab', function (e) {
        var
          activeTab = $(e.target), // активная вкладка
          previousTab = $(e.relatedTarget); // предыдущая активная вкладка
        $('.log').prepend($('<li>').html('<span>' + t() + ' - <b>show.bs.tab</b> (target = ' + activeTab.text() + '; relatedTarget = ' + previousTab.text() + ')</span>'));
        $('#tab-active').text(activeTab.text());
        $('#tab-previous').text(previousTab.text());
      });
      $('[data-toggle="tab"]').on('shown.bs.tab', function (e) {
        var
          activeTab = $(e.target), // активная вкладка
          previousTab = $(e.relatedTarget); // предыдущая активная вкладка
        $('.log').prepend($('<li>').html('<span>' + t() + ' - <b>shown.bs.tab</b> (target = ' + activeTab.text() + '; relatedTarget = ' + previousTab.text() + ')</span>'));
        $('#tab-active').text(activeTab.text());
        $('#tab-previous').text(previousTab.text());
      });
      $('[data-toggle="tab"]').on('hide.bs.tab', function (e) {
        var
          activeTab = $(e.relatedTarget), // активная вкладка
          previousTab = $(e.target); // предыдущая активная вкладка
        $('.log').prepend($('<li>').html('<span>' + t() + ' - <b>hide.bs.tab</b> (target = ' + activeTab.text() + '; relatedTarget = ' + previousTab.text() + ')</span>'));
        $('#tab-active').text(activeTab.text());
        $('#tab-previous').text(previousTab.text());
      });
      $('[data-toggle="tab"]').on('hidden.bs.tab', function (e) {
        var
          activeTab = $(e.relatedTarget), // активная вкладка
          previousTab = $(e.target); // предыдущая активная вкладка
        $('.log').prepend($('<li>').html('<span>' + t() + ' - <b>hidden.bs.tab</b> (target = ' + activeTab.text() + '; relatedTarget = ' + previousTab.text() + ')</span>'));
        $('#tab-active').text(activeTab.text());
        $('#tab-previous').text(previousTab.text());
      });
    });
