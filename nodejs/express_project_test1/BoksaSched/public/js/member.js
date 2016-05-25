(function($) {

    var gMemberList = [];
    var gOrgColor;

    var addMemberList = function(newMemberName) {
        // check name duplication
        gMemberList.sort();

        var ret = $.inArray(newMemberName, gMemberList);
        if( ret >= 0 ) {
            var errText = newMemberName + " already exists in (" + (ret + 1) + ")";
            $(".errArea").append(errText);
            return;
        }
        
        gMemberList.push(newMemberName);
        gMemberList.sort();
    }

    var showMemberSchedule = function(membName) {
        var curDate = new Date();
        var month = curDate.getMonth();
        var year = curDate.getFullYear();
        var firstWeekday = new Date(year, month, 1).getDay();
        var lastDateOfMonth = new Date(year, month + 1, 0).getDate();
        var offsetDate = curDate.getDate() + firstWeekday - 1;
        var index = 1;
        var weeksInMonth = index + Math.ceil((lastDateOfMonth + firstWeekday - 7) / 7);
        var week = index + Math.floor(offsetDate / 7);

        makeMonthCalTable(membName, curDate);
    }

    var makeMonthCalTable = function(membName, dateObj) {
        var month = dateObj.getMonth();
        var fullYear = dateObj.getFullYear();
        var date = dateObj.getDate();
        var weekStr = ["일", "월", "화", "수", "목", "금", "토"];

        var cal = $("#scheduleCalendar");
        var horizontal = 7;
        var vertical = 6;
        
        cal.append(membName + " 복사스케줄");
        cal.append("<header>" + fullYear + "." + (month+1) + "</header>");
        cal.append("<table>")

        for(var i=0; i<vertical; i++) {
            (function(idx) {
                cal.append("<tr>");

                for(var j=0; j<horizontal; j++) {
                    (function(jdx) {
                        // console.log("=====> " + idx + ", " + jdx + " : " + weekStr[jdx]);
                        if( idx == 0 ) {
                            cal.append("<td>" + weekStr[jdx] + "</td>");
                        } else {
                            cal.append("<td>" + idx + "," + jdx + "</td>");
                        }
                    }(j));
                }

                cal.append("</tr>");
            }(i));
        }

        cal.append("</table>")
    }

    var showMemberList = function(memberList) {
        console.log(memberList.length);

        for(var i=0; i<memberList.length; i++) {
            $("#memberList").append("<li class='memberName'>" + memberList[i] + "</li>");
        }

        $(".memberName").on("mouseover", function() {
            gOrgColor = $(this).css("background-color");
            $(this).css("background-color", "yellow");
        });

        $(".memberName").on("mouseout", function() {
            $(this).css("background-color", gOrgColor);
        });

        $(".memberName").on("click", function() {
            showMemberSchedule( $(this).text() );
        });
    }

    $(".add-member-name-text").focus();

    $(".add-member-name-text").on("keypress", function(e) {
        if( e.which === 13 ) {
            $("#memberList").empty();
            $(".errArea").empty();
            
            var newMembName = $(".add-member-name-text").val();

            if( newMembName !== "" ) {
                addMemberList(newMembName);

                $(".add-member-name-text").val("");
            }
            
            showMemberList(gMemberList);

            e.preventDefault();
            return false;
        }
    });

    $(".add-member-btn").click( function() {
        $("#memberList").empty();
        $(".errArea").empty();

        var newMembName = $(".add-member-name-text").val();

        if( newMembName !== "" ) {
            addMemberList(newMembName);

            $(".add-member-name-text").val("");
        }
        
        showMemberList(gMemberList);
    });

}(jQuery));
