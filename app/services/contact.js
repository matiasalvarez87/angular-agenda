
app.factory('contactService', function() {

    var nextId = 3, list = [];

    return {

        getAll: function() {
            return list;
        },

        get: function(id) {
            return _.find(list, function(i) { return (i.id === id); } );
        },

        save: function(item) {

            if (item.isNew()) {
                item.id = nextId;
                nextId++;

            } else {
                // Removes the previous element from the list
                list = _.reject(list, function(i) { return (i.id === item.id); } );
            }

            list.push(item);
        }
    };

});