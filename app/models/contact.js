/**
 * contact.js
 **/

var Contact = function () {

    // Constructor, sets the defaults values of the object
    var clazz = function (attributes) {
        var defaults = {
            id: null,
            contactType: CONTACT_TYPES.UNKNOWN,
            firstName: null,
            lastName: null,
            phone: null,
            address: null,
            colleague: {
                from: null,
                internPhone: null,
                isCurrent: null
            }
        };
        _.extend(this, defaults, attributes);
    };


    // Class Methods
    _.extend(clazz.prototype, {

        isNew: function () {
            return (this.id === null);
        },

        isFriendContactType: function () {
            return (this.contactType === CONTACT_TYPES.FRIEND);
        },

        isFamilyContactType: function () {
            return (this.contactType === CONTACT_TYPES.FAMILY);
        },

        isColleagueContactType: function () {
            return (this.contactType === CONTACT_TYPES.COLLEAGUE);
        },

        isUnknownContactType: function () {
            return (this.contactType === CONTACT_TYPES.UNKNOWN);
        },

        getId: function() {
            return this.id.toString();
        },

        getFullName: function() {
            if (this.firstName !== '' && this.lastName !== '') {
                return this.firstName + ', ' + this.lastName;
            } else if (this.firstName !== '') {
                return this.firstName;
            } else if (this.lastName !== '') {
                return this.lastName;
            } else {
                return '';
            }
        },

        // Validation helper methods

        isPhoneRequired: function() {
            return (!this.isUnknownContactType());
        },

        isAddressRequired: function() {
            return (!this.isUnknownContactType());
        },

        /**
         * Useful method to parse server response and populate the fields.
         */
        populateData: function (data) {
            _.extend(this, data);
        }

    });

    return clazz;
}();