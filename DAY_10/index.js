function generatePassword(){
    const chars = ("ABCDEFGHIJKLMNOPQRSTUVWXTYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+=");
    const length = document.getElementById("length").value || 8;
    let password = "";
    for (let i = 0; i < length; i++){
        password += chars[Math.floor(Math.random() * chars.length)];

    }
    document.getElementById("output").value = password;
}