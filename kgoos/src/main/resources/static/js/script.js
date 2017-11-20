(function($){
    $(document).ready(function () {
    // Header Freezed,control the header move with the mouse

    //$(window).scroll(function(){
    //  var scrollTop = $('body').scrollTop() ? $('body').scrollTop() : $(window).scrollTop();
    //  if(scrollTop > 85){
    //    $('.page-header').addClass('header_freezed');
    //  } else {
    //    $('.page-header').removeClass('header_freezed');
    //  } 
    //});

    //$("#sharelist_show").load("functions/sharelist_forindex.aspx");
    // Banner
    $('.banner_slider .banner-content').owlCarousel({
      loop: true,
      margin: 0,
      smartSpeed: 1000,
      responsiveClass: true,
      autoHeight: true,
      autoplay: true,
      items: 1,
      navContainer: $('.banner-nav'),
      dotsContainer: $('.banner-dots')
    });
    //控制 分享左右滑动的js,放在加载div中了，这里不要去除
    //$('.share-wrapper').owlCarousel({
    //  loop: true,
    //  margin: 20,
    //  smartSpeed: 1000,
    //  responsiveClass: true,
    //  autoHeight: false,
    //  autoplay: false,
    //  items: 5,
    //  dots: false
    //});

    // Back to Top
    $('.quick_links .to-top a').on('click',function(e){
      $('html, body').animate({ scrollTop: 0 }, 500);
      return false;
    });

    // Announcement 公告关闭
    $('.announcement_wrapper .action a').on('click',function(e){
      $('.announcement_wrapper').animate({
        'right': '-9999px'
      }, 1500, 'swing',
        function () {
      });
    });
    //另做一个关闭
    //function animateclose()
    //{
    //    $('.announcement_wrapper').animate({
    //        'right': '-9999px'
    //    }, 1500, 'swing',
    //      function () {
    //      });
    //};
    // Menu Toggle
    $('.sidebar-main .menu li').each(function(i){
      var menu = $(this);
      var toggle = $(this).children('.level-top');
      if(!menu.hasClass('parent')){ return; }
      toggle.on('click',function(e){
        if(!menu.hasClass('menu-opened')){
          menu.addClass('menu-opened').siblings().removeClass('menu-opened');
        } else {
          menu.removeClass('menu-opened');
        }
      });
    });

    // Form
    /*$('select').each(function(i){
      $(this).selectmenu();
    });*/

    $('input[type="radio"]').each(function(i, el){
      var id = $(el).prop('id');
      if(!id) {
        var name = $(el).prop('name');
        id = name + Math.round(Math.random()*10000000);
        $(el).prop('id', id);
      }
      if($('label[for="'+id+'"]').length > 0) {
        $('label[for="'+id+'"]').attr('for', '');
      }
      $(el).after($('<label class="radio" for="'+id+'">radio</label>'));
      $(el).checkboxradio();
    });

    $('input[type="checkbox"]').each(function(i, el){
      var id = $(el).prop('id');
      if(!id) {
        var name = $(el).prop('name');
        id = name + Math.round(Math.random()*10000000);
        $(el).prop('id', id);
      }
      if($('label[for="'+id+'"]').length > 0) {
        $('label[for="'+id+'"]').attr('for', '');
      }
      $(el).after($('<label class="checkbox" for="'+id+'">checkbox</label>'));
      $(el).checkboxradio();
    });

    // Fee Calculation
    function feecalculation(){
      var BUYUPFee = 0;
      var QYFee = 0;
      var SFFee = 0;
      var YOTFee = 0;
      var NormalFee = 0;
      var halfWeight = 0;
      var inputText = $('.feecalculation_form .input-text');
      var cargoDirection = $('.cargoDirection');
      var cargoType = $('.cargoType');
      var packageWeight = $('.packageWeight');
      var feeaction = $('.feecalculation_form .feecalculation');
      var resultHtml;
      inputText.each(function(i, el){
        $(el).keyup(function(){
          if (isNaN($(el).val())){
            $(el).val('');
          }
        });
      });
      cargoDirection.change(function(){
        var elem = $(this).val();
        switch (elem){
          case '0':
            cargoType.children('span').each(function(){
              $(this).children().clone().replaceAll($(this));
            });
            break
          case '1':
            cargoType.children('span').each(function(){
              $(this).children().clone().replaceAll($(this));
            });
            cargoType.children('option[data-id="tw"]').each(function(){
              $(this).wrap('<span style="display: none;"></span>');
            });
            cargoType.children('option[data-id="xm"]').each(function () {
                $(this).wrap('<span style="display: none;"></span>');
            });
            break
          case '2':
            cargoType.children('span').each(function(){
              $(this).children().clone().replaceAll($(this));
            });
            cargoType.children('option[data-id="hk"]').each(function(){
              $(this).wrap('<span style="display: none;"></span>');
            });
            cargoType.children('option[data-id="xm"]').each(function () {
                $(this).wrap('<span style="display: none;"></span>');
            });
            break
          case '3':
            cargoType.children('span').each(function(){
              $(this).children().clone().replaceAll($(this));
            });
            cargoType.children('option[data-id="hk"]').each(function(){
              $(this).wrap('<span style="display: none;"></span>');
            });
            cargoType.children('option[data-id="tw"]').each(function () {
                $(this).wrap('<span style="display: none;"></span>');
            });
            break
          case '4':
                cargoType.children('span').each(function () {
                    $(this).children().clone().replaceAll($(this));
                });
                cargoType.children('option[data-id="hk"]').each(function () {
                    $(this).wrap('<span style="display: none;"></span>');
                });
                cargoType.children('option[data-id="tw"]').each(function () {
                    $(this).wrap('<span style="display: none;"></span>');
                });
                break
         case '5':
                cargoType.children('span').each(function () {
                    $(this).children().clone().replaceAll($(this));
                });
                cargoType.children('option[data-id="hk"]').each(function () {
                    $(this).wrap('<span style="display: none;"></span>');
                });
                cargoType.children('option[data-id="tw"]').each(function () {
                    $(this).wrap('<span style="display: none;"></span>');
                });
                break
        }
        feeaction.on('click',function(e){
          if(cargoDirection.val() != '' && cargoType.val() != '' && packageWeight.val() != ''){
            switch(cargoDirection.val()){
              case '0':
                resultHtml = '';
                break
              case '1':
                    switch(cargoType.val()){
                      case '0':
                        resultHtml = '';
                        break
                      case '1':
                        if(packageWeight.val() > '1'){
                          BUYUPFee = 16 + Math.ceil(parseFloat(packageWeight.val() - 1)) * 6;
                          QYFee = 16 + Math.ceil(parseFloat(packageWeight.val() - 1)) * 6;
                          SFFee = 32 + Math.ceil(parseFloat(packageWeight.val() - 1)) * 8;
                        } else {
                          BUYUPFee = 16;
                          QYFee = 16;
                          SFFee = 32;
                        }
                        resultHtml = '<table class="fee_table">'
                                     + '<thead><tr><th>派送快遞</th><th>費用</th></tr></thead><tbody>'
                                     + '<tr><td>BUYUP專線</td><td>'
                                     + BUYUPFee
                                     + ' RMB'
                                     + '</td></tr>'
                                     + '<tr><td>全一快递</td><td>'
                                     + QYFee
                                     + ' RMB'
                                     + '</td></tr>'
                                     + '<tr><td>順豐速遞</td><td>'
                                     + SFFee
                                     + ' RMB'
                                     + '</td></tr>'
                                     + '</tbody></table>';
                        break
                      case '2':
                        if(packageWeight.val() > '1'){
                          BUYUPFee = 16 + Math.ceil(parseFloat(packageWeight.val() - 1)) * 6 + 15;
                          QYFee = 16 + Math.ceil(parseFloat(packageWeight.val() - 1)) * 6 + 20;
                          SFFee = 32 + Math.ceil(parseFloat(packageWeight.val() - 1)) * 8;
                        } else {
                          BUYUPFee = 16;
                          QYFee = 16;
                          SFFee = 16;
                        }
                        resultHtml = '<table class="fee_table">'
                            + '<thead><tr><th>派送快遞</th><th>費用</th></tr></thead><tbody>'
                            + '<tr><td>BUYUP專線</td><td>'
                            + BUYUPFee
                            + ' RMB'
                            + '</td></tr>'
                            + '<tr><td>全一快递</td><td>'
                            + QYFee
                            + ' RMB'
                            + '</td></tr>'
                            + '<tr><td>順豐速遞</td><td>'
                            + SFFee
                            + ' RMB'
                            + '</td></tr>'
                            + '</tbody></table>';
                        break
                      case '3':
                        if(packageWeight.val() > '1'){
                          NormalFee = 11 + Math.ceil(parseFloat(packageWeight.val() - 1)) * 6;
                          QYFee = 16 + Math.ceil(parseFloat(packageWeight.val() - 1)) * 6;
                          SFFee = 32 + Math.ceil(parseFloat(packageWeight.val() - 1)) * 8;
                        } else {
                          NormalFee = 11;
                          QYFee = 16;
                          SFFee = 32;
                        }
                        resultHtml = '<table class="fee_table">'
                                     + '<thead><tr><th>派送快遞</th><th>費用</th></tr></thead><tbody>'
                                     + '<tr><td>普通自取点</td><td>'
                                     + NormalFee
                                     + ' RMB'
                                     + '</td></tr>'
                                     + '<tr><td>全一自取点</td><td>'
                                     + QYFee
                                     + ' RMB'
                                     + '</td></tr>'
                                     + '<tr><td>順豐速遞自取点</td><td>'
                                     + SFFee
                                     + ' RMB'
                                     + '</td></tr>'
                                     + '</tbody></table>';
                        break
                    }
                break
              case '2':
                    switch(cargoType.val()){
                      case '0':
                        resultHtml = '';
                        break
                        case '4':
                          //普貨本島區派送
                            if(packageWeight.val() > '1'){
                              YOTFee = 20 + Math.ceil(parseFloat(packageWeight.val() - 1)) * 14;
                            } else {
                              YOTFee = 20;
                            }
                            resultHtml = '<table class="fee_table">'
                                         + '<thead><tr><th>派送快遞</th><th>費用</th></tr></thead><tbody>'
                                         + '<tr><td>宅急便</td><td>'
                                         + YOTFee
                                         + ' RMB'
                                         + '</td></tr>'
                                         + '</tbody></table>';
                            break
                        case '5':
                        //普貨外島區派送
                            if(packageWeight.val() > '1'){
                              YOTFee = 20 + Math.ceil(parseFloat(packageWeight.val() - 1)) * 14 + 70;
                            } else {
                              YOTFee = 20+70;
                            }
                            resultHtml = '<table class="fee_table">'
                                         + '<thead><tr><th>派送快遞</th><th>費用</th></tr></thead><tbody>'
                                         + '<tr><td>宅急便或其它快遞</td><td>'
                                         + YOTFee
                                         + ' RMB'
                                         + '</td></tr>'
                                         + '</tbody></table>';
                            break
                        case '6':
                            //特貨本島區派送
                            if(packageWeight.val() > '1'){
                              YOTFee = 30 + Math.ceil(parseFloat(packageWeight.val() - 1)) * 30;
                            } else {
                              YOTFee = 30;
                            }
                            resultHtml = '<table class="fee_table">'
                                         + '<thead><tr><th>派送快遞</th><th>費用</th></tr></thead><tbody>'
                                         + '<tr><td>宅急便或其它快遞</td><td>'
                                         + YOTFee
                                         + ' RMB'
                                         + '</td></tr>'
                                         + '</tbody></table>';
                            break
                        case '7':
                            //特貨外島區派送
                        if(packageWeight.val() > '1'){
                          YOTFee = 30 + Math.ceil(parseFloat(packageWeight.val() - 1)) * 30 + 70;
                        } else {
                          YOTFee = 30+70;
                        }
                        resultHtml = '<table class="fee_table">'
                                     + '<thead><tr><th>派送快遞</th><th>費用</th></tr></thead><tbody>'
                                     + '<tr><td>宅急便或其它快遞</td><td>'
                                     + YOTFee
                                     + ' RMB'
                                     + '</td></tr>'
                                     + '</tbody></table>';
                        break
                    }
                break
              case '3':
                  switch (cargoType.val()) {
                          case '0':
                            resultHtml = '';
                            break
                          case '8':
                            if(packageWeight.val() > '1'){
                              halfWeight = Math.ceil((parseFloat(packageWeight.val() - 1)) / 0.5);
                              BUYUPFee = 38+ halfWeight * 9;
                              QYFee = 38 + halfWeight * 9;
                            } else {
                              BUYUPFee = 38;
                              QYFee = 38;
                            }
                            resultHtml = '<table class="fee_table">'
                                         + '<thead><tr><th>新加坡、馬來西亞</th><th>費用</th></tr></thead><tbody>'
                                         + '<tr><td>新馬專線</td><td>'
                                         + BUYUPFee
                                         + ' RMB'
                                         + '</td></tr>'
                                         + '</tbody></table>';
                            break
                          case '9':
                            if(packageWeight.val() > '1'){
                              halfWeight = Math.ceil((parseFloat(packageWeight.val() - 1)) / 0.5);
                              BUYUPFee = 40 + halfWeight * 10;
                              QYFee = 40 + halfWeight * 10;
                            } else {
                              BUYUPFee = 40;
                              QYFee = 40;
                            }
                            resultHtml = '<table class="fee_table">'
                                         + '<thead><tr><th>新加坡、馬來西亞</th><th>費用</th></tr></thead><tbody>'
                                         + '<tr><td>新馬專線</td><td>'
                                         + BUYUPFee
                                         + ' RMB'
                                         + '</td></tr>'
                                         + '</tbody></table>';
                            break
                        }
                  break
                case '4':
                    switch (cargoType.val()) {
                        case '0':
                            resultHtml = '';
                            break
                        case '8':
                            if (packageWeight.val() > '1') {
                                halfWeight = Math.ceil((parseFloat(packageWeight.val() - 1)) / 0.5);
                                BUYUPFee = 24 + halfWeight * 8;
                                QYFee = 24 + halfWeight * 8;
                            } else {
                                BUYUPFee =24
                                QYFee = 24;
                            }
                            resultHtml = '<table class="fee_table">'
                                         + '<thead><tr><th>新加坡、馬來西亞</th><th>費用</th></tr></thead><tbody>'
                                         + '<tr><td>新馬專線</td><td>'
                                         + BUYUPFee
                                         + ' RMB'
                                         + '</td></tr>'
                                         + '</tbody></table>';
                            break
                        case '9':
                            if (packageWeight.val() > '1') {
                                halfWeight = Math.ceil((parseFloat(packageWeight.val() - 1)) / 0.5);
                                BUYUPFee = 27 + halfWeight * 10;
                                QYFee = 27 + halfWeight * 10;
                            } else {
                                BUYUPFee = 27;
                                QYFee = 27;
                            }
                            resultHtml = '<table class="fee_table">'
                                         + '<thead><tr><th>新加坡、馬來西亞</th><th>費用</th></tr></thead><tbody>'
                                         + '<tr><td>新馬專線</td><td>'
                                         + BUYUPFee
                                         + ' RMB'
                                         + '</td></tr>'
                                         + '</tbody></table>';
                            break
                    }
                    break
                case '5':
                    switch (cargoType.val()) {
                        case '0':
                            resultHtml = '';
                            break
                        case '8':
                            if (packageWeight.val() > '1') {
                                halfWeight = Math.ceil((parseFloat(packageWeight.val() - 1)) / 0.5);
                                BUYUPFee = 35 + halfWeight * 14;
                                QYFee = 35 + halfWeight * 14;
                            } else {
                                BUYUPFee = 35;
                                QYFee = 35;
                            }
                            resultHtml = '<table class="fee_table">'
                                         + '<thead><tr><th>新加坡、馬來西亞</th><th>費用</th></tr></thead><tbody>'
                                         + '<tr><td>新馬專線</td><td>'
                                         + BUYUPFee
                                         + ' RMB'
                                         + '</td></tr>'
                                         + '</tbody></table>';
                            break
                        case '9':
                            if (packageWeight.val() > '1') {
                                halfWeight = Math.ceil((parseFloat(packageWeight.val() - 1)) / 0.5);
                                BUYUPFee = 37 + halfWeight * 15;
                                QYFee = 37 + halfWeight * 15;
                            } else {
                                BUYUPFee = 37;
                                QYFee = 37;
                            }
                            resultHtml = '<table class="fee_table">'
                                         + '<thead><tr><th>新加坡、馬來西亞</th><th>費用</th></tr></thead><tbody>'
                                         + '<tr><td>新馬專線</td><td>'
                                         + BUYUPFee
                                         + ' RMB'
                                         + '</td></tr>'
                                         + '</tbody></table>';
                            break
                    }
                    break
            }
            $('.feecalculation_result').html('');
            $('.feecalculation_result').append(resultHtml);
          }
        });
      });
    }

    feecalculation();
        // Weight Calculation
    function wgcalculation() {
        var total = 0;
        var kgweight = 0;
        var lbweight = 0;
        var inputText = $('.wgcalculation_form .input-text');
        var packageLong = $('.packageLong');
        var packageWidth = $('.packageWidth');
        var packageHeight = $('.packageHeight');
        var wgaction = $('.wgcalculation_form .wgcalculation');
        inputText.each(function (i, el) {
            $(el).keyup(function () {
                if (isNaN($(el).val())) {
                    $(el).val('');
                }
            });
        });
        wgaction.on('click', function (e) {
            if (packageLong.val() != '' && packageWidth.val() != '' && packageHeight.val() != '') {
                total = parseFloat(packageLong.val()) * parseFloat(packageWidth.val()) * parseFloat(packageHeight.val());
                kgweight = (total / 6000).toFixed(2);
                lbweight = (total / 2700).toFixed(2);
                $('.wgcalculation_result .packageWeight').text(kgweight + 'KG' + ' ' + lbweight + 'LB');
            } else
            {
                $('.wgcalculation_result .packageWeight').text('');
            }
        });
    }

    wgcalculation();

    });
    
})
(jQuery);
[ZoneTransfer]
ZoneId=3
