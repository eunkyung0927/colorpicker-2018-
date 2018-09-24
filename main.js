(function () {
    var $parent = $('.parent');

    for (var key in data) {
        var color = data[key].color;
        var name = data[key].name;

        var $child = $('<div/>', {
            class: 'child'
        }).css("background-color", color);
        var $text = $('<div/>', {
            class: 'text'
        }).text(name);
        var $button = $('<button/>', {
            class: 'copybtn'
        }).css("background-color", color).text('copy');

        $parent.append($child);
        $text.appendTo($child);
        $button.appendTo($child);
    }

    $(".child").on("click", function (e) {
        var $target = $(e.target);
        var rgbColorCode = $target.css('background-color');
        var hexColorCode = hexc(rgbColorCode);
        // input 박스로 hexcode를 전달한다.
        copytxt(hexColorCode);
        var text=randomItem(textarr);
        // make contents
        $('.screen').css('background-color', hexColorCode);
        $(".screentext1").text(text);
        $(".screentext2").text(hexColorCode);
        $('.screen').fadeIn('fast', function () {
            $(".screen").delay(500).fadeOut('slow');
        })
    });

    
    $(".child").on("click", function(e){
        var $target = $(e.target);
        var rgbColorCode = $target.css('background-color');
        var hecColorcode = hexc(rgbColorcode);
        copytxt(hecColorcode);
        var text = randomItem(textArr);
        $('.screen').fadeIn('fast',function(){
            $('.screen').delay(500).fadeOut('slow');
        })
    });
    function hexc(colorval) {
        var parts=colorval.split(',');
        parts[0]=parts[0].split('(')[1];
        for (var i = 0; i <= 2; ++i) {
            parts[i] = parseInt(parts[i]).toString(16);
            //16진법으로 변환한 코드가 한 자릿수일때 실행 
            if (parts[i].length == 1)
                parts[i] = '0' + parts[i];
        }
        return '#'+parts[0] +parts[1]+ parts[2] ;
    }
    

    function copytxt(hexCode) {
        // myInput에 hexCode 할당
        $('#myInput').val(hexCode);

        // myInput을 선택하고, 필드의 값을 복사한다.
        var copyText = document.getElementById("myInput");
        copyText.select();
        document.execCommand("copy");
    }
    var randomItem = function(a) {
        return a[Math.floor(Math.random() * a.length)];
    };
}());