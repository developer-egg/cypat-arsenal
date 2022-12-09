const tabs = document.querySelectorAll(".tab")

for (let tab of Array.from(tabs)) {
    tab.onclick = () => {
        // set opacity of the tab
        tab.style.opacity = "50%";

        // reset opacity of all the other tabs
        let tabs_copy = Array.from(tabs)
        const tab_index = tabs_copy.indexOf(tab)

        tabs_copy = tabs_copy.filter(x => x != tab)

        for (let other_tab of tabs_copy) {
            other_tab.style.opacity = "100%";
        }

        //change the content
        switch(tab_index) {
            case 0:
                document.getElementById("content-link").textContent = "Maytham's Ubuntu Checklist"
                document.getElementById("content-link-2").setAttribute("href", "https://matees.net/blog/linux-checklist/")
                break;
            case 1:
                document.getElementById("content-link").textContent = "Maytham's Ubuntu Script"
                document.getElementById("content-link-2").setAttribute("href", "https://github.com/maytees/cypat-ubuntu-script")
                break;
            case 2:
                document.getElementById("content-link").textContent = "There's nothing here yet :C"
                document.getElementById("content-link-2").setAttribute("href", "")
                break;
            case 3:
                document.getElementById("content-link").textContent = "There's nothing here yet :C"
                document.getElementById("content-link-2").setAttribute("href", "")
                break;
            default:
                document.getElementById("content-link").textContent = "Invalid Tab??"
        }
    }
}