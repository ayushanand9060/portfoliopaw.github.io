console.log("script running...")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if (document.queryselector('.sidebar').classList.contains('sidebarGo')) {
        document.queryselector('.ham').style.display = 'inline'
        document.queryselector('.cross').style.display = 'none'
    }
    else{
        document.queryselector('.ham').style.display = 'none'
        setTimeout(() => {
        document.queryselector('.cross').style.display = 'inline'
        }, 300);
    }

})