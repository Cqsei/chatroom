$(() => {
  
    let pincode = ''
    $(document.body).on('keyup', 'input', (e) => {
      let target = $(e.currentTarget)
      let currentlength = target.val().length  
      let maxlength = 0
      
      let allInputs = $('input#pin');
  
      allInputs.each((i, el) => {
        maxlength += parseInt($(el).attr('maxlength'))
      })
  
      if(currentlength <= maxlength) {
        if(e.keyCode == 8) {
            allInputs.first().focus()
            allInputs.val('')
            pincode = ''
        } else {
          if(target.val().length != 0) {
            pincode += target.val()
            target.next().focus()
          }
        }
      }
  
      if(pincode.length == maxlength) {
        if(pincode == 3458) {
          window.location.href = "unlockedseq/index.html"
        } else {
          alert('Incorrect')
        }
        reset()
      }
    })
    
    function reset() {
      $('input#pin').each((i, el) => {
        $(el).val('')
      })
  
      $('#pin:first').focus()
      pincode = ''
    }
  })
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  $(() => $('input[name=pin-1]').focus())