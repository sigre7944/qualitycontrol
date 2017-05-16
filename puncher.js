        function punch () {
            console.log("punch");
            $('.puncher').animate({top: 30}, {
                duration: 100,
                complete: function() {
                    $('.puncher').animate({top: -30}, {
                        duration: 100
                    });
                }
            });
        }

       $(document).keydown(function(e) {
                    if (e.keyCode == 32) {
                        punch();
                        var pos = $('.puncher').position().left;
                        for (var i = 0; i<washers.length; i++)
                        {
                          if (washers[i].x >= pos - 90 && washers[i].x <= pos)
                          {
                            intercept(washers[i]);
                          }
                        }
                    }
                });

       function intercept(convey)
       {
                    $(convey.div).css("background", "blue");
                    var pos = $(convey.div).position().left;
                    qualityCheck(pos);
                    drawGraph();
                    $('<div/>').text('exiting loop').appendTo($('.monitor'));
                    console.log(samples);
                    console.log("------------------");
                    $("#score").text(totalScore + " ");
       }

       function qualityCheck(washerPos) {
          samples.push(washerPos);
          var pos = $('.puncher').position().left;
          var targetVal = pos - 45;
          if (washerPos <= targetVal + 5 && washerPos >= targetVal - 5) {
              totalScore += 10;
          } else
          if (washerPos <= pos && washerPos >= pos - 90) {
            totalScore += 5;
          }
       }