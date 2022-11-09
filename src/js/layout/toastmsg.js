$(document).ready(function () {
    $(".export").click(function () {
        generateToastLink("noti");
        $(".toastmsg").show().delay(5000).fadeOut(1000);
        removeToast();
    })
})
function generateToast(type) {
    $("body").append("<div class='toastmsg'></div>");
    $(".toastmsg").append("<div class='wraptoast'></div>")
    $(".wraptoast").append("<div class='toastmsg--color'></div>");
    $(".wraptoast").append("<div class='toastmsg--content'></div>");
    $(".toastmsg--content").append("<div class='toastmsg--content__status'></div>");
    $(".toastmsg--content").append("<div class='toastmsg--content__title'></div>");
    $(".toastmsg--content__title").append("<h3 class='title--status'>Thành công</h3>");
    $(".toastmsg--content__title").append("<p class='content--status'></p>");
    let color_status = $(".toastmsg--color");
    let status = $(".title--status");
    let content_status = $(".content--status");
    let icon_status = $(".toastmsg--content__status");

    switch (type) {
        case 'success':
            status.text("Thành công");
            content_status.text("Đã gửi thông báo cho phụ huynh");
            color_status.css("background-color", "#03AE66");
            icon_status.prepend(
                $('<img>', { src: './assets/Icons/ic_ToastMessage_Success.png' })
            );
            break;
        case 'error':
            status.text("Lỗi");
            content_status.text("Error Message");
            color_status.css("background-color", "#FA3939");
            icon_status.prepend(
                $('<img>', { src: './assets/Icons/ic_ToastMessage_Fail.png' })
            );
            break;
        case 'warning':
            status.text("Cảnh báo");
            content_status.text("Warning Message");
            color_status.css("background-color", "orange");
            icon_status.prepend(
                $('<img>', { src: './assets/Icons/ic_ToastMessage_Warning.png' })
            );
            break;
        case 'noti':
            status.text("Thông báo");
            content_status.text("Notification Message");
            color_status.css("background-color", "#0997EB");
            icon_status.prepend(
                $('<img>', { src: './assets/Icons/ic_ToastMessage_Info.png' })
            );
            break;

    }

}

function generateToastLink(type) {
    generateToast(type);
    $(".wraptoast").append('<div class="toastmsg--close"></div>');
    $(".toastmsg--close").prepend(
        $('<img>', { src: './assets/Icons/ic_X_2.png' })
    );
    let count = 0;
    console.log($(".toastmsg--close").click(function () {
        count += 1;
    }
    ));
    count == 1 ? removeToast() : "";
    // setTimeout(function () {
    //     $(".toastmsg").remove();
    // }, 5000);


}
function removeToast() {
    $(".toastmsg--close").click(function () {
        $(".toastmsg").show().fadeOut(1000);
    });

}