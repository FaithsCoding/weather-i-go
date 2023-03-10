// basic error handling code

function errorHandler(error){
    console.error(error); // log the error message to the console
    var modalID = Math.floor(Math.random() * 1337);
    var modalTitle = 'Error';
    var modalContent = 'Something went wrong. Please try again later.';
    modalContent += '<br>';
    modalContent += '<pre>' + error +'</pre>';
    modalContent += '<br>';
    modalContent += '<pre>' + error.message +'</pre>';
    modalFactory( modalID, modalTitle, modalContent, true );

}

