var global_email = 0;
var global_reemail = 0;
var global_paw = 0;
var global_repaw = 0;
var global_tbaccount = 0;
var global_nickname = 0;
var global_confirmcode = 0;
$().ready(function () {
    rg_checkemail(),
    rg_checkreemail(),
    rg_checkpaw(),
    rg_checkrepaw(),
    rg_checktbaccount(),
    rg_checknickname(),
    rg_checkconfirmcode()
})
//=================================================
function rg_checkemail() {
    var id = "#email";
    var message_normal = "登入及會員通訊之用";
    var message_null = "電郵地址不能為空";
    var message_validformat = "電郵地址格式不正確";
    //失去焦点 进行校验
    $(id).blur(function () {
        //去除空格
        var tmpvalue = $.trim($(id).val());
        $(id).val(tmpvalue);
        if (isnotNull(id, message_null)) { global_email = 1; } else { global_email = 0; return; }
        if (isEmail(id)) { global_email = 1; } else { global_email = 0; return; }
        email_notdouble(id);
    });
    //得到焦点显示的提示信息
    $(id).focus(function () {
        showTip(id, message_normal);
    });
}
function rg_checkreemail() {
    var id = "#reemail";
    var message_normal = "請再次輸入電郵地址";
    var message_null = "電郵地址不能為空";
    var message_validformat = "電郵地址格式不正確";
    var message_noequl = "兩次電郵不一致";
    $(id).blur(function () {
        if (isnotNull(id, message_null)) { global_reemail = 1; } else { global_reemail = 0; return; }
        if (isEmail(id)) { global_reemail = 1; } else { global_reemail = 0; return; }
        if (txt_equal("#email", id, message_noequl)) { global_reemail = 1; } else { global_reemail = 0; return; }
    });

    $(id).focus(function () {
        showTip(id, message_normal);
    });
}
function rg_checkpaw() {
    var id = "#paw";
    var message_normal = "請輸入登入密碼";
    var message_null = "登入密碼不能為空";
    var message_validformat = "密碼長度必須為3~30位";
    var message_noequl = "兩次密碼不一致";
    $(id).blur(function () {
        if (isnotNull(id, message_null)) { global_paw = 1; } else { global_paw = 0; return; }
        if (txt_length(id, 3, 30, message_validformat)) { global_paw = 1; } else { global_paw = 0; return; }

    });
    $(id).focus(function () {
        showTip(id, message_normal);
    });
}
function rg_checkrepaw() {
    var id = "#repaw";
    var message_normal = "請再次輸入登入密碼";
    var message_null = "登入密碼不能為空";
    var message_validformat = "密碼長度必須為3~30位";
    var message_noequl = "兩次密碼不一致";
    $(id).blur(function () {
        if (isnotNull(id, message_null)) { global_repaw = 1; } else { global_repaw = 0; return; }
        if (txt_length(id, 3, 30, message_validformat)) { global_repaw = 1; } else { global_repaw = 0; return; }
        if (txt_equal("#paw", id, message_noequl)) { global_repaw = 1; } else { global_repaw = 0; return; }
    });
    $(id).focus(function () {
        showTip(id, message_normal);
    });
}
function rg_checktbaccount() {
    var id = "#tbaccount";
    var message_normal = "請輸入你的淘寶帳戶";
    var message_null = "淘寶帳戶不能為空";

    $(id).blur(function () {
        if (isnotNull(id, message_null)) { global_tbaccount = 1; } else { global_tbaccount = 0; return; }
        valide_ww(id);
    });
    $(id).focus(function () {
        showTip(id, message_normal);
    });
}
function rg_checknickname() {
    var id = "#nickname";
    var message_normal = "請輸入你在本網站的用戶名";
    var message_null = "本網站的用戶名不能為空";

    $(id).blur(function () {
        if (isnotNull(id, message_null)) { global_nickname = 1; } else { global_nickname = 0; return; }
    });
    $(id).focus(function () {
        showTip(id, message_normal);
    });
}
function rg_checkconfirmcode() {
    var id = "#confirmcode";
    var message_normal = "請輸入驗證碼";
    var message_null = "驗證碼不能為空";

    $(id).blur(function () {
        if (isnotNull(id, message_null)) { global_confirmcode = 1; } else { global_confirmcode = 0; return; }
        valide_confirmcode(id);
    });
    $(id).focus(function () {
        showTip(id, message_normal);
    });
}
//=================================================
//==================================================公用
function isnotNull(id, message) {
    var value = $(id).val();
    var idJS = id + "JS";
    if (value == null || value == "") {
        $(idJS).css({ "color": "#ff0877" });
        showMessage(idJS, message);
        return false;
    }
    else {
        showMessage(idJS, "");
        showPic(idJS);
        return true;
    }
}
function isEmail(id) {
    var email = $(id).val();
    var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
    var idJS = id + "JS";
    if (reg.test(email)) {
        showMessage(idJS, "");
        showPic(idJS);
        return true;
    }
    else {
        $(idJS).css({ "color": "#ff0877" });
        showMessage(idJS, "Email格式不正確");
        return false;
    }
}
function txt_equal(id1, id2, message) {
    var idJS2 = id2 + "JS";
    var value1 = $(id1).val();
    var value2 = $(id2).val();
    if (value1 != value2) {
        showMessage(idJS2, message);
        $(idJS2).css({ "color": "#ff0877" });
        return false;
    } else {
        showMessage(idJS2, "");
        showPic(idJS2);
        return true;
    }
}
function txt_length(id, min, max, message) {
    var idJS = id + "JS";
    var value = $(id).val();
    if (value.length < min || value.length > max) {
        $(idJS).css({ "color": "#ff0877" });
        showMessage(idJS, message);
        return false;
    }
    else {
        showMessage(idJS, "");
        showPic(idJS);
        return true;
    }
}
function email_notdouble(id) {
    $.ajax({
        type: "post",
        data: { "paraname": "email", "paravalue": $(id).val() },
        url: "account/checkdouble_account.ashx",
        //当通过ajax异步调用成功时，会调用 success函数
        success: function (data) {
            if ("true" == data) {
                showMessage("#emailJS", "電郵已被登記，請更換電郵");
                $("#emailJS").css({ "color": "#ff0877" });
                global_email = 0;
            }
            else {
                showMessage("#emailJS", "恭喜你，此電郵可以登入使用");
                $("#emailJS").css({ "color": "green" });
                global_email = 1;
            }
        },
        //当通过ajax异步调用出错时，会调用 error函数 
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
            global_email = 0;
        }
    });
}
function valide_ww(id) {
    $.ajax({
        type: "post",
        data: { "paraname": "tb_account", "paravalue": $(id).val() },
        url: "account/checkdouble_account.ashx",
        success: function (data) {
            if ("true" == data) {
                showMessage("#tbaccountJS", "淘寶旺旺已被登記");
                $("#tbaccountJS").css({ "color": "#ff0877" });
                global_tbaccount = 0;
            }
            else {
                showMessage("#tbaccountJS", "恭喜你，此淘寶旺旺可以登記使用");
                $("#tbaccountJS").css({ "color": "green" });
                global_tbaccount = 1;
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
            global_tbaccount = 0;
        }
    });
}
function valide_confirmcode(id) {
    $.ajax({
        type: "post",
        data: { "paravalue": $(id).val() },
        url: "account/check_confirmcode.ashx",
        success: function (data) {
            if ("true" == data) {
                showMessage("confirmcodeJS", "");
                showPic(id);
                global_confirmcode = 1;
            }
            else {
                showMessage("#confirmcodeJS", "驗證碼輸入錯誤");
                $("#confirmcodeJS").css({ "color": "#ff0877" });
                global_confirmcode = 0;
            }
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
            global_confirmcode = 0;
        }
    });
}
function showTip(id, messageTip) {
    var idJS = id + "JS";
    $(idJS).css({ "color": "black" });
    showMessage(idJS, messageTip);
}
//showMessage工具方法，显示某id需要显示的信息  
function showMessage(id, message) {
    $(id).html(message);

}
function showPic(id) {
    $(id).append("<img src='images/ok_b.png'></img>");
}

//==================================================公用
function doSubmit() {
    if (global_email == 1 && global_reemail == 1 && global_paw == 1 && global_repaw == 1 && global_tbaccount == 1 && global_confirmcode == 1) 
    {
        if ($("#allowsendmail").attr("checked") && $("#acceptgerule").attr("checked")) {

            doRegisterCheck();
            return true;
        }
        else {
            alert("請溝選 同意我們的條付款及發送郵件");
            return false;
        }
    }
    else {
        alert("還有內容未輸入");
        return false;
    }
}

function doRegisterCheck() {
    var accpt_normal;
    var accpt_mail;
    if ($("#allowsendmail").attr("checked")) { accpt_normal = 1 } else { accpt_normal = 0 };
    if ($("#acceptgerule").attr("checked")) { accpt_mail = 1 } else { accpt_mail = 0 };

    $.ajax({
        url: 'account/register_ac.ashx?type=2',
        type: 'post',
        data: {
            "email_r": $("#email").val(),
            "password_r": $("#paw").val(),
            "tbaccount_r": $("#tbaccount").val(),
            "nickname_r": $("#nickname").val(),
            "tbaccount_r": $("#tbaccount").val(),
            "introducer_r": $("#introducer").val(),
            "accptnormal_r": accpt_normal,
            "accptmail_r": accpt_mail
        },
        success: function (data) {
            if (1 == data) {
                
                //$("#email").val("");
                //$("#reemail").val("");
                //$("#paw").val("");
                //$("#repaw").val("");
                //$("#tbaccount").val("");
                //$("#nickname").val("");
                //$("#confirmcode").val("");
                //$("#introducer").val("");
                //$("#allowsendmail").attr("checked", false);
                //$("#acceptgerule").attr("checked", false);
                location.href="register_finish.html?email=" + $("#email").val();
            }
            else
            { alert('註冊失敗,網絡問題或你註冊的電郵是非法電郵'); }
        },
        //error: function (err) {alert('註冊失敗2');}
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
            global_confirmcode = 0;
        }
    });
}
function changepic() {
    var imgctrl = document.getElementById("img1");
    imgctrl.src = "image.aspx?" + Math.random();
}
function Button1_onclick() {
    alert(valid_email("#email"));
}