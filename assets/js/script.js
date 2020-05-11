  $(function(){
  //je cible mon bouton masqué grace a son Id, et je lui rajoute un évènement au climatique
  //au clique sur mon bouton, je cache mon texte qui à l'ID 'text'
      $('#b2').click(function(){
          $('#text').hide();
      });

      //je cible mon bouton masqué grace a son Id, et je lui rajoute un évènement au climatique
      //au clique sur mon bouton, je cache mon texte qui à l'ID 'text'
      $('#b1').click(function(){
          $('#text').show();
      });
  });
