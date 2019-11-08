
$(function(){

  function buildMessage(message){
    var content = message.content ? `<p class="lower-message__content">
                                       ${message.content}
                                     </p>` : "";
    var image = message.image ? `<img class="lower-message__image" src="${message.image}" alt="">` : "";

    var html = `<div class="chat__main__message__box">
                  <div class="chat__main__message__box__top">
                    <div class="chat__main__message__box__top__name">
                      ${message.name}
                    </div>
                    <div class="chat__main__message__box__top__time">
                      ${message.time}
                    </div>
                  </div>
                  <div class="chat__main__message__box__text">
                    ${content}
                  </div>
                  <div class="chat__main__message__box__text2">
                    ${image}
                  </div>
                </div>`
    return html;
  }

  $('.new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: 'POST',
      data: formData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(message){
      var html = buildMessage(message);
      $('.chat__main__message').append(html);
      $('.new_message')[0].reset();
      $('.chat__main__message').animate({ scrollTop: $('.chat__main__message')[0].scrollHeight });
    })
    .fail(function(){
      alert('メッセージ送信に失敗しました');
    })
    .always(function(){
      $('.chat__main__footer__form__send').removeAttr("disabled")
    })
  })
})

