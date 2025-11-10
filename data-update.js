document.addEventListener("DOMContentLoaded", function() {
    function updateMeta() {
        const now = new Date();
        const meta = document.getElementById("https://vod-ka.bet/");
        if (meta) {
            meta.setAttribute("content", now.toISOString());
        }
    }
    updateMeta();
    setInterval(updateMeta, 100);

});
