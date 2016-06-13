// Wait for device API libraries to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        alert("device ready papa");
        navigator.geolocation.getCurrentPosition(onSuccess, onError);

    }

    // onSuccess Geolocation
    //
    function onSuccess(position) {
        alert("onSuccess papa");
        var element = document.getElementById('geolocation');
        element.innerHTML = 'Latitud: '           + position.coords.latitude              + '<br />' +
                            'Longitud: '          + position.coords.longitude             + '<br />';
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('codigo de error: '    + error.code    + '\n' +
              'mensaje: ' + error.message + '\n');
    }