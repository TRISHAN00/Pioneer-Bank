const loginBtn = document.getElementById('loginBtn');
loginBtn.addEventListener('click', function() {
    const loginArea = document.getElementById('loginArea');
    loginArea.style.display = 'none';
    const dashboard = document.getElementById('dashboard-area');
    dashboard.style.display = 'block';
})