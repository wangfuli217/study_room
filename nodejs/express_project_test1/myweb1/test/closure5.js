var clotest = function(obj) {
    return {
        get_val: function() {
            return obj.val;
        },
        set_val: function(myval) {
            return obj.val = myval;
        }
    };
};

var aa = clotest({val: 111});

console.log(aa.get_val());
aa.set_val(222);
console.log(aa.get_val());
