            
function onConnectDone(res)
{
    if(res == AppWarp.ResultCode.Success)
    {
        $("#Info").html("Connected");
        console.log("Connected")
    }
    else if(res == AppWarp.ResultCode.AuthError)
    {
        $("#Info").html("AuthError");
        console.log("AuthError");
    }
    else if(res == AppWarp.ResultCode.ResourceNotFound)
    {
        $("#Info").html("ResourceNotFound");
        console.log("ResourceNotFound");
    }
    else if(res == AppWarp.ResultCode.ResourceMoved)
    {
        $("#Info").html("ResourceMoved");
        console.log("ResourceMoved");
    }
    else if(res == AppWarp.ResultCode.BadRequest)
    {
        $("#Info").html("BadRequest");
        console.log("BadRequest");
    }
    else if(res == AppWarp.ResultCode.UnknownError)
    {
        $("#Info").html("UnknownError");
        console.log("UnknownError");
    }
    else if(res == AppWarp.ResultCode.ResultSizeError)
    {
        $("#Info").html("ResultSizeError");
        console.log("ResultSizeError");
    }
    else if(res == AppWarp.ResultCode.SuccessRecovered)
    {
        $("#Info").html("SuccessRecovered");
        console.log("SuccessRecovered");
    }
    else if(res == AppWarp.ResultCode.ConnectionErrorRecoverable)
    {
        $("#Info").html("ConnectionErrorRecoverable");
        console.log("ConnectionErrorRecoverable");
    }
    else if(res == AppWarp.ResultCode.UserPausedError)
    {
        $("#Info").html("UserPausedError");
        console.log("UserPausedError");
    }
    else if(res == AppWarp.ResultCode.AutoRecovering)
    {
        $("#Info").html("AutoRecovering");
        console.log("AutoRecovering");
    }
}

function onDisconnectDone(res) {
    if(res == AppWarp.ResultCode.Success)
    {
        $("#Info").html("Disconnected");
        $("#nameText").val('');
        $("#nameRow").show();
        $("#roomsRow").hide();
    }
    else
    {
        $("#Info").html("Error in disconnection");
    }
		
}

function onUserStatusDone(user) {
    $("#Info").append("</br>onUserStatusDone : " + user.res +"</br>   Status:"+user.json.status);
    if(user.json.username!=undefined){
        $("#Info").append("</br>username:"+user.json.username)
    }
}
   
function onGetOnlineUsersDone(user){
    $("#Info").append("<br>onGetOnlineUsersDone : " + user.res);
    if(user.res == AppWarp.ResultCode.Success)
    {
        if(user.json){
            $("#Info").append("</br> userList:<br>")
            var str = user.json.names.split(";");
            for(var i=0;i<str.length;i++){
                $("#Info").append("&nbsp;&nbsp;&nbsp;"+str[i]+"</br>")
            }
        }
    }
}  

function onGetLiveUserInfoDone(user){
    $("#Info").append("<br>onGetLiveUserInfoDone : " + user.res);
    if(user.res == AppWarp.ResultCode.Success)
    {
        if(user.json){
            $("#Info").append("</br> info:<br>")
            if(user.json.name){
                $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+user.json.name+"</br>")
            }
            if(user.json.custom){
                $("#Info").append("&nbsp;&nbsp;&nbsp;custom:"+user.json.custom+"</br>")
            }
        }
    }
}
function onGetLiveRoomInfoDone(room){
   
    $("#Info").append("<br>onGetLiveRoomInfoDone : " + room.res);
    if(room.res == AppWarp.ResultCode.Success)
    {
        if(room.json){
            $("#Info").append("</br> info:<br>")
            if(room.json.id){
                $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+room.json.id+"</br>")
            }
            if(room.json.lockProperties){
                $("#Info").append("&nbsp;&nbsp;&nbsp;lockProperties:"+room.json.lockProperties+"</br>")
            }
            if(room.json.maxUsers){
                $("#Info").append("&nbsp;&nbsp;&nbsp;maxUsers:"+room.json.maxUsers+"</br>")
            }
            if(room.json.name){
                $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+room.json.name+"</br>")
            }
            if(room.json.owner){
                $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+room.json.owner+"</br>")
            }
            if(room.json.properties){
                $("#Info").append("&nbsp;&nbsp;&nbsp;properties:"+room.json.properties+"</br>")
            }
            if(room.json.usernames){
                $("#Info").append("&nbsp;&nbsp;&nbsp;usernames:"+room.json.usernames+"</br>")
            }
        }
    }
    //scroll at bottom
    var objDiv = document.getElementById("Info");
    objDiv.scrollTop = objDiv.scrollHeight;
    
}

