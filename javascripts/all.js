window.codewithoutrules = {};

codewithoutrules.ready = function() {
    if (matchMedia) {
        var mq = window.matchMedia("(max-width: 700px)");
        mq.addListener(big_or_small);
        big_or_small(mq);
    }


    function big_or_small(mq) {
        if (mq.matches) {
	    $("#toc").removeClass("visible");
        } else {
            $("#toc").addClass("visible");
        }
    }

    $("#sidebar-menu-button").click(function() {
        $("#toc").sidebar("show");
    }).end();
}

$(document).ready(codewithoutrules.ready);
