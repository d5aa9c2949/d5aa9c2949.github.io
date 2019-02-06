

function PopupCenter(pageURL, title, w, h) {
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    window.open(pageURL, title, 'width=' + w + ', height=' + h + ',scrollbars=no, top=' + top + ', left=' + left);
    event.returnValue = false;
    return false;
}


function PopupCenterWithScroll(pageURL, title, w, h) {
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    // window.open(pageURL, title, 'width=' + w + ', height=' + h + ',scrollbars=yes, top=' + top + ', left=' + left);
    window.open(pageURL, title, 'width=' + w + ', height=' + h + ',scrollbars=yes,_parent , top=' + top + ', left=' + left);
    event.returnValue = false;
    return false;
}

function PopupCurrentStatus(pageURL, title) {
    var w = 1000;
    var h = 220;
    var left = (screen.width / 2) - (w / 2);
    var top = (screen.height / 2) - (h / 2);
    window.open(pageURL, title, 'width=' + w + ', height=' + h + ',scrollbars=yes, top=' + top + ', left=' + left);
    event.returnValue = false;
    return false;
}

function getY(oElement) {
    var iReturnValue = 0;
    while (oElement != null) {
        iReturnValue += oElement.offsetTop;
        oElement = oElement.offsetParent;
    }
    return iReturnValue;
}

function getX(oElement) {
    var iReturnValue = 0;
    while (oElement != null) {
        iReturnValue += oElement.offsetLeft;
        oElement = oElement.offsetParent;
    }
    return iReturnValue;
}

function isNKey(evt) {
    var bool = true;
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        alert("·« Ì”„Õ »€Ì— «·√—ﬁ«„ !");
        bool = false;
    }
    return bool;
}
// added by Matroud 28_10_1436
// function to make button disable
function DisableButton(objName)
{
    document.getElementById(objName.id).disabled = true;    
    msg = 'Please Wait!';
    document.getElementById(objName).value = msg;   
}
// added by Matroud 8-9-2015
// Function to close popup window and refresh the parent window
function closeAndRefreshParent() {
    window.opener.location.reload(true);
    window.close();
}

function notifySuccess(text) {
    var n = noty({
        text: text,
        type: "success",
        dismissQueue: true,
        layout: 'center',
        closeWith: ['click'],
        theme: 'relax',
        maxVisible: 10,
        animation: {
            open: 'animated slideInDown',
            close: 'animated slideOutUp',
            easing: 'swing',
            speed: 500
        }
    });
    //console.log('html: ' + n.options.id);
    return n;
}

function notifyError(text) {
    var n = noty({
        text: text,
        type: "error",
        dismissQueue: true,
        layout: 'center',
        closeWith: ['click'],
        theme: 'relax',
        maxVisible: 10,
        animation: {
            open: 'animated slideInDown',
            close: 'animated slideOutUp',
            easing: 'swing',
            speed: 500
        }
    });
    //console.log('html: ' + n.options.id);
    return n;
}