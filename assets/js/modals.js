/*
<div class="modal">
  <div class="modal-background"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">Modal title</p>
      <button class="delete" aria-label="close"></button>
    </header>
    <section class="modal-card-body">
      <!-- Content ... -->
    </section>
    <footer class="modal-card-foot">
      <button class="button is-success">Save changes</button>
      <button class="button">Cancel</button>
    </footer>
  </div>
</div>
*/

// Modal

function modalFactory( modalID, modalTitle, modalContent, isActive = false ) {
  try{
  
  var modal = document.getElementById(modalID);
  var modalBackground = modal.querySelector('.modal-background');
  var modalCard = modal.querySelector('.modal-card');
  var modalHTML = '' +
    ' <div id="modal-' + modalID + '" class="modal">' +
    '   <div class="modal-background"></div>' +
    '   <div class="modal-card">' +
      '  <div class="modal-content">' +
      '  <header class="modal-card-head">' +
            '<p class="title is-4">'+ modalTitle +'!</p>' +
            '<p>' + modalContent + ' </p> ' +
        ' </header>' +
      '</div>'+
    '</div>' +
    '<button class="modal-close is-large" aria-label="close"></button>' +
  '</div>'  ;
  // comment
  // add it to the body
    jQuery('body').append(modalHTML);
    // add the is-active class to the modal if it is true
    if ( isActive ) {
      jQuery('#modal-' + modalID).addClass('is-active');
    } else {
      // silence is golden
    }
    // add listener to close button to any modal modal
    jQuery('.modal-close').on('click', function() {
    //  jQuery(this).parent('.modal').removeClass('is-active');
    //});

    jQuery('#modal-' + modalID + ' .modal-close').on('click', function() {
      jQuery(this).parent('.modal').removeClass('is-active');
    });
  return modalHTML;
}) catch(e){
  errorHandler(e);
  console.error(e);
 }
}