function onGetLiveLobbyInfoDone(lobby){
    $("#Info").append("<br>onGetLiveUserInfoDone : " + lobby.res);
    if(lobby.json){
        $("#Info").append("</br> info:<br>")
        if(lobby.json.id){
            $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+lobby.json.id+"</br>")
        }
        if(lobby.json.lockProperties){
            $("#Info").append("&nbsp;&nbsp;&nbsp;lockProperties:"+lobby.json.lockProperties+"</br>")
        }
        if(lobby.json.maxUsers){
            $("#Info").append("&nbsp;&nbsp;&nbsp;maxUsers:"+lobby.json.maxUsers+"</br>")
        }
        if(lobby.json.name){
            $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+lobby.json.name+"</br>")
        }
        if(lobby.json.owner){
            $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+lobby.json.owner+"</br>")
        }
        if(lobby.json.properties){
            $("#Info").append("&nbsp;&nbsp;&nbsp;properties:"+lobby.json.properties+"</br>")
        }
        if(lobby.json.usernames){
            $("#Info").append("&nbsp;&nbsp;&nbsp;usernames:"+lobby.json.usernames+"</br>")
        }
    }
    //scroll at bottom
    var objDiv = document.getElementById("Info");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function onCreateRoomDone(room){
    $("#Info").append("<br>onCreateRoomDone : " + room.res);
    if(room.res == AppWarp.ResultCode.Success)
    {
        if(room.json){
            $("#Info").append("</br> info:<br>")
            if(room.json.id){
                $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+room.json.id+"</br>")
            }
            if(room.json.maxUsers){
                $("#Info").append("&nbsp;&nbsp;&nbsp;max users:"+room.json.maxUsers+"</br>")
            }
            if(room.json.name){
                $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+room.json.name+"</br>")
            }
            if(room.json.owner){
                $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+room.json.owner+"</br>")
            }
        }
       
    }
    //scroll at bottom
    var objDiv = document.getElementById("Info");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function onJoinRoomDone(room){
    $("#Info").append("<br>onJoinRoomDone : " + room.res);
    if(room.json){
        $("#Info").append("</br> info:<br>")
        if(room.json.id){
            $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+room.json.id+"</br>")
        }
        if(room.json.maxUsers){
            $("#Info").append("&nbsp;&nbsp;&nbsp;max users:"+room.json.maxUsers+"</br>")
        }
        if(room.json.name){
            $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+room.json.name+"</br>")
        }
        if(room.json.owner){
            $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+room.json.owner+"</br>")
        }
       
    }
    //scroll at bottom
    var objDiv = document.getElementById("Info");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function onJoinAndSubscribeRoomDone(room){
 
    $("#Info").append("<br>onJoinAndSubscribeRoomDone : " + room.res);
    if(room.json){
        $("#Info").append("</br> info:<br>")
        if(room.json.id){
            $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+room.json.id+"</br>")
        }
        if(room.json.maxUsers){
            $("#Info").append("&nbsp;&nbsp;&nbsp;max users:"+room.json.maxUsers+"</br>")
        }
        if(room.json.name){
            $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+room.json.name+"</br>")
        }
        if(room.json.owner){
            $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+room.json.owner+"</br>")
        }
       
    }
    //scroll at bottom
    var objDiv = document.getElementById("Info");
    objDiv.scrollTop = objDiv.scrollHeight;
}

