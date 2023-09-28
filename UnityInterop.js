mergeInto(LibraryManager.library, {
    GetUser: function(callback) {
        var userJson = localStorage.getItem('user') || "{}";
        var buffer = _malloc(lengthBytesUTF8(userJson) + 1);
        stringToUTF8(userJson, buffer, lengthBytesUTF8(userJson) + 1);
        console.log(callback); // Log the callback to understand what is being passed.
        Runtime.dynCall('vi', callback, [buffer]);
        _free(buffer);
    }
});
