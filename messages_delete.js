function getElementsByText(str, tag = 'a') {
    return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => el.textContent.trim() === str.trim());
}

function deleteMessages() {
    getElementsByText = function getElementsByText(str, tag = 'a') {
        return Array.prototype.slice.call(document.getElementsByTagName(tag)).filter(el => el.textContent.trim() === str.trim());
    }

    const buttons = document.querySelectorAll('[aria-label="Menu"]')[0];
    buttons.addEventListener('click', event);
    buttons.click();

    setTimeout(function() {
        getElementsByText('Delete chat', 'div')[0].click();
    }, 500);

    setTimeout(function() {
        this.getElementsByText('Delete chat', 'span')[2].click();
    }, 1000);
}

var myInt = setInterval(function() {
    deleteMessages();
}, 500);