function onleaveAndUnsubscribeRoomDone(room){
    $("#Info").append("<br>onleaveAndUnsubscribeRoomDone : " + room.res);
    if(room.json){
        $("#Info").append("</br> info:<br>")
        if(room.json.id){
            $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+room.json.id+"</br>")
        }
        if(room.json.maxUsers){
            $("#Info").append("&nbsp;&nbsp;&nbsp;max users:"+room.json.maxUsers+"</br>")
        }
        if(room.json.name){
            $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+room.json.name+"</br>")
        }
        if(room.json.owner){
            $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+room.json.owner+"</br>")
        }
       
    }
}

function onSubscribeRoomDone(room){
    $("#Info").append("<br>onSubscribeRoomDone : " + room.res);
    if(room.res == AppWarp.ResultCode.Success)
    {
        if(room.json){
            $("#Info").append("</br> info:<br>")
            if(room.json.id){
                $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+room.json.id+"</br>")
            }
            if(room.json.maxUsers){
                $("#Info").append("&nbsp;&nbsp;&nbsp;max users:"+room.json.maxUsers+"</br>")
            }
            if(room.json.name){
                $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+room.json.name+"</br>")
            }
            if(room.json.owner){
                $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+room.json.owner+"</br>")
            }
        }
    }
}

function onUnsubscribeRoomDone(room){
    console.log("onUnSubscribeRoomDone---"+room)
    $("#Info").append("<br>onUnSubscribeRoomDone : " + room.res);
    if(room.res == AppWarp.ResultCode.Success)
    {
        if(room.json){
            $("#Info").append("</br> info:<br>")
            if(room.json.id){
                $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+room.json.id+"</br>")
            }
            if(room.json.maxUsers){
                $("#Info").append("&nbsp;&nbsp;&nbsp;max users:"+room.json.maxUsers+"</br>")
            }
            if(room.json.name){
                $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+room.json.name+"</br>")
            }
            if(room.json.owner){
                $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+room.json.owner+"</br>")
            }
        }
    }
}

function onLeaveRoomDone(room){
    console.log(room)
    $("#Info").append("<br>onLeaveRoomDone : " + room.res);
    if(room.json){
        $("#Info").append("</br> info:<br>")
        if(room.json.id){
            $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+room.json.id+"</br>")
        }
        if(room.json.maxUsers){
            $("#Info").append("&nbsp;&nbsp;&nbsp;max users:"+room.json.maxUsers+"</br>")
        }
        if(room.json.name){
            $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+room.json.name+"</br>")
        }
        if(room.json.owner){
            $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+room.json.owner+"</br>")
        }
       
    }
}


function onDeleteRoomDone(room){
    console.log(room)
    $("#Info").append("<br>onDeleteRoomDone : " + room.res);
    if(room.res == AppWarp.ResultCode.Success)
    {
        if(room.json){
            $("#Info").append("</br> info:<br>")
            if(room.json.id){
                $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+room.json.id+"</br>")
            }
            if(room.json.maxUsers){
                $("#Info").append("&nbsp;&nbsp;&nbsp;max users:"+room.json.maxUsers+"</br>")
            }
            if(room.json.name){
                $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+room.json.name+"</br>")
            }
            if(room.json.owner){
                $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+room.json.owner+"</br>")
            }
       
        }
    }
}

