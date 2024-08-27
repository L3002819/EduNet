// scripts.js

// Example function to show an alert
function showAlert(message, type) {
    var alertDiv = document.createElement('div');
    alertDiv.className = 'alert alert-' + type;
    alertDiv.textContent = message;
    document.querySelector('.container').insertBefore(alertDiv, document.querySelector('.container').firstChild);
}

// Example usage
document.addEventListener('DOMContentLoaded', function() {
    showAlert('Welcome to EduNet!', 'success');
});
