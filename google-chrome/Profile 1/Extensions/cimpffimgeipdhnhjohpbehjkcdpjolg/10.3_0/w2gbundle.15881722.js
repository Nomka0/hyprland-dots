(function () {
var $b817b7b4d16f181e$exports = {};
const $b817b7b4d16f181e$var$button = document.querySelector("#g-button");
const $b817b7b4d16f181e$var$allgood = document.querySelector("#allgood");
chrome.permissions.contains({
    origins: [
        "<all_urls>"
    ]
}, (result)=>{
    $b817b7b4d16f181e$var$set(result);
});
$b817b7b4d16f181e$var$button.addEventListener("click", function() {
    chrome.permissions.request({
        origins: [
            "<all_urls>"
        ]
    }, (result)=>{
        $b817b7b4d16f181e$var$set(result);
    });
});
function $b817b7b4d16f181e$var$set(v) {
    if (v) {
        $b817b7b4d16f181e$var$button.style.display = "none";
        $b817b7b4d16f181e$var$allgood.style.display = "block";
    } else {
        $b817b7b4d16f181e$var$button.style.display = "block";
        $b817b7b4d16f181e$var$allgood.style.display = "none";
    }
}

})();