function onUpdatePropertyDone(room){
    console.log(room)
    $("#Info").append("<br>onUpdatePropertyDone : " + room.res);
    if(room.res == AppWarp.ResultCode.Success)
    {
        if(room.json){
            $("#Info").append("</br> info:<br>")
            if(room.json.id){
                $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+room.json.id+"</br>")
            }
            if(room.json.maxUsers){
                $("#Info").append("&nbsp;&nbsp;&nbsp;max users:"+room.json.maxUsers+"</br>")
            }
            if(room.json.name){
                $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+room.json.name+"</br>")
            }
            if(room.json.owner){
                $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+room.json.owner+"</br>")
            }
            if(room.json.lockProperties){
                $("#Info").append("&nbsp;&nbsp;&nbsp;lockProperties:"+room.json.lockProperties+"</br>")
            }
            if(room.json.properties){
                $("#Info").append("&nbsp;&nbsp;&nbsp;properties:"+room.json.properties+"</br>")
            }
            if(room.json.usernames){
                $("#Info").append("&nbsp;&nbsp;&nbsp;usernames:"+room.json.usernames+"</br>")
            }
       
        }
    }
}


function onLockPropertiesDone(result){
    console.log(result)
    $("#Info").append("<br>onLockPropertiesDone : " + result);
    
}

function onUnlockPropertiesDone(result){
    console.log(result)
    $("#Info").append("<br>onUnlockPropertiesDone : " + result);
    
}



function onUserChangeRoomProperty(room){
    $("#Info").append("<br>onUserChangeRoomProperty : " + room.res);
    if(room.res == AppWarp.ResultCode.Success)
    {
        if(room.json){
            $("#Info").append("</br> info:<br>")
            if(room.json.id){
                $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+room.json.id+"</br>")
            }
            if(room.json.maxUsers){
                $("#Info").append("&nbsp;&nbsp;&nbsp;max users:"+room.json.maxUsers+"</br>")
            }
            if(room.json.name){
                $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+room.json.name+"</br>")
            }
            if(room.json.owner){
                $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+room.json.owner+"</br>")
            }
            if(room.json.lockProperties){
                $("#Info").append("&nbsp;&nbsp;&nbsp;lockProperties:"+room.json.lockProperties+"</br>")
            }
            if(room.json.properties){
                $("#Info").append("&nbsp;&nbsp;&nbsp;properties:"+room.json.properties+"</br>")
            }
            if(room.json.usernames){
                $("#Info").append("&nbsp;&nbsp;&nbsp;usernames:"+room.json.usernames+"</br>")
            }
        }
    }
}

function onGetAllRoomsDone(room){
    $("#Info").append("<br>onGetAllRoomsDone : " + room.res);
    if(room.res == AppWarp.ResultCode.Success)
    {
        if(room.json.ids){
            $("#Info").append("</br> info:<br>")
            var str = room.json.ids.split(";");
            for(var i=0;i<str.length;i++){
                $("#Info").append("&nbsp;&nbsp;&nbsp;"+str[i]+"</br>")
            }
        }
    }
}

function onGetMatchedRoomsDone(room){
    console.log("onGetMatchedRoomsDone-------------"+room)
    $("#Info").append("<br>onGetMatchedRoomsDone : " + room.res);
    if(room.res == AppWarp.ResultCode.Success)
    {
        var jsonData = room.json;
        if(room.json){
            $("#Info").append("</br> info:<br>")
            for (var keys in jsonData)
            {
                $("#Info").append("&nbsp;&nbsp;&nbsp;isAdmin:"+jsonData[keys].isAdmin+"</br>")
                $("#Info").append("&nbsp;&nbsp;&nbsp;maxUsers:"+jsonData[keys].maxUsers+"</br>")
                $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+jsonData[keys].name+"</br>")
                $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+jsonData[keys].owner+"</br></br>")
            }
        }
    }
}

