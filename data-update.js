document.addEventListener("DOMContentLoaded", function() {
    function updateMeta() {
        const now = new Date();
        const meta = document.getElementById("vodka_casino");
        if (meta) {
            meta.setAttribute("content", now.toISOString());
        }
    }
    updateMeta();
    setInterval(updateMeta, 100);
});