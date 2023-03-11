// basic error handling code

function errorHandler(error){
    console.error(error); // log the error message to the console
    var modalID = Math.floor(Math.random() * 1337);
    var modalTitle = 'Error';
    var modalContent = 'Something went wrong. Please try again later.';
    modalContent += '<br><br>';
    modalContent += '<pre>' + error +'</pre>';
    modalFactory( modalID, modalTitle, modalContent, true );

}