function onSetCustomUserDataDone(user){
    $("#Info").append("<br>onGetMatchedRoomsDone : " + user.res);
    if(user.res == AppWarp.ResultCode.Success)
    {
        if(user.json){
            $("#Info").append("</br> info:<br>")
            if(user.json.custom){
                $("#Info").append("&nbsp;&nbsp;&nbsp;Custom Data:"+user.json.custom+"</br>")
            }
            if(user.json.name){
                $("#Info").append("&nbsp;&nbsp;&nbsp;username :"+user.json.name+"</br>")
            }
        }
    }
}
function onSetCustomRoomDataDone(room){
    $("#Info").append("<br>onSetCustomRoomDataDone : " + room.res);
    if(room.json){
        $("#Info").append("</br> info:<br>")
        if(room.json.id){
            $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+room.json.id+"</br>")
        }
        if(room.json.lockProperties){
            $("#Info").append("&nbsp;&nbsp;&nbsp;lockProperties:"+room.json.lockProperties+"</br>")
        }
        if(room.json.maxUsers){
            $("#Info").append("&nbsp;&nbsp;&nbsp;maxUsers:"+room.json.maxUsers+"</br>")
        }
        if(room.json.name){
            $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+room.json.name+"</br>")
        }
        if(room.json.owner){
            $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+room.json.owner+"</br>")
        }
        if(room.json.properties){
            $("#Info").append("&nbsp;&nbsp;&nbsp;properties:"+room.json.properties+"</br>")
        }
        if(room.json.usernames){
            $("#Info").append("&nbsp;&nbsp;&nbsp;usernames:"+room.json.usernames+"</br>")
        }
    }
    
}
function onJoinLobbyDone(room){
    $("#Info").append("<br>onJoinLobbyDone : " + room.res);
    if(room.res == AppWarp.ResultCode.Success)
    {
        if(room.json){
            $("#Info").append("</br> info:<br>")
            if(room.json.id){
                $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+room.json.id+"</br>")
            }
            if(room.json.isPrimary){
                $("#Info").append("&nbsp;&nbsp;&nbsp;isPrimary:"+room.json.isPrimary+"</br>")
            }
            if(room.json.maxUsers){
                $("#Info").append("&nbsp;&nbsp;&nbsp;maxUsers:"+room.json.maxUsers+"</br>")
            }
            if(room.json.name){
                $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+room.json.name+"</br>")
            }
            if(room.json.owner){
                $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+room.json.owner+"</br>")
            }
        }
    }
}

function onLeaveLobbyDone(room){
    $("#Info").append("<br>onLeaveLobbyDone : " + room.res);
    if(room.res == AppWarp.ResultCode.Success)
    {
        if(room.json){
            $("#Info").append("</br> info:<br>")
            if(room.json.id){
                $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+room.json.id+"</br>")
            }
            if(room.json.isPrimary){
                $("#Info").append("&nbsp;&nbsp;&nbsp;isPrimary:"+room.json.isPrimary+"</br>")
            }
            if(room.json.maxUsers){
                $("#Info").append("&nbsp;&nbsp;&nbsp;maxUsers:"+room.json.maxUsers+"</br>")
            }
            if(room.json.name){
                $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+room.json.name+"</br>")
            }
            if(room.json.owner){
                $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+room.json.owner+"</br>")
            }
        }
    }
}

function onSubscribeLobbyDone(room){
    $("#Info").append("<br>onSubscribeLobbyDone : " + room.res);
    if(room.res == AppWarp.ResultCode.Success)
    {
        if(room.json){
            $("#Info").append("</br> info:<br>")
            if(room.json.id){
                $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+room.json.id+"</br>")
            }
            if(room.json.isPrimary){
                $("#Info").append("&nbsp;&nbsp;&nbsp;isPrimary:"+room.json.isPrimary+"</br>")
            }
            if(room.json.maxUsers){
                $("#Info").append("&nbsp;&nbsp;&nbsp;maxUsers:"+room.json.maxUsers+"</br>")
            }
            if(room.json.name){
                $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+room.json.name+"</br>")
            }
            if(room.json.owner){
                $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+room.json.owner+"</br>")
            }
        }
    }
}

