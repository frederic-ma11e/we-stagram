// const userNameForReplies = document.getElementsByClassName ('mention-user-id')[0];
// const addReplies = document.getElementsByClassName ('mention-text')[0];
// const repliesBlock = document.getElementsByClassName ('replies')[0];
// const textBar = document.getElementsByClassName ('comment')[0];

let clickButton = document.getElementsByClassName ('post')[0];

clickButton.addEventListener('click', function() {
    let clickEventBox = document.createElement('div');
    clickEventBox.className = "past-replies";
    let clickEventUserId = document.createElement('div');
    clickEventUserId.className = "mention-user-id";
    let clickEventText = document.createElement('div');
    clickEventText.className = "mention-text";
    let textFromInput = document.getElementsByClassName('comment')[0].value
    let placeToPut = document.getElementById('ee');
    clickEventUserId.innerHTML = "we_code";
    clickEventText.innerHTML = textFromInput;
    clickEventBox.appendChild(clickEventUserId);
    clickEventBox.appendChild(clickEventText);
    placeToPut.appendChild(clickEventBox);
}
);
// let enterButton = document.getElementsByClassName ('comment')[0].value;

    function enterkey () {
        let enterEventBox = document.createElement('div');
        enterEventBox.className = "past-replies";
        let enterEventUserId = document.createElement('div');
        enterEventUserId.className = "mention-user-id";
        let enterEventText = document.createElement('div');
        enterEventText.className = "mention-text";
        let textFromInput = document.getElementsByClassName('comment')[0].value
        let enterPlace = document.getElementById('ee');
        enterEventUserId.innerHTML = "we_code";
        enterEventText.innerHTML = textFromInput;
        enterEventBox.appendChild(enterEventUserId);
        enterEventBox.appendChild(enterEventText);
        
        if (window.event.keyCode == 13) {
            enterPlace.appendChild(enterEventBox);    
        }
    }
