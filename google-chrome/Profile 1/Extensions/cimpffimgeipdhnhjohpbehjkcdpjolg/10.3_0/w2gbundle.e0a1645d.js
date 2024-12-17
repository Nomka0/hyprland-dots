var $8e88380c496000d6$exports = {};
const $8e88380c496000d6$var$button = document.querySelector("#g-button");
const $8e88380c496000d6$var$allgood = document.querySelector("#allgood");
chrome.permissions.contains({
    origins: [
        "<all_urls>"
    ]
}, (result)=>{
    $8e88380c496000d6$var$set(result);
});
$8e88380c496000d6$var$button.addEventListener("click", function() {
    chrome.permissions.request({
        origins: [
            "<all_urls>"
        ]
    }, (result)=>{
        $8e88380c496000d6$var$set(result);
    });
});
function $8e88380c496000d6$var$set(v) {
    if (v) {
        $8e88380c496000d6$var$button.style.display = "none";
        $8e88380c496000d6$var$allgood.style.display = "block";
    } else {
        $8e88380c496000d6$var$button.style.display = "block";
        $8e88380c496000d6$var$allgood.style.display = "none";
    }
}


