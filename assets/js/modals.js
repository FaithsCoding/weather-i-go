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
  
  var modalHTML = '' +
    ' <div id="modal-' + modalID + '" class="modal">' +
    '   <div class="modal-background"></div>' +
    '   <div class="modal-card">' +
      '  <div class="modal-content">' +
      '  <header class="modal-card-head">' +
            '<p class="title is-4">'+ modalTitle +'!</p>' +
            '<p>' + modalContent + ' </p> ' +
        '   </div>' +
      '</div>'+
    '</div>' +
    '<button class="modal-close is-large" aria-label="close"></button>' +
  '</div>'  ;
  // comment
  // add it to the body
    jQuery('body').append(modalHTML);
    jQuery('.modal-close').on('click', function() {
      $('.modal').remove();
    });
  return modalHTML;
}