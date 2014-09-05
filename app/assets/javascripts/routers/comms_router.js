DragsterApp.Routers.Comms = Backbone.Router.extend({

    routes: {
      // enter dynamic routes
      // <route> : <function want to call>
    'pages/': 'listComms'

    },

  initialize: function() {
    // assume view for collection. created associated variable  
    App.appView = new App.AppView({ collection: App.comms });
      App.appView.render();
    },

  // copy of this in CommListItemView as well
  // it is also here so url shows path when hover
  listComms: function(paramId) {

      console.log("in listComms");

    var commModel = App.comms.all;

    // safety check
    if (commModel === undefined)
      return;
    
    $('#comm-wrapper').hide();
    // get attributes from model object, as we 
    // have access to model 'this.model.toJSON()'
    var commNumber = commModel.get('number'); 
    var commName = commModel.get('name'); 

    // grab the items in DOM using jQuery and change them
    $('#comm-wrapper .number').html(commNumber);
    $('#comm-wrapper .name').html(commName);

    // fade in the DOM element containing all the attributes 
    $('#comm-wrapper').fadeIn();
  }
});
