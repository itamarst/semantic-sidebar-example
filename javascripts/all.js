window.codewithoutrules = {};

codewithoutrules.ready = function() {
    $("#toc").sidebar("setting", "dimPage", false);
    if (matchMedia) {
        var mq = window.matchMedia("(max-width: 700px)");
        mq.addListener(big_or_small);
        big_or_small(mq);
    }


    function big_or_small(mq) {
        // The sidebar *pushes* the pusher, the main content, so we
        // add a class that reduces the pusher's width so the edge
        // content isn't cut off.
        if (mq.matches) {
	    $("#toc").sidebar("hide");
            $("#main").removeClass("shrink")
        } else {
            $("#toc").sidebar("show");
            $("#main").addClass("shrink");
        }
    }

    $("#sidebar-menu-button").click(function() {
        $("#toc").sidebar("show");
    }).end();
}

$(document).ready(codewithoutrules.ready);
