$(function () {
    //点击icon模块
    $('.iconList li').click(function (event) {
        $(this).addClass('current').siblings('').removeClass('current');
        $('.iconList li a').css('visibility', 'hidden');
        $(this).find('a').css('visibility', 'visible');
        $('.iconList li a').eq(0).css('visibility', 'visible');
        $('.iconList li a').eq(7).css('visibility', 'visible');
        $('.iconList li a').eq(8).css('visibility', 'visible');
        var icon_num = $(this).index();
        $('.live_type').eq(icon_num).css('display', 'block').siblings('').css('display', 'none');


    });
    var j = 0;
    $('.language_converter').click(function (event) {
        j++;
        if (j == 1) {
            $(this).css('background', '#FFAA00');
        } else {
            $(this).css('background', '');
            j = 0;
        }
        ;

    });


    //点击日期展示分类模块信息
    var i = 0;
    $('.games_lists ol').click(function (event) {
        i++;
        if (i == 1) {
            $(this).addClass('current_time').siblings('ol').removeClass('current_time');
            $(this).next('div.drop_bar_box').addClass('current_list').siblings('div').removeClass('current_list');

        } else {
            $(this).removeClass('current_time');
            $(this).next('div.drop_bar_box').removeClass('current_list');
            i = 0;
        }
        ;

    })

    //自定义滚动条

    //drop_box(".football_drop_box>.bar",".football_drop_box ul",".football_drop_box");
    //drop_box(".hh",".lving_drop_box ul",".lving_drop_box");
   /* $('.bar').mousedown(function (event) {
        $('.bar').css('opacity', 1);
		var _this = $(this);
        $(document).mousemove(function (event) {

            var y = event.pageY - 100 - 1;
            if (y < 0) {
                y = 0;
            }
			var h = parseInt($(_this).parent(".drop_bar_box").children("ul").height());
            if (y > h - 30) {
                y = h-30;
            }
            $('.bar').css('top', y);
            //计算出比例：小滑块的top值	/ 小滑块可以移动的最大距离
            var biLi = y / (h - 30);
            //再用比例 * 内容可以移动的最大距离：禁止留白减去300
            var s = biLi * ($('.con').height() - 300);
            //$('.drop_bar_box ul').css('top', s);
			$(_this).parent(".drop_bar_box").children("ul").css('top', s);
        });

        return false;

    })

    $(document).mouseup(function (event) {
        $(document).off('mousemove');
    });

    $('.drop_bar_box ul').mousewheel(function (event, delta) {


        //自定义一个移动距离
        var s = delta * 100;
        var prevTop = parseInt($('.drop_bar_box ul').css('top'));
        var lastTop = prevTop + s;
        if (lastTop > 0) {
            lastTop = 0;
        }
        if (lastTop < -($('.drop_bar_box ul').height() - 300)) {
            lastTop = -($('.drop_bar_box ul').height() - 300);
        }
        $('.drop_bar_box ul').css('top', lastTop);

        //计算出比例：内容的top值	/ 内容可以移动的最大距离：禁止留白减去300
        var biLi = (-lastTop) / ($('.con').height() - 300);
        //再用比例 * 滑块可以移动的最大距离（减30）
        var barTop = biLi * 270;
        $('.bar').css('top', barTop);

        return false;


    });*/

});