function onUnsubscribeLobbyDone(room){
    $("#Info").append("<br>onUnsubscribeLobbyDone : " + room.res);
    if(room.res == AppWarp.ResultCode.Success)
    {
        if(room.json){
            $("#Info").append("</br> info:<br>")
            if(room.json.id){
                $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+room.json.id+"</br>")
            }
            if(room.json.isPrimary){
                $("#Info").append("&nbsp;&nbsp;&nbsp;isPrimary:"+room.json.isPrimary+"</br>")
            }
            if(room.json.maxUsers){
                $("#Info").append("&nbsp;&nbsp;&nbsp;maxUsers:"+room.json.maxUsers+"</br>")
            }
            if(room.json.name){
                $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+room.json.name+"</br>")
            }
            if(room.json.owner){
                $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+room.json.owner+"</br>")
            }
        }
    }
}

function onSendChatDone(chat){
    $("#Info").append("<br>onSendChatDone : " + chat);
}

function onSendPrivateChatDone(chat){
    $("#Info").append("<br>onSendPrivateChatDone : " + chat);
}

function onSendUpdateDone(chat){
    console.log(chat)
    $("#Info").append("<br>onSendUpdateDone : " + chat);
}

function onUpdatePeersReceived(chat){
    var chatdata = String.fromCharCode.apply(null, chat);
    console.log(chatdata)
    $("#Info").append("<br>onUpdatePeersReceived : " + chatdata);
}

function onSendPrivateUpdateDone(chat){
    $("#Info").append("<br>onSendPrivateUpdateDone : " + chat);
}

function onPrivateUpdateReceived(chat){
    $("#Info").append("<br>onPrivateUpdateReceived : " + chat);
}

function onStartGameDone(res){
    $("#Info").append("<br>onStartGameDone : " + res);
}



function onSendMoveDone(res){
    $("#Info").append("<br>onSendMoveDone : " + res);
}

function onGetMoveHistoryDone(res){
    $("#Info").append("<br>onGetMoveHistoryDone : " + res);
}

function onStopGameDone(res){
    $("#Info").append("<br>onStopGameDone : " + res);
}


function onRoomCreated(room){
    $("#Info").append("<br>onRoomCreated : " + room.res);
    if(room.res == AppWarp.ResultCode.Success)
    {
        if(room.json){
            $("#Info").append("</br> info:<br>")
            if(room.json.id){
                $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+room.json.id+"</br>")
            }
            if(room.json.maxUsers){
                $("#Info").append("&nbsp;&nbsp;&nbsp;maxUsers:"+room.json.maxUsers+"</br>")
            }
            if(room.json.name){
                $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+room.json.name+"</br>")
            }
            if(room.json.owner){
                $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+room.json.owner+"</br>")
            }
        }
    }
}

function onRoomDestroyed(room){
    $("#Info").append("<br>onRoomDestroyed : " + room.res);
    if(room.res == AppWarp.ResultCode.Success)
    {
        if(room.json){
            $("#Info").append("</br> info:<br>")
            if(room.json.id){
                $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+room.json.id+"</br>")
            }
            if(room.json.maxUsers){
                $("#Info").append("&nbsp;&nbsp;&nbsp;maxUsers:"+room.json.maxUsers+"</br>")
            }
            if(room.json.name){
                $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+room.json.name+"</br>")
            }
            if(room.json.owner){
                $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+room.json.owner+"</br>")
            }
        }
    }
}
function onUserLeftRoom(event, username){
    $("#Info").append("<br>onUserLeftRoom : " + event.res);
    if(event.res == AppWarp.ResultCode.Success)
    {
        console.log(event)
    } 
}


