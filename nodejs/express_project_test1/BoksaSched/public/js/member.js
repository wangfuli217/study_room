(function($) {

    var weekStr = ["일", "월", "화", "수", "목", "금", "토"];
    var gOrgColor;
    var basicMisaSched = [ 
        [ 
            {"Number":"4", "Time":"9"},
            {"Number":"4", "Time":"11"},
            {"Number":"4", "Time":"19"}, 
        ],  // Sunday
        [ 
            {"Number":"2", "Time":"6"},
        ],  // Monday
        [ 
            {"Number":"2", "Time":"19"},
        ],  // Tuesday
        [ 
        ],  // Wendsday
        [ 
            {"Number":"2", "Time":"19"},
        ],  // Thursday
        [ 
        ],  // Friday
        [ 
            {"Number":"4", "Time":"19"},
        ],  // Saturday
    ];

    var gMemberList = [
        {"member_name":"이준하", "grade":"초등학생", "exception":"없음"},
        {"member_name":"이현우", "grade":"초등학생", "exception":"없음"},
        {"member_name":"김현욱", "grade":"초등학생", "exception":"없음"},
        {"member_name":"이지항", "grade":"초등학생", "exception":"없음"},
        {"member_name":"김수진", "grade":"중학생" , "exception":"없음"}
    ];

    var gTempRandomMemb = [];

    // 주말 청소년 미사는 중학생만 복사
    // 평일 미사 복사는 2 명
    // 주말 미사는 4 명
    // 중학생은 평일미사는 안함 (월요일 새벽미사만 빼고)
    // 특정한 아이는 학원때문에 주중미사를 계속 못하는 경우가 있음.

    // 예외 종류
    // 평일 제외
    // 주말 제외
    // 매주 월 제외
    // 매주 화 제외
    // 매주 목 제외
    // 매주 토요일 제외
    // 매주 일요일 제외
    // 이번달 특정일 제외

    var addMemberList = function(newMemberName, grade) {
        // check name duplication
        gMemberList.sort();

        for(var i=0; i<gMemberList.length; i++) {
            if( newMemberName == gMemberList[i].member_name ) {
                var errText = newMemberName + " already exists in (" + (i + 1) + ")";
                $(".errArea").append(errText);
                return;
            }
        }

        gMemberList.push({'member_name':newMemberName, 'grade':grade});
        gMemberList.sort();
    }

    var getRandom = function(number) {
        return Math.floor((Math.random() * 1000) % number);
    }

    var makeMonthSched = function(membArr) {
        var membList = gMemberList.slice();
    }

    var showMemberSchedule = function(membName) {
        var thisMonth = new Date();
        var nextMonth = new Date(thisMonth.yyyy(), thisMonth.mm());

        makeMonthCalTable(membName, thisMonth);
        makeMonthCalTable(membName, nextMonth);
    }

    var getTodaySched = function(day) {
        var sched = "";

        if( basicMisaSched[day].length > 0 ) {
            for(var i = 0; i < basicMisaSched[day].length; i++ ) {
                sched += basicMisaSched[day][i].Time + "<br>";
            }
            return sched;
        } else {
            return "";
        }
    }

    Date.prototype.yyyy = function() {
        return this.getFullYear().toString();
    };

    Date.prototype.mm = function() {
        return (this.getMonth()+1).toString(); // getMonth() is zero-based
    };

    Date.prototype.yyyymmdd = function() {
        var yyyy = this.getFullYear().toString();
        var mm = (this.getMonth()+1).toString(); // getMonth() is zero-based
        var dd  = this.getDate().toString();
        return yyyy + (mm[1]?mm:"0"+mm[0]) + (dd[1]?dd:"0"+dd[0]); // padding
    };

    var makeMonthCalTable = function(membName, dateObj) {
        var mm = dateObj.getMonth();
        var yyyy = dateObj.getFullYear();
        var dd = dateObj.getDate();
        var firstWeekday = new Date(yyyy, mm, 1).getDay();
        var lastDateOfMonth = new Date(yyyy, mm + 1, 0).getDate();

        console.log(firstWeekday + ", " + lastDateOfMonth);

        var gTempRandomMemb = gMemberList.slice();

        var cal = $("#scheduleCalendar");
        var day = 7;
        var week = 6;

        var tableStr = "";
        
        tableStr = tableStr.concat(membName + " 복사스케줄");
        tableStr = tableStr.concat("<header>" + yyyy + "." + (mm+1) + "</header>");
        tableStr = tableStr.concat("<table>")

        tableStr = tableStr.concat("<tr>");
        for(var i=0; i<day; i++) {
            (function(idx) {
                var holidayStr = "";
                if( idx == 0 || idx == 6 ) {
                    holidayStr = "holiday";
                }
                tableStr = tableStr.concat("<td id='head-td'>"
                                           + "<div class='" + holidayStr + "'>" 
                                           + weekStr[idx] 
                                           + "</div>"
                                           + "</td>");
            }(i));
        }
        tableStr = tableStr.concat("</tr>");

        var mmDay = 0;
        
        for(var i=0; i<week; i++) {
            (function(idx,year,mm) {
                tableStr = tableStr.concat("<tr>");

                for(var j=0; j<day; j++) {
                    (function(jdx) {
                        var todaySched = getTodaySched(jdx);
                        var holidayStr = "";

                        if( (mmDay >= lastDateOfMonth) ||
                            ((idx == 0) && (jdx < firstWeekday)) ) {
                            tableStr = tableStr.concat("<td>");
                            tableStr = tableStr.concat("<div class='no-date'></div>");
                            tableStr = tableStr.concat("</td>");
                            return;
                        }

                        ++mmDay;
                        var d = new Date(yyyy, mm, mmDay)
                        var td = "<td id='" + d.yyyymmdd() + "'>";

                        if( jdx == 0 || jdx == 6 ) {
                            holidayStr = "holiday";
                        }
                        td += "<div class='yes-date "+ holidayStr + "' id='"+ d.yyyymmdd() + "'>"
                                        + d.yyyymmdd().substr(6,2)
                                        + "</div>"
                                        + "<div class='today-sched'>"
                                        + todaySched
                                        + "</div>";
                        td += "</td>";

                        tableStr = tableStr.concat(td);
                    }(j));
                }

                tableStr = tableStr.concat("</tr>");

            }(i,yyyy,mm));
        }

        tableStr = tableStr.concat("</table>")

        cal.append(tableStr);
    }

    var showMemberList = function(memberList) {
        console.log(memberList.length);

        for(var i=0; i<memberList.length; i++) {
            $("#memberList").append("<li class='memberName'>" 
                                    + memberList[i].member_name 
                                    + ", "
                                    + memberList[i].grade 
                                    + "</li>");
        }

        $(".memberName").on("mouseover", function() {
            gOrgColor = $(this).css("background-color");
            $(this).css("background-color", "yellow");
        });

        $(".memberName").on("mouseout", function() {
            $(this).css("background-color", gOrgColor);
        });

        $(".memberName").on("click", function() {
            $("#scheduleCalendar").empty();
            showMemberSchedule( $(this).text() );
        });
    }

    $(".add-member-name-text").focus();

    $(".add-member-name-text").on("keypress", function(e) {
        if( e.which === 13 ) {
            $("#memberList").empty();
            $(".errArea").empty();
            
            var newMembName = $(".add-member-name-text").val();
            var grade = $( "#grade option:selected" ).text();

            if( newMembName !== "" ) {
                addMemberList(newMembName, grade);

                $(".add-member-name-text").val("");
            }
            
            showMemberList(gMemberList);

            e.preventDefault();
            return false;
        }
    });

    showMemberList(gMemberList);

    $(".add-member-btn").click( function() {
        $("#memberList").empty();
        $(".errArea").empty();

        var newMembName = $(".add-member-name-text").val();
        var grade = $( "#grade option:selected" ).text();

        if( newMembName !== "" ) {
            addMemberList(newMembName, grade);

            $(".add-member-name-text").val("");
        }
        
        showMemberList(gMemberList);
    });

}(jQuery));
