$(document).ready(function () {
    init();
});
function init() {
    addTeacher();
    closeForm();
    dblClick();
    dataTable();
    manage();
}
function addTeacher() {
    $(".add").click(function () {
        $(".addnew").css("display", "flex");
    })
}
function closeForm() {
    $(".teacher--close").click(function () {
        $(".addnew").css("display", "none");
    })
    $(".close--form").click(function () {
        $(".addnew").css("display", "none");
    })
}
function dblClick() {

    try {

        // thay đổi backgound khi click chuột vào các giá trị của bảng giáo viên
        // click ngoài table thì background trở về màu ban đầu
        $(".maincontent--table table tr ").click(function () {
            let ele = $(this).children();
            let curent = $(this).siblings();
            if (!$(ele[0]).is('th')) {
                curent.children().css("background-color", '#FFFFFF');
                ele.css("background-color", '#F5F6FA');
                $("body").click(function (event) {

                    if (!$(event.target).is('td')) {
                        ele.css("background-color", "#FFFFFF");

                    }

                })
            }


        })

        // double click hiển thị form để edit
        $(".maincontent--table table tr ").dblclick(function () {
            if (!$(this).children().is('th')) {
                $(".addnew").css("display", "flex");
            }
        })

    } catch (error) {
        console.log("error")
    }
}
/*
Author: Vxhieu
5-11-2002
*/
function dataTable() {
    try {
        $.ajax({
            type: "GET",
            url: "https://amis.manhnv.net/api/v1/Departments",
            data: "data",
            dataType: "json",
            success: function (response) {
                console.log(response)
            },
            error: function (status, error) {
                console.log(status + error);
            }
        });
    } catch (error) {
        console.log(error);
    }
}
/*
Author: Võ Xuân Hiếu
7/11/2002
*/
function manage() {
    // click icon edit mở form sửa
    // click icon delete thực hiện chức năng xoá và hiện thông báo
    try {
        $(".manage--edit").click(function () {
            console.log();
            $(".manage--edit").css("background-color", "black")
        })
    } catch (error) {
        console.log(error);
    }
}