function onUserJoinedRoom(event, username){
    $("#Info").append("<br>onUserJoinedRoom : " + event.res);
    $("#Info").append("<br>username   : " + username);
    if(event.res == AppWarp.ResultCode.Success)
    {
        if(event.json){
            $("#Info").append("</br> info:<br>")
            if(event.json.id){
                $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+event.json.id+"</br>")
            }
            if(event.json.maxUsers){
                $("#Info").append("&nbsp;&nbsp;&nbsp;maxUsers:"+event.json.maxUsers+"</br>")
            }
            if(event.json.name){
                $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+event.json.name+"</br>")
            }
            if(event.json.owner){
                $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+event.json.owner+"</br>")
            }
            if(event.json.user){
                $("#Info").append("&nbsp;&nbsp;&nbsp;user:"+event.json.user+"</br>")
            }
        }
    } 
}


function onUserLeftLobby(event, username){
    $("#Info").append("<br>onUserLeftLobby : " + event.res);
    if(event.res == AppWarp.ResultCode.Success)
    {
        if(event.json){
            $("#Info").append("</br> info:<br>")
            if(event.json.id){
                $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+event.json.id+"</br>")
            }
            if(event.json.isPrimary){
                $("#Info").append("&nbsp;&nbsp;&nbsp;isPrimary:"+event.json.isPrimary+"</br>")
            }
            if(event.json.maxUsers){
                $("#Info").append("&nbsp;&nbsp;&nbsp;maxUsers:"+event.json.maxUsers+"</br>")
            }
            if(event.json.name){
                $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+event.json.name+"</br>")
            }
            if(event.json.owner){
                $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+event.json.owner+"</br>")
            }
            if(event.json.user){
                $("#Info").append("&nbsp;&nbsp;&nbsp;user:"+event.json.user+"</br>")
            }
        }
    } 
}


function onUserJoinedLobby(event, username){
    $("#Info").append("<br>onUserJoinedLobby : " + event.res);
    if(event.res == AppWarp.ResultCode.Success)
    {
        if(event.json){
            $("#Info").append("</br> info:<br>")
            if(event.json.id){
                $("#Info").append("&nbsp;&nbsp;&nbsp;id:"+event.json.id+"</br>")
            }
            if(event.json.isPrimary){
                $("#Info").append("&nbsp;&nbsp;&nbsp;isPrimary:"+event.json.isPrimary+"</br>")
            }
            if(event.json.maxUsers){
                $("#Info").append("&nbsp;&nbsp;&nbsp;maxUsers:"+event.json.maxUsers+"</br>")
            }
            if(event.json.name){
                $("#Info").append("&nbsp;&nbsp;&nbsp;name:"+event.json.name+"</br>")
            }
            if(event.json.owner){
                $("#Info").append("&nbsp;&nbsp;&nbsp;owner:"+event.json.owner+"</br>")
            }
            if(event.json.user){
                $("#Info").append("&nbsp;&nbsp;&nbsp;user:"+event.json.user+"</br>")
            }
        }
    } 
}

function onChatReceived(chat)
{
    $("#Info").append("Sender : "+chat.getSender() );
    $("#Info").append("Chat : "+chat.getChat()  );
}



function onPrivateChatReceived(chat)
{
    $("#Info").append("Sender : "+chat.getSender() );
    $("#Info").append("Chat : "+chat.getChat()  );
}

function onMoveCompleted(move)
{
    $("#Info").append("Move : "+move);
}

function onUserResumed(id, isLobby, user)
{
    $("#Info").append("ID : "+id);
    $("#Info").append("isLobby : "+isLobby);
    $("#Info").append("user : "+user);
}
function onUserPaused(id, isLobby, user)
{
    $("#Info").append("ID : "+id);
    $("#Info").append("isLobby : "+isLobby);
    $("#Info").append("user : "+user);
}


function onGameStarted(sender, room, nextTurn)
{
    $("#Info").append("Sender : "+sender);
    $("#Info").append("Room : "+room);
    $("#Info").append("nextTurn : "+nextTurn);
}
 
 
function onGameStopped(sender, room)
{
    $("#Info").append("Sender : "+sender);
    $("#Info").append("Room : "+room);

}  

function onNextTurnRequested(lastTurn)
{
    $("#Info").append("lastTurn : "+lastTurn);

}
