scrollCue.init({ interval: -400, duration: 600, percentage: .8 }), scrollCue.update();
document.getElementById("subscribeForm").addEventListener("submit", function(event) {
    var emailInput = document.getElementById("notificationEmail");
    var emailError = document.getElementById("emailError");
    var successMessage = document.getElementById("successMessage");
    
    // 阻止表单默认提交行为
    event.preventDefault();
    
    // 检查邮箱地址的有效性
    var email = emailInput.value.trim();
    if (!isValidEmail(email)) {
        // 显示错误消息
        emailError.style.display = "block";
        // 清空输入框
        emailInput.value = "";
    } else {
        // 清空错误消息
        emailError.style.display = "none";
        // 清除默认值
        emailInput.value = "";
        // 显示成功提示
        successMessage.style.display = "block";
        // 延迟一段时间后隐藏成功提示
        setTimeout(function() {
            successMessage.style.display = "none";
        }, 3000); // 3秒后隐藏成功提示
    }
});

// 函数：检查邮箱地址的有效性
function isValidEmail(email) {
    // 简单的正则表达式来验证邮箱地址的有效性